import axios from "axios";

class GithubClient {
    constructor() {
        this.client = axios.create({
            baseURL: ' https://api.github.com/users',
        });
    }
    
    GET(''){

    }

}