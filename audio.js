var myAudio = document.getElementById("myAudio");
				var myAudio2 = document.getElementById("myAudio2");
				var myAudio3 = document.getElementById("myAudio3");
				
				var isPlaying = false;
				var isPlaying2 = false;
				var isPlaying3 = false;
				
						function togglePlay() {
								
						  if(isPlaying2 || isPlaying3){
						  	myAudio2.pause();
						  	myAudio3.pause();
						  } 
						 if (isPlaying) {
						    myAudio.pause();
						  } else {
						    myAudio.play();
						  }
						};
						myAudio.onplaying = function() {
						  isPlaying = true;
						};
						myAudio.onpause = function() {
						  isPlaying = false;
						};

						
						function togglePlay2(){
							 
							 if(isPlaying || isPlaying3){
							 	myAudio.pause();
							 	myAudio3.pause();
							 }
							if (isPlaying2) {
						   		myAudio2.pause();
						   		} 
						  else {
						  		 myAudio2.play();
						  	}

						};
						myAudio2.onplaying = function() {
						  isPlaying2 = true;
						};
						myAudio2.onpause = function() {
						  isPlaying2 = false;
						}


						function togglePlay3(){

							if(isPlaying || isPlaying2){
								myAudio.pause();
								myAudio2.pause();
							}
							if(isPlaying3){
								myAudio3.pause();
							}
							else{
								myAudio3.play()
							}
						};
						myAudio3.onplaying = function() {
						  isPlaying3 = true;
						};
						myAudio3.onpause = function() {
						  isPlaying3 = false;
						}
