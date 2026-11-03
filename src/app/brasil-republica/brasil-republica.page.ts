import { Component } from '@angular/core';

@Component({
  selector: 'app-brasil-republica',
  templateUrl: './brasil-republica.page.html',
  styleUrls: ['./brasil-republica.page.scss'],
  standalone: false,
})
export class BrasilRepublicaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Em que ano ocorreu a Proclamação da República no Brasil?',
      options: [
        '1822',
        '1888',
        '1889',
        '1891',
        '1930'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A Proclamação da República aconteceu em 15 de novembro de 1889, encerrando o período imperial no Brasil.',
      feedbackIncorrect: 'Incorreto! A República foi proclamada em 15 de novembro de 1889, por meio de um movimento liderado pelo marechal Deodoro da Fonseca.'
    },

    {
      question: 'Qual foi uma das principais características da República Velha (1889–1930)?',
      options: [
        'Participação política igualitária de toda a população.',
        'Domínio político das oligarquias rurais e influência dos grandes proprietários.',
        'Governo controlado exclusivamente pelos trabalhadores urbanos.',
        'Ausência de conflitos sociais no campo.',
        'Fim imediato das desigualdades sociais.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A República Velha foi marcada pela influência das oligarquias rurais e dos grandes proprietários de terras.',
      feedbackIncorrect: 'Incorreto! Durante a República Velha, as elites agrárias possuíam grande influência sobre a política brasileira.'
    },

    {
      question: 'O que foi o coronelismo durante a República Velha?',
      options: [
        'Um movimento militar que defendia a industrialização.',
        'Um sistema de influência política dos grandes proprietários rurais sobre a população.',
        'Uma organização criada para defender os direitos dos trabalhadores.',
        'Uma política de distribuição igualitária de terras.',
        'Um movimento pela independência das regiões brasileiras.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O coronelismo envolvia o poder local dos grandes proprietários rurais, que influenciavam eleições e decisões políticas.',
      feedbackIncorrect: 'Incorreto! O coronelismo era baseado na influência dos grandes proprietários rurais sobre a população e a política local.'
    },

    {
      question: 'O que representava a política do café com leite?',
      options: [
        'Uma estratégia de industrialização do Sudeste.',
        'Uma aliança política entre São Paulo e Minas Gerais, marcada pela influência de suas elites.',
        'Um acordo comercial entre Brasil e Argentina.',
        'Uma política de incentivo à produção de leite no Nordeste.',
        'Uma estratégia para acabar com as oligarquias rurais.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A política do café com leite representava a influência das elites de São Paulo e Minas Gerais na política nacional.',
      feedbackIncorrect: 'Incorreto! A expressão está relacionada à influência política das elites de São Paulo, ligado ao café, e Minas Gerais, ligado à pecuária e à produção de leite.'
    },

    {
      question: 'Qual acontecimento marcou o início da Era Vargas, em 1930?',
      options: [
        'A Proclamação da República.',
        'A assinatura da Lei Áurea.',
        'A Revolução de 1930, que levou Getúlio Vargas ao poder.',
        'A criação da Constituição de 1988.',
        'O início da Ditadura Militar.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A Revolução de 1930 encerrou a República Velha e levou Getúlio Vargas ao poder.',
      feedbackIncorrect: 'Incorreto! A Revolução de 1930 foi responsável pela chegada de Getúlio Vargas ao governo brasileiro.'
    },

    {
      question: 'O que caracterizou o Estado Novo, iniciado em 1937?',
      options: [
        'A ampliação da liberdade de imprensa e dos partidos políticos.',
        'Um período de governo autoritário, com censura e concentração de poder.',
        'A implantação de eleições diretas para presidente.',
        'A independência do Brasil em relação a Portugal.',
        'O fim da participação do Estado na economia.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O Estado Novo foi uma ditadura comandada por Getúlio Vargas, marcada pela censura, repressão política e concentração de poder.',
      feedbackIncorrect: 'Incorreto! O Estado Novo foi um regime autoritário que restringiu direitos políticos e liberdades individuais.'
    },

    {
      question: 'Qual foi uma importante mudança trabalhista durante o governo de Getúlio Vargas?',
      options: [
        'A criação da Consolidação das Leis do Trabalho (CLT).',
        'A proibição de qualquer organização de trabalhadores.',
        'O fim de todos os direitos trabalhistas.',
        'A criação do salário exclusivamente agrícola.',
        'A substituição do trabalho urbano pelo trabalho escravizado.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A CLT foi criada em 1943 e reuniu diversas normas relacionadas aos direitos dos trabalhadores.',
      feedbackIncorrect: 'Incorreto! A Consolidação das Leis do Trabalho (CLT), criada em 1943, foi um dos principais marcos trabalhistas da Era Vargas.'
    },

    {
      question: 'Em que ano começou a Ditadura Militar no Brasil?',
      options: [
        '1945',
        '1954',
        '1961',
        '1964',
        '1985'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A Ditadura Militar começou em 1964, após o golpe que retirou João Goulart da Presidência.',
      feedbackIncorrect: 'Incorreto! O golpe de 1964 iniciou um período de regime militar que durou até 1985.'
    },

    {
      question: 'O que foi o movimento Diretas Já, ocorrido no início da década de 1980?',
      options: [
        'Uma campanha pela volta da monarquia.',
        'Um movimento que defendia eleições diretas para presidente da República.',
        'Uma revolta contra a industrialização brasileira.',
        'Uma campanha pela implantação de um novo regime militar.',
        'Um movimento pela separação dos estados brasileiros.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O movimento Diretas Já reuniu diversos setores da sociedade em defesa de eleições diretas para presidente.',
      feedbackIncorrect: 'Incorreto! As Diretas Já foram uma grande mobilização popular que defendia a realização de eleições diretas para presidente.'
    },

    {
      question: 'Qual foi a importância da Constituição Federal de 1988 para a história brasileira?',
      options: [
        'Restabeleceu a monarquia no país.',
        'Concentrou todos os poderes nas mãos do presidente.',
        'Consolidou direitos e garantias fundamentais no processo de redemocratização.',
        'Proibiu a participação popular nas decisões políticas.',
        'Instituiu novamente o regime militar.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A Constituição de 1988 ampliou direitos e garantias fundamentais e ficou conhecida como Constituição Cidadã.',
      feedbackIncorrect: 'Incorreto! A Constituição de 1988 foi um marco da redemocratização, garantindo direitos civis, políticos e sociais.'
    }

  ];


  answer(option: number) {

    if (option === this.quiz[this.perguntaAtual].answer) {

      this.score++;
      this.correct = true;

    } else {

      this.correct = false;

    }

    this.showAnswer = true;
  }


  nextQuestion() {

    this.perguntaAtual++;
    this.showAnswer = false;

  }

}
