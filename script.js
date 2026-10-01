fetch("questions.json")
.then(response => response.json())
.then(data => {

    let list = document.getElementById("questionList");

    for(let question in data){

        let li = document.createElement("li");
        li.innerText = question;

        li.onclick = function(){
            document.getElementById("answer").innerText = data[question];
        };

        list.appendChild(li);
    }
});