export class ServerItem {
  id: number;
  createTime: Date;
  removedTime: Date;
  isRemoved: boolean;
}

export class VmServerItem extends ServerItem{
  isSelectedForRemove: boolean;
  vmCreateTime: string;
  vmRemoveTime: string;
}
