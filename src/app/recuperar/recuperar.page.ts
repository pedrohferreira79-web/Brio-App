
import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  standalone: false,
})
export class RecuperarPage {

  email = '';

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async enviarEmail() {

    if (!this.email.trim()) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Informe seu e-mail.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Enviando e-mail...'
    });

    await loading.present();

    try {
      await this.authService.recuperarSenha(this.email.trim());

      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Solicitação enviada',
        message: 'Se o e-mail estiver cadastrado, você receberá as instruções de recuperação. Confira também o spam.',
        buttons: ['OK']
      });

      await alert.present();

    } catch (error: any) {

      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Erro',
        message: error.message || 'Não foi possível enviar o e-mail.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
