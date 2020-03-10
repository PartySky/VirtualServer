import {Component, Input} from "@angular/core";
import {ServerItem, VmServerItem} from "../../Models/ServerItem";

@Component({
    selector: 'server-item',
    templateUrl: './server-item.component.html',
    styleUrls: ['./server-item.component.less']
})
export class ServerItemComponent {
  @Input() server: VmServerItem;
  isRemoveMessShown = false;

  removeItem(){
    this.server.isSelectedForRemove = !this.server.isSelectedForRemove;
  }
}
