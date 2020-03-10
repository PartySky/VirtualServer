import {Component, Input} from "@angular/core";
import {ServerItem, VmServerItem} from "../../Models/ServerItem";
import {GLobalConstants} from "../../constants";
import {HttpClient} from "@angular/common/http";
import {UsageTimeStruct} from "../../Models/UsageTimeStruct";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent {
  serverList: VmServerItem[] = [];
  private readonly apiUrl = `${GLobalConstants.apiPortUrl}/api`;
  currentTime: Date;
  vmCurrentTime: string;
  totalUsageTime: UsageTimeStruct;

  localization = {
    Id: "VirtualServerId",
    CreateTime: "CreateDateTime",
    RemovedTime: "RemoveDateTime",
    IsSelectedForRemove: "SelectedForRemove",
    TotalUsageTime: "Totla usage time: ",
    CurrentTime: "Current time: ",
    AddServer: "Add",
    RemoveServer: "Remove (selected for remove)",
  };

  constructor(
    private http: HttpClient
  ) {
    this.setServers();
    this.setTimes();
  }

  setTimes()
  {
    this.getTotalUsageTime()
      .subscribe(p => {
        this.totalUsageTime = new UsageTimeStruct(p.seconds, p.minutes, p.hours, p.days);
      });
    this.getCurrentTime()
      .subscribe(p => {
        this.currentTime = p;
        this.vmCurrentTime = this.getServerVmDate(new Date(p));
      });
  }

  setServers(){
    const serversSubscriber = this.getServers()
      .subscribe(p => {
        this.serverList = [];

        if(!p || !p.length){
          return;
        }

        p.forEach(item => {
          this.serverList.push({
            id: item.id ? item.id : 0,
            createTime: item.createTime? new Date(item.createTime) : null,
            isRemoved: item.isRemoved,
            removedTime: item.removedTime? new Date(item.removedTime) : undefined,
            isSelectedForRemove: false,
            vmCreateTime: this.getServerVmDate(new Date(item.createTime)),
            vmRemoveTime: this.getServerVmDate(new Date(item.removedTime))
          });
        })
      });
  }

  getServerVmDate(time: Date)
  {
    if(!time) {
      return "";
    }

    // const d = new Date('2010-08-05')
    const dtf = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    const [
      { value: mo },,
      { value: da },,
      { value: ye },,
      { value: HH },,
      { value: MM },,
      { value: SS }] = dtf.formatToParts(time)

    console.log(`${ye}-${mo}-${da}`)

    return `${ye}-${mo}-${da} ${HH}:${MM}:${SS}`;
  }

  getServers()
  {
    const methodUrl = '';
    return this.http
      .get<ServerItem[]>(`${this.apiUrl}/${methodUrl}`);
  }

  addServer() {
    this.doAddServer()
      .subscribe(p => {
        this.setServers();
        this.setTimes();
      });
  }

  doAddServer() {
    const methodUrl = 'add';
    return this.http
      .get<ServerItem[]>(`${this.apiUrl}/${methodUrl}`);
  }

  removeAll() {
    let idForRemoveList: number[] = [];

    this.serverList.forEach(p => {
      if(p.isSelectedForRemove){
        idForRemoveList.push(p.id);
      }
    })

    this.doRemoveAll(idForRemoveList)
      .subscribe(p => {
        this.setServers();
        this.setTimes();
      });
  }

  doRemoveAll(idList: number[])
  {
    const methodUrl = 'removeall';
    return this.http
      .post<ServerItem[]>(`${this.apiUrl}/${methodUrl}`, idList);
  }

  private getTotalUsageTime() {
    const methodUrl = 'gettotalusetime';
    return this.http
      .get<UsageTimeStruct>(`${this.apiUrl}/${methodUrl}`);
  }

  private getCurrentTime() {
    const methodUrl = 'getcurrenttime';
    return this.http
      .get<Date>(`${this.apiUrl}/${methodUrl}`);
  }
}
