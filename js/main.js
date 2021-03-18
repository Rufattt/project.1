//Get Button
mybutton = document.getElementById("myBtn");

//when the user clicks on the button, scrollto the top of the document
function topFunction(){
    document.body.scrollTop = 0;  //for safari
    document.documentElement.scrollTop = 0; //for Chrome Firefox IE OPEra
}

//CHAT BUTTON 
function openChat(){
    document.getElementById('chatPopup').style.display = "block";
}
function closeChat(){
    document.getElementById('chatPopup').style.display = "none";
}
