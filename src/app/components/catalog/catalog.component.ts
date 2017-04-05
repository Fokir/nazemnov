import {Component, Input} from "@angular/core";
import {CatalogInterface, CatalogService} from "../../services/catalog.service";
@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.less']
})
export class CatalogComponent {
    @Input() count: number = 0;
    private items: Array<CatalogInterface> = [];

    constructor(private catalog: CatalogService) {

    }

    ngOnInit(){
        this.catalog.all.subscribe((res: Array<CatalogInterface>) => {
            this.items = res.slice(0, this.count == 0 ? res.length : this.count);
        });
    }
}
