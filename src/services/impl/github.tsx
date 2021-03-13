import axios, { AxiosInstance } from "axios";
import Service from "../services";

interface Request {
    url: string;
}

interface Response {
    data: any;
    status: number;
}

class GithubClient implements Service {
    client: AxiosInstance;
    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.github.com',
        });
    }

    async GET({ url }: Request): Promise<Response> {
        const { data, status } = await this.client.get(url);
        return {
            data,
            status
        };
    }

}

export default GithubClient;