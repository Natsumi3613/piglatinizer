// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function(){
  
  $("input").keyup(function(event){
    if (event.keyCode === 13){
      $("#submit").click();
    }
  });
    $('#clear').click(function(){
                location.reload();
        });
  $("#submit").click(function(){
    var message = $("#msg").val().split(" ");

    function meow(word){
      var v = ["a", "e", "i", "o", "u"];
      var firstChar = word.charAt(0);
      if(v.includes(firstChar)){
        return word + "meow ";
      
      }else{
        // everything but first letter + first letter + meow
        return word.slice(1) + word.slice(0,1) + "meow ";
      }
      
    }
    
    
  
    var catMessage = " ";
    for(var i = 0; i < message.length; i++){
      catMessage += meow(message[i]);
    }
    
    $("#result").html(catMessage);

  });
  
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


