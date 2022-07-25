var counter = 0;
var randomNumber = 0;

document.getElementById("try")

function finding(){
    var userNumber = document.getElementById("try").value;

    if(userNumber >=1 & userNumber <= 100){
        if(randomNumber > userNumber){
            document.getElementById("display").innerText = "UP!";
        }
        else if(randomNumber < userNumber){
            document.getElementById("display").innerText = "DOWN!";
        }
        else{
            document.getElementById("display").innerText = "정답!";
        }

    }
    else{
        document.getElementById("display").innerHTML = "1부터100까지의 숫자를 입력해주세요!";
    }
}