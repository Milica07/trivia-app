import HttpService from "./HttpService";

class TriviaService extends HttpService {
    getClues = async () => {
    const { data } = await this.client.get("http://jservice.io/api/clues");
    
    return data;
    };
}
export default new TriviaService();