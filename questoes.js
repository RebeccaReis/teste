//1)
let indice = 13;
undefined
let soma = 0;
undefined
let k = 0;

for(k;k<indice;){ k = k+1; soma = soma+k;}
//R: soma vale 91


//2)
function GerarFibonacci(number){
var fibonacci = [];
var resposta;
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < number; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
    if(fibonacci.indexOf(number) > -1){
        return "esse numero pertence a sequencia de fibonacci";
    }else{
        return "esse numero não pertence a sequencia de fibonacci";
    }

}




//3) Descubra a lógica e complete o próximo elemento:
//a) 1, 3, 5, 7, 9 - de 2 em 2
//b) 2, 4, 8, 16, 32, 64, 128 - o numero vezes 2
//c) 0, 1, 4, 9, 16, 25, 36, 49 - quadrados 
//d) 4, 16, 36, 64,100 - quadrados de numeros pares
//e)e) 1, 1, 2, 3, 5, 8, 13 - fibonacci
//f) 2,10, 12, 16, 17, 18, 19,200 - todos com letra d 

//4)eles estão na mesma distância
// x1 = v1.t
//x2  tem os 100km então x2 = 100-v2.t , temos a viagem sem interferencias que da 1,25h ,mas levando em consideração temos o pedagio que almenta pra 1,42h
//aplicando a formula ficamos com a mesma distâcia para os dois.

//6
function myReverse(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}
