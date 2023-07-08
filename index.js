const btnVal = document.querySelector('.button-box')
const result = document.querySelector('#res')
// const reset = document.querySelector('#reset')
const eqlTO = document.querySelector('#equal')


function giveVal(event){
    try{

        // console.log(event.target.key)
        var val = event.target.value;

        // console.log( val.value.codePointAt(val.length ) )
        // if(      val.value[val.length - 1].codePointAt(0)   )

        if(result.value[0] == '0' ){
            console.log(result.value);
            result.value = result.value.slice(1,result.value.length-1);
        }

        if(val == 'DEL' || val == 'RESET' || val == '='){
            if(val == 'RESET'){
                result.value = "";
            }

            if(val == 'DEL'){
                result.value = result.value.slice(0,-1);
            }

            

            if(val == '=' ){
                
                var calc = result.value;
                console.log(calc);
                result.value = eval(calc);
                console.log("equal to is clicked from init");
            }
        }
        else {
            result.value = result.value + val;
            console.log(result.value);
        }
    }
    catch(err){
        result.style.fontSize = "15px";
        result.value = "Enter Something Meaningful you dumbass"
    }
    // console.log(event.target.value);
}

function checkAlphas(event){

    // let arr = [];
    var str = event.target.value;

    // console.log(str);
    if(str[0] == '0' ){
        // console.log(result.value);
        str = str.slice(1);
        console.log('alpha : '+str);
    }

    str = Array.from(str).filter(ele => {
        
        return (ele >= 0 && ele<= 9 || (ele=='+' || ele=='-' || ele=='*' || ele=='/' || ele=='.'));
    });

    let str2 = str.toString().replaceAll("," , "");
    result.value = str2;
}

function makeMyButtons(){
    for(let i = 0 ; i<10 ; i++){
        let btns = document.createElement('input');
        btns.value = `${i}`;
        btns.type = "button"

        btnVal.append(btns);
    }
}

function init(){

    // makeMyButtons();

    btnVal.addEventListener('click' , giveVal);

    result.addEventListener('input' , checkAlphas);

    // eql.addEventListener('click' , showRes);


    result.addEventListener("keypress" , function(event){

        if(event.code == "Enter"){
            event.preventDefault();

            eqlTO.click();
        }
    })
}
    
init();

