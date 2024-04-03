var changeSize = False;
var changeVisibility = False;
var changeDisplay = False;

function quartaFeira() {
    document.getElementById('test').innerHTML = 'É quarta-feira meus bacanas';
}

function displayChange() {
    document.getElementById('test').style.display='none' ;
    if (changeDisplay) {
        document.getElementById('test').style.display='block';
    }
    changeDisplay = !changeDisplay;
}

function visibilityChange() {
    document.getElementById('test').style.visibility='hidden';
    if (changeVisibility) {
        document.getElementById('test').style.visibility='visible';
    }
    changeVisibility = !changeVisibility;
}

function funcaoMudarTamanho() {
    document.getElementById('test').style.fontSize = "100px";
    if (changeSize) {
        document.getElementById('test').style.fontSize = "16px";
    }
    changeSize = !changeSize;
}

function conta() {
    document.getElementById('test').innerHTML = 7 + 8 + 9 + 10;
}
