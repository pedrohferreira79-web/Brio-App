import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamificationService {

  // ==============================
  // CHAVES DO LOCALSTORAGE
  // ==============================

  private readonly XP_KEY = 'xp_materias';

  private readonly STATS_KEY =
    'estatisticas_gamificacao';

  private readonly PROGRESSO_KEY =
    'progresso_matematica';


  // ==============================
  // XP POR MATÉRIA
  // ==============================

  /*
   * Todas as matérias existentes no aplicativo.
   *
   * Por enquanto, somente Matemática está sendo
   * utilizada efetivamente pelos quizzes.
   */

  private xpMaterias: {
    matematica: number;
    portugues: number;
    biologia: number;
    geografia: number;
    fisica: number;
    quimica: number;
    ingles: number;
    filosofia: number;
    historia: number;
    artes: number;
  } = {

    matematica: 0,
    portugues: 0,
    biologia: 0,
    geografia: 0,
    fisica: 0,
    quimica: 0,
    ingles: 0,
    filosofia: 0,
    historia: 0,
    artes: 0

  };


  // ==============================
  // ESTATÍSTICAS GERAIS
  // ==============================

  private estatisticas = {

    dias: 0,

    exercicios: 0,

    tempoMinutos: 0,

    conquistas: 0,

    brioCoins: 0

  };


  // ==============================
  // PROGRESSO DE MATEMÁTICA
  // ==============================

  /*
   * Cada assunto vale 1/3 da matéria.
   *
   * Álgebra    = 33%
   * Geometria  = 33%
   * Funções    = 33%
   *
   * Só é concluído quando o aluno
   * fizer 10/10 naquele assunto.
   */

  private assuntosConcluidos = {

    algebra: false,

    geometria: false,

    funcoes: false

  };


  // ==============================
  // CONTROLE DO TEMPO
  // ==============================

  private segundosSessao = 0;

  private intervalo: any = null;

  private monitorando = false;


  // ==============================
  // CONSTRUTOR
  // ==============================

  constructor() {

    this.carregarDados();


    // Carrega o progresso de Matemática

    const progressoSalvo =
      localStorage.getItem(
        this.PROGRESSO_KEY
      );


    if (progressoSalvo) {

      this.assuntosConcluidos = {

        ...this.assuntosConcluidos,

        ...JSON.parse(progressoSalvo)

      };

    }

  }


  // ==============================
  // CARREGAR DADOS
  // ==============================

  private carregarDados() {

    // ------------------------------
    // XP
    // ------------------------------

    const xpSalvo =
      localStorage.getItem(
        this.XP_KEY
      );


    if (xpSalvo) {

      this.xpMaterias = {

        ...this.xpMaterias,

        ...JSON.parse(xpSalvo)

      };

    }


    // ------------------------------
    // ESTATÍSTICAS
    // ------------------------------

    const estatisticasSalvas =
      localStorage.getItem(
        this.STATS_KEY
      );


    if (estatisticasSalvas) {

      this.estatisticas = {

        ...this.estatisticas,

        ...JSON.parse(
          estatisticasSalvas
        )

      };

    }

  }


  // ==============================
  // SALVAR XP
  // ==============================

  private salvarXP() {

    localStorage.setItem(

      this.XP_KEY,

      JSON.stringify(
        this.xpMaterias
      )

    );

  }


  // ==============================
  // SALVAR ESTATÍSTICAS
  // ==============================

  private salvarEstatisticas() {

    localStorage.setItem(

      this.STATS_KEY,

      JSON.stringify(
        this.estatisticas
      )

    );

  }


  // ==============================
  // XP
  // ==============================

  /*
   * Adiciona XP para uma matéria.
   *
   * Exemplo:
   *
   * adicionarXP('matematica', 5);
   *
   * O XP pode ser ganho infinitamente.
   */

  adicionarXP(
    materia: string,
    quantidade: number
  ) {

    if (
      !(materia in this.xpMaterias)
    ) {

      console.warn(
        `Matéria "${materia}" não cadastrada no sistema de XP.`
      );

      return;

    }


    const chave =
      materia as keyof typeof this.xpMaterias;


    this.xpMaterias[chave] +=
      quantidade;


    this.salvarXP();

  }


  // ==============================
  // OBTER XP DA MATÉRIA
  // ==============================

  obterXP(
    materia: string
  ): number {

    if (
      !(materia in this.xpMaterias)
    ) {

      return 0;

    }


    const chave =
      materia as keyof typeof this.xpMaterias;


    return this.xpMaterias[chave];

  }


  // ==============================
  // OBTER XP TOTAL
  // ==============================

  /*
   * Soma o XP de todas as matérias.
   *
   * É esse valor que será usado:
   *
   * - Página de Progresso
   * - Loja BRIO
   * - Perfil
   * - Barra geral de XP
   */

  obterXPTotal(): number {

    return Object.values(
      this.xpMaterias
    ).reduce(

      (total, xp) =>
        total + xp,

      0

    );

  }


  // ==============================
  // EXERCÍCIOS
  // ==============================

  adicionarExercicio() {

    this.estatisticas.exercicios++;

    this.salvarEstatisticas();

  }


  obterExercicios(): number {

    return this.estatisticas.exercicios;

  }


  // ==============================
  // DIAS DE ESTUDO
  // ==============================

  private obterDataAtual(): string {

    const agora = new Date();


    const ano =
      agora.getFullYear();


    const mes =
      String(
        agora.getMonth() + 1
      ).padStart(2, '0');


    const dia =
      String(
        agora.getDate()
      ).padStart(2, '0');


    return `${ano}-${mes}-${dia}`;

  }


  private registrarDiaEstudo() {

    const hoje =
      this.obterDataAtual();


    const ultimoDia =
      localStorage.getItem(
        'ultimo_dia_estudo'
      );


    // Se ainda não estudou hoje

    if (
      ultimoDia !== hoje
    ) {

      this.estatisticas.dias++;


      localStorage.setItem(

        'ultimo_dia_estudo',

        hoje

      );


      this.salvarEstatisticas();

    }

  }


  obterDias(): number {

    return this.estatisticas.dias;

  }


  // ==============================
  // TEMPO DE ESTUDO
  // ==============================

  iniciarMonitoramento() {

    if (this.monitorando) {

      return;

    }


    this.monitorando = true;


    document.addEventListener(

      'visibilitychange',

      this.verificarVisibilidade

    );


    // Começa imediatamente
    // se o aplicativo estiver visível

    if (!document.hidden) {

      this.iniciarContagem();

    }

  }


  private verificarVisibilidade = () => {

    if (document.hidden) {

      this.pararContagem();

    } else {

      this.iniciarContagem();

    }

  };


  private iniciarContagem() {

    if (
      this.intervalo !== null
    ) {

      return;

    }


    this.intervalo =
      setInterval(() => {


        this.segundosSessao++;


        // A cada 60 segundos

        if (
          this.segundosSessao >= 60
        ) {

          this.segundosSessao = 0;


          this.estatisticas
            .tempoMinutos++;


          this.salvarEstatisticas();


          // Registra o dia como
          // dia estudado

          this.registrarDiaEstudo();

        }


      }, 1000);

  }


  private pararContagem() {

    if (
      this.intervalo !== null
    ) {

      clearInterval(
        this.intervalo
      );


      this.intervalo = null;

    }

  }


  obterTempoMinutos(): number {

    return this.estatisticas
      .tempoMinutos;

  }


  // ==============================
  // CONQUISTAS
  // ==============================

  obterConquistas(): number {

    return this.estatisticas
      .conquistas;

  }


  // ==============================
  // BRIO COINS
  // ==============================

  obterBrioCoins(): number {

    return this.estatisticas
      .brioCoins;

  }


  // ==============================
  // PROGRESSO DE MATEMÁTICA
  // ==============================

  /*
   * Marca um assunto como concluído.
   *
   * Só deve ser chamado quando
   * o aluno atingir 10/10.
   */

  concluirAssunto(
    materia: string
  ) {

    if (

      materia !== 'algebra' &&

      materia !== 'geometria' &&

      materia !== 'funcoes'

    ) {

      return;

    }


    const chave =
      materia as keyof
      typeof this.assuntosConcluidos;


    // Se já estiver concluído,
    // não faz nada.

    if (
      this.assuntosConcluidos[chave]
    ) {

      return;

    }


    this.assuntosConcluidos[chave] =
      true;


    localStorage.setItem(

      this.PROGRESSO_KEY,

      JSON.stringify(
        this.assuntosConcluidos
      )

    );

  }


  // ==============================
  // OBTER PROGRESSO DE MATEMÁTICA
  // ==============================

  obterProgressoMatematica(): number {

    let concluidos = 0;


    if (
      this.assuntosConcluidos.algebra
    ) {

      concluidos++;

    }


    if (
      this.assuntosConcluidos.geometria
    ) {

      concluidos++;

    }


    if (
      this.assuntosConcluidos.funcoes
    ) {

      concluidos++;

    }


    return Math.round(

      (concluidos / 3) * 100

    );

  }


}