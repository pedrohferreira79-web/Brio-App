import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamificationService {

  // ==============================
  // CHAVES DO LOCALSTORAGE
  // ==============================

  private readonly XP_KEY = 'xp_materias';
  private readonly STATS_KEY = 'estatisticas_gamificacao';
  private readonly PROGRESSO_KEY = 'progresso_materias';
  private readonly PROGRESSO_ANTIGO_KEY = 'progresso_matematica';

  // ==============================
  // XP POR MATÉRIA
  // ==============================

  private xpMaterias: Record<string, number> = {
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
  // PROGRESSO DAS MATÉRIAS
  // ==============================

  private progresso: Record<string, Record<string, boolean>> = {};

  // ==============================
  // ASSUNTOS CADASTRADOS
  // ==============================

  private assuntosConfigurados: Record<string, string[]> = {
    matematica: [
      'algebra',
      'geometria',
      'funcoes'
    ]
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
    this.carregarProgresso();
  }

  // ==============================
  // CARREGAR DADOS
  // ==============================

  private carregarDados() {

    // XP
    const xpSalvo = localStorage.getItem(this.XP_KEY);

    if (xpSalvo) {
      this.xpMaterias = {
        ...this.xpMaterias,
        ...JSON.parse(xpSalvo)
      };
    }

    // ESTATÍSTICAS
    const estatisticasSalvas =
      localStorage.getItem(this.STATS_KEY);

    if (estatisticasSalvas) {
      this.estatisticas = {
        ...this.estatisticas,
        ...JSON.parse(estatisticasSalvas)
      };
    }
  }

  // ==============================
  // CARREGAR PROGRESSO
  // ==============================

  private carregarProgresso() {

    const progressoNovo =
      localStorage.getItem(this.PROGRESSO_KEY);

    const progressoAntigo =
      localStorage.getItem(this.PROGRESSO_ANTIGO_KEY);

    if (progressoNovo) {

      this.progresso = JSON.parse(progressoNovo);

    } else if (progressoAntigo) {

      // Migra o progresso antigo de Matemática.

      this.progresso['matematica'] =
        JSON.parse(progressoAntigo);

      this.salvarProgresso();
    }

    // Garante que Matemática tenha seus três assuntos.

    this.assuntosConfigurados['matematica'].forEach(assunto => {

      this.progresso['matematica'] ??= {};

      this.progresso['matematica'][assunto] ??= false;

    });
  }

  // ==============================
  // SALVAR XP
  // ==============================

  private salvarXP() {

    localStorage.setItem(
      this.XP_KEY,
      JSON.stringify(this.xpMaterias)
    );

  }

  // ==============================
  // SALVAR ESTATÍSTICAS
  // ==============================

  private salvarEstatisticas() {

    localStorage.setItem(
      this.STATS_KEY,
      JSON.stringify(this.estatisticas)
    );

  }

  // ==============================
  // SALVAR PROGRESSO
  // ==============================

  private salvarProgresso() {

    localStorage.setItem(
      this.PROGRESSO_KEY,
      JSON.stringify(this.progresso)
    );

  }

  // ==============================
  // ADICIONAR XP
  // ==============================

  adicionarXP(materia: string, quantidade: number) {

    if (
      !materia ||
      !Number.isFinite(quantidade) ||
      quantidade <= 0
    ) {
      return;
    }

    // Cadastra automaticamente uma matéria nova.

    this.xpMaterias[materia] ??= 0;

    this.xpMaterias[materia] += quantidade;

    this.salvarXP();

  }

  // ==============================
  // OBTER XP DA MATÉRIA
  // ==============================

  obterXP(materia: string): number {

    return this.xpMaterias[materia] ?? 0;

  }

  // ==============================
  // OBTER XP TOTAL
  // ==============================

  obterXPTotal(): number {

    return Object.values(this.xpMaterias).reduce(
      (total, xp) => total + xp,
      0
    );

  }

  // ==============================
  // ADICIONAR EXERCÍCIO
  // ==============================

  adicionarExercicio() {

    this.estatisticas.exercicios++;

    this.salvarEstatisticas();

  }

  // ==============================
  // OBTER EXERCÍCIOS
  // ==============================

  obterExercicios(): number {

    return this.estatisticas.exercicios;

  }

  // ==============================
  // CONFIGURAR ASSUNTOS
  // ==============================

  /*
   * Exemplo:
   *
   * definirAssuntos('portugues', [
   *   'gramatica',
   *   'literatura',
   *   'interpretacao'
   * ]);
   */

  definirAssuntos(materia: string, assuntos: string[]) {

    if (
      !materia ||
      !Array.isArray(assuntos)
    ) {
      return;
    }

    this.assuntosConfigurados[materia] = [
      ...new Set(assuntos)
    ];

    this.progresso[materia] ??= {};

    this.assuntosConfigurados[materia].forEach(assunto => {

      this.progresso[materia][assunto] ??= false;

    });

    this.salvarProgresso();

  }

  // ==============================
  // OBTER ASSUNTOS
  // ==============================

  obterAssuntos(materia: string): string[] {

    return this.assuntosConfigurados[materia] ?? [];

  }

  // ==============================
  // CONCLUIR ASSUNTO
  // ==============================

  /*
   * Novo formato:
   *
   * concluirAssunto('portugues', 'gramatica');
   *
   * Formato antigo de Matemática:
   *
   * concluirAssunto('geometria');
   */

  concluirAssunto(materia: string, assunto?: string) {

    // Compatibilidade com as páginas antigas de Matemática.

    if (!assunto) {

      const assuntosMatematica = [
        'algebra',
        'geometria',
        'funcoes'
      ];

      if (assuntosMatematica.includes(materia)) {

        assunto = materia;
        materia = 'matematica';

      } else {

        return;

      }
    }

    this.progresso[materia] ??= {};

    this.progresso[materia][assunto] = true;

    // Cadastra automaticamente assuntos novos.

    if (!this.assuntosConfigurados[materia]) {

      this.assuntosConfigurados[materia] = [];

    }

    if (
      !this.assuntosConfigurados[materia].includes(assunto)
    ) {

      this.assuntosConfigurados[materia].push(assunto);

    }

    this.salvarProgresso();

  }

  // ==============================
  // VERIFICAR ASSUNTO CONCLUÍDO
  // ==============================

  assuntoConcluido(
    materia: string,
    assunto: string
  ): boolean {

    return this.progresso[materia]?.[assunto] ?? false;

  }

  // ==============================
  // OBTER PROGRESSO DA MATÉRIA
  // ==============================

  obterProgresso(materia: string): number {

    const assuntos =
      this.assuntosConfigurados[materia] ?? [];

    if (assuntos.length === 0) {
      return 0;
    }

    const concluidos = assuntos.filter(
      assunto =>
        this.progresso[materia]?.[assunto] === true
    ).length;

    return Math.round(
      (concluidos / assuntos.length) * 100
    );

  }

  // ==============================
  // PROGRESSO DE TODAS AS MATÉRIAS
  // ==============================

  obterProgressoTodasMaterias(): Record<string, number> {

    const resultado: Record<string, number> = {};

    Object.keys(this.assuntosConfigurados).forEach(materia => {

      resultado[materia] = this.obterProgresso(materia);

    });

    return resultado;

  }

  // ==============================
  // COMPATIBILIDADE COM MATEMÁTICA
  // ==============================

  obterProgressoMatematica(): number {

    return this.obterProgresso('matematica');

  }

  // ==============================
  // DATA ATUAL
  // ==============================

  private obterDataAtual(): string {

    const agora = new Date();

    const ano = agora.getFullYear();

    const mes = String(
      agora.getMonth() + 1
    ).padStart(2, '0');

    const dia = String(
      agora.getDate()
    ).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;

  }

  // ==============================
  // REGISTRAR DIA DE ESTUDO
  // ==============================

  private registrarDiaEstudo() {

    const hoje = this.obterDataAtual();

    const ultimoDia =
      localStorage.getItem('ultimo_dia_estudo');

    if (ultimoDia !== hoje) {

      this.estatisticas.dias++;

      localStorage.setItem(
        'ultimo_dia_estudo',
        hoje
      );

      this.salvarEstatisticas();

    }

  }

  // ==============================
  // OBTER DIAS
  // ==============================

  obterDias(): number {

    return this.estatisticas.dias;

  }

  // ==============================
  // INICIAR MONITORAMENTO
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

    if (!document.hidden) {

      this.iniciarContagem();

    }

  }

  // ==============================
  // VERIFICAR VISIBILIDADE
  // ==============================

  private verificarVisibilidade = () => {

    if (document.hidden) {

      this.pararContagem();

    } else {

      this.iniciarContagem();

    }

  };

  // ==============================
  // INICIAR CONTAGEM
  // ==============================

  private iniciarContagem() {

    if (this.intervalo !== null) {
      return;
    }

    this.intervalo = setInterval(() => {

      this.segundosSessao++;

      if (this.segundosSessao >= 60) {

        this.segundosSessao = 0;

        this.estatisticas.tempoMinutos++;

        this.salvarEstatisticas();

        this.registrarDiaEstudo();

      }

    }, 1000);

  }

  // ==============================
  // PARAR CONTAGEM
  // ==============================

  private pararContagem() {

    if (this.intervalo !== null) {

      clearInterval(this.intervalo);

      this.intervalo = null;

    }

  }

  // ==============================
  // OBTER TEMPO DE ESTUDO
  // ==============================

  obterTempoMinutos(): number {

    return this.estatisticas.tempoMinutos;

  }

  // ==============================
  // CONQUISTAS
  // ==============================

  obterConquistas(): number {

    return this.estatisticas.conquistas;

  }

  // ==============================
  // BRIO COINS
  // ==============================

  obterBrioCoins(): number {

    return this.estatisticas.brioCoins;

  }

}