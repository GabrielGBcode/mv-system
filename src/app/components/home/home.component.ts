import { Component, signal } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UrlCodec } from '@angular/common/upgrade';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: string = 'MV Soul';
  count = signal(0);
  imageCat: string =
    'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg';
  i: number = 0;

  teste() {
    this.count.update((c) => c + 1);
    this.name = 'MV Soul ' + this.count();

    console.log('Olá mundo!');
  }
}
