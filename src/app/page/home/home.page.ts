import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PainelServiceService } from 'src/app/service/painel/painel-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: PainelServiceService,
    private alertCtrl: AlertController,    
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.getPainel(params);
      }
    });
  }

  async getPainel(params) {
    if (params.idestab) {
      let page = this.service.getPainelAtivoEstab(params.idestab);
      if(page){
        this.router.navigate([page], { state: { idEstab: params.idestab } });
      }else{
        let alert = this.alertCtrl.create({
          header:'Aviso',
          message:'Nenhum painel disponível para o estabelecimento: '+ params.idestab,
          buttons: ['OK']
        });
        (await alert).present();
      }
      
    }
  }

}
