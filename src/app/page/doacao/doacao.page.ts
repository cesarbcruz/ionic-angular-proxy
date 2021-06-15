import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {

  private modelData = {
    idEstab: undefined,
    totalDoacao: 0.00,
    doadores: []
  }

  constructor(
    private router: Router,
    protected httpClient: HttpClient) {
    this.modelData.idEstab = this.router.getCurrentNavigation().extras.state.idEstab || undefined;
    this.getData();
  }

  ngOnInit() {
    setInterval(() => {
      this.getData();
    }, 5000);
  }
  
  getData() {
    // dados obtidos de alguma API
    this.modelData.totalDoacao += Math.random()*6;
    this.httpClient.get<[]>("/nomes/5").subscribe(data => {
      this.modelData.doadores = data;
    });
  }

}
