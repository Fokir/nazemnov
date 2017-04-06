import {ConfigService} from './services/config.service';
import {HeaderComponent} from './components/header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2StateDeclaration, UIRouterModule} from 'ui-router-ng2';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/count';

import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SiteComponent} from "./components/site/site.component";
import {CatalogService} from "./services/catalog.service";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {CatalogComponent as CatalogComponentPage} from "./pages/catalog/catalog.component";
import {AddressComponent} from "./components/address/address.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ProductComponent} from "./pages/catalog/product/product.component";
import {PageComponent} from "./components/page/page.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

const app_states: Array<Ng2StateDeclaration> = [
    {name: 'home', url: '/', component: HomeComponent, data: {name: 'Главная'}},
    {name: 'catalog', url: '/catalog', component: CatalogComponentPage, data: {name: 'Каталог'}},
    {name: 'catalog.item', url: '/:id', component: ProductComponent},
    {name: 'page', url: '/page', component: PageComponent},
    {name: 'page.about', url: '/about', component: AboutComponent},
    {name: 'page.contacts', url: '/contacts', component: ContactsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        SiteComponent,
        CatalogComponent,
        AddressComponent,
        FooterComponent,
        CatalogComponentPage,
        ProductComponent,
        PageComponent,
        AboutComponent,
        ContactsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        UIRouterModule.forRoot({
            states: app_states,
            useHash: false,
            otherwise: '/'
        })
    ],
    providers: [ConfigService, CatalogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
