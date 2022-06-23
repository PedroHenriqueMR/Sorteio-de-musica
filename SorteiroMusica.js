let musica = [
    {nome: "Toda Forma de Amor"},
    {nome: "Love Yourself"},
    {nome: "Photograph"},
    {nome: "Exagerado"},
    {nome: "O Que Quiser Fazer"},
    {nome: "Sozinho"},
    {nome: "Blues da Piedade"},
    {nome: "Mirrors"},
    {nome: "Eduardo e Mônica"},
    {nome: "See You Again"},
    {nome: "Shape of You"},
    {nome: "Trumpets"},
    {nome: "Give My Love"}
];

const numero = Math.floor(Math.random() * musica.length);
let dados = numero
let retorno = ""

if(dados == 0){
    retorno = ("Cantor: Lulu Santos \nAno de Lançamento: 1988");
}else if(dados == 1){
    retorno = ("Cantor: Justin Bieber \nAno de Lançamento: 2015");
}else if(dados == 2){
    retorno = ("Cantor: Ed Sheeran \nAno de Lançamento: 2016");
}else if(dados == 3){
    retorno = ("Cantor: Cazuza \nAno de Lançamento: 1985");
}else if(dados == 4){
    retorno = ("Cantor: Luccas Carlos \nAno de Lançamento: 2019");
}else if(dados == 5){
    retorno = ("Cantor: Caetano Veloso \nAno de Lançamento: 1998");
}else if(dados == 6){
    retorno = ("Cantor: Cazuza \nAno de Lançamento: 1988");
}else if(dados == 7){
    retorno = ("Cantor: Justin Timberlake \nAno de Lançamento: 2013");
}else if(dados == 8){
    retorno = ("Cantor: Renato Russo \nAno de Lançamento: 1986");
}else if(dados == 9){
    retorno = ("Cantor: Wiz Khalifa ft. Charlie Puth \nAno de Lançamento: 2015");
}else if(dados == 10){
    retorno = ("Cantor: Ed Sheeran \nAno de Lançamento: 2017");
}else if(dados == 11){
    retorno = ("Cantor: Jason Derulo \nAno de Lançamento: 2013");
}else if(dados == 12){
    retorno = ("Cantor: Ed Sheeran \nAno de Lançamento: 2011");
};

console.log(`Musica: ${musica[numero].nome}`);
console.log(retorno)