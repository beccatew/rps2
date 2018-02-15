$(document).ready( function() {

var user;
var userIndex;
var computer;
var result;
var options = ['rock', 'paper', 'scissors']

$('.btn').click(function() {
  var userIndex = $('#rock').val(user);
  var userIndex = $('#paper').val(user);
  var userIndex = $('#scissors').val(user);
  alert("You've made a selection!");
});

function computerChoice() {
  var index = Math.floor(Math.random() * options.length)
  return options[index];
}


function compare() {
  userIndex = options.indexOf(user);
  computerIndex = options.indexOf(computer);

  if (userIndex) === computerIndex {
    result = 'Tie'
    alert("It is a tie!")
    else if (computerIndex === options.length - 1 && userIndex == 0 || userIndex > computerIndex) {
      result = 'Win'
      alert("You WIN!")
    else {
      result = 'Lose'
      alert("You are a loser!")}
    }
  }
}


function startGame(e) {
  user = e.target.id;
  // computer = computerChoice();
  // compare();
  // printResults();
  // calcTotals();
}


// $('#rock').click(function() {
//   var user = $('#rock').val();
//   alert("You selected Rock!");
// });
//
// $('#rock').click(function() {
//   var user = $('#rock').val();
//   alert("You selected Rock!");
// });


// $('#display_cart').on('click', function() {
//   var cart = $('#cart')
//   var button = $(this)
//   if ( button.text() === 'Hide Cart' )
//     button.text('Show Cart')
//   else
//     button.text('Hide Cart')




})
