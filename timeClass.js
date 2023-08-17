/*
 * @Author: CyrilChi chiyongmail@163.com
 * @Date: 2023-08-15 11:27:30
 * @LastEditors: CyrilChi chiyongmail@163.com
 * @LastEditTime: 2023-08-17 13:28:21
 * @FilePath: /24-h-clock/timeClass.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export class InitTime {
  constructor(time) {
    this.time = time;
  }
  getCurrentTime() {
    const year = this.time.getFullYear();
    const month = this.time.getMonth() + 1;
    const day = this.time.getDate();
    const week = this.time.getDay();
    const hours = this.time.getHours();
    const minutes = this.time.getMinutes();
    const seconds = this.time.getSeconds();
    const hour = hours + minutes / 60;
    const minute = minutes + seconds / 60;
    return { y: year, m: month, d: day, w: week, hs: hours, ms: minutes, h: hour, mm: minute, s: seconds };
  }

  getSunTime() {
    // 日出时间计算
    let sunrise = calcnew(1, 39.9, 116.4, this.getCurrentTime().y, this.getCurrentTime().m, this.getCurrentTime().d);
    let sunset = calcnew(2, 39.9, 116.4, this.getCurrentTime().y, this.getCurrentTime().m, this.getCurrentTime().d);
    let sunriseHours = sunrise.getHours();
    let sunriseMinutes = sunrise.getMinutes();
    let sunsetHours = sunset.getHours();
    let sunsetMinutes = sunset.getMinutes();
    return {
      sunriseHours: sunriseHours,
      sunriseMinutes: sunriseMinutes,
      sunsetHours: sunsetHours,
      sunsetMinutes: sunsetMinutes
    };
  }
}
