/* Permite usar "_" para separar os números facilitando a leitura"  */
let anteBilhao = 1000000000; // Continua sendo um Bilhão, mas tá difícil de ler.
let agoraBilhao = 1_000_000_000; // "Dá bilhão?" - Gomes, Ciro. - Fica mais fácil de ler.

/* Ferramenta para "Cadeia de Caracteres" -> .replaceAll() (Strings) */
let strExemplo1 =
  "Javascript é alguma coisa, provavelmente Javascript é uma Linguagem de programação. Javascript não tem nada a ver com Java";
console.log(strExemplo1.replace("Javascript", "Typescript")); // Remove apenas a primeira ocurrência

/* Se a gente quissésse remover mais de uma, far-se-ia necessário o uso de Regex */
console.log(strExemplo1.replace(/Javascript/g, "Typescript")); // Remove todas as ocorrências.

/* Facilitando a vida -> já que nem eu sei bem regex? -> foi trazido o replaceAll */
console.log(strExemplo1.replaceAll("Javascript", "Typescript"));

/* Se Nulo assinala, senão, deixa como tá: "Nullish Coalescing Assignment Operator" */
let something = 1;
let nothing = null;
nothing ??= something; // Tá nulo, recebe 1.
console.log(something === something); // Retona true. =
