import { Component } from '@angular/core';
import companyName from '../../../assets/config.json';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  companyName: string = companyName.companyName;
}
