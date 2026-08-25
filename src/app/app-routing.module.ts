import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'progresso',
    loadChildren: () => import('./progresso/progresso.module').then( m => m.ProgressoPageModule)
  },
  {
    path: 'jogar',
    loadChildren: () => import('./jogar/jogar.module').then( m => m.JogarPageModule)
  },
  {
    path: 'desafios',
    loadChildren: () => import('./desafios/desafios.module').then( m => m.DesafiosPageModule)
  },
  {
    path: 'lojabrio',
    loadChildren: () => import('./lojabrio/lojabrio.module').then( m => m.LojabrioPageModule)
  },
  {
    path: 'conquistas',
    loadChildren: () => import('./conquistas/conquistas.module').then( m => m.ConquistasPageModule)
  },
  {
    path: 'fotos-perfil',
    loadChildren: () => import('./fotos-perfil/fotos-perfil.module').then( m => m.FotosPerfilPageModule)
  },
  {
    path: 'personalizacao',
    loadChildren: () => import('./personalizacao/personalizacao.module').then( m => m.PersonalizacaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
