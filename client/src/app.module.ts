import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { KittensComponent }   from './app/kittens/kittens.component';
import { UserListComponent } from './app/users/user-list.component';
import { UserListService } from './app/users/user-list.service';
import { routing } from './app/app.routes';
import { FormsModule } from '@angular/forms';
import { GraphComponent} from './app/home/graph.component';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { PipeModule } from './pipe.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule,
        PipeModule,
    ],
    declarations: [
        AppComponent,
        KittensComponent,
        HomeComponent,
        NavbarComponent,
        UserListComponent,
    ],
    providers: [ UserListService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
