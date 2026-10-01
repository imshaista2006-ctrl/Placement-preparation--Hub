fetch("aptitude.json")
.then(response => response.json())
.then(data => {

    let questionList = document.getElementById("questionList");
    let answer = document.getElementById("answer");

    for(let question in data){

        let li = document.createElement("li");
        li.textContent = question;
        li.style.cursor = "pointer";

        li.onclick = function(){
            answer.textContent = data[question];
        };

        questionList.appendChild(li);
    }
});