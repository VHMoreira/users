interface Request {
    url: string;
}

interface Response {
    data: any;
    status: number;
}
interface Service {
    GET({ url }: Request): Promise<Response>;
}

export default Service;