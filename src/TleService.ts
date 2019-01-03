import Tle from "./Tle";

export default class TleService {

    private URL: string = 'https://ivanstanojevic.me/api/tle';

    public search(query: string): Promise<Tle[]> {
        return new Promise((resolve, reject) => {
            fetch(`${this.URL}?search=${query}`)
                .then(response => response.json())
                .then((data) => {
                    let result = [];

                    if (data.member) {
                        data.member.map((datum) => {
                            result.push(new Tle(datum));
                        });
                    }

                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

}
