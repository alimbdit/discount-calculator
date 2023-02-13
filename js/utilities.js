




function getTextValue (id){
    const textString = document.getElementById(id).innerText;
    const textNumber = parseFloat(textString);
    return textNumber;
};

function setValue (id, value){
    const text = document.getElementById(id);
    text.innerText = value;
};




