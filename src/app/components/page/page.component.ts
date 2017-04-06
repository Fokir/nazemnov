import {Component} from "@angular/core";
@Component({
    template: '<app-header></app-header><ui-view class="container"></ui-view><app-info></app-info><app-footer></app-footer>',
    styles: [`.container {
        background: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
        padding: 15px 20px;
        margin: 25px auto;
    }`]
})
export class PageComponent {

}
