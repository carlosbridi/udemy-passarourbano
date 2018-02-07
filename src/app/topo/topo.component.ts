import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
  }

  pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca);

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

}
