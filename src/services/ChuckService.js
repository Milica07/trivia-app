import HttpService from "./HttpService";

class ChuckService extends HttpService {
  getRandomJoke = async (category) => {
    const { data } = await this.client.get("https://api.chucknorris.io/jokes/random",
      {
        params: {
          category,
        },
      }
    );

    return data;
  };
}

export default new ChuckService();