import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]

})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(private route: ActivatedRoute,
              private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
    //console.log(this.route.snapshot.params['id']); // Pega da configuracao de mapa de rotas
    this.route.params.subscribe((parametro: any) => {
    });

    // let meuObservableTeste = Observable.create((observer: Observer<String>) => {
    //   observer.next('Primeiro evento da stream'); //Dispara um evento no fluxo do observavel
    //   observer.next('Segundo evento da stream'); //Dispara um evento no fluxo do observavel
    //   observer.complete(); //Dispara um evento no fluxo do observavel
    //   //observer.error('Algum erro ocorreu na stream'); //Dispara um evento no fluxo do observavel
    // });

    // meuObservableTeste.subscribe(
    //   (resultado: any) => console.log(resultado),
    //   (erro: string) => console.log(erro),
    // () => console.log('Stream de eventos foi finalizada'));
  }



}
