import { Tle } from "./Tle";

export class SampleTleFactory {
  public static create(): Tle {
    return new Tle({
      satelliteId: 43550,
      name: '1998-067NY',
      line1: '1 43550U 98067NY  18321.21573649  .00013513  00000-0  18402-3 0  9990',
      line2: '2 43550  51.6389 334.0891 0005785  67.0956 293.0647 15.57860024 19804',
    });
  }
}
