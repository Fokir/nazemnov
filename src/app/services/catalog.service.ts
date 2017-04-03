import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class CatalogService {
    private result: Observable<Array<CatalogInterface>>;

    constructor(private http: Http) {
        this.result = http.get('/api/catalogs').map(res => res.json()).publishLast().refCount();
    }

    get all() {
        return this.result;
    }
}

export interface CatalogInterface {
    id: string,
    name: string,
    img: string
}
