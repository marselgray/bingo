var buzzwords = 
	{ "agenda" : 
		{ 'description' : 'Work From Home Bingo',
		'wordlist' : 
			[ 
			'Wake Up 5 Minutes Before Work',
			'Forgot to mute mic',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			] 
		}
	 };  

var flasherInterval = null;


function flashWin() {
    var bingocard = document.getElementById('thecard');

    if (bingocard.style.backgroundColor == "white") {
	bingocard.style.color = "";
	bingocard.style.backgroundColor = "";
    } else {
	bingocard.style.color = "navy";
	bingocard.style.backgroundColor = "white";
    }

    var flasherCounter  = 0;
   
    if (++flasherCounter >= 6) {
	clearInterval(flasherInterval);
	flasherCounter  = 0;
	flasherInterval = null;
    }
} 


function youWin() {
    var center = document.getElementById('card').rows[2].cells[2];

    if (flasherInterval == null)
	flasherInterval = setInterval(flashWin, 200);

    center.innerHTML = "<strong>BINGO!!<br>BINGO!!<br>BINGO!!</strong>";
    center.style.background = "yellow";
setTimeout(resetBingoCard,3000);
} 


function youLose() {
    var center = document.getElementById('card').rows[2].cells[2];

    center.innerHTML = "<strong>SAFE SPACE</strong>";
    center.style.background = "";

} 

function checkForWin() {
    var t = document.getElementById('card');
    if ((t.rows[0].cells[0].marker & t.rows[0].cells[1].marker & t.rows[0].cells[2].marker & t.rows[0].cells[3].marker & t.rows[0].cells[4].marker)  || (t.rows[1].cells[0].marker & t.rows[1].cells[1].marker & t.rows[1].cells[2].marker & t.rows[1].cells[3].marker & t.rows[1].cells[4].marker)  || (t.rows[2].cells[0].marker & t.rows[2].cells[1].marker & t.rows[2].cells[3].marker & t.rows[2].cells[4].marker)  || (t.rows[3].cells[0].marker & t.rows[3].cells[1].marker & t.rows[3].cells[2].marker & t.rows[3].cells[3].marker & t.rows[3].cells[4].marker)  || (t.rows[4].cells[0].marker & t.rows[4].cells[1].marker & t.rows[4].cells[2].marker & t.rows[4].cells[3].marker & t.rows[4].cells[4].marker)  || (t.rows[0].cells[0].marker & t.rows[1].cells[0].marker & t.rows[2].cells[0].marker & t.rows[3].cells[0].marker & t.rows[4].cells[0].marker)  || (t.rows[0].cells[1].marker & t.rows[1].cells[1].marker & t.rows[2].cells[1].marker & t.rows[3].cells[1].marker & t.rows[4].cells[1].marker)  || (t.rows[0].cells[2].marker & t.rows[1].cells[2].marker & t.rows[3].cells[2].marker & t.rows[4].cells[2].marker)  || (t.rows[0].cells[3].marker & t.rows[1].cells[3].marker & t.rows[2].cells[3].marker & t.rows[3].cells[3].marker & t.rows[4].cells[3].marker)  || (t.rows[0].cells[4].marker & t.rows[1].cells[4].marker & t.rows[2].cells[4].marker & t.rows[3].cells[4].marker & t.rows[4].cells[4].marker)  || (t.rows[0].cells[0].marker & t.rows[1].cells[1].marker & t.rows[3].cells[3].marker & t.rows[4].cells[4].marker)  || (t.rows[4].cells[0].marker & t.rows[3].cells[1].marker & t.rows[1].cells[3].marker & t.rows[0].cells[4].marker) ) {
	youWin();
    } else {
	youLose();
    }

} 

function markSquare(square) {

    if (square.marker == '1') {
	square.marker = 0;
	square.style.background = '';
    } else {
        square.marker = 1;
	square.style.backgroundColor   = "yellow";
    }
    checkForWin();
}


function fillBingoCard(wordlist) {

    for (var i = 0; i < wordlist.length; i++) {
	temp = wordlist[i];
	j = Math.floor(Math.random() * wordlist.length);
	wordlist[i] = wordlist[j];
	wordlist[j] = temp;
    }

    var bingocard = document.getElementById('card');
    for (var i = 0; i < 5; i++) {
 	for (var j = 0;  j < 5;  j++) {
 	    bingocard.rows[i].cells[j].innerHTML = wordlist[i*5 + j];
	}
    }
    bingocard.rows[2].cells[2].innerHTML = '<strong>SAFE SPACE</strong>';
} 


function setupGame() {
    fillBingoCard(buzzwords['agenda'].wordlist);
} 


function resetBingoCard() {
    var bingocard = document.getElementById('card');
    //Yep has to be a table for now
    for (row = 0; row < 5; row++) {
	for (col = 0; col < 5; col++) {
	    with (bingocard.rows[row].cells[col]) {
		marker = 0;
		style.background = '';
	    }
	}
    }
setupGame();
} 

setupGame();