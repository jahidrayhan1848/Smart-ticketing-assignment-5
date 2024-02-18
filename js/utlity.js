//  getelementById ///
function getElementByIdElement (elementId,value){
    const element=document.getElementById(elementId).innerText;
    const number=parseInt(element);
    number.innerText=value;

    
}