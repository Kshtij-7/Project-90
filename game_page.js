var player1_name = localStorage.getItem('User1name');
var player2_name = localStorage.getItem('User2name');

var player1_score = 0;
var player2_score = 0;

document.getElementById('player1_name').innerHTML = `${player1_name} : `;
document.getElementById('player2_name').innerHTML = `${player2_name} : `;
document.getElementById('player1_score').innerHTML = `${player1_score}`;
document.getElementById('player2_score').innerHTML = `${player2_score}`;

document.getElementById('player_question').innerHTML = `Question Turn: ${player1_name}`
document.getElementById('player_answer').innerHTML = `Answer Turn: ${player2_name}`

function send() {
    if(document.getElementById('num1').value == null){
        window.alert('Please enter a word in the input box')
    }

    if(document.getElementById('num2').value == null){
        window.alert('Please enter a word in the input box')
    }

    else {
        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;

        
       
    }

}