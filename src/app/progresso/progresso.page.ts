import { Component, OnInit } from '@angular/core';
import { GamificationService } from '../services/gamification.service';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.page.html',
  styleUrls: ['./progresso.page.scss'],
  standalone: false,
})
export class ProgressoPage implements OnInit {

  // ==============================
  // XP TOTAL
  // ==============================

  xpTotal = 0;
  porcentagemXP = 0;

  // ==============================
  // ESTATÍSTICAS GERAIS
  // ==============================

  exercicios = 0;
  dias = 0;
  tempoMinutos = 0;
  conquistas = 0;
  brioCoins = 0;

  // ==============================
  // DESEMPENHO DAS MATÉRIAS
  // ==============================

  materiasDesempenho = [
    {
      materia: 'matematica',
      nome: 'Matemática',
      classe: 'matematica',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'portugues',
      nome: 'Língua Portuguesa',
      classe: 'portugues',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'biologia',
      nome: 'Biologia',
      classe: 'biologia',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'geografia',
      nome: 'Geografia',
      classe: 'geografia',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'fisica',
      nome: 'Física',
      classe: 'fisica',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'quimica',
      nome: 'Química',
      classe: 'quimica',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'ingles',
      nome: 'Inglês',
      classe: 'ingles',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'filosofia',
      nome: 'Filosofia',
      classe: 'filosofia',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'historia',
      nome: 'História',
      classe: 'historia',
      progresso: 0,
      xp: 0
    },
    {
      materia: 'artes',
      nome: 'Artes',
      classe: 'artes',
      progresso: 0,
      xp: 0
    }
  ];

  // ==============================
  // CONSTRUTOR
  // ==============================

  constructor(
    private gamificationService: GamificationService
  ) { }

  // ==============================
  // INICIALIZAÇÃO
  // ==============================

  ngOnInit() {

    this.atualizarDados();

  }

  // ==============================
  // ATUALIZAR AO ENTRAR NA PÁGINA
  // ==============================

  ionViewWillEnter() {

    this.atualizarDados();

  }

  // ==============================
  // ATUALIZAR TODOS OS DADOS
  // ==============================

  atualizarDados() {

    // ------------------------------
    // XP TOTAL
    // ------------------------------

    this.xpTotal =
      this.gamificationService.obterXPTotal();

    // ------------------------------
    // ESTATÍSTICAS GERAIS
    // ------------------------------

    this.exercicios =
      this.gamificationService.obterExercicios();

    this.dias =
      this.gamificationService.obterDias();

    this.tempoMinutos =
      this.gamificationService.obterTempoMinutos();

    this.conquistas =
      this.gamificationService.obterConquistas();

    this.brioCoins =
      this.gamificationService.obterBrioCoins();

    // ------------------------------
    // PORCENTAGEM DO XP
    // ------------------------------

    this.porcentagemXP =
      Math.min((this.xpTotal / 100000) * 100, 100);

    // ------------------------------
    // XP E PROGRESSO POR MATÉRIA
    // ------------------------------

    this.materiasDesempenho =
      this.materiasDesempenho.map(materia => {

        return {
          ...materia,

          xp: this.gamificationService.obterXP(
            materia.materia
          ),

          progresso: this.gamificationService.obterProgresso(
            materia.materia
          )

        };

      });

  }

  // ==============================
  // FORMATAR TEMPO DE ESTUDO
  // ==============================

  obterTempoFormatado(): string {

    const horas = Math.floor(
      this.tempoMinutos / 60
    );

    const minutos =
      this.tempoMinutos % 60;

    if (horas === 0) {

      return `${minutos}min`;

    }

    if (minutos === 0) {

      return `${horas}h`;

    }

    return `${horas}h ${minutos}min`;

  }

}