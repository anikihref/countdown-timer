import moment from "moment";

export default class DateFormater {
  private baseTime;
  private expiredMs: number;

  constructor(time: number) {
    this.baseTime = time;
    this.expiredMs = time;
  }

  private getExpiredDays() {
    const expiredDays = moment.duration(this.expiredMs).asDays()

    this.expiredMs = (expiredDays - Math.trunc(expiredDays)) * 1000 * 60 * 60 * 24
    return Math.trunc(expiredDays)
  }

  private getExpiredHours() {
    const expiredHours = moment.duration(this.expiredMs).asHours()

    this.expiredMs = (expiredHours - Math.trunc(expiredHours)) * 1000 * 60 * 60

    return Math.trunc(expiredHours)
  }

  private getExpiredMinutes() {
    const expiredMinutes = moment.duration(this.expiredMs).asMinutes()

    this.expiredMs = (expiredMinutes - Math.trunc(expiredMinutes)) * 1000 * 60

    return Math.trunc(expiredMinutes)
  }

  private getExpiredSeconds() {
    const expiredSeconds = moment.duration(this.expiredMs).asSeconds()

    this.expiredMs = (expiredSeconds - Math.trunc(expiredSeconds)) * 1000 * 60

    return Math.trunc(expiredSeconds)
  }

  private checkZeroDate(time: number): string | number {
    if (time.toString().length < 2) {
      return '0' + time
    }

    else return time
  }

  public getFormatedDate() {
    const formatedDate = {
        days: this.checkZeroDate(this.getExpiredDays()),
        hours: this.checkZeroDate(this.getExpiredHours()),
        minutes: this.checkZeroDate(this.getExpiredMinutes()),
        seconds: this.checkZeroDate(this.getExpiredSeconds()),
      }


    return formatedDate;
  }
}
