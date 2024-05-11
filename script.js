function detectchar(){
const cinput=document.getElementById("charinput");
const result=document.getElementById("result");
const charactor=cinput.value;
if(IsAscii(charactor)){
    result.innerText = 'The Charactor you entered is ASCII Charactor';
}
else{
    result.innerText = 'The Charactor you entered is UNICODE Charactor';
}

}
function IsAscii(charactor){
return charactor.charCodeAt(0)<=127; 
}