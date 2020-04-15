// Random numbers
var numbers = randomNumbers(numbers);

console.log('Numeri generati random',numbers);
alert('Ricorda questi numeri: ' + numbers)

function randomNumbers(array){
  array = [];
  for (var i = 0; i < 5; i++){
    var numb = Math.floor(Math.random() * 100);
    
    if (array.includes(numb)){
      i--;
    } else{
      array.push(numb);
    }
  }
  return array;
}

// Game
var userNumbers = [];
var foundNumbers = [];

setTimeout(game, 5000);

function game (){
  var choice = 0;

  for (var i = 0; i < numbers.length; i++) {
    choice = parseInt(prompt('Inserisci uno alla volta i numeri visti in precedenza, attenzione puoi insererire altri: '+ (numbers.length - i) + ' numeri'));
    userNumbers.push(choice);

    if ( numbers.includes(choice) ){
      foundNumbers.push(choice);
    }
  }
  console.log('**********************************');
  console.log('***     Lista scelte utente    ***', userNumbers);
  console.log('*** QUANTITA NUMERI INDOVINATI ***', foundNumbers.length);
  console.log('***   LISTA NUMERI INDOVINATI  ***',foundNumbers);
  console.log('**********************************');
  
  return
}





