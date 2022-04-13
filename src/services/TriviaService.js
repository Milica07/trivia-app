import HttpService from "./HttpService";

class TriviaService extends HttpService {
    getClues = async () => {
    const { data } = await this.client.get("http://jservice.io/api/clues");
    
    return data;
    };

    getCategories = async () => {
    const { data } = await this.client.get("http://jservice.io/api/categories",
    {
    params: { count: 10 },
    }
    );
    
    return data;
    };
}
export default new TriviaService();