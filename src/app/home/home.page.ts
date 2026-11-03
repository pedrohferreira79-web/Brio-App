import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  mostrarSenha = false;
  email = '';
  senha = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async entrar() {
    if (!this.email.trim() || !this.senha) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Preencha o e-mail e a senha.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Entrando...'
    });

    await loading.present();

    try {
      await this.authService.signIn(
        this.email.trim(),
        this.senha
      );

      await loading.dismiss();

      await this.router.navigateByUrl('/inicio');

    } catch (error: any) {
      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Erro no login',
        message: error.message || 'Não foi possível entrar na conta.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
