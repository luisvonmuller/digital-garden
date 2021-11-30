let fulano: any = "João";
let ciclado: unknown = "Augusto"

fulano.funcao(); // permite  no transpile/compile time, sobrepassa o TypeSafety.
// Mas causa erro no Run Time.

ciclado.funcao(); // Não permite no transpile/compile time, Assegura o TypeSafety.
// Causaria erro no Run Time.
