document.addEventListener('DOMContentLoaded', () => {
    const characterImage = document.getElementById('character-image');
    const characterDialogue = document.getElementById('character-dialogue');
    const characterMessage = document.getElementById('character-message');
    const userOptions = document.getElementById('user-options');

    const dialogues = [
        {
            message: "...aqui tem umas cenouras, tomates e- Ah! olha ocê ai! Tava terminando de negociar as verdura com o rapaz aqui!",
            options: [
                { text: "Que legal! Mas em, agora que a gente tá aqui, eu ainda to curioso sobre algumas coisas...", next: 1 }
            ]
        },
        {
            message: "Tranquilo! Pode perguntar o que ocê quiser!", /* começa aq, 1,2,3... */
            options: [
                { text: "Na cidade existem muitas oportunidades, qual a sua opinião sobre isso?", next: 2 },
                { text: "Você acha que você encontraria uma qualidade de vida melhor aqui, com mais oportunidades? Eu falo no sentido de ganhar dinheiro.", next: 3 },
                { text: "Por ser um negócio pequeno, você tem competição com outras empresas de verduras na hora de vender o seu produto ao mercado?", next: 6 },
                { text: "Eu fui com você na viagem, e é bem longo o caminho... Como que você faz se ocorrer alguma emergência médica? ", next: 10 } 
            ]
        },
        {
            message: "Tem muitas mesmo, tem emprego, estudo, acesso a saúde, tudo ali pertinho. Mas eu penso assim, a gente tem que encontrar o que faz bem pro coração! Pra mim, a felicidade tá no campo, na simplicidade, no trabalho honesto. A cidade tem seu valor, mas cada um tem que achar seu lugar no mundo, e o meu é lá, plantando e colhendo com fé e suor.",
            options: [
                { text: "Entendi!", next: 17 }
            ]
        },
        {
            message: "Olha, eu acho que a cidade tem sim mais oportunidades de ganhar dinheiro, não vou negar. Tem mais mercado, mais gente, mais chance de negócio. Mas qualidade de vida não é só dinheiro, sabe? Lá no campo, a gente tem uma vida simples, e uma paz que não se compra!",
            options: [
                { text: "...", next: 4 }
            ]
        },
        {
            message: "Na cidade, dá pra ganhar mais, mas também se gasta mais. O custo de vida é alto, tem aluguel, transporte, tudo é mais caro. No campo, a gente vive do que planta, tem o leite da vaca, o ovo da galinha, a gente troca com os vizinhos, tem uma vida mais comunitária. Dinheiro é importante, claro, mas eu penso que a verdadeira riqueza é viver bem, com saúde, alegria e sossego!",
            options: [
                {text: "...", next: 5}
            ]
        },
        {
            message: "Se você quer experimentar essa vida simples e cheia de desafios do campo, vai ver que tem seu valor. E quem sabe, um dia, até encontra um equilíbrio entre as oportunidades da cidade e a tranquilidade do campo. Cada um tem que achar seu caminho e o que faz sentido pro coração!",
            options: [
                { text: "Entendi!", next: 17 }
            ]
        },
        {   /* 6 */
            message: "Ah, com certeza tem competição, sim. A gente compete com outras pequenas fazendas e também com as grandes empresas que produzem em escala maior. Mas sabe como é, né? No final das contas, cada um tem seu espaço.",
            options: [
                { text: "...", next: 7 }
            ]
        },
        {
            message: "O que a gente tenta fazer é oferecer um produto de qualidade, fresquinho, direto da roça. Tem muita gente na cidade que valoriza isso, que quer saber de onde vem a comida, que gosta de comprar do pequeno produtor.",
            options: [
                { text: "...", next: 8 }
            ]
        },
        {
            message: "A competição é dura, mas a gente aprende a ser criativo. Às vezes, faço parceria com outros pequenos produtores pra conseguir melhores preços nas verduras, ou pra dividir o custo do transporte até a cidade. Também participo de feiras livres, onde o contato é direto com o povo, e isso ajuda a criar uma base de gente que gosta do nosso produto!",
            options: [
                { text: "...", next: 9 }
            ]
        },
        {
            message: "No fim das contas, a gente vai se adaptando, buscando novas formas de vender e mostrando que nosso produto tem um diferencial. É um desafio, mas faz parte do negócio. A luta é grande, mas a gente segue com coragem e determinação!",
            options: [
                { text: "Entendi!", next: 17 }
            ]
        },
        {
            message: "Ah, pois é, o caminho é longo e cheio de coisa ruim. Emergência médica no campo é sempre uma preocupação, mas a gente tem que se virar! Eu sempre levo um kit básico de primeiros socorros na caminhonete, com coisas simples, mas que podem fazer a diferença, como curativos, remédios pra dor, e até um antialérgico.",
            options: [
                { text: "...", next: 11 }
            ]
        },
        {
            message: "Se a coisa for mais séria, a gente conta com os vizinhos, no campo, um ajuda o outro. Já teve vez que precisei levar o Seu Odair pro hospital e a gente se organizou na pressa, um pegou a caminhonete, outro avisou a família, e nois foi rapidão!",
            options: [
                { text: "...", next: 12 }
            ]
        },
        {
            message: "Mas quando a coisa é feia mesmo, a gente vai direto pra cidade! Tem posto de saúde mais perto, mas pra casos mais complicados, o hospital da cidade é o destino. Ah é! e outra coisa que nois faz é se prevenir! Vacinação em dia, cuidado com a alimentação, evitar situações de risco, a saúde no campo é muito sobre prevenção, porque nois sabe que o acesso é mais difícil!",
            options: [
                { text: "...", next: 13 }
            ]
        },
        {
            message: "E claro, tem a fé. A gente reza pra Deus proteger e cuidar. A vida no campo tem seus desafios, mas a gente segue com fé, coragem e a ajuda de quem tá por perto.",
            options: [
                { text: "Mas você não tem vontade de se mudar para a cidade para prevenir coisas assim?", next: 14 },
                { text: "Entendi!", next: 17 }
            ]
        },
        {
            message: "Ah, a vontade às vezes bate, não vou mentir, principalmente quando penso na facilidade de ter um hospital por perto, escola pros filhos, essas coisas. Mas, ao mesmo tempo, penso na vida tranquila que a gente tem aqui, no campo.",
            options: [
                { text: "...", next: 15 }
            ]
        },
        {
            message: "Na cidade, tem muita coisa boa, mas também tem o corre-corre, o barulho, a poluição, é ruim demais! No campo, a gente tem o ar puro, a paz, o espaço. As crianças podem correr por aí, brincar, aprender a cuidar dos animais e das plantas também! Isso não tem preço!",
            options: [
                { text: "...", next: 16 }
            ]
        },
        {
            message: "A verdade é que mudar pra cidade tem seus prós e contras. Aqui, a gente teria mais acesso a serviços e oportunidades, mas perderia a qualidade de vida do campo, e, além disso, a gente já tem uma rotina, uma comunidade lá né. A gente se ajuda, e isso cria um laço forte! Então, apesar das dificuldades, prefiro ficar por lá e continuar enfrentando os desafios com a nossa força e a fé no coração!",
            options: [
                { text: "Entendi!", next: 17 }
            ]
        },
        {
            message: "Bom, só vou terminar de negociar com o rapaz aqui e logo logo já tô voltando viu! Já viu tudo que precisava ver?",
            options: [
                { text: "Já vi sim, obrigado por tudo!", next: 18 },
                { text: "Eu ainda tenho que fazer algumas coisinhas...", next: 1}
            ]
        },
        {
            message: "Que isso, eu que agradeço! Normalmente eu vou sozinho, então uma companhia é sempre bem-vinda hehehe!",
            options: [
                { text: "(voltar às perguntas)", next: 1 }
            ]
        }
    ];

    let currentDialogueIndex = 0;

    function displayDialogue(index) {
        const dialogue = dialogues[index];
        characterMessage.textContent = dialogue.message;
        userOptions.innerHTML = '';
        characterDialogue.style.display = 'flex';
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
