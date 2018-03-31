/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 1-4-2018
 * Time: 00:34
 */

import * as fs from 'fs';

const HTML_DOCS_FOLDER: string = "./src/docs";
const JSON_DOCS_FOLDER: string = "./src/generated/docs";
const _generate: any = [];

console.log("Performing doc generation...");

fs.readdirSync(HTML_DOCS_FOLDER).forEach((file: string) => {
    const path = `${HTML_DOCS_FOLDER}/${file}`;
    const contents = fs.readFileSync(path, 'utf8');
    const doc = {
        id: file.substr(0, file.indexOf('.')),
        contents: contents
    };

    _generate.push(doc);
});

_generate.forEach(doc => {
    console.log(`${doc.id}.json generated`);

    fs.writeFileSync(`${JSON_DOCS_FOLDER}/${doc.id}.json`, JSON.stringify(doc));
});