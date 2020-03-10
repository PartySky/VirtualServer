export class UsageTimeStruct {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  constructor(seconds: number, minutes: number, hours: number, days: number) {
    this.seconds = seconds? seconds : 0;
    this.minutes = minutes? minutes : 0;
    this.hours = hours? hours : 0;
    this.days = days? days : 0;
  }
}
