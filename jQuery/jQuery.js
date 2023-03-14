$(document).ready(function () {
  // Toggle function
    $(".tog-btn").click(function(){
        $("#toggle").toggle(200);
    if (document.querySelector(".tog-btn").innerHTML == "Show") {
            document.querySelector(".tog-btn").innerHTML = "Hide"
     }
            
else {
            document.querySelector(".tog-btn").innerHTML = "Show"
     }
})
  // FadeIn Function
  $(".fade-in").click(function(){
    $(".fade-txt").fadeIn(400);
  });

  // FadeOut Function
  $(".fade-out").click(function(){
    $(".fade-txt").fadeOut(400);
  });

  // FadeToggle Function
  $(".fade-tog").click(function(){
    $(".toggle-txt").fadeToggle('slow');
  });

// FadeTo Function
  $(".fade-to").click(function(){
    $(".fadeTo-txt").fadeTo('slow',0.10);
  });
// Concat Function
  $(".concat").click(function(){
    let a = $("#inp").val();
    let b = $("#inp2").val();
    let result = a.concat(" " +b);
   document.getElementById("conc").innerHTML= result;
  });
    
  // Index Function
  $("#index").click(function () { 
let text = "Karachi is the city of lights";
let result = text.indexOf("city");

document.getElementById("demo").innerHTML = result;
 });

 // Length Function
 $(".length-btn").click(function () { 
  let d = ("The Length of List Items is:" + " "+ $( "li").length);
  document.getElementById("length").innerHTML = d;
});

// CharAt Function  
$(".char-btn").click(function () { 
let charText = "Hello World";
let character = charText.charAt(6);

document.getElementById("char").innerHTML ="Character on 6th index is "+ character;
});

// Lower Case Function
$(".lower").click(function(){
  let characters = $("#case").val();
  let lowerCase = characters.toLowerCase();
  document.getElementById("lcase").innerHTML = lowerCase;
});

// Upper Case Function  
$(".uper").click(function(){
  let characters = $("#case").val();
  let lowerCase = characters.toUpperCase();
  document.getElementById("ucase").innerHTML = lowerCase;
});
  
 // To String Function 
$(".string-btn").click(function () { 
  let input = $("#string").val();
  let string = input.toString();
  document.getElementById("string-text").innerHTML = string;
});

// Sort Function
$(".sort-btn").click(function(){
  let fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
  $("#sort").html("Sort of Array is "+  fruits.sort());
});

// Reverse Function
$(".reverse-btn").click(function(){
  let fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
  $("#reverse").html("Reverse of Same Array is "+  fruits.reverse());
});

// Pop Function
$(".pop-btn").click(function(){
  let fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
  fruits.pop();
  $("#pop").html("Pop Removes The Last Element of Same Array "+  fruits);
});

// Push Function
$(".push-btn").click(function(){
  let fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
  fruits.push("Grapes");
  $("#push").html("Push adds new item in the end of Same Array "+  fruits);
});

// ForEach Function
$(".foreach-btn").click(function(){
  let text = "";
  const fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
  fruits.forEach(myFunction);
  
  $("#foreach").html(text)
  
  function myFunction(item, index) {
    text += index + ": " + item + "<br>"; 
  }
});
 
// Sub String Function
$(".sub-btn").click(function(){
  let word = "Hello World"
  let result = word.substring(1)
  $(".sub-text").html("Sub String Removes The value of given index '1' ="+ result)
  
});
  
 


  
});

