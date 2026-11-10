
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
  standalone: false,
})
export class RedefinirSenhaPage {

  novaSenha = '';
  confirmarSenha = '';
  mostrarSenha = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async redefinirSenha() {

    if (!this.novaSenha || !this.confirmarSenha) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Preencha os dois campos de senha.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if (this.novaSenha.length < 6) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'A senha deve possuir pelo menos 6 caracteres.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'As senhas não são iguais.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Atualizando senha...'
    });

    await loading.present();

    try {
      await this.authService.atualizarSenha(this.novaSenha);

      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Senha alterada!',
        message: 'Sua senha foi redefinida com sucesso.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('/home');
          }
        }]
      });

      await alert.present();

    } catch (error: any) {
      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Erro',
        message: error.message || 'Não foi possível atualizar sua senha.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
