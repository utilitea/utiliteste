const questions = [
    "Eu prefiro fazer as coisas com os outros, em vez de sozinho.",
    "Eu prefiro fazer as coisas da mesma maneira sempre.",
    "Se eu tentar imaginar algo, acho que é muito fácil criar uma imagem em minha mente.",
    "Eu frequentemente fico tão fortemente concentrado em uma coisa que eu ignoro outras coisas.",
    "Costumo observar pequenos sons quando os outros não os percebem.",
    "Eu costumo observar placas de carros, números ou sequências similares de informações.",
    "Outras pessoas frequentemente me corrigem, dizendo que o que falo é falta de educação, mesmo quando eu acho que é educado.",
    "Quando eu estou lendo uma história, eu posso facilmente imaginar o que os personagens estão fazendo.",
    "Sou fascinado por datas.",
    "Em um grupo social, eu posso facilmente manter conversação com diferentes pessoas.",
    "Acho fácil conviver socialmente.",
    "Eu percebo detalhes que outros não percebem tão facilmente.",
    "Prefiro ir a uma biblioteca do que uma festa.",
    "Acho inventar histórias algo muito fácil.",
    "Sou atraído mais fortemente para as pessoas do que para coisas.",
    "Quando tenho interesse muito forte num determinado assunto, fico muito chateado se não consigo levar adiante meus pensamentos sobre este assunto.",
    "Eu gosto de fofoca social.",
    "Quando eu falo, nem sempre é fácil para os outros entenderem claramente o que quero dizer.",
    "Sou fascinado por números.",
    "Quando eu estou lendo uma história, acho difícil entender as intenções dos personagens.",
    "Eu particularmente não gosto de ler ficção.",
    "Acho que é difícil fazer novos amigos.",
    "Percebo padrões nas coisas o tempo todo.",
    "Prefiro ir ao teatro do que um museu.",
    "Eu não me chateio se minha rotina diária é perturbada.",
    "Eu frequentemente tenho dificuldade em manter uma conversa.",
    "Consigo facilmente \"ler nas entrelinhas\" quando alguém está falando comigo.",
    "Eu costumo me concentrar mais numa imagem por inteiro do que nos pequenos detalhes.",
    "Eu não sou muito bom em lembrar números de telefone.",
    "Eu não costumo perceber pequenas mudanças em uma situação ou na aparência de uma pessoa.",
    "Eu percebo se alguém que está me ouvindo está ficando entediado.",
    "Acho fácil fazer mais de uma coisa ao mesmo tempo.",
    "Quando eu falo ao telefone, tenho dificuldade de saber quando é a minha vez de falar.",
    "Eu gosto de fazer as coisas de forma espontânea.",
    "Muitas vezes sou o último a entender uma piada.",
    "Consigo perceber o que uma pessoa está pensando ou sentindo só de olhar para seu rosto.",
    "Se houver uma interrupção, eu posso voltar para o que eu estava fazendo muito rapidamente.",
    "Eu sou bom em conversa social.",
    "Muitas vezes as pessoas me dizem que eu continuo falando repetidamente sobre a mesma coisa.",
    "Quando eu era jovem, eu gostava de jogar jogos de imaginação com outras crianças.",
    "Eu gosto de coletar informações sobre categorias de coisas (por exemplo, os tipos de carros, pássaros, trens, plantas).",
    "Para mim, é muito difícil imaginar-me sendo outra pessoa.",
    "Eu gosto de planejar cuidadosamente qualquer atividade que eu irei participar.",
    "Gosto de ocasiões (reuniões) sociais.",
    "Acho difícil detectar as reais intenções das pessoas.",
    "Situações novas me deixam ansioso.",
    "Eu gosto de conhecer novas pessoas.",
    "Eu sou um bom diplomata.",
    "Eu não sou muito bom em lembrar da data de nascimento das pessoas.",
    "Gosto de brincar de jogos imaginários com as crianças."
];

const scores = [
    [0, 0, 1, 1], [1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0], [1, 1, 0, 0],
    [1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0], [0, 0, 1, 1],
    [0, 0, 1, 1], [1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1],
    [1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0],
    [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1],
    [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1],
    [0, 0, 1, 1], [0, 0, 1, 1], [1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0],
    [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [1, 1, 0, 0], [0, 0, 1, 1],
    [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0],
    [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1]
];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("questionnaire");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.id = `question-${index + 1}`;

        const questionLabel = document.createElement("p");
        questionLabel.textContent = `${index + 1}. ${question}`;
        questionDiv.appendChild(questionLabel);

        const options = ["Concordo definitivamente", "Concordo um pouco", "Discordo um pouco", "Discordo definitivamente"];
        options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.textContent = option;

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `q${index + 1}`;
            radio.value = optionIndex;

            label.prepend(radio);
            questionDiv.appendChild(label);
        });

        form.appendChild(questionDiv);
    });

    document.getElementById("resultButton").addEventListener("click", () => {
        let totalScore = 0;
        let incomplete = false;

        questions.forEach((question, index) => {
            const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
            const questionDiv = document.getElementById(`question-${index + 1}`);
            questionDiv.style.boxShadow = "";

            if (selected) {
                totalScore += scores[index][parseInt(selected.value)];
            } else {
                incomplete = true;
                questionDiv.style.boxShadow = "0 0 10px #FF0000";
            }
        });

        const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";

if (incomplete) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Questionário incompleto";
    errorMessage.id = "errorMessage";
    resultDiv.appendChild(errorMessage);
} else {
    const resultMessage = document.createElement("p");
    if (totalScore >= 32) {
        resultMessage.innerHTML = `Você fez <strong>${totalScore}</strong> pontos, o que indica possibilidades de autismo. Recomendamos a avaliação de um profissional.`;
        resultMessage.style.color = "#0000FF";
    } else {
        resultMessage.textContent = `Você fez ${totalScore} pontos. A informação não indica traço de autismo.`;
        resultMessage.style.color = "#000000";
    }
    resultDiv.appendChild(resultMessage);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const restartButton = document.createElement("button");
    restartButton.textContent = "Reiniciar teste";
    restartButton.addEventListener("click", () => location.reload());
    buttonContainer.appendChild(restartButton);

    const homeButton = document.createElement("button");
    homeButton.textContent = "Página inicial";
    homeButton.addEventListener("click", () => window.location.href = "https://utilitea.glide.page");
    buttonContainer.appendChild(homeButton);

    resultDiv.appendChild(buttonContainer);
}

    });
});
