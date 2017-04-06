import {Component} from "@angular/core";
import {ProductInterface, CatalogService} from "../../../services/catalog.service";
import {StateService} from "ui-router-ng2";

@Component({
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less']
})
export class ProductComponent{
    product: ProductInterface;

    constructor(private catalog: CatalogService, private state: StateService){

    }

    ngOnInit(){
        this.catalog.product(this.state.params.id).subscribe((res)=>{
            this.product = res;
        });
    }

    getKeys(obj: Object){
        return Object.keys(obj);
    }
}
