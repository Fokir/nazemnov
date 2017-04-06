import {Component} from "@angular/core";
import {CatalogInterface, CatalogService} from "../../services/catalog.service";

@Component({
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.less']
})
export class CatalogComponent{
    catalogs: Array<CatalogInterface> = [];

    constructor(private catalog: CatalogService){
        catalog.catalogProducts.subscribe((res)=>{
            this.catalogs = res;
        })
    }
}
