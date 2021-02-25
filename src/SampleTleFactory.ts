import Tle from "../src/Tle";

export class SampleTleFactory {
  public static _satelliteId: number = 43550;
  public static _name: string = '1998-067NY';
  public static _line1: string = '1 43550U 98067NY  18321.21573649  .00013513  00000-0  18402-3 0  9990';
  public static _line2: string = '2 43550  51.6389 334.0891 0005785  67.0956 293.0647 15.57860024 19804';
  public static _date: string = '2018-11-17T05:10:39+00:00';

  public static create(): Tle {
    return new Tle({
      satelliteId: SampleTleFactory._satelliteId,
      name: SampleTleFactory._name,
      line1: SampleTleFactory._line1,
      line2: SampleTleFactory._line2,
    });
  }
}
