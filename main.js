let tim = 0;
let answertime = 0;
let notanswertime = 0;
let answerseetime = 0;
let question1 = 0;
let question2 = 0;
let question3 = 0;
function $(id) {
  return document.getElementById(id);
}
function questionGenerate() {
  tim = 0;
  question1 = (Math.floor(Math.random() * 10) + 10);
  question2 = (Math.floor(Math.random() * 399) + 100);
  question3 = question1 * question2
   $('question').innerHTML = (question3 + '÷' + question2);
   $('answer-display').innerHTML = 'NO COMMENTS';
   $('answer-display').style.color = 'gray';
   $('answer').value = ''; 
   console.log(question1 + 'n' + question2);
}
function answerCheck() {
  if (($('answer').value) == (question3 / question2)) {
    $('answer-display').innerHTML = '正解！';
    $('answer-display').style.color = 'red';
    console.log('正解');
    if (tim < 1) {
      answertime = answertime + 1;
    }
    result();
  }
  else {
    $('answer-display').innerHTML = '不正解...';
    $('answer-display').style.color = 'blue';
    console.log('不正解')
    if (tim < 1) {
      notanswertime = notanswertime + 1;
    }
    result();
  }
}
function answerDisplay() {
  $('answer-display').innerHTML = '答えは' + (question3 / question2);
  $('answer-display').style.color = 'orange';
  if (tim < 1) {
    answerseetime = answerseetime + 1;
  }
  result();
}
function result() {
  tim = tim + 1;
  $('times').innerHTML = '正解数:' + answertime + '不正解数:' + notanswertime + '答えを見た回数:' + answerseetime;
}
window.onload = function() {
  $('times').innerHTML = '正解数:0 不正解数:0 答えを見た回数:0';
  questionGenerate();
}
function Leload() {
  window.location.reload();
}
