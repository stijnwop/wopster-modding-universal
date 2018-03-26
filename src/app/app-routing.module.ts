/**
 * Created by stijn on 8-6-2017.
 */

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './elements/home/home.module#HomeModule'
    },
    {
        path: 'projects',
        loadChildren: './elements/project/project.module#ProjectModule'
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}