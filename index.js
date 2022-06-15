const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const propsArr = [];

console.log('ORGANIZADOR 🔝 EM ORDEM ALFABÉTICA ');
 
const propsOrder = function () {
    rl.question('Digite uma propriedade CSS para compor uma lista ordenada ou SAIR para encerrar: ', function (resp) {
        if (resp.toUpperCase() == 'SAIR') {
            return rl.close(); 
        }
        else if (resp != 'SAIR') {
            propsArr.push(resp);
            propsArr.sort();
            console.log(`Suas propriedades em ordem alfabetica são ⬇`);
            for (let i = 0; i < propsArr.length; i++){
                console.log(propsArr[i]);
            }
            
        }
        propsOrder(); 
    });
};

propsOrder();
