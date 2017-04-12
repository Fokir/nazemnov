import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class ConfigService {
    private result: Observable<ConfigInterface>;

    constructor(private http: Http) {
        this.result = http.get('/config').map(res => res.json()).publishLast().refCount();
    }

    get name() {
        return this.result.map((config: ConfigInterface) => config.name);
    }

    get desc() {
        return this.result.map((config: ConfigInterface) => config.home_desc);
    }

    get address() {
        return this.result.map((config: ConfigInterface) => config.address);
    }
}

export interface ConfigInterface {
    name: string,
    home_desc: { title: string, text: string },
    address: { [key: string]: string }
}
