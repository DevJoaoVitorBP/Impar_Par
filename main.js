const {gets, print} = require('./auxiliar');

const valores = [];

for (let i = 0; i < 5; i++) {
    const valores_ = gets();
    valores.push(valores_);
}

let maiorNumPar = 0;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 == 0) {
        if(maiorNumPar === 0 || valores[i] > maiorNumPar){
            maiorNumPar = valores[i];
        }
    }
}

let maiorNumImpar = 0;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2!= 0) {
        if(maiorNumImpar === 0 || valores[i] > maiorNumImpar){
            maiorNumImpar = valores[i];
        }
    }
}

print(maiorNumPar);

print(maiorNumImpar);