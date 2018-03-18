/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 19-3-2018
 * Time: 00:05
 */


/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 16-3-2018
 * Time: 23:57
 */

import {Component, OnInit} from '@angular/core';
import {ProjectNode} from "../../services/project/project.model";

@Component({
    selector: "",
    templateUrl: './project-page.component.html',
})
export class ProjectPageComponent implements OnInit {

    protected projects: ProjectNode[];

    constructor() {
    }

    ngOnInit() {
        this.projects = [
            {
                name: "Kaweco Double Twin Shift",
                author: "WopsterModding",
                version: "1.0.0.0"
            },
            {
                name: "Kaweco Double Twin Shift",
                author: "WopsterModding",
                version: "1.0.0.0"
            },
        ]
    }
}
