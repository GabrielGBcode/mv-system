import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  systems: { name: string; link: string }[] = [
    {
      name: 'SoulMV',
      link: 'soulmv',
    },
    {
      name: 'MVPEP',
      link: 'mvpep',
    },
    {
      name: 'PortalRH',
      link: 'portalrh',
    },
    {
      name: 'MV Painel Recepcao',
      link: 'mv-recepcao',
    },
    {
      name: 'QRCode',
      link: 'qrcode',
    },
  ];

  navigateTo(link: string) {
    window.open(link, '_blank');
  }
}
