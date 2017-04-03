import {Component} from "@angular/core";
import {ConfigService} from "../../services/config.service";

@Component({
    selector: 'app-info',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.less']
})
export class AddressComponent{
    info: { [key: string]: string } = null;
    keys: Array<string> = [];

    constructor(private config: ConfigService){
        config.address.subscribe((result)=>{
            this.info = result;
            this.keys = Object.keys(this.info);
        });
    }
}
