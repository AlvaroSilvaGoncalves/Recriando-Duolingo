

let perguntas = [
    {
        titulo: 'Gato',
        alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
        correta: 1
    },
    {
        titulo: 'Fire',
        alternativas: ['Fogo', 'Agua', 'Terra', 'Ar'],
        correta: 0
    },
    {
        titulo: 'Bird',
        alternativas: ['Gato', 'Urubu', 'Pombo', 'Passaro'],
        correta: 3
    }
] 

let app = {
    start: function (){
        this.Atualpos = 0;
        this.Totalpontos = 0;
        let alts = document.querySelectorAll('.alternativa');

        alts.forEach((element,index)=> {
            element.addEventListener('click', () =>{
                this.checaResposta(index); 
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },

    mostraquestao: function (q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
    
        //mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },

    Proximaperg: function (){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }
    },

    checaResposta: function (user){
        if(this.qatual.correta == user){
            console.log("Correta");
            this.Totalpontos++;
            this.mostraResposta();
        }
        else {
            console.log("Errada");
            this.mostraResposta();
        }

        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuaçao e: ${this.Totalpontos}`;
    },

    mostraResposta: function(correto) {
        let resultDiv = document.getElementById('result');
        let result = ''
        // formatar como a mensagem sera exibida
        if(correto == true) {
            result =   'Resposta Correta';
        }
        else {
            // obtendo a questao atual
            let pergunta = perguntas[this.Atualpos];

            // obetenha o indice da resposta correta da questao atual
            let cindice = pergunta.correta

            // obetenha o texto da resposta correta da questao atual
            let ctexto = pergunta.alternativas[cindice];
            result = `Incorreto! Resposta Correta: ${ctexto}`;  
        }
        resultDiv.textContent = result;

    }
}

app.start();

