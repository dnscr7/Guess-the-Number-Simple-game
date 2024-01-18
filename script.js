'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message ').textContent='Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore=0;

const displayMessage=function(message){
  document.querySelector('.message').textContent =message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {    //when your not Guess any number
    if(score>1)
    {
       displayMessage('No number ⛔');
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      displayMessage('You Lost the Game !🥲');
      document.querySelector('.score').textContent = 0;
    }
  } //when User wins the Game
  else if (guess === secretNumber) {
    displayMessage('Correct Guess🎉');
   score++;
   document.querySelector('.score').textContent = score;
   document.querySelector('body').style.backgroundColor='#60b347';
   document.querySelector('.number').style.width='30rem';
   document.querySelector('.number').textContent= secretNumber;

   if(score>highScore){
    highScore=score;
    document.querySelector('.highscore').textContent=highScore;
   }
}

   else if(guess!==secretNumber)
   {
    if (score > 1 ) {
      displayMessage(guess>secretNumber?'📈 Too High!....':'📉 Too Low!....')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥲You Lost the Game !');
      document.querySelector('.score').textContent = 0;
    }
   }
   //when user is too High
  // else if (guess > secretNumber) {
  //   if (score > 1 ) {
  //     document.querySelector('.message').textContent = '📈 Too High!....';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥲You Lost the Game !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } //when your is too Low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!....';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥲You Lost the Game !....';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent =score;

  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
})
