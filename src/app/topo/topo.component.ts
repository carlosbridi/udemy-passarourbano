import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((termo: string) => {

      if (termo.trim() === ''){
        return Observable.of<Oferta[]>([]);
      }
        return this.ofertaService.pesquisaOfertas(termo);
    }).catch((erro: any) => {
      console.log(erro);
      return Observable.of<Oferta[]>([]);
    });
  }

  pesquisa(termoDaBusca: string): void {
    // this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca);

    // this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas),
    //                        (erro: any) => console.log('Erro: ' + erro.status),
    //                       () => console.log('Fluxo de eventos finalizad'));

    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
