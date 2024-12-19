import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  standalone: false,

  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.scss'
})
export class CardDepoimentosComponent {
  depoimento: string = `
  Recomendo fortemente a agência de viagens Jornada.
  Eles oferecem um serviço personalizado e de alta qualidade
  que excedeu minhas expectativas em minha última viagem.
`
  autoria: string = 'Mariana Faustino'
}
