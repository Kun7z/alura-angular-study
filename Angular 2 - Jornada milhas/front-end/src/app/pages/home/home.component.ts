import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';

@Component({
	selector: 'app-home',
	standalone: false,
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
	constructor(private servicoPromocao: PromocaoService) {

	}
	ngOnInit(): void {
		this.servicoPromocao.listar().subscribe(response => console.log(response))
	}
}
