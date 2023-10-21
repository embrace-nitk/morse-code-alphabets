		let simsubscreennum=0;
		let temp=0;
		function navNext()
		{
			for(temp=0;temp<2;temp++)
			{
				document.getElementById("canvas"+temp).style.visibility="hidden";
			}
			simsubscreennum+=1;
			document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
			document.getElementById("nextButton").style.visibility="hidden";
			magic();
		}

	// function animatearrow()
	// {
	// 	if (document.getElementById('arrow1').style.visibility=="hidden")
	// 		document.getElementById('arrow1').style.visibility="visible";
	// 	else
	// 		document.getElementById('arrow1').style.visibility="hidden";
	// }

	// function myStopFunction() 
	// {
	// 	clearInterval(myInt);
	// 	document.getElementById('arrow1').style.visibility="hidden";
	// }

	// function blinkArrow(l,t,d,h)
	// {
	// 	myInt = setInterval(function(){ animatearrow(); }, 500);
	// 	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	// 	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	// 	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	// 	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
	// }

	// function magic()
	// {
	// 	if(simsubscreennum==1)
	// 	{
	// 		blinkArrow(520,270,360,40);
			
	// 	}
		
		
	// }



	//=============//
	let simsubscreennum1=0;
	let temp1=0;
	function navNext1 ()
	{
		for(temp1=0;temp1<2;temp1++)
		{
			document.getElementById("canvas2"+temp1).style.visibility="hidden";
		}
		simsubscreennum1+=1;
		document.getElementById("canvas2"+simsubscreennum1).style.visibility="visible";
		document.getElementById("nextButton1").style.visibility="hidden";
		magic();
	}


	function getOption(){
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.output').textContent= output;
	}

	function dis(){
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.displayImg').textContent= output;
	}


	function getOption1(){
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.out').textContent= output;
	}


	function getOption2(){
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.out1').textContent= output;
	}

	function getOption3(){
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.out2').textContent= output;

	}

	function message(){
		selectElement =document.querySelector('#btn2-text');
		output=selectElement.value;
		document.querySelector('.hidden').textContent= output;
	}



	
	



	function displayMessage() {
		// Get the message element
		var messageElement = document.getElementById("message");

		// Set the text content and color	
		messageElement.textContent = "Button clicked!";
	}



// JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the input element to call validateAlphabet when the input value changes.
    document.getElementById("alphabetInput").addEventListener("input", validateAlphabet);

    // Handle the click event of the submit button (removed from HTML)
    document.getElementById("nextButton1").addEventListener("click", function () {
        // Your code to handle the button click goes here
        navNext();
        getOption();
        getOption1();
        getOption2();
    });

    // Rest of your JavaScript code
    // ...

    function validateAlphabet() {
        var input = document.getElementById("alphabetInput").value.toUpperCase();
        var validAlphabets = ["A", "B", "C", "D","E","F", "G", "H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // Add all valid alphabets (A to Z) here

        if (validAlphabets.includes(input)) {
            document.getElementById("errorText").textContent = ""; // Clear error message
        } else {
			var errorTextContainer = document.getElementById("errorText");
        	errorTextContainer.style.padding = "10px";
			errorTextContainer.style.paddingRight='2px'
            document.getElementById("errorText").textContent = "Please enter a valid alphabet (A to Z)";
        }
    }

    // Other functions here
});




	function morseCode() {
		const element = document.querySelector('.out1'); // Get the element with class "out"
		let morseCodeMapping = {
			'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
			'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
			'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
			'Y': '-.--', 'Z': '--..'
		};

		// Get the selected alphabet from the UI
		const selectedAlphabet = document.querySelector('#alphabetInput').value;

		// Check if the selected alphabet exists in the Morse code mapping
		if (morseCodeMapping.hasOwnProperty(selectedAlphabet)) {
			const morseCode = morseCodeMapping[selectedAlphabet];
			element.innerHTML = morseCode; // Set the Morse code in the UI
		} else {
			// Handle the case when the selected alphabet is not found in the mapping (optional)
			element.innerHTML = "";
		}
	}








const audioMapping = {
	'A': '../Audio/morse a.wav',
	'B': '../Audio/morse b.wav',
	'C': '../Audio/morse c.wav',
	'D': '../Audio/morse d.wav',
	'E': '../Audio/morse e.wav',
	'F': '../Audio/morse f.wav',
	'G': '../Audio/morse g.wav',
	'H': '../Audio/morse h.wav',
	'I': '../Audio/morse i.wav',
	'J': '../Audio/morse j.wav',
	'K': '../Audio/morse k.wav',
	'L': '../Audio/morse l.wav',
	'M': '../Audio/morse m.wav',
	'N': '../Audio/morse n.wav',
	'O': '../Audio/morse o.wav',
	'P': '../Audio/morse p.wav',
	'Q': '../Audio/morse q.wav',
	'R': '../Audio/morse r.wav',
	'S': '../Audio/morse s.wav',
	'T': '../Audio/morse t.wav',
	'U': '../Audio/morse u.wav',
	'V': '../Audio/morse v.wav',
	'W': '../Audio/morse w.wav',
	'X': '../Audio/morse x.wav',
	'Y': '../Audio/morse y.wav',
	'Z': '../Audio/morse z.wav'
  };
  
  



let lastClickTime = 0;
let morseCodeTimer;
let isMorseCodeAnimating = false;
let currentMorseCode = '';
let audioEnabled = true;






function getSelectedAlphabet() {
  return document.querySelector('#alphabetInput').value.toUpperCase();
}

function togglePlayButton(disabled) {
	const playButton = document.querySelector('#btn2');
	if (disabled) {
	  playButton.onclick = null; // Remove click handlers while disabled
	} else {
	  playButton.onclick = handlePlayButtonClick; // Restore click handlers when enabled
	}
	playButton.disabled = disabled;
  }

  const audioElement = new Audio();

 function toggleAudio(enabled) {
  const selectedAlphabet = getSelectedAlphabet();
  audioElement.src = audioMapping[selectedAlphabet];
  audioEnabled = enabled;
  if (enabled) {
    if (selectedAlphabet === 'A') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'B') {
      audioElement.playbackRate = 0.15;
    } else if (selectedAlphabet === 'C') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'D') {
      audioElement.playbackRate = 0.2;
    // } else if (selectedAlphabet === 'E') {
      audioElement.playbackRate = 0.4;
    } else if (selectedAlphabet === 'F') {
      audioElement.playbackRate = 0.28;
    } else if (selectedAlphabet === 'G') {
      audioElement.playbackRate = 0.25;
    } else if (selectedAlphabet === 'H') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'I') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'J') {
      audioElement.playbackRate = 0.31;
    } else if (selectedAlphabet === 'K') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'L') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'M') {
      audioElement.playbackRate = 0.35;
    } else if (selectedAlphabet === 'N') {
      audioElement.playbackRate = 0.35;
    } else if (selectedAlphabet === 'O') {
      audioElement.playbackRate = 0.4;
    } else if (selectedAlphabet === 'P') {
      audioElement.playbackRate = 0.25;
    } else if (selectedAlphabet === 'Q') {
      audioElement.playbackRate = 0.25;
    } else if (selectedAlphabet === 'R') {
      audioElement.playbackRate = 0.35;
    } else if (selectedAlphabet === 'S') {
      audioElement.playbackRate = 0.15;
    // } else if (selectedAlphabet === 'T') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'U') {
      audioElement.playbackRate = 0.2;
    } else if (selectedAlphabet === 'V') {
      audioElement.playbackRate = 1.0;
    } else if (selectedAlphabet === 'W') {
      audioElement.playbackRate = 0.3;
    } else if (selectedAlphabet === 'X') {
      audioElement.playbackRate = 0.3;
    } else if (selectedAlphabet === 'Y') {
      audioElement.playbackRate = 0.3;
    } else if (selectedAlphabet === 'Z') {
      audioElement.playbackRate = 0.2;
    }

    audioElement.play();
	if (selectedAlphabet === 'E' || selectedAlphabet === 'T') {
		audioElement.play();
	  }
  } else {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
}




function morseCode() {
  const element = document.querySelector('.out2'); // Get the element with class "out"

  let morseCodeMapping = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
    'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
    'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..'
  };

  const selectedAlphabet = getSelectedAlphabet();

  const currentTime = new Date().getTime();
  const clickDelay = currentTime - lastClickTime;

  // Clear any previous Morse code display
  clearTimeout(morseCodeTimer);
  element.innerHTML = "";


  if (morseCodeMapping.hasOwnProperty(selectedAlphabet)) {
    const morseCode = morseCodeMapping[selectedAlphabet];
	currentMorseCode = morseCode;
    isMorseCodeAnimating = true;
	togglePlayButton(true);
	toggleAudio(true);

	let i = 0;
    function animateMorseCode() {
      const character = morseCode[i];
      const customDelay = customDelays[selectedAlphabet] || 100;
      element.innerHTML += character;
      i++;

      if (i < morseCode.length) {
        morseCodeTimer = setTimeout(animateMorseCode, customDelay);
      } 
	  
	  else {
        togglePlayButton(false);
        isMorseCodeAnimating = false;
		toggleAudio(false);
      }
    }

    animateMorseCode();
  }

  lastClickTime = currentTime;
}



function handlePlayButtonClick() {
	if (!isMorseCodeAnimating) {
	  morseCode();
	}
  }

  

let customDelays = {
  'A': 800, 'B': 1100, 'C': 1100, 'D': 1200, 'E': 1200, 'F': 700, 'G': 1200, 'H': 700,
  'I': 700, 'J': 1000, 'K': 1000, 'L': 900, 'M': 1200, 'N': 1000, 'O': 700, 'P': 1000,
  'Q': 850, 'R': 700, 'S': 1100, 'T': 300, 'U': 900, 'V': 600, 'W': 700, 'X': 800,
  'Y': 700, 'Z': 1000,
  'a': 800, 'b': 1100, 'c': 1100, 'd': 1200, 'e': 1200, 'f': 700, 'g': 1200, 'h': 700,
  'i': 700, 'j': 1000, 'k': 1000, 'l': 900, 'm': 1200, 'n': 1000, 'o': 700, 'p': 1000,
  'q': 850, 'r': 700, 's': 1100, 't': 300, 'u': 900, 'v': 600, 'w': 700, 'x': 800,
  'y': 700, 'z': 1000
  // Add custom delays for other letters as needed
};

document.querySelector('#btn2').onclick = handlePlayButtonClick;

// Handle double-click
document.querySelector('#btn2').addEventListener('dblclick', function () {
  if (!isMorseCodeAnimating) {
    morseCode();
  }
});






function getOptionaud(){
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.output2').textContent= output;
	}


	


	function playMorseCode() {
		const selectedAlphabet = document.querySelector('#alphabetInput').value.toUpperCase();
		
		const audioA = document.getElementById("audioA");
		const audioB = document.getElementById("audioB");
		const audioElement = document.getElementById(`audio${selectedAlphabet}`);
	
		if (selectedAlphabet === '') {
			audioElement.playbackRate = 0.22;
			audioA.play();	
		} 
		// else if (selectedAlphabet === 'B') {
		// 	audioElement.playbackRate = 0.15;
		// 	audioB.play();
		// } 	
		// else if (selectedAlphabet === 'C') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioC.play();
		// }
		//  	else if (selectedAlphabet === 'D') {
		// 		audioElement.playbackRate = 0.2;
		// 	audioD.play();
		// }
		  	else if (selectedAlphabet === 'E') {
				audioElement.playbackRate = 1.0;
				audioE.play();
		}
		// 	else if (selectedAlphabet === 'F') {
		// 		audioElement.playbackRate = 0.25;
		// 	audioF.play();
		// }
		// else if (selectedAlphabet === 'G') {
		// 	audioElement.playbackRate = 0.25;
		// 	audioG.play();
		// }
		// else if (selectedAlphabet === 'H') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioH.play();
		// }else if (selectedAlphabet === 'I') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioI.play();
		// }
		// else if (selectedAlphabet === 'J') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioJ.play();
		// }
		// else if (selectedAlphabet === 'K') {
		// 	audioElement.playbackRate = 0.23;
		// 	audioK.play();
		// }
		// else if (selectedAlphabet === 'L') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioL.play();
		// }else if (selectedAlphabet === 'M') {
		// 	audioElement.playbackRate = 3.0;
		// 	audioM.play();
		// }
		// else if (selectedAlphabet === 'N') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioN.play();
		// }
		// else if (selectedAlphabet === 'O') 
		// {
		// 	audioElement.playbackRate = 0.4;
		// 	audioO.play();
		// }
		// else if (selectedAlphabet === 'P') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioP.play();
		// }
		// else if (selectedAlphabet === 'Q') {
		// 	audioElement.playbackRate = 0.25;
		// 	audioQ.play();
		// }
		// else if (selectedAlphabet === 'R') {
		// 	audioElement.playbackRate = 0.3;
		// 	audioR.play();
		// }
		// else if (selectedAlphabet === 'S') {
		// 	audioElement.playbackRate = 0.15;
		// 	audioS.play();
		// }
		else if (selectedAlphabet === 'T') {
			audioElement.playbackRate = 0.2;
			audioT.play();
		}
		// else if (selectedAlphabet === 'U') {
		// 	audioElement.playbackRate = 0.15;
		// 	audioU.play();
		// }
		// else if (selectedAlphabet === 'V') {
		// 	audioElement.playbackRate = 0.15;
		// 	audioW.play();
			
		// }
		// else if (selectedAlphabet === 'W') {
		// 	audioElement.playbackRate = 0.3;
		// 	audioW.play();
		// }
		// else if (selectedAlphabet === 'X') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioX.play();
		// }
		// else if (selectedAlphabet === 'Y') {
		// 	audioElement.playbackRate = 0.25;
		// 	audioY.play();
		// }
		// else if (selectedAlphabet === 'Z') {
		// 	audioElement.playbackRate = 0.2;
		// 	audioZ.play();
		// }
	}
	

	function displayMorseCharacter(character) {
  const morseContainer = document.getElementById('morse-container');

  currentIndex = 0;

  function displayNextSymbol() {
    if (currentIndex < character.length) {
      const char = character[currentIndex];
      if (char === '.') {
        setTimeout(() => {
          const dot = document.createElement('div');
		  dot.className = 'dot';
          morseContainer.appendChild(dot);
          dot.style.opacity = '1';
          currentIndex++;
          displayNextSymbol();
        }, 1000); // 1-second delay for dots
      } else if (char === '-') {
        setTimeout(() => {
          const dash = document.createElement('div');
          dash.className = 'dash';
          morseContainer.appendChild(dash);
          dash.style.opacity = '1';
          currentIndex++;
          displayNextSymbol();
        }, 1000); // 1-second delay for dashes
      } else if (char === ' ') {
        currentIndex++;
        setTimeout(() => displayNextSymbol());
      }
    } else {
      // All symbols have been displayed, clear the Morse code container
      setTimeout(() => {
        morseContainer.innerHTML = '';
      }, 1000); // 1-second delay before clearing the container
    }
  }

  displayNextSymbol();
}

document.getElementById('displayButton').addEventListener('click', () => {
  const alphabetInput = document.getElementById('alphabetInput').value.toUpperCase();
  if (morseCode[alphabetInput]) {
    const morseMessage = morseCode[alphabetInput];
    displayMorseCharacter(morseMessage);
  } else {
    alert('Please enter a valid alphabet (A to Z).');
  }
});
	


// 


function getOption9() {
    const selectElement = document.querySelector('#alphabetInput');
    const output = selectElement.value.toUpperCase();
    const imageContainer = document.querySelector('.outputImg');

	// const playbackRates = {
    //     V: 0.2, // Set a custom playback rate for "V"
    // };
	// const nameContainer = document.querySelector('.outputName');
	// displayHintImages();
	
    
    // Define image sources for each alphabet
    const imageSources = {
        A: ["./img/A (Archery)/1.PNG", "./img/A (Archery)/2.PNG", "./img/A (Archery)/3.PNG"],
        B: ["./img/B (Banjo)/1.PNG", "./img/B (Banjo)/2.PNG", "./img/B (Banjo)/3.PNG","./img/B (Banjo)/4.PNG","./img/B (Banjo)/5.PNG"],
		C: ["./img/C (Candy)/1.PNG","./img/C (Candy)/2.PNG","./img/C (Candy)/3.PNG","./img/C (Candy)/4.PNG","./img/C (Candy)/5.PNG"],
        D: ["./img/D (Dog)/1.PNG", "./img/D (Dog)/2.PNG", "./img/D (Dog)/3.PNG", "./img/D (Dog)/4.PNG"],
		E: ["./img/E (Eye)/1.PNG","./img/E (Eye)/2.PNG"],
		F: ["./img/F (Firetruck)/1.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/3.PNG","./img/F (Firetruck)/4.PNG","./img/F (Firetruck)/5.PNG"],
		G: ["./img/G (Giraffe)/1.PNG","./img/G (Giraffe)/2.PNG","./img/G (Giraffe)/3.PNG","./img/G (Giraffe)/4.PNG"],
		H: ["./img/H (Hippo)/1.PNG","./img/H (Hippo)/2.PNG","./img/H (Hippo)/3.PNG","./img/H (Hippo)/4.PNG","./img/H (Hippo)/5.PNG"],
		I: ["./img/I (Insect)/1.PNG","./img/I (Insect)/2.PNG","./img/I (Insect)/3.PNG"],
		J: ["./img/J (Jet)/1.PNG","./img/J (Jet)/2.PNG",'./img/J (Jet)/3.PNG','./img/J (Jet)/4.PNG','./img/J (Jet)/5.PNG'],
		K: ["./img/K (Kite)/1.PNG","./img/K (Kite)/2.PNG","./img/K (Kite)/3.PNG","./img/K (Kite)/4.PNG"],
		L: ["./img/L (Laboratory)/1.PNG","./img/L (Laboratory)/2.PNG","./img/L (Laboratory)/3.PNG","./img/L (Laboratory)/4.PNG","./img/L (Laboratory)/5.PNG"],
		M: ["./img/M (Mustache)/1.PNG","./img/M (Mustache)/2.PNG","./img/M (Mustache)/3.PNG"],
		N: ["./img/N (Net)/1.PNG","./img/N (Net)/2.PNG","./img/N (Net)/3.PNG"],
		O: ["./img/O (Orchestra)/1.PNG","./img/O (Orchestra)/2.PNG","./img/O (Orchestra)/3.PNG","./img/O (Orchestra)/4.PNG"],
		P: ["./img/P (Paddle)/1.PNG","./img/P (Paddle)/2.PNG","./img/P (Paddle)/3.PNG","./img/P (Paddle)/4.PNG","./img/P (Paddle)/5.PNG"],
		Q: ["./img/Q (Quarterback)/1.PNG","./img/Q (Quarterback)/2.PNG","./img/Q (Quarterback)/3.PNG","./img/Q (Quarterback)/4.PNG","./img/Q (Quarterback)/5.PNG"],
		R: ["./img/R (Robot)/1.PNG","./img/R (Robot)/2.PNG","./img/R (Robot)/3.PNG","./img/R (Robot)/4.PNG"],
		S: ["./img/S (Submarine)/1.PNG","./img/S (Submarine)/2.PNG","./img/S (Submarine)/3.PNG","./img/S (Submarine)/4.PNG"],
		T: ["./img/T (Tape)/1.PNG","./img/T (Tape)/2.PNG"],
		U: ["./img/U (Unicorn)/1.PNG","./img/U (Unicorn)/2.PNG","./img/U (Unicorn)/3.PNG","./img/U (Unicorn)/4.PNG"],
		V: ["./img/V (Vacuum)/1.PNG","./img/V (Vacuum)/2.PNG","./img/V (Vacuum)/3.PNG","./img/V (Vacuum)/4.PNG","./img/V (Vacuum)/5.PNG"],
		W: ["./img/W (Wand)/1.PNG","./img/W (Wand)/2.PNG","./img/W (Wand)/3.PNG","./img/W (Wand)/4.PNG"],
		X: ["./img/X (X-ray)/1.PNG","./img/X (X-ray)/2.PNG","./img/X (X-ray)/3.PNG","./img/X (X-ray)/4.PNG","./img/X (X-ray)/5.PNG"],
		Y: ["./img/Y (Yard)/1.PNG","./img/Y (Yard)/2.PNG","./img/Y (Yard)/3.PNG","./img/Y (Yard)/4.PNG","./img/Y (Yard)/5.PNG"],
        Z: ["./img/Z (Zebra)/1.PNG", "./img/Z (Zebra)/2.PNG", "./img/Z (Zebra)/3.PNG"],
    };


	const audioSources = {
		A: "../Audio/morse a.wav",
		B: "../Audio/morse b.wav",
		C: "../Audio/morse c.wav",
		D: "../Audio/morse d.wav",
		E: "../Audio/morse e.wav",
		F: "../Audio/morse f.wav",
		G: "../Audio/morse g.wav",
		H: "../Audio/morse h.wav",
		I: "../Audio/morse i.wav",
		J: "../Audio/morse j.wav",
		K: "../Audio/morse k.wav",
		L: "../Audio/morse l.wav",
		M: "../Audio/morse m.wav",
		N: "../Audio/morse n.wav",
		O: "../Audio/morse o.wav",
		P: "../Audio/morse p.wav",
		Q: "../Audio/morse q.wav",
		R: "../Audio/morse r.wav",
		S: "../Audio/morse s.wav",
		T: "../Audio/morse t.wav",
		U: "../Audio/morse u.wav",
		V: "../Audio/morse v.wav",
		W: "../Audio/morse w.wav",
		X: "../Audio/morse x.wav",
		Y: "../Audio/morse y.wav",
		Z: "../Audio/morse z.wav",
	};
	

	
	const letterNames = {
		A: "Archery",
		B: "Banjo",
		C: "Candy",
		D: "Dog",
		E: "Eye",
		F: "Firetruck",
		G: "Giraffe",
		H: "Hippo",
		I: "Insect",
		J: "Jet",
		K: "Kite",
		L: "Laboratory",
		M: "Mustache",
		N: "Net",
		O: "Orchestra",
		P: "Paddle",
		Q: "Quarterback",
		R: "Robot",
		S: "Submarine",
		T: "Tape",
		U: "Unicorn",
		V: "Vacuum",
		W: "Wand",
		X: "X-ray",
		Y: "Yard",
		Z: "Zebra",
	};
	



    if (imageSources[output]) {
        // Clear the previous content
        while (imageContainer.firstChild) {
            imageContainer.removeChild(imageContainer.firstChild);
        }

        let currentIndex = 0;

        // Create an img element
        const image = document.createElement('img');
        image.src = imageSources[output][currentIndex];
        image.alt = `Image for ${output}`;

		image.style.width = '245px'; // Set the width to 200px
        image.style.height = '290px'; // Set the height to 200px
		image.style.margin = '-55px';	 
		image.style.marginLeft='300px'
		// image.style.marginBottom='50px'
		
		// image.style.marginLeft="400px"
		// image.style.marginBottom="-300px"


		 var button = document.getElementById("hintButton");
  		button.style.display = "none";


        // Function to change images every 1 second
        imageRotationInterval =setInterval(function () {
            currentIndex = (currentIndex + 1) % imageSources[output].length;
            image.src = imageSources[output][currentIndex];
        }, 900);

		setTimeout(function(){
			clearInterval(imageRotationInterval);
		},3600);

		nameContainer.textContent = letterNames[output];

    } else {
        // If no image found for the selected alphabet, display an error or placeholder image
        imageContainer.textContent = 'Image not found';
    }
}

document.getElementById('hintButton').addEventListener('click', getOption9);


function displayHintImages() {
    const selectElement = document.querySelector('#alphabetInput');
    const output = selectElement.value.toUpperCase();
    const imageContainer = document.querySelector('.outputImg');
    const nameContainer = document.querySelector('.outputName');

	const letterNames = {
		A: "Archery",
		B: "Banjo",
		C: "Candy",
		D: "Dog",
		E: "Eye",
		F: "Firetruck",
		G: "Giraffe",
		H: "Hippo",
		I: "Insect",
		J: "Jet",
		K: "Kite",
		L: "Laboratory",
		M: "Mustache",
		N: "Net",
		O: "Orchestra",
		P: "Paddle",
		Q: "Quarterback",
		R: "Robot",
		S: "Submarine",
		T: "Tape",
		U: "Unicorn",
		V: "Vacuum",
		W: "Wand",
		X: "X-ray",
		Y: "Yard",
		Z: "Zebra",
	};

    // Define image sources for each alphabet
	const imageSources = {
        A: ["./img/A (Archery)/1.PNG", "./img/A (Archery)/2.PNG", "./img/A (Archery)/3.PNG"],
        B: ["./img/B (Banjo)/1.PNG", "./img/B (Banjo)/2.PNG", "./img/B (Banjo)/3.PNG","./img/B (Banjo)/4.PNG","./img/B (Banjo)/5.PNG"],
		C: ["./img/C (Candy)/1.PNG","./img/C (Candy)/2.PNG","./img/C (Candy)/3.PNG","./img/C (Candy)/4.PNG","./img/C (Candy)/5.PNG"],
        D: ["./img/D (Dog)/1.PNG", "./img/D (Dog)/2.PNG", "./img/D (Dog)/3.PNG", "./img/D (Dog)/4.PNG"],
		E: ["./img/E (Eye)/1.PNG","./img/E (Eye)/2.PNG"],
		F: ["./img/F (Firetruck)/1.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/3.PNG","./img/F (Firetruck)/4.PNG","./img/F (Firetruck)/5.PNG"],
		G: ["./img/G (Giraffe)/1.PNG","./img/G (Giraffe)/2.PNG","./img/G (Giraffe)/3.PNG","./img/G (Giraffe)/4.PNG"],
		H: ["./img/H (Hippo)/1.PNG","./img/H (Hippo)/2.PNG","./img/H (Hippo)/3.PNG","./img/H (Hippo)/4.PNG","./img/H (Hippo)/5.PNG"],
		I: ["./img/I (Insect)/1.PNG","./img/I (Insect)/2.PNG","./img/I (Insect)/3.PNG"],
		J: ["./img/J (Jet)/1.PNG","./img/J (Jet)/2.PNG",'./img/J (Jet)/3.PNG','./img/J (Jet)/4.PNG','./img/J (Jet)/5.PNG'],
		K: ["./img/K (Kite)/1.PNG","./img/K (Kite)/2.PNG","./img/K (Kite)/3.PNG","./img/K (Kite)/4.PNG"],
		L: ["./img/L (Laboratory)/1.PNG","./img/L (Laboratory)/2.PNG","./img/L (Laboratory)/3.PNG","./img/L (Laboratory)/4.PNG","./img/L (Laboratory)/5.PNG"],
		M: ["./img/M (Mustache)/1.PNG","./img/M (Mustache)/2.PNG","./img/M (Mustache)/3.PNG"],
		N: ["./img/N (Net)/1.PNG","./img/N (Net)/2.PNG","./img/N (Net)/3.PNG"],
		O: ["./img/O (Orchestra)/1.PNG","./img/O (Orchestra)/2.PNG","./img/O (Orchestra)/3.PNG","./img/O (Orchestra)/4.PNG"],
		P: ["./img/P (Paddle)/1.PNG","./img/P (Paddle)/2.PNG","./img/P (Paddle)/3.PNG","./img/P (Paddle)/4.PNG","./img/P (Paddle)/5.PNG"],
		Q: ["./img/Q (Quarterback)/1.PNG","./img/Q (Quarterback)/2.PNG","./img/Q (Quarterback)/3.PNG","./img/Q (Quarterback)/4.PNG","./img/Q (Quarterback)/5.PNG"],
		R: ["./img/R (Robot)/1.PNG","./img/R (Robot)/2.PNG","./img/R (Robot)/3.PNG","./img/R (Robot)/4.PNG"],
		S: ["./img/S (Submarine)/1.PNG","./img/S (Submarine)/2.PNG","./img/S (Submarine)/3.PNG","./img/S (Submarine)/4.PNG"],
		T: ["./img/T (Tape)/1.PNG","./img/T (Tape)/2.PNG"],
		U: ["./img/U (Unicorn)/1.PNG","./img/U (Unicorn)/2.PNG","./img/U (Unicorn)/3.PNG","./img/U (Unicorn)/4.PNG"],
		V: ["./img/V (Vacuum)/1.PNG","./img/V (Vacuum)/2.PNG","./img/V (Vacuum)/3.PNG","./img/V (Vacuum)/4.PNG","./img/V (Vacuum)/5.PNG"],
		W: ["./img/W (Wand)/1.PNG","./img/W (Wand)/2.PNG","./img/W (Wand)/3.PNG","./img/W (Wand)/4.PNG"],
		X: ["./img/X (X-ray)/1.PNG","./img/X (X-ray)/2.PNG","./img/X (X-ray)/3.PNG","./img/X (X-ray)/4.PNG","./img/X (X-ray)/5.PNG"],
		Y: ["./img/Y (Yard)/1.PNG","./img/Y (Yard)/2.PNG","./img/Y (Yard)/3.PNG","./img/Y (Yard)/4.PNG","./img/Y (Yard)/5.PNG"],
        Z: ["./img/Z (Zebra)/1.PNG", "./img/Z (Zebra)/2.PNG", "./img/Z (Zebra)/3.PNG" ,"./img/Z (Zebra)/4.PNG","./img/Z (Zebra)/5.PNG"],
    };

	const audioSources = {
		A: "../Audio/morse a.wav",
		B: "../Audio/morse b.wav",
		C: "../Audio/morse c.wav",
		D: "../Audio/morse d.wav",
		E: "../Audio/morse e.wav",
		F: "../Audio/morse f.wav",
		G: "../Audio/morse g.wav",
		H: "../Audio/morse h.wav",
		I: "../Audio/morse i.wav",
		J: "../Audio/morse j.wav",
		K: "../Audio/morse k.wav",
		L: "../Audio/morse l.wav",
		M: "../Audio/morse m.wav",
		N: "../Audio/morse n.wav",
		O: "../Audio/morse o.wav",
		P: "../Audio/morse p.wav",
		Q: "../Audio/morse q.wav",
		R: "../Audio/morse r.wav",
		S: "../Audio/morse s.wav",
		T: "../Audio/morse t.wav",
		U: "../Audio/morse u.wav",
		V: "../Audio/morse v.wav",
		W: "../Audio/morse w.wav",
		X: "../Audio/morse x.wav",
		Y: "../Audio/morse y.wav",
		Z: "../Audio/morse z.wav",
	};


	const alphabetTimings = {
		A: { interval: 660, timeout: 1320,},
		B: { interval: 700, timeout: 2800, },
		C: { interval: 800, timeout: 3200, 	 },
		D: { interval: 500, timeout: 1500, },
		E: { interval: 400, timeout: 400,  },
		F: { interval: 600, timeout: 3000 },
		G: { interval: 1050, timeout: 3150},
		H: { interval: 600, timeout: 2400 },
		I: { interval: 550, timeout: 1100 },
		J: { interval: 750, timeout: 3000 },
		K: { interval: 800, timeout: 2400 },
		L: { interval: 500, timeout: 2000 },
		M: { interval: 750, timeout: 1500 },
		N: { interval: 550, timeout: 1100, },
		O: { interval: 650, timeout: 1950 },
		P: { interval: 750, timeout: 3000,  },
		Q: { interval: 650, timeout: 2600 },
		R: { interval: 450, timeout: 1350 },
		S: { interval: 600, timeout: 1800 },
		T: { interval: 500, timeout: 500 },
		U: { interval: 650, timeout: 1950 },
		V: { interval: 200, timeout: 800 },
		W: { interval: 750, timeout: 2250 },
		X: { interval: 950, timeout: 3850 },
		Y: { interval: 750, timeout: 3150 },
		Z: { interval: 500, timeout: 2000 },
	};
	



    // Clear the previous content
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }

    if (imageSources[output]) {
        let currentIndex = 0;

        // Create an img element
        const image = document.createElement('img');
        image.src = imageSources[output][currentIndex];
        image.alt = `Image for ${output}`;

        image.style.width = '245px'; // Set the width
        image.style.height = '230px'; // Set the height
        image.style.margin = '-45px'; // Adjust margin as needed
		image.style.marginLeft = '165px';
		image.style.paddingLeft = '140px';
        // Append the image to the container
        imageContainer.appendChild(image);

		// const audio = audioSources[output];
		const audio = new Audio(audioSources[output]);

        // Function to change images every 1 second
        const imageRotationInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % imageSources[output].length;
            image.src = imageSources[output][currentIndex];
			
        }, alphabetTimings[output].interval);

        setTimeout(function () {
            clearInterval(imageRotationInterval);
			setTimeout(function(){
				const restartButton =document.querySelector('#resetButton');
				restartButton.style.display='block'
			},1000);
        }, alphabetTimings[output].timeout);

        nameContainer.textContent = `${letterNames[output]}`;
		// nameContainer.textContent.style.padding='5px'
		
    } else {
        // If no image found for the selected alphabet, display an error or placeholder message
        imageContainer.textContent = 'Image not found';
        nameContainer.textContent = '';
    }
}










// Function to display images after clicking the "Hint to remember" button
function getOption9() {
    const selectElement = document.querySelector('#alphabetInput');
    const output = selectElement.value.toUpperCase();
    const imageContainer = document.querySelector('.outputImg');
    const nameContainer = document.querySelector('.outputName');
    
	// const playbackRates = {
    //     V: 0.2 // Set a custom playback rate for "V"
    // };

    
}



// Function to reset to Step One
function resetToStepOne() {
	document.getElementById('canvas1').style.visibility = 'visible';
	document.getElementById('canvas2').style.visibility = 'hidden';
	document.getElementById('alphabetInput').value = ''; 
	// Clear the stored user input	
    clearStepTwo();
	document.getElementById('errorText').textContent = '';

	const selectedAlphabetElement = document.querySelector('.output');
	const morseOutputElement = document.querySelector('.out');
	
	
    selectedAlphabetElement.textContent = '';
	morseOutputElement.textContent='';

	hideImages();

	hideHintButton();
	
  }


  function hideImages() {
    // Add code here to hide any previously displayed images
    // For example:
    const imageElements = document.querySelectorAll('.outputImg'); // Replace with the actual class used for images
    for (const imageElement of imageElements) {
        imageElement.style.display = 'none';
    }
}

function hideHintButton() {
    const hintButton = document.getElementById('hintButton');
    hintButton.style.display = 'none';

	
}





  function showHintButton() {
    const hintButton = document.getElementById('hintButton');
    hintButton.style.display = 'block';
}

function clearImages() {
    const imageContainer = document.querySelector('.outputImg');
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
}

function clearName() {
    const nameContainer = document.querySelector('.outputName');
    nameContainer.textContent = ''; // Clear the text content
}

function clearMorseCode() {
    const morseCodeContainer = document.querySelector('.out2');
    morseCodeContainer.textContent = ''; // Clear the text content
}

  
  // Function to submit Step One
  function submitStepOne() {
	const alphabetInput = document.getElementById('alphabetInput').value;
	clearImages();
	clearName();
	clearMorseCode();

	const restartButton =document.querySelector('#resetButton');
	restartButton.style.display='none';
	
	showHintButton();



	if (alphabetInput.length === 1 && /^[a-zA-Z]+$/.test(alphabetInput)) {
		userInput=alphabetInput;
	  document.getElementById('canvas1').style.visibility = 'hidden';
	  document.getElementById('canvas2').style.visibility = 'visible';
	} else {
	  document.getElementById('errorText').textContent = 'Please enter a single alphabet.';
	}
	
  }
  

  function displayStepTwo() {
    const selectedAlphabetElement = document.querySelector('.output');
	
    selectedAlphabetElement.textContent = userInput;
	const morseOutputElement = document.querySelector('.out');
	morseOutputElement.textContent=userInput;

	document.getElementById(".out2").textContent = "";

	hideImages();
	showHintButton();

	setTimeout(function (){
		const restartButton =document.querySelector('#resetButton');
		restartButton.style.display='block'
	},2000);
	
	
    // generateAlphabetButtons(userInput);
	// showHintButton();
    // You can add logic here to display corresponding images, if needed.
}



function playMorseCode2() {
	const selectedAlphabet = document.querySelector('#alphabetInput').value.toUpperCase();
	
	const audioA = document.getElementById("audioA");
	const audioB = document.getElementById("audioB");
	const audioElement = document.getElementById(`audio${selectedAlphabet}`);

	if (selectedAlphabet === 'A') {
		audioElement.playbackRate = 0.22;
		audioA.play();
	} else if (selectedAlphabet === 'B') {
		audioElement.playbackRate = 0.2;
		audioB.play();
	} 	else if (selectedAlphabet === 'C') {
		audioElement.playbackRate = 0.2;
		audioC.play();
	}
		 else if (selectedAlphabet === 'D') {
			audioElement.playbackRate = 0.33;
		audioD.play();
	}
		  else if (selectedAlphabet === 'E') {
			audioElement.playbackRate = 0.5;
		audioE.play();
	}
		else if (selectedAlphabet === 'F') {
			audioElement.playbackRate = 0.2;
		audioF.play();
	}
	else if (selectedAlphabet === 'G') {
		audioElement.playbackRate = 0.2;
		audioG.play();
	}
	else if (selectedAlphabet === 'H') {
		audioElement.playbackRate = 0.2;
		audioH.play();
	}else if (selectedAlphabet === 'I') {
		audioElement.playbackRate = 0.2;
		audioI.play();
	}else if (selectedAlphabet === 'J') {
		audioElement.playbackRate = 0.25;
		audioJ.play();
	}else if (selectedAlphabet === 'K') {
		audioElement.playbackRate = 0.2;
		audioK.play();
	}else if (selectedAlphabet === 'L') {
		audioElement.playbackRate = 0.32;
		audioL.play();
	}else if (selectedAlphabet === 'M') {
		audioElement.playbackRate = 0.25;
		audioM.play();
	}else if (selectedAlphabet === 'N') {
		audioElement.playbackRate = 0.3;
		audioN.play();
	}else if (selectedAlphabet === 'O') {
		audioElement.playbackRate = 0.3;
		audioO.play();
	}
	else if (selectedAlphabet === 'P') {
		audioElement.playbackRate = 0.25;
		audioP.play();
	}
	else if (selectedAlphabet === 'Q') {
		audioElement.playbackRate = 0.25;
		audioQ.play();
	}else if (selectedAlphabet === 'R') {
		audioElement.playbackRate = 0.35;
		audioR.play();
	}else if (selectedAlphabet === 'S') {
		audioElement.playbackRate = 0.2;
		audioS.play();
	}else if (selectedAlphabet === 'T') {
		audioElement.playbackRate = 0.3;
		audioT.play();
	}else if (selectedAlphabet === 'U') {
		audioElement.playbackRate = 0.2;
		audioU.play();
	}else if (selectedAlphabet === 'V') {
		audioElement.playbackRate = 0.2;
		audioW.play();
		
	}else if (selectedAlphabet === 'W') {
		audioElement.playbackRate = 0.2;
		audioW.play();
	}
	else if (selectedAlphabet === 'X') {
		audioElement.playbackRate = 0.14;
		audioX.play();
	}else if (selectedAlphabet === 'Y') {
		audioElement.playbackRate = 0.24;
		audioY.play();
	}else if (selectedAlphabet === 'Z') {
		audioElement.playbackRate = 0.37;
		audioZ.play();
	}
}

