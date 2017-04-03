import {ConfigService} from './services/config.service';
import {HeaderComponent} from './components/header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2StateDeclaration, UIRouterModule} from 'ui-router-ng2';

import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";

const app_states: Array<Ng2StateDeclaration> = [
    {name: 'home', url: '/', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UIRouterModule.forRoot({
            states: app_states,
            useHash: false
        })
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
