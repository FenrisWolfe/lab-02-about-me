// This is the code that will ask for input, either by typing in an answer or clicing ok or cancel as a yes or no prompt
        var military = prompt('Do you think I served in the Navy?');
        var yearsServed = prompt('How how many years do you think I served?');
        var k_9 = confirm('do you think I like dogs?');
        var age = prompt('how old do you think I am?');
// this is the output to the console and will not be seen by the user unless they open the console on their browser
          console.log('military ', military);
          console.log('yearsServed ', yearsServed);
          console.log('k_9 ', k_9);
          console.log('age ', age);
// This will display the alerts / answers to the prompts and confirms
        alert(' you said ' + military + ' to my military service');

        alert(' you think I did ' + yearsServed + ' years of service. I did over 24');

        alert('your dog dog lover status is ' + ' ' + k_9);

        alert('so you guessed, ' + military + ' to the question of did I serve, ' + yearsServed + ' is your guess to how many years I served, ' + ' your dog lover status is ' + k_9 + ', and ' + age + ' id the age that you guessed I am. I am 51 BTW.');
