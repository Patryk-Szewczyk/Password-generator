const bcg = document.querySelector('div.background');
const win = window;
let winHgt = 0;
win.addEventListener('load', () => {
    winHgt = window.innerHeight;
    bcg.style.height = winHgt + 'px';
}, false);
win.addEventListener('resize', () => {
    winHgt = window.innerHeight;
    bcg.style.height = winHgt + 'px';
}, false);


(function() {
    let gsblProp = document.getElementsByClassName('gen-setting-blProp');
    let gsblProp_H = 0;
    gsblProp_H = (100 / gsblProp.length);
    for (i = 0; i < gsblProp.length; i++) {
        gsblProp[i].style.height = gsblProp_H + '%';
    };
}());


const but = document.querySelector('div.gen-button');
const sL_Cb = document.getElementsByClassName('smallLetter-checB')[0];
const bL_Cb = document.getElementsByClassName('bigLetter-checB')[0];
const nC_Cb = document.getElementsByClassName('numericalCharacter-checB')[0];
const sC_Cb = document.getElementsByClassName('specialCharacter-checB')[0];
const nRC_Cb = document.getElementsByClassName('nonRepChar-checB')[0];
const pL_R = document.getElementsByClassName('length-range')[0];
const pL_VA = document.getElementsByClassName('gen-setting-rangeVal')[0];
let psw_An = document.getElementsByClassName('gen-password-value')[0];
let pL_V = 0;
// 35 indeksów, czyli [34]
let smallLetter_Array = [];
let smallLetter_Content = ['q', 'w', 'e', 'ę', 'r', 't', 'y', 'u', 'i', 'o', 'ó', 'p', 'a', 'ą', 's', 'ś', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ł', 'z', 'ż', 'ź', 'x', 'c', 'ć', 'v', 'b', 'n', 'ń', 'm' ];
// 35 indeksów, czyli [34]
let bigLetter_Array = [];
let bigLetter_Content = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "S", "Ś", "T", "U", "W", "X", "Y", "Z", "Ż", "Ź", "Q", "V"];
// 10 indeksów, czyli [9]
let number_Array = [];
let number_Content = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// 32 indeksów, czyli [31]
let specialSign_Array = [];
let specialSign_Content = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ':', ';', '"', "'", '\\', '|', '/', '?', '.', ",", '<', '>'];
// Właściwa operacyjna tablica:
let target_Array = [];
let propOper_Array = [];

pL_R.addEventListener('change', () => {
    pL_V = pL_R.value;
    pL_VA.textContent = ": " + pL_V;

}, false);

win.addEventListener('load', () => {
    sL_Cb.setAttribute('checked', 'checked');
    nC_Cb.setAttribute('checked', 'checked');
    pL_R.setAttribute('min', '1');
    pL_R.setAttribute('max', '40');
    pL_R.setAttribute('value', '14');
    pL_VA.textContent = ": " + pL_R.value;
    target_Array = [];
    propOper_Array = [];
    if (sL_Cb.checked) {
        for (i = 0; i < smallLetter_Content.length; i++) {
            smallLetter_Array[i] = smallLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        smallLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (bL_Cb.checked) {
        for (i = 0; i < bigLetter_Content.length; i++) {
            bigLetter_Array[i] = bigLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        bigLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (nC_Cb.checked) {
        for (i = 0; i < number_Content.length; i++) {
            number_Array[i] = number_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        number_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (sC_Cb.checked) {
        for (i = 0; i < specialSign_Content.length; i++) {
            specialSign_Array[i] = specialSign_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        specialSign_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
}, false);

sL_Cb.addEventListener('change', () => {
    // Reset zawartości:
    target_Array = [];
    propOper_Array = [];
    // Wkładanie zawartości, względem zaznaczonych checkbox'ów:
    if (sL_Cb.checked) {
        for (i = 0; i < smallLetter_Content.length; i++) {
            smallLetter_Array[i] = smallLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        smallLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (bL_Cb.checked) {
        for (i = 0; i < bigLetter_Content.length; i++) {
            bigLetter_Array[i] = bigLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        bigLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (nC_Cb.checked) {
        for (i = 0; i < number_Content.length; i++) {
            number_Array[i] = number_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        number_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (sC_Cb.checked) {
        for (i = 0; i < specialSign_Content.length; i++) {
            specialSign_Array[i] = specialSign_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        specialSign_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
}, false);

bL_Cb.addEventListener('change', () => {
    target_Array = [];
    propOper_Array = [];
    if (sL_Cb.checked) {
        for (i = 0; i < smallLetter_Content.length; i++) {
            smallLetter_Array[i] = smallLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        smallLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (bL_Cb.checked) {
        for (i = 0; i < bigLetter_Content.length; i++) {
            bigLetter_Array[i] = bigLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        bigLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (nC_Cb.checked) {
        for (i = 0; i < number_Content.length; i++) {
            number_Array[i] = number_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        number_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (sC_Cb.checked) {
        for (i = 0; i < specialSign_Content.length; i++) {
            specialSign_Array[i] = specialSign_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        specialSign_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
}, false);

nC_Cb.addEventListener('change', () => {
    target_Array = [];
    propOper_Array = [];
    if (sL_Cb.checked) {
        for (i = 0; i < smallLetter_Content.length; i++) {
            smallLetter_Array[i] = smallLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        smallLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (bL_Cb.checked) {
        for (i = 0; i < bigLetter_Content.length; i++) {
            bigLetter_Array[i] = bigLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        bigLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (nC_Cb.checked) {
        for (i = 0; i < number_Content.length; i++) {
            number_Array[i] = number_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        number_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (sC_Cb.checked) {
        for (i = 0; i < specialSign_Content.length; i++) {
            specialSign_Array[i] = specialSign_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        specialSign_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
}, false);

sC_Cb.addEventListener('change', () => {
    target_Array = [];
    propOper_Array = [];
    if (sL_Cb.checked) {
        for (i = 0; i < smallLetter_Content.length; i++) {
            smallLetter_Array[i] = smallLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        smallLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (bL_Cb.checked) {
        for (i = 0; i < bigLetter_Content.length; i++) {
            bigLetter_Array[i] = bigLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        bigLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (nC_Cb.checked) {
        for (i = 0; i < number_Content.length; i++) {
            number_Array[i] = number_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        number_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (sC_Cb.checked) {
        for (i = 0; i < specialSign_Content.length; i++) {
            specialSign_Array[i] = specialSign_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        specialSign_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
}, false);

nRC_Cb.addEventListener('change', () => {
    if (nRC_Cb.checked) {
        //alert('Non repeat characters is active.');
    } else {}
}, false);




let chB_Char_Array = [];
const sCG = document.getElementsByClassName('chBtoCheck');
for (i = 0; i < sCG.length; i++) {
    chB_Char_Array[i] = sCG[i];
};
let sCH_Counter = 0;

but.addEventListener('click', () => {
    target_Array = [];
    propOper_Array = [];
    if (sL_Cb.checked) {
        for (i = 0; i < smallLetter_Content.length; i++) {
            smallLetter_Array[i] = smallLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        smallLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (bL_Cb.checked) {
        for (i = 0; i < bigLetter_Content.length; i++) {
            bigLetter_Array[i] = bigLetter_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        bigLetter_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (nC_Cb.checked) {
        for (i = 0; i < number_Content.length; i++) {
            number_Array[i] = number_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        number_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    if (sC_Cb.checked) {
        for (i = 0; i < specialSign_Content.length; i++) {
            specialSign_Array[i] = specialSign_Content[i];
        };
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    } else {
        specialSign_Array = [];
        propOper_Array = target_Array.concat(smallLetter_Array, bigLetter_Array, number_Array, specialSign_Array);
    }
    goToGenTypeSelect();
}, false);

function goToGenTypeSelect() {
    sCH_Counter *= 0;
    for (i = 0; i < sCG.length; i++) {
        if (chB_Char_Array[i].checked) {
            sCH_Counter += 1;
        } else {}
    };
    //alert(sCH_Counter == 1);
    if (nRC_Cb.checked) {   // Niepowtarzalne znaki
        if (sCH_Counter > 1) {
            genPswdNonCharRep();
            //alert("With non repeat characters: " + propOper_Array + " | Password length: " + pL_R.value);
        } else {
            smallLetter_Array = [];   // Nie wiem dlaczego, ale musiałem ponownie skasować zawartość tablic...
            bigLetter_Array = [];
            number_Array = [];
            specialSign_Array = [];
            target_Array = [];
            propOper_Array = [];
            alert('To generate password with non repeat characters, you must choose at least two character type.' + propOper_Array);
        }
    } else {   // Powtarzalne znaki
        if (sCH_Counter > 0) {
            genPswWithCharRep();
            //alert("Without non repeat characters: " + propOper_Array + " | Password length: " + pL_R.value);
        } else {
            smallLetter_Array = [];   // Nie wiem dlaczego, ale musiałem ponownie skasować zawartość tablic...
            bigLetter_Array = [];
            number_Array = [];
            specialSign_Array = [];
            target_Array = [];
            propOper_Array = [];
            alert('To generate password without non repeat letters, you must choose at least one character type.' + propOper_Array);
        }
    }
}

function genPswdNonCharRep() {
    let psw_Val = [];
    let rndChar = '';
    for (i = 0; i < pL_R.value; i++) {
        rndChar = (Math.floor(Math.random() * (propOper_Array.length - 1)));
        psw_Val[i] = propOper_Array[rndChar];
        //              numer indeksu | liczba elementów   (- ten zapis: do usinięcia)
        propOper_Array.splice(rndChar, 1);
    }
    psw_An.textContent = psw_Val.join('');
}

function genPswWithCharRep() {
    //alert(smallLetter_Array + bigLetter_Array + number_Array + specialSign_Array + " | Password length: " + pL_R.value);
    // Test wyświetlania elementów z tablicy;
    let psw_Val = [];
    let rndChar = '';
    for (i = 0; i < pL_R.value; i++) {
        rndChar = (Math.floor(Math.random() * (propOper_Array.length - 1)));
        psw_Val[i] = propOper_Array[rndChar];
    }
    psw_An.textContent = psw_Val.join('');
}



//alert(sL_O);