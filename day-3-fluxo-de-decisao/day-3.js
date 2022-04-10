const area = prompt(
  "Olá! Você deseja seguir para área de Front-End ou Back-End? Digite 1 para Front-end ou 2 para Back-end"
);

if (area == 1) {
  prompt("Ótima escolha. Seguindo isso, você deseja aprender React ou Vue?");
} else if (area == 2) {
  prompt(
    "Legal, o back-end é uma ótima escolha. Seguindo isso, você deseja aprender C# ou Java?"
  );
} else {
  window.alert("Número invalido");
}

const fullstackOuEspecialista = prompt(
  "Você gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para ser Fullstack? Digite 1 para especialista ou 2 para fullstack"
);

if (fullstackOuEspecialista == 1) {
  window.alert(
    "Tenho certeza que você se tornará um grande especialista, mas para que isso aconteça, continue estudando"
  );
} else if (fullstackOuEspecialista == 2) {
  window.alert(
    "Tenho certeza que você se tornará um fullstack excelente, mas para que isso aconteça, continue estudando"
  );
} else {
  window.alert("Número invalido");
}

let msg = prompt(
  "Tem mais alguma tecnologia que você gostaria de se especializar? Digite 'ok' em caso positivo."
);
while (msg === "ok") {
  let novaTecnologia = prompt("Qual o nome da tecnologia?");
  alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
  msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."
  );
}
alert(`Continue seguindo em frente!`);
