import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import {Observable} from "rxjs";
import * as _ from "underscore";

@Injectable()
export class CatalogService {
    private result: Observable<Array<CatalogInterface>>;
    private resultProduct: Observable<Array<ProductInterface>>;

    constructor(private http: Http) {
        this.result = http.get('/api/catalogs').map(res => res.json()).publishLast().refCount();
        this.resultProduct = http.get('/api/products').map(res => res.json()).publishLast().refCount();
    }

    get all() {
        return this.result;
    }

    get catalogProducts() {
        return Observable.forkJoin(this.result, this.resultProduct).map((res) => {
            let catalogs = res[0];
            let products = res[1];
            let groupProducts = _.groupBy(products, (p: ProductInterface) => p.catalog_id);
            catalogs.forEach((catalog: CatalogInterface) => {
                catalog.products = groupProducts[catalog.id] ? groupProducts[catalog.id] : [];
            });
            return catalogs;
        });
    }

    product(id: string){
        return this.http.get(`/api/products/${id}`).map(res=>res.json());
    }
}

export interface CatalogInterface {
    id: string,
    name: string,
    img: string,
    products?: Array<ProductInterface>
}


export interface ProductInterface {
    id: number,
    catalog_id: number,
    name: string,
    description: string,
    img: string,
    models: Array<string>,
    params: { [key: string]: Array<string> }
}
