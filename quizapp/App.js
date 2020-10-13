const question = [
    {
        "question":"HTML Là gì ?",
        "answerA":"là ngôn ngữ đánh dấu siêu văn bản",
        "answerB":"là ngôn ngữ lập trình web",
        "answerC":"là ngôn ngữ lập trình hướng đối tượng",
        "answerD":"tất cả đều sai",
        "correct":"A"
    },
    {
        "question":"Thẻ <p> trong HTML có tác dụng",
        "answerA":"thẻ chứa đoạn văn bản",
        "answerB":"không có tác dụng",
        "answerC":"là thẻ in đậm",
        "answerD":"là thể in nghiêng",
        "correct":"A"
    },
    {
        "question":"Trong thẻ <a> thuộc tính title có tác dụng gì?",
        "answerA":"là thuộc tính để chưa url ảnh",
        "answerB":"không có tác dụng",
        "answerC":"chỉ hiển thị khi url ảnh bị lỗi",
        "answerD":"để chú thích hình ảnh",
        "correct":"D"
    },
    {
        "question":"Có bao nhiêu cách chèn CSS vào website ?",
        "answerA":"4 cách",
        "answerB":"3 cách",
        "answerC":"2 cách",
        "answerD":"1 cách",
        "correct":"B"
    },
    {
        "question":"Thuộc tính postion trong css có tác dụng ?",
        "answerA":"màu văn bản",
        "answerB":"hiệu ứng chuyển động",
        "answerC":"canh lề cho phần tử",
        "answerD":"Định vị cho phần tử",
        "correct":"D"
    },
    {
        "question":"Có bao nhiêu giá trị trong thuộc tính display",
        "answerA":"1",
        "answerB":"4",
        "answerC":"2",
        "answerD":"3",
        "correct":"B"
    },
    {
        "question":"Trong css phần tử giả after và before thuộc tính nào quan trong nhất ?",
        "answerA":"display",
        "answerB":"position",
        "answerC":"content",
        "answerD":"background",
        "correct":"C"
    },
    {
        "question":"Đặt javascipt trong html bằng thẻ nào",
        "answerA":"<js>",
        "answerB":"<script>",
        "answerC":"<scripting>",
        "answerD":"<javascript>",
        "correct":"B"
    },
    {
        "question":"Cú pháp chính xác để thay đổi nội dung phần tử HTML bằng Javascript",
        "answerA":" document.getElementByName('p').innerHTML = 'Hello World!'",
        "answerB":" #demo.innerHTML = 'Hello World!'",
        "answerC":" #demo.innerHTML = 'Hello World!'" ,
        "answerD":" document.getElementById('demo').innerHTML = 'Hello World!'",
        "correct":"D"
    },
    {
        "question":"Vòng lặp white bắt đầu thư thê nào ?",
        "answerA":"while(i<=10;i++)",
        "answerB":"while i= 1 to 10",
        "answerC":"while(i<=10)" ,
        "answerD":"while(var i =0;i<10;i++)",
        "correct":"C"
    },
    
]
var currentQuestion = 0;
var score = 0;
var answers = document.getElementsByClassName('answer');
function displayQuestion(current){
    document.getElementById('question').innerText = question[current].question;
    document.getElementById('answerA').innerText = question[current].answerA;
    document.getElementById('answerB').innerText = question[current].answerB;
    document.getElementById('answerC').innerText = question[current].answerC;
    document.getElementById('answerD').innerText = question[current].answerD;
}
function chooseAnswer(element,answer){
    console.log(answers);
    if(answer == question[currentQuestion].correct){
        score++;
        element.classList.add('correct');
    }
    else{
        element.classList.add('error');
    }
    for(var i = 0 ; i<answers.length;i++){
        answers[i].setAttribute('disabled','disabled');
        
    }
}
function nextQuestion(){
    for(var i = 0 ; i<answers.length;i++){
        answers[i].removeAttribute('disabled');
        answers[i].classList.remove('correct','error');
    }
    currentQuestion++;
    if(currentQuestion>question.length-1){
        showScore()
    }else{
        displayQuestion(currentQuestion);
    }
}
function showScore(){
    if(score<=5){
        document.getElementsByClassName('container')[0].innerHTML = "<img src='images/bad.png' width='300px'><br><h1>Score:"+score+"</h1>";
    }else if(score<=7){
        document.getElementsByClassName('container')[0].innerHTML = "<img src='images/ok.png' width='300px'><br><h1>Score:"+score+"</h1>"
    }else{
        document.getElementsByClassName('container')[0].innerHTML = "<img src='images/love.png' width='300px'><br><h1>Score:"+score+"</h1>"
    }
}

displayQuestion(currentQuestion);
document.getElementById('next').addEventListener("click",nextQuestion);