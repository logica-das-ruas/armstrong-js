validadorArmstrong = (numero) => {
 
    let array = numero.toString().split("")
    
    array = array.map((valor, index, array) => {

        return Math.pow(Number(valor), 3);
    
    }).reduce((total , valor , index , array) => {
        return total += Number(valor)
    });
    
    return (array === numero )
    ? console.log('É Armstrong')
    : console.log('Não é Armstrong')
     
    
    }

validadorArmstrong(1)
validadorArmstrong(14)
validadorArmstrong(153)
validadorArmstrong(350)