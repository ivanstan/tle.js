export default class Tle {

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

    get meanMotion(): number {
        return Number(this.line2.substring(52, 63));
    }

    /**
     * Orbital period in seconds.
     */
    get orbitalPeriod(): number {
        return 86400.0 / this.meanMotion;
    }
}
