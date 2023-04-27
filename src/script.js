document.addEventListener("DOMContentLoaded",function(){
    console.log("Document is ready")
    const display = document.getElementById('calc-display');
    console.log(display);
    const buttons = document.getElementsByClassName('btn');
    console.log(buttons);

    let currentValue="";

    function evaluateResult(){
        //Never use eval in production applications
        //Most dangerous function to use
        const convertedValue = currentValue
            .replace('×','*')
            .replace('÷','/')
            .replace('%','*0.01')
            .replace('sin','Math.sin')
            .replace('cos','Math.cos')
            .replace('ln','Math.log')
            .replace('π','Math.PI')
            .replace('log','Math.log10')
            .replace('e','Math.E')
            .replace('tan','Math.tan')
            .replace('√','Math.sqrt');

        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for(let i=0; i<buttons.length; i++){
        const button = buttons[i];
        button.addEventListener('click',function (){
            const value = buttons[i].innerText;
            try{
                    if(value == 'AC'){
                        currentValue="";
                        display.value = currentValue;
                    }
                    else if(value == '='){
                        evaluateResult();
                    }
                    else{
                        currentValue += value;
                        display.value = currentValue;
                    }
                }
                catch(error)
                {
                    console.error(error);
                    currentValue = "ERROR";
                    display.value = currentValue;
                }
        })
    }
});
