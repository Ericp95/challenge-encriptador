function encriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    const texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        var out = ""
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(texto[i] == 'a'){
                out += traduccion["a"] ;
            }
            else if(texto[i] == 'e'){
                out += traduccion["e"];
            }
            else if(texto[i] == 'i'){
                out += traduccion["i"]; 
            }
            else if(texto[i] == 'o'){
                out += traduccion["o"]; 
            }
            else if(texto[i] == 'u'){
                out += traduccion["u"]; 
            }
            else{
                out += texto[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = out;
    }

    return;

}