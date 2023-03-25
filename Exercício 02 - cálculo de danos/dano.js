const atacante = prompt("Qual o nome do personagem atacante?");
const poderDeAtaque = prompt("Qual o seu poder de ataque? ");

const defensor = prompt("Qual o nome do personagem defensor?");
let PontosDeVida = prompt("Quantos pontos de vida ele possui?");
const poderDeDefesa = prompt("Qual o seu poder de defesa?");
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

PontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    " \nPoder de Ataque " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    " \npontos de Vida: " +
    PontosDeVida +
    "\nPoder de Defesa: " +
    poderDeDefesa +
    "\nPossui Escudo: " +
    possuiEscudo
);
