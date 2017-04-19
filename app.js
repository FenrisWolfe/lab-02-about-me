// force strict mode
'use strict';
// This is the code that will ask for question input, either by typing in an
//answer or clicing ok or cancel as a yes or no prompt and return a response to
//the user using their own name.
var userName = prompt(' Hey there! What is your Name? ');
console.log('username is', userName);
alert('Hello, '+ userName + '. Welcome to my About me Page.')

//questions about me start here.
// asks if I served in the Navy
var military = prompt(' Do you think I served in the Navy? ');
if (military.trim().toLowerCase() == 'yes'){
  alert('That is right ' + userName + ' I served in the United States Navy. Next you get to guess how many years I served.  Good Luck!');
}else{
  alert('Aww, nope that is wrong, I served in the United States Navy.');
}
//asksuser to guess my time in the service and returns an answer
var yearsServed = prompt(' How many years do you think I served? Hint, it is between 20 and 30.');
if (yearsServed <= 23){
  alert(' Sorry ' + userName + ' I served over 24! ');
}else {
  if(yearsServed >= 25){
    alert('Nope! too high! Lol');
  }else{
    alert('Hot Damn, you got it!');
    }
}
//asks user if they think I like dogs
var k_9 = confirm(' do you think I like dogs? ');
if (k_9 == true){
  alert('I LOVE dogs!');
}else {
  alert(' Actually, I Love Dogs! I like cats too. ');
}
// asks the user to guess my age
var age = prompt(' how old do you think I am? ');
if(age <=50){
  alert(' Aww, you\'re too kind!');
}else {
  if(age >=52){
    alert('Oh Come On! I\'m only 51');
  }else {
    if(age == 51){
      alert(' That\'s right!')
    }
  }
}
// this is the output to the console and will not be seen by the user unless they open the console on their browser
console.log('military ', military);
console.log('yearsServed ', yearsServed);
console.log('k_9 ', k_9);
console.log('age ', age);
// This will display the alerts / answers to the prompts and confirms
alert(' you said ' + military + ' to my military service');
alert(' you think I did ' + yearsServed + ' years of service. I did over 24');
alert('you guessed my dog lover status as ' + k_9);
alert('you guessed my age as ' + age);
alert('so you guessed, ' + military + ' to the question of did I serve, ' + yearsServed + ' is your guess to how many years I served, ' + ' my dog lover status as ' + k_9 + ', and ' + age + ' is the age that you guessed I am. I am 51 BTW.');
