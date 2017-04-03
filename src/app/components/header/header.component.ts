import {Component, OnDestroy} from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnDestroy{
    name: string = null;
    private _subscriber: Subscription;

    constructor(public config: ConfigService){
        this._subscriber = config.name.subscribe((res)=>{
            this.name = res;
        });
    }

    ngOnDestroy(){
        this._subscriber.unsubscribe();
    }
}
