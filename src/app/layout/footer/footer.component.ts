/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 27-3-2018
 * Time: 13:08
 */

import { Component, Input } from '@angular/core';
import {NavigationNode} from "../../navigation/navigation.model";

@Component({
    selector: 'wio-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent {
    @Input() nodes: NavigationNode[];
}