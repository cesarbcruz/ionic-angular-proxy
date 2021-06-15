import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PainelServiceService {

  pageDoacao = "/doacao";
  
  paramEstabFake = {
    1:this.pageDoacao,
    2:this.pageDoacao,
    3:this.pageDoacao,
  }
  constructor() { }

  public getPainelAtivoEstab(idEstab) {
    return this.paramEstabFake[idEstab]||undefined;
  }
}
