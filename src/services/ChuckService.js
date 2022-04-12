import HttpService from "./HttpService";

class ChuckService extends HttpService {
    getRandomJoke = async () => {
    const { data } = await this.client.get("https://api.chucknorris.io/jokes/random");
    return data;
    };
}

export default new ChuckService();