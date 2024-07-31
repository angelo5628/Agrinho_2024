document.addEventListener('DOMContentLoaded', () => {
    const characterImage = document.getElementById('character-image');
    const characterMessage = document.getElementById('character-message');
    const userOptions = document.getElementById('user-options');

    const dialogues = [
        {
            message: "Oi, cumpadi! O que cê manda de bom hoje?",
            options: [
                { text: "Queria tirar algumas dúvidas, cê pode me dar uma mão?", next: 1 }
            ]
        },
        {
            message: "Uai, claro! O que cê quer saber?", /* começa aq, 1,2,3... */
            options: [
                { text: "Como é a vida aqui no campo?", next: 2 },
                { text: "Qual é o seu ganha pão?", next: 3 },
                { text: "Você se mudaria para a cidade se tivesse a oportunidade?", next: 4 },
                { text: "Quais são as dificuldades do dia a dia?", next: 5 } 
            ]
        },
        {
            message: "Ah, a vida aqui no campo é mansa e arretada ao mesmo tempo, sabe? Acordo cedinho com o cantar do galo, o sol nascendo e aquele cheiro de terra molhada, é uma beleza.",
            options: [
                { text: "Entendi!", next: 6 }
            ]
        },
        {
            message: "Meu ganha pão vem da roça, eu planto de tudo um pouco: milho, feijão, mandioca... Também tenho umas vaquinhas pra tirar leite e umas galinhas pra garantir o ovo fresco todo dia. É um trabalho duro, mas muito gratificante.",
            options: [
                { text: "Entendi!", next: 6 }
            ]
        },
        {
            message: "Mudar pra cidade? Não sei não, viu. A cidade tem suas vantagens, mas eu gosto dessa tranquilidade daqui, do silêncio, do céu estrelado à noite. Na cidade é tudo muito corrido, muita gente, muito barulho... Acho que eu ia sentir muita falta dessa paz.",
            options: [
                {text: "Entendi!", next: 6}
            ]
        },
        {
            message: "As dificuldades? Ah, tem dias que o bicho pega. Quando a seca vem, é um sufoco danado pra manter a plantação viva. E quando chove demais, o problema é outro, que aí vem a enchente. Sem falar que o acesso à saúde e à educação aqui é mais complicado. Tem que ir até a cidade pra resolver muita coisa, e isso toma tempo e dinheiro. Mas a gente vai levando, com fé e perseverança.",
            options: [
                { text: "Entendi!", next: 6 }
            ]
        },
        {
            message: "Enfim, eu tava me arrumando pra levar as verdura la pra cidade!, quer ir junto comigo?",
            options: [
                { text: "Claro! Mas em, eu ainda tenho algumas perguntas...", next: 7 },
                { text: "Eu ainda preciso ver outras coisas...", next: 1 }
            ]
        },
        {
            message: "Claro! Pode perguntar o que quiser fio!",
            options: [
                { text: "Como é a viagem até a cidade?", next: 8 },
                { text: "Você gosta dessa vida?", next: 9 }
            ]
        },
        {
            message: "Ah, a viagem até a cidade é uma aventura por si só. Saio cedinho, antes do sol nascer, pra pegar a estrada de terra com minha caminhonete. Tem dias que a estrada tá boa, mas quando chove fica um barro danado, aí o bicho pega. Mas faz parte, né? A gente vai enfrentando os percalços com coragem.",
            options: [
                { text: "Entendi!" },
                { text: "Entendo, posso te perguntar outra coisa?", next: 7 }
            ]
        },
        {
            message: "Eu gosto demais dessa vida, viu? Tem seu cansaço, é verdade, mas também tem uma satisfação danada quando vejo o fruto do meu trabalho. Colher o que plantei, cuidar dos animais, sentir o cheiro da natureza... É uma conexão que só quem vive no campo entende. Cada ida à cidade é uma oportunidade de ver o progresso, mas também de valorizar ainda mais a paz do meu cantinho.",
            options: [
                { text: "Entendi!" },
                { text: "Entendo, posso te perguntar outra coisa?", next: 7 }
            ]
        }
    ];

    let currentDialogueIndex = 0;

    function displayDialogue(index) {
        const dialogue = dialogues[index];
        characterMessage.textContent = dialogue.message;
        userOptions.innerHTML = '';
        characterMessage.style.display = 'block';
        userOptions.style.display = 'block';
        dialogue.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text;
            button.addEventListener('click', () => {
                displayDialogue(option.next);
            });
            userOptions.appendChild(button);
        });
    }

    characterImage.addEventListener('click', () => {
        displayDialogue(currentDialogueIndex);
    });
});
