var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":)","<img  class='emoji' src='img/smileyface.png' />");

    chatStr = chatStr.replace(":(","<img  class='emoji' src='img/ButtonSad.png' />");
    
    chatStr = chatStr.replace(":'(","<img  class='emoji' src='img/crying.png' />");
    
    chatStr = chatStr.replace("xp","<img  class='emoji' src='img/xp.png' />");
    
    chatStr = chatStr.replace("-_-","<img  class='emoji' src='img/facepalm.png' />");
    
    chatStr = chatStr.replace(">:(","<img  class='emoji' src='img/rage.png' />");
    
    chatStr = chatStr.replace("8)","<img  class='emoji' src='img/sunglasses.png' />");
    
    chatStr = chatStr.replace("boogie","******");
    
    chatStr = chatStr.replace("fuck","****");
    
    chatStr = chatStr.replace("shit","****");
    
    chatStr = chatStr.replace("ass","***");
};


/*--------------------p1Chat--------------------*/
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value ="";
    
    /*if(chatStr ==":)"){
        chatStr = "<img  class='emoji' src='img/smileyface.png' />";
    }else if(chatStr == ":("){
        chatStr = "<img class='emoji' src='img/ButtonSad.png' />"
    }*/
    
    replaceEmojis();
};

/*--------------------p2Chat--------------------*/
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value ="";
    
    replaceEmojis();
};

/*--------------------chatDisplay-----------------*/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    
    if (chatNum == 1){
    ndiv.style.backgroundColor ="#AFA";
    } else if (chatNum == 2){
    ndiv.style.backgroundColor ="#AAF"}; 
    
    ndiv.style.padding = "10px"
    document.getElementById("chatDisplay").appendChild(ndiv);
    
    
    
};

/*----------------Interactions---------------*/
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode ==13){
        changeChatStr();
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode ==13){
        changeChatStr2();
        createChat(2);
    }
});