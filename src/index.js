// TODO 1:
// Implemente a função calculateImc para que ela receba os valores
// de Peso e Altura e retorne o valor do IMC e a descrição do IMC .

// Exemplo de retorno:  { imc: 23, description: "Sobrepeso" }
// Você pode usar o array de opções imcResultOptions.js para descrever o retorno.

// TODO 2:
// Retornar o erro: "weight and height are required" se não receber os valores de peso e altura.

// TODO 3:
// Retornar o erro: "weight and height cannot be negative" se os valores de peso ou altura forem negativos.

// TODO 4:
// Retornar o erro:  "weight and/or height are not numbers" se os valores de peso ou altura não forem números.

const options = require("./imcResultOptions");

  function calculateImc(weight, height) {
    if(! weight || ! height){
      throw new Error("weight and height are required")
    }
    if(weight < 0 || height < 0){
      throw new Error("weight and height cannot be negative")
    }
    if(isNaN(weight) || isNaN(height)){
      throw new Error("weight and/or height are not numbers")
    }

    const imc = parseInt((weight / ((height * height)/10000)).toFixed(1));
    const result = options.find(option => imc >= option.min && imc <= option.max);
    const descrip = result.description

      return {
        imc : imc,
        description : descrip
      }
}

  const result = calculateImc (70 , 175)
  console.log(result)

module.exports = calculateImc;