import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.cadastroForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required]]
      },
      { validators: this.senhasIguaisValidator }
    );
  }

  private senhasIguaisValidator(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('senha')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasDiferentes: true };
  }

  async cadastrar() {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const { email, senha } = this.cadastroForm.value;
    const loading = await this.loadingController.create({ message: 'Cadastrando...' });
    await loading.present();

    try {
      await this.authService.signUp(email, senha);
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Cadastro realizado',
        message: 'Se a confirmação por e-mail estiver ativa, verifique sua caixa de entrada. Depois faça login.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Erro no cadastro',
        message: error.message || 'Não foi possível concluir o cadastro.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
