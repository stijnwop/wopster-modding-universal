/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 27-3-2018
 * Time: 22:59
 */
import {Injectable} from "@angular/core";
import {Logger} from "../logger.service";
import {NewsNode} from "./news.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class NewsService {

    private readonly baseEndPoint = 'assets/news';

    constructor(private _logger: Logger, private _httpClient: HttpClient) {
    }

    /**
     * Get all news nodes from API
     * @returns {Promise<NewsNode[]>}
     */
    public async getNewsNodes(): Promise<NewsNode[]> {
        const endpointUrl = this.baseEndPoint + ".json";

        try {
            return await this._httpClient.get<NewsNode[]>(endpointUrl).toPromise();
        } catch (err) {
            this._logger.error(err);
            return Promise.reject(err);
        }
    }

    /**
     * Get news node based on path param
     * @param {string} path
     * @returns {Promise<NewsNode>}
     */
    public async getNewsNode(path: string): Promise<NewsNode> {
        // Todo: implement actual query by id with API implementation
        const endPoint = this.baseEndPoint + `/path=${path}`;

        // Do a filter on all news items for now..
        let node: NewsNode = null;

        await this.getNewsNodes().then((items) => {
            node = items.find((x: NewsNode) => x.path.toLowerCase() == path.toLowerCase())
        });

        this._logger.log(node);

        return Promise.resolve(node);
    }
}