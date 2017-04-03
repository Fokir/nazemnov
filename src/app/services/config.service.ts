import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class ConfigService {
    private result: Observable<ConfigInterface>;

    constructor(private http: Http) {
        this.result = http.get('/api/config').map(res=>res.json());
    }

    get name() {
        return this.result.map((config: ConfigInterface)=>config.name);
    }
}

export interface ConfigInterface {
    name: string, home_desc: { title: string, text: string }
}
