/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 27-3-2018
 * Time: 20:29
 */

import {ImageModel} from "../domain/image.model";

export interface NewsNode {
    path: string;
    title: string;
    content: string;
    author: string;
    created: any;
    images: ImageModel[]
}