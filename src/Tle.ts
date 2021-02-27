import {LineNumber} from "./LineNumber";

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

  getLineNumberRaw(lineNumber: LineNumber): string {
    const line = this.getLine(lineNumber);

    return line.substring(0, 1);
  }

  getLineChecksumRaw(lineNumber: LineNumber): string {
    const line = this.getLine(lineNumber);

    return line.substring(68, 69);
  }

  getSatelliteIdRaw(lineNumber: LineNumber): string {
    const line = this.getLine(lineNumber);

    return line.substring(2, 7);
  }

  /**
   * Line 1 Data
   */
  getClassificationRaw(): string {
    return this.line1.substring(7, 8);
  }

  getLaunchYearRaw(fourDigits: boolean = false): string {
    return this.line1.substring(9, 11);
  }

  getLaunchNumberOfTheYearRaw(): string {
    return this.line1.substring(11, 14);
  }

  getLaunchPieceRaw(): string {
    return this.line1.substring(14, 17);
  }

  getEpochYearRaw(): string {
    return this.line1.substring(18, 20);
  }

  getEpochDayRaw(): string {
    return this.line1.substring(20, 32);
  }

  getFirstTimeDerivativeOfMeanMotionRaw(): string {
    return this.line1.substring(33, 43);
  }

  getSecondTimeDerivativeOfMeanMotionRaw(): string {
    return this.line1.substring(44, 52);
  }

  getBstarDragTermRaw(): string {
    return this.line1.substring(53, 61);
  }

  getEphemerisTypeRaw(): string {
    return this.line1.substring(62, 63);
  }

  getElementNumberRaw(): string {
    return this.line1.substring(64, 68);
  }

  /**
   * Line 2 Data
   */
  getInclinationRaw(): string {
    return this.line2.substring(8, 16);
  }

  getRightAscensionOfAscendingNodeRaw(): string {
    return this.line2.substring(17, 25);
  }

  getEccentricityRaw(): string {
    return this.line2.substring(26, 33)
  }

  getArgumentOfPerigeeRaw(): string {
    return this.line2.substring(34, 42);
  }

  getMeanAnomalyRaw(): string {
    return this.line2.substring(43, 51);
  }

  getMeanMotionRaw(): string {
    return this.line2.substring(52, 63);
  }

  getRevolutionNumberRaw(): string {
    return this.line2.substring(63, 68);
  }
}
