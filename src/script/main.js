let numeromax = parseInt('10');
let numeroaleatorio = Math.random()*numeromax;
numeroaleatorio = Math.round(numeroaleatorio);
if(numeroaleatorio == 0){
    numeroaleatorio = 1;
}
console.log(numeroaleatorio);