export enum LineNumber {
  LINE1 = 1,
  LINE2 = 2,
}

export class Tle {
  public satelliteId: number;
  public name: string;
  public line1: string;
  public line2: string;

  constructor(tleModel: any) {
    this.satelliteId = tleModel.satelliteId;
    this.name = tleModel.name;
    this.line1 = tleModel.line1;
    this.line2 = tleModel.line2;
  }

  getLine(lineNumber: LineNumber): string {
    if (lineNumber === LineNumber.LINE1) {
      return this.line1;
    }

    if (lineNumber === LineNumber.LINE2) {
      return this.line2;
    }

    return '';
  }

  getLineNumber(lineNumber: LineNumber): number {
    const line = this.getLine(lineNumber);

    return parseInt(line.substring(0, 1));
  }

  getLineChecksum(lineNumber: LineNumber): number {
    const line = this.getLine(lineNumber);

    return parseInt(line.substring(68, 69));
  }

  getSatelliteId(lineNumber: LineNumber): number {
    const line = this.getLine(lineNumber);

    return parseInt(line.substring(2, 7));
  }

  getDate() {
    let year = parseInt(this.line1.substring(18, 20));
    year = Tle.formatYear(year);

    let epoch: number = parseFloat(this.line1.substring(20, 32));
    let days: number = Math.floor(epoch);

    let date = new Date(Date.UTC(year, 0, days));

    let faction = Math.round(epoch - days);

    faction *= 24; // hours
    let hours = Math.round(faction);
    faction -= hours;

    faction *= 60; // minutes
    let minutes = Math.round(faction);
    faction -= minutes;

    faction *= 60; // seconds
    let seconds = Math.round(faction);
    faction -= seconds;

    faction *= 1000; // milliseconds
    let milliseconds = Math.round(faction);

    date.setUTCHours(hours);
    date.setUTCMinutes(minutes);
    date.setUTCSeconds(seconds);
    date.setUTCMilliseconds(milliseconds);

    return date;
  }

  static formatYear(twoDigitYear: number) {
    if (twoDigitYear < 57) {
      twoDigitYear += 2000;
    } else {
      twoDigitYear += 1900;
    }

    return twoDigitYear;
  }

  /**
   * Line 1 Data
   */
  getClassification(): string {
    return this.line1.substring(7, 8);
  }

  getLaunchYear(fourDigits: boolean = false): number {
    const year = parseInt(this.line1.substring(9, 11));

    if (fourDigits) {
      return Tle.formatYear(year);
    }

    return year;
  }

  getLaunchNumberOfTheYear(): string {
    return this.line1.substring(11, 14);
  }

  getLaunchPiece(): string {
    return this.line1.substring(14, 17);
  }

  getEpochYear(): string {
    return this.line1.substring(18, 20);
  }

  getEpochDay(): string {
    return this.line1.substring(20, 32);
  }

  getFirstTimeDerivativeOfMeanMotionRaw(): string {
    return this.line1.substring(34, 43);
  }

  getSecondTimeDerivativeOfMeanMotionRaw(): string {
    return this.line1.substring(45, 52);
  }

  getBstarDragTermRaw(): string {
    return this.line1.substring(54, 61);
  }

  getEphemerisType(): string {
    return this.line1.substring(62, 63);
  }

  getElementNumber(): string {
    return this.line1.substring(65, 68);
  }

  /**
   * Line 2 Data
   */
  getInclination(): number {
    return parseFloat(this.line2.substring(8, 16));
  }

  getRaan(): number {
    return parseFloat(this.line2.substring(17, 25));
  }

  getRawEccentricity(): string {
    return this.line2.substring(26, 33)
  }

  getArgumentOfPerigee(): number {
    return parseFloat(this.line2.substring(34, 42));
  }

  getMeanAnomaly(): number {
    return parseFloat(this.line2.substring(43, 51));
  }

  getMeanMotion(): number {
    return parseFloat(this.line2.substring(52, 63));
  }

  getRevolutionNumber(): number {
    return parseInt(this.line2.substring(63, 68));
  }
}
