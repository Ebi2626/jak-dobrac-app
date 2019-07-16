import '../sass/style.scss';

const start = document.getElementById("start");
let firstColor = document.getElementById("firstColor"),
secondColor = document.getElementById("secondColor"),
thirdColor = document.getElementById("secondColor"),
pattern = document.getElementById("pattern"),
patternType = document.getElementById("patternType"),
toggler = document.getElementById("menu-toggler"),
tie = document.getElementById("chose-tie"),
pocketSquare = document.getElementById("chose-pocketSquare"),
bowTie = document.getElementById("chose-bowTie"),
ascot = document.getElementById("chose-ascot"),
tie2 = document.getElementById("chose-tie2"),
pocketSquare2 = document.getElementById("chose-pocketSquare2"),
bowTie2 = document.getElementById("chose-bowTie2"),
ascot2 = document.getElementById("chose-ascot2"),
describe = document.getElementById("describe-paragraph");
firstColor.onchange = firstColor.value;
secondColor.onchange = secondColor.value;
thirdColor.onchange = thirdColor.value;
pattern.onchange = pattern.value;
patternType.onchange = patternType.value;
const chosing = function() {
    this.classList.contains("hovered") ? this.classList.remove("hovered") :this.classList.add("hovered");
};

tie.addEventListener("click", chosing);
pocketSquare.addEventListener("click", chosing);
bowTie.addEventListener("click", chosing);
ascot.addEventListener("click", chosing);
tie2.addEventListener("click", chosing);
pocketSquare2.addEventListener("click", chosing);
bowTie2.addEventListener("click", chosing);
ascot2.addEventListener("click", chosing);


const toglowanie = function(){
    let hamburgerek = document.getElementById("menu");
    hamburgerek.className == "untoggled" ? hamburgerek.className = "toggled" : hamburgerek.className = "untoggled"
}
toggler.addEventListener("click",toglowanie);

function HEX2RGB (hex) {
    "use strict";
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }
    if ((hex.length < 2) || (hex.length > 6)) {
        return false;
    }
    let values = hex.split(''),
        r,
        g,
        b;

    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return false;
    }
    return [r,g,b];
}

start.onclick = function() {
    let fcr1 = document.getElementById("firstColorResult-1"),
    fcr2 = document.getElementById("firstColorResult-2"),
    fcr3 = document.getElementById("firstColorResult-3"),
    scr1 = document.getElementById("secondColorResult-1"),
    scr2 = document.getElementById("secondColorResult-2"),
    scr3 = document.getElementById("secondColorResult-3"),
    tcr1 = document.getElementById("thirdColorResult-1"),
    tcr2 = document.getElementById("thirdColorResult-2"),
    tcr3 = document.getElementById("thirdColorResult-3"),
    pr1 = document.getElementById("patternResult-1"),
    pr2 = document.getElementById("patternResult-2"),
    pr3 = document.getElementById("patternResult-3"),
    prt1 = document.getElementById("patternTypeResult-1"),
    prt2 = document.getElementById("patternTypeResult-2"),
    prt3 = document.getElementById("patternTypeResult-3");
    
    function invertion(val) {
        for (let i = 0; i < 3; i++) {
            val[i] = 255 - val[i]
        }
        return val;
    }
    function closing(val) {
        for (let i = 0; i < 3; i++){
            if (val[i] >= 155)
            {
                val[i] = val[i] - 50
            } else {
                val[i] = 50 + val[i]
            }
        }
        return val;
    }
    function monochrome(val) {
        if (val[0]+val[1]+val[2] >= 383) {
            for (let i = 0; i < 3; i++){
                val[i] = 0
            }
        } else { 
            for (let i = 0; i < 3; i++){
                val[i] = 255
            }
        }
        
        return val;
    };
      function componentToHex(c) {
          let r = c[0].toString(16),
          g = c[1].toString(16),          
          b = c[2].toString(16);
          r = r == 0 ? r + 0: r;
          b = b == 0 ? b + 0: b;
          g = g == 0 ? g + 0: g;
            return "#" + r + g + b;
          }
          function patterns(){
              switch(pattern.value){
                    case "Brak":
                        pr1.innerHTML = "Wzorzysty";
                        pr2.innerHTML = "Wzorzysty";
                        pr3.innerHTML = "Drobny";
                        break;
                    case "Wzorzysty":
                        pr1.innerHTML = "Brak";
                        pr2.innerHTML = "Brak";
                        pr3.innerHTML = "Drobny";
                        break;
                    case "Drobny":
                        pr1.innerHTML = "Wzorzysty";
                        pr2.innerHTML = "Drobny";
                        pr3.innerHTML = "Brak"; 
                        break;
              }
          }
          function patternTypes(){
            switch(patternType.value){
                    case "Niegeometryczny":
                        prt1.innerHTML = "Niegeometryczny";
                        prt2.innerHTML = "Kropki";
                        prt3.innerHTML = "Grochy";
                        break;
                    case "Kratka":
                        prt1.innerHTML = "Kratka";
                        prt2.innerHTML = "Paski";
                        prt3.innerHTML = "Brak";
                        break;
                    case "Grochy":
                        prt1.innerHTML = "Kropki";
                        prt2.innerHTML = "Brak";
                        prt3.innerHTML = "Brak";
                        break;
                    case "Paski":
                        prt1.innerHTML = "Brak";
                        prt2.innerHTML = "Kratka";
                        prt3.innerHTML = "Brak";
                        break;
                    case "Kropki":
                        prt1.innerHTML = "Niegeometryczny";
                        prt2.innerHTML = "Brak";
                        prt3.innerHTML = "Grochy";
                        break;
            }
        }

        let closeColor1 = componentToHex(closing(HEX2RGB(firstColor.value))),
        invertedColor1 = componentToHex(invertion(HEX2RGB(firstColor.value))),
        monochromaticColor1 = componentToHex(monochrome(HEX2RGB(firstColor.value))),
        closeColor2 = componentToHex(closing(HEX2RGB(secondColor.value))),
        invertedColor2 = componentToHex(invertion(HEX2RGB(secondColor.value))),
        monochromaticColor2 = componentToHex(monochrome(HEX2RGB(secondColor.value))),
        closeColor3 = componentToHex(closing(HEX2RGB(thirdColor.value))),
        invertedColor3 = componentToHex(invertion(HEX2RGB(thirdColor.value))),
        monochromaticColor3 = componentToHex(monochrome(HEX2RGB(thirdColor.value)));
        fcr1.style.backgroundColor = closeColor2;
        scr1.style.backgroundColor = closeColor1;
        tcr1.style.backgroundColor = monochromaticColor1;
        fcr2.style.backgroundColor = invertedColor2;
        scr2.style.backgroundColor = invertedColor1;
        tcr2.style.backgroundColor = monochromaticColor1;
        fcr3.style.backgroundColor = closeColor1;
        scr3.style.backgroundColor = invertedColor2;
        tcr3.style.backgroundColor = monochromaticColor2;
        patterns();
        patternTypes();
        describe.innerHTML = 'Propozycja 1 dobiera barwy na zasadzie harmonijnego kontrastu, gdzie barwa 1 (dominująca)jest zbliżona do barwy 2 przedmiotu, który już posiadasz. Barwa 2 jest zbliżona do dominującej barwy na przedmiocie, który posiadasza, a barwa 3 jest biała lub czarna i dobierana jest na zasadzie kontrastu do ciepła barwy dominującej.<br><br>Propozycja 2 dobiera barwy na zasadzie ostrego kontrastu, a więc barwa dominująca (1) kontrastuje do wybranej przez Ciebie barwy drugorzędnej. Barwa drugorzędna z kolei kontrastuje do barwy dominującej, którą wybrałeś. Barwa 3 jest dobrana tutaj dokładnie w ten sam sposób, co w propozycji 1.<br><br>Propozycja 3 dobiera barwy na zasadzie harmonii barw, więc jej barwa 1 jest zblżona do tej wybranej przez Ciebie. Barwa 2 opiera się na kontraście do barwy 2 wybranej przez Ciebie, a kolor 3 jest monochromatycznym kontrastem do ciepła barwy 3.';
}
