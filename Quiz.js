class Quiz {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("GameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      GameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var ContestantCountRef = await database
        .ref("ContestantCount")
        .once("value");
      if (ContestantCountRef.exists()) {
        ContestantCount = ContestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play() {
    // escreva aqui o código para ocultar os elementos da questão
    question.hide();

    // escreva o código aqui para mudar a cor de fundo
    background("blue");

    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz

   
   

  console.log(gameState)
    // chame getContestantInfo () aqui

    Contestant.getPlayerInfo();
    //console.log(Contestant.getPlayerInfo())
    // escreva a condição para verificar se contestantInfor não é indefinido

    if (allContestants !== undefined) {
      var answerPos = 340;

      fill("black");
      textSize(23);
      text("Resultado do questionário", 350, 20);
      textSize(22);
      text(
        "Quem respondeu corretamente terá o nome destacado em verde", 130, 230
      );
    }

    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente

    for(var i in allContestants){
      var correctAns = "1"

      if(correctAns === allContestants[i].answer){

        fill("green")
      }else{
        fill("red")
      }
      answerPos = answerPos + 25
      text(allContestants[i].name + ": " + allContestants[i].answer, 325, answerPos)

    }


}

  }

