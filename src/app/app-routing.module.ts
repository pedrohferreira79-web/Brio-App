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
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'matematica',
    loadChildren: () => import('./matematica/matematica.module').then( m => m.MatematicaPageModule)
  },
  {
    path: 'portugues',
    loadChildren: () => import('./portugues/portugues.module').then( m => m.PortuguesPageModule)
  },
  {
    path: 'biologia',
    loadChildren: () => import('./biologia/biologia.module').then( m => m.BiologiaPageModule)
  },
  {
    path: 'geografia',
    loadChildren: () => import('./geografia/geografia.module').then( m => m.GeografiaPageModule)
  },
  {
    path: 'fisica',
    loadChildren: () => import('./fisica/fisica.module').then( m => m.FisicaPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./quimica/quimica.module').then( m => m.QuimicaPageModule)
  },
  {
    path: 'ingles',
    loadChildren: () => import('./ingles/ingles.module').then( m => m.InglesPageModule)
  },
  {
    path: 'filosofia',
    loadChildren: () => import('./filosofia/filosofia.module').then( m => m.FilosofiaPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'artes',
    loadChildren: () => import('./artes/artes.module').then( m => m.ArtesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
