function Filme(nome){
    let _nome = nome;

    function getNome(){
        return _nome;
    }
    function setNome(nome){
        _nome = nome;
    }
}

function MaiorQueDezoito(nome){
    Filme.call(this, nome, 18);
    const info = 'O filme/série é proibido para menores de 18 anos!';
    this.mostrarInfos = function(){
        return console.log(`Nome do filme/série: ${nome} \nClassificação Indicativa: ${info}`);
    }
}

function MaiorQueDezesseis(nome){
    Filme.call(this, nome, 16);
    const info = 'O filme/série é proibido para menores de 16 anos!';
    this.mostrarInfos = function(){
        return console.log(`Nome do filme/série: ${nome} \nClassificação Indicativa: ${info}`);
    }
    
}

function Livre(nome){
    Filme.call(this, nome, 0);
    const info = 'O filme/série é livre para todos os públicos!';
    this.mostrarInfos = function(){
        return console.log(`Nome do filme/série: ${nome} \nClassificação Indicativa: ${info}`);
    }
}

const filme1 = new Livre('Branca de Neve');
filme1.mostrarInfos() ;

const filme2 = new MaiorQueDezesseis("O Regresso");
filme2.mostrarInfos();

const filme3 = new MaiorQueDezoito("Mandy: Sede de Vingança");
filme3.mostrarInfos(); 
