let btn = document.querySelectorAll(".button");
let inp = document.querySelector("input");
let flag = true;
btn[3].innerText = "÷";
let string = "0";
inp.value = string;

btn.forEach((element) => {
    element.addEventListener("click", ()=>{
        try{
            if(element.innerText === "="){
                string = eval(string);
                inp.value = string;
            }else if(element.innerText === "C"){
                string = "0";
                inp.value = string;
            }else if(element.innerText === "⇐"){
                let value = inp.value;
                value = value.slice(0,-1) || "0";
                inp.value = value;
                string = inp.value;
            }else if(element.innerText === "±"){
                if(string !== "0"){
                    if (inp.value.startsWith("-")) {
                        inp.value = inp.value.slice(1);
                    } else {
                        inp.value = "-" + inp.value;
                    }
                    string = inp.value;
                }
            }
            else{
                if (string === "0" && element.innerText !== ".") {
                    string = "";  // Reset string if initial "0" is present and user inputs a non-decimal character
                }
                else if(element.innerText === "÷"){
                    string = string + "/";
                    inp.value = string;
                } else if (element.innerText === "X") {
                    string = string + "*";
                    inp.value = string
                }else{
                    string = string + element.innerText;
                    inp.value = string;
                }
            }
        }catch(e){
            inp.value = "Err";
            console.log(e);
        }
    });
});
