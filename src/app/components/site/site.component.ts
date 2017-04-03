import {Component} from "@angular/core";
import {ConfigService} from "../../services/config.service";
@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.less']
})
export class SiteComponent{
    title: string = null;
    text: string = null;

    constructor(private config: ConfigService){
        config.desc.subscribe((result)=>{
            this.title = result.title;
            this.text = result.text;
        });
    }
}
