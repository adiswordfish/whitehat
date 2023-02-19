player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":" + player1_score;
document.getElementById("player2_name").innerHTML = player2_name + ":" + player2_score;

document.getElementById("player_question").innerHTML = "Question turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player2_name;

num1 = document.getElementById("None").value;
num2 = document.getElementById("Ntwo").value;

 

function send(){

	question_Word = "<h4 id='display_word'> Q. " + document.getElementById("None").value + "x" + document.getElementById("Ntwo").value + "</h4>";
	input_box = "<br> Answer : <input type='number' id='input_check_box'>";
	check_button = "<br><br><button id='check btn' onclick='check()'>Check</button>"
	row = question_Word + input_box + check_button;
	document.getElementById("output").innerHTML = row;
	document.getElementById("word").value = "";
}

question_turn = player1_name;
answer_turn = player2_name;

function check()
{
	
	// if(document.getElementById("None").value * document.getElementById("Ntwo").value == document.getElementById("input_check_box").value)	
	// {
	// 	if(answer_turn == "player1")
	// 	{
	// 		player1_score = player1_score +1;
	// 	    document.getElementById("player1_name").innerHTML = player1_name + ":" + player1_score;
	// 	}
	// 	else 
	// 	{
	// 		player2_score = player2_score +1;
	// 	    document.getElementById("player2_name").innerHTML = player2_name + ":" + player2_score;
	// 	}
	// }
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
		question_turn = "player1";
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
		question_turn = "player2";
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}

    document.getElementById("output").innerHTML = "";
	document.getElementById("None").value = "";
	document.getElementById("Ntwo").value = "";
}

