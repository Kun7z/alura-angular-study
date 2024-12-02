import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,

  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  //decorator para indicar que esses valores vão ser recebidos através de atributos
  @Input() src: string = ''
  @Input() alt: string = ''
}
