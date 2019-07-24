a = 10;

nome = 'Andrea';
cognome = 'Colleoni';
citta = 'Bergamo';

mario = {
    nome: 'Mario',
    cognome: 'Rossi',
    citta: 'Milano',
    nomeCompleto: function() {
        return this.nome + ' ' + this.cognome;
    }
}

luigi = {
    nome: 'Luigi',
    indirizzo: {
        citta: 'Milano',
        cap: '20100',
        civico: '10/a',
        via: 'Dante'
    }
}


console.log(mario);
console.log(luigi);
console.log(luigi.indirizzo.via);
console.log(mario.nomeCompleto());
// console.log(persona.cognome);