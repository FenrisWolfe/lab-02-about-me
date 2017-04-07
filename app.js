// This is the code that will ask for input, either by typing in an answer or clicing ok or cancel as a yes or no prompt
        var mistake = prompt('Did you tick off your Honey last night?');
        var scale = prompt('How mad is she on a scale of 1 to 10?');
        var doghouse = confirm('are you IN or OUT of the dog house?');
        var fixit = prompt('will rose pedals sprinkled on the bed help?');
// this is the output to the console and will not be seen by the user unless they open the console on their browser
          console.log('mistake ', mistake);
          console.log('scale ', scale);
          console.log('doghouse ', doghouse);
          console.log('fixit ', fixit);
// This will display the alerts / answers to the prompts and confirms
        alert(' your mistake was ' + mistake);
        alert(' you rate this a scale of ' + scale);
        alert('your dog house status is' + ' ' + doghouse);
        alert('so, ' + mistake + ' to the ticking off, ' + scale + ' is the scale , '+ 'your dog house status is ' + doghouse + ', and ' + fixit + ' to the rose pedals fixing it.');

// Work in progress.
