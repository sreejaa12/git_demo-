<script>
function check() {
    var c=0;
    var q1=document.quiz.question.value;
    var q2=document.quiz.question.value;
    var q3=document.quiz.question.value;
    var q4=document.quiz.question.value;
    var q5=document.quiz.question.value;
    var q6=document.quiz.question.value;
    var q7=document.quiz.question.value;
    var q8=document.quiz.question.value;
    var q9=document.quiz.question.value;
    var q10=document.quiz.question.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
    if (q1="hyper text markup language"){c++}
    if (q2="br"){c++}
    if (q3="i"){c++}
    if (q4="h1"){c++}
    if (q5="script"){c++}
    if (q6="style"){c++}
    if (q7="background-color"){c++}
    if (q8="color"){c++}
    if (q9="font-size"){c++}
    if (q10="font-family"){c++}
    quiz.style.display="none";
    if(c<=2){
        result.innerHTML="your score is '+c+' try again";
    }
    else{
        result.innerHTML="Excellent";
        result.textcontent="your score is {c}.tryagain";
    }
}
for button .center{
    display:flex;
    justifycontent:center:
}
</script>