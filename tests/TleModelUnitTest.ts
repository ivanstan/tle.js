import { suite, test } from "@testdeck/mocha";
import * as _chai from "chai";
import { LineNumber, Tle } from "../src/Tle";
import { SampleTleFactory } from "../src/SampleTleFactory";

@suite
class TleModelUnitTest {
  private tle: Tle;

  before() {
    this.tle = SampleTleFactory.create();
  }

  @test 'line1 line number should equal one'() {
    _chai.expect(this.tle.getLineNumber(LineNumber.LINE1)).to.equal(1);
  }

  @test 'line2 line number should equal two'() {
    _chai.expect(this.tle.getLineNumber(LineNumber.LINE2)).to.equal(2);
  }

  @test 'line1 line checksum'() {
    _chai.expect(this.tle.getLineChecksum(LineNumber.LINE1)).to.equal(0);
  }

  @test 'line2 line checksum'() {
    _chai.expect(this.tle.getLineChecksum(LineNumber.LINE2)).to.equal(4);
  }

  @test 'should return satellite id from line one'() {
    _chai.expect(this.tle.getSatelliteId(LineNumber.LINE1)).to.equal(43550);
  }

  @test 'should return satellite id from line two'() {
    _chai.expect(this.tle.getSatelliteId(LineNumber.LINE2)).to.equal(43550);
  }

  /**
   * Line 1 Tests
   */
  @test 'should retrieve classification'() {
    _chai.expect(this.tle.getClassification()).to.equal('U');
  }

  @test 'should retrieve proper date'() {
    _chai.expect(this.tle.getDate().toISOString()).to.equal(SampleTleFactory._date);
  }

  @test 'should retrieve proper two digit launch year'() {
    _chai.expect(this.tle.getLaunchYear()).to.equal(98);
  }

  @test 'should retrieve proper four digit launch year'() {
    _chai.expect(this.tle.getLaunchYear(true)).to.equal(1998);
  }

  @test 'should retrieve proper launch number of the year'() {
    _chai.expect(this.tle.getLaunchNumberOfTheYear()).to.equal('067');
  }

  @test 'should retrieve proper launch piece'() {
    _chai.expect(this.tle.getLaunchPiece()).to.equal('NY ');
  }

  @test 'should retrieve proper epoch year'() {
    _chai.expect(this.tle.getEpochYear()).to.equal('18');
  }

  @test 'should retrieve proper epoch day'() {
    _chai.expect(this.tle.getEpochDay()).to.equal('321.21573649');
  }

  @test 'should retrieve proper first time derivative of mean motion'() {
    _chai.expect(this.tle.getFirstTimeDerivativeOfMeanMotionRaw()).to.equal('.00013513');
  }

  @test 'should retrieve proper second time derivative of mean motion'() {
    _chai.expect(this.tle.getSecondTimeDerivativeOfMeanMotionRaw()).to.equal('00000-0');
  }

  @test 'should retrieve proper bstar drag term'() {
    _chai.expect(this.tle.getBstarDragTermRaw()).to.equal('18402-3');
  }

  @test 'should retrieve ephemeris type'() {
    _chai.expect(this.tle.getEphemerisType()).to.equal('0');
  }

  @test 'should retrieve element number'() {
    _chai.expect(this.tle.getElementNumber()).to.equal('999');
  }

  /**
   * Line 2 Tests
   */
  @test 'should return orbital inclination'() {
    _chai.expect(this.tle.getInclination()).to.equal(51.6389);
  }

  @test 'should return right ascensions of ascending node'() {
    _chai.expect(this.tle.getRaan()).to.equal(334.0891);
  }

  @test 'should return raw eccentricity (excluding decimal point)'() {
    _chai.expect(this.tle.getRawEccentricity()).to.equal('0005785');
  }

  @test 'should return argument of perigee'() {
    _chai.expect(this.tle.getArgumentOfPerigee()).to.equal(67.0956);
  }

  @test 'should return mean anomaly'() {
    _chai.expect(this.tle.getMeanAnomaly()).to.equal(293.0647);
  }

  @test 'should return mean motion'() {
    _chai.expect(this.tle.getMeanMotion()).to.equal(15.57860024);
  }

  @test 'should return revolution number'() {
    _chai.expect(this.tle.getRevolutionNumber()).to.equal(1980);
  }

}
