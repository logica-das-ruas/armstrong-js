validadorArmstrong = (numero) => {
 
    let array = numero.toString().split("")
    array = array.map((valor, index, array) => {

        return Math.pow(Number(valor), 3);
    }).reduce((total , valor , index , array) => {

        return total += Number(valor)
    })

    return (array === numero ) ? console.log('Eh Armstrong') : console.log('Não eh Armstrong')
}
validadorArmstrong(153)