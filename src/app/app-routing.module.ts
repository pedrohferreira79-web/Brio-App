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
  {
    path: 'molduras',
    loadChildren: () => import('./molduras/molduras.module').then( m => m.MoldurasPageModule)
  },
  {
    path: 'algebra',
    loadChildren: () => import('./algebra/algebra.module').then( m => m.AlgebraPageModule)
  },
  {
    path: 'funcoes',
    loadChildren: () => import('./funcoes/funcoes.module').then( m => m.FuncoesPageModule)
  },
  {
    path: 'geometria',
    loadChildren: () => import('./geometria/geometria.module').then( m => m.GeometriaPageModule)
  },
  {
    path: 'gramatica',
    loadChildren: () => import('./gramatica/gramatica.module').then( m => m.GramaticaPageModule)
  },
  {
    path: 'interpretacao',
    loadChildren: () => import('./interpretacao/interpretacao.module').then( m => m.InterpretacaoPageModule)
  },
  {
    path: 'literatura',
    loadChildren: () => import('./literatura/literatura.module').then( m => m.LiteraturaPageModule)
  },
  {
    path: 'citologia',
    loadChildren: () => import('./citologia/citologia.module').then( m => m.CitologiaPageModule)
  },
  {
    path: 'genetica',
    loadChildren: () => import('./genetica/genetica.module').then( m => m.GeneticaPageModule)
  },
  {
    path: 'ecologia',
    loadChildren: () => import('./ecologia/ecologia.module').then( m => m.EcologiaPageModule)
  },
  {
    path: 'geografia-fisica',
    loadChildren: () => import('./geografia-fisica/geografia-fisica.module').then( m => m.GeografiaFisicaPageModule)
  },
  {
    path: 'mecanica',
    loadChildren: () => import('./mecanica/mecanica.module').then( m => m.MecanicaPageModule)
  },
  {
    path: 'termologia',
    loadChildren: () => import('./termologia/termologia.module').then( m => m.TermologiaPageModule)
  },
  {
    path: 'eletricidade',
    loadChildren: () => import('./eletricidade/eletricidade.module').then( m => m.EletricidadePageModule)
  },
  {
    path: 'quimica-geral',
    loadChildren: () => import('./quimica-geral/quimica-geral.module').then( m => m.QuimicaGeralPageModule)
  },
  {
    path: 'quimica-organica',
    loadChildren: () => import('./quimica-organica/quimica-organica.module').then( m => m.QuimicaOrganicaPageModule)
  },
  {
    path: 'fisica-quimica',
    loadChildren: () => import('./fisica-quimica/fisica-quimica.module').then( m => m.FisicaQuimicaPageModule)
  },
  {
    path: 'grammar',
    loadChildren: () => import('./grammar/grammar.module').then( m => m.GrammarPageModule)
  },
  {
    path: 'reading',
    loadChildren: () => import('./reading/reading.module').then( m => m.ReadingPageModule)
  },
  {
    path: 'vocabulary',
    loadChildren: () => import('./vocabulary/vocabulary.module').then( m => m.VocabularyPageModule)
  },
  {
    path: 'etica',
    loadChildren: () => import('./etica/etica.module').then( m => m.EticaPageModule)
  },
  {
    path: 'filosofia-politica',
    loadChildren: () => import('./filosofia-politica/filosofia-politica.module').then( m => m.FilosofiaPoliticaPageModule)
  },
  {
    path: 'filosofia-antiga',
    loadChildren: () => import('./filosofia-antiga/filosofia-antiga.module').then( m => m.FilosofiaAntigaPageModule)
  },
  {
    path: 'brasil-colonia',
    loadChildren: () => import('./brasil-colonia/brasil-colonia.module').then( m => m.BrasilColoniaPageModule)
  },
  {
    path: 'brasil-republica',
    loadChildren: () => import('./brasil-republica/brasil-republica.module').then( m => m.BrasilRepublicaPageModule)
  },
  {
    path: 'historia-mundial',
    loadChildren: () => import('./historia-mundial/historia-mundial.module').then( m => m.HistoriaMundialPageModule)
  },
  {
    path: 'artes-visuais',
    loadChildren: () => import('./artes-visuais/artes-visuais.module').then( m => m.ArtesVisuaisPageModule)
  },
  {
    path: 'musica',
    loadChildren: () => import('./musica/musica.module').then( m => m.MusicaPageModule)
  },
  {
    path: 'teatro',
    loadChildren: () => import('./teatro/teatro.module').then( m => m.TeatroPageModule)
  },
  {
    path: 'geopolitica',
    loadChildren: () => import('./geopolitica/geopolitica.module').then( m => m.GeopoliticaPageModule)
  },
  {
    path: 'cartografia',
    loadChildren: () => import('./cartografia/cartografia.module').then( m => m.CartografiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
