/******************************************************************
+-----------------------------------------------------------------+
|                    DECLARING/INITIALIZING VARIABLE(S)           |
|-----------------------------------------------------------------|
|                                                                 |
+-----------------------------------------------------------------+
******************************************************************/
const allInputs = document.querySelectorAll("input")
const footer = document.querySelector("footer");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexInput = document.querySelector("#hex");
let rgbInput = document.querySelector("#rgb");
let rgbNumberArray = []
const links = document.querySelector(".links a")
let timer;


function valueChecker(){

}


hexInput.addEventListener("keyup", event=>{

    if ( hexInput.value.length === 6 || hexInput.value.length === 7)  {

        clearTimeout(timer)

        timer = setTimeout(()=> {

            let h=0; k=2;
            let arr = []
            
           
            if (hexInput.value[0] !== "#") { 
                
                for (let i = 0; i<3; i++) {

                    arr.push(hexInput.value.toUpperCase().slice(h,k));
                    console.log(arr)
                    h+=2; k+=2;
                }  

            } 
           

            else{
                 
                if (hexInput.value.length === 7) {
                    let hexHash= hexInput.value.slice(1,7)
                    console.log(hexInput.value)
                    
                    for (let i = 0; i<3; i++) {

                        arr.push(hexHash.toUpperCase().slice(h,k));
                        console.log(arr)
                        h+=2; k+=2;
                    }  
                    
                } 
                
                else{
                    hexInput.value = hexInput.value
                }

                

            }
            
            function colorValuePart (a,b,c) {

                let partFromHexValue = arr[a].slice(b,c)
                
                console.log(partFromHexValue)

                if (!isNaN(partFromHexValue)) {
                    partFromHexValue = Number(partFromHexValue)
                }

                else{
                    partFromHexValue = partFromHexValue
                }

                return partFromHexValue;
        
            }


            function calculatedEachColorPart (u,v,w,x,y,z) {

                let eachSixteenValue = colorValuePart(u,v,w)
                let eachUnitValue = colorValuePart(x,y,z)
        
                return hexValues.indexOf(eachSixteenValue) * hexValues.length + hexValues.indexOf(eachUnitValue) 
            }

            function colorValues () {

                let red =  calculatedEachColorPart(0,0,1,0,1,2)
            
                let green =  calculatedEachColorPart(1,0,1,1,1,2)
            
                let blue =  calculatedEachColorPart(2,0,1,2,1,2)

                let colorPartAverage = (red + green + blue)/3
   
                return [colorPartAverage,`rgb(${red},${green},${blue})`]
        
            }    

            let outputValues = colorValues();
            
            function colorBrightness () {
            
                if ( outputValues[0] <= 127.5) {

                    for (const input of allInputs) {
                        input.style.color = "white";
                        input.style.borderBottom = "1px dotted rgb(255,255,255)"
                        
                    }

                    footer.style.color = "white"
                    links.style.color ="white"
                    // WHITE
                  


                }

                else{

                    for (const input of allInputs) {
                        input.style.color = "black";
                        input.style.borderBottom = "1px dotted rgb(0,0,0)"
                    }

                    footer.style.color = "black";
                    links.style.color ="black"
                    // BLACK
                   
                }                
                
            }

            colorBrightness()
         
            rgbInput.value = outputValues[1]
            document.body.style.backgroundColor = outputValues[1]

        
        }, 1000)

    }

    else{
        hexInput.value = hexInput.value
    }

})

rgbInput.addEventListener("keyup", event=>{
    clearTimeout(timer)


    timer = setTimeout(()=> {
    
    let rgbStringArray = rgbInput.value.slice(4, rgbInput.value.length -1).split(",")
    
    
    if ( rgbInput.value[rgbInput.value.length - 1] === ")" ) {
        
        function rgbToHex() {

            let rgbNumberArray = rgbStringArray.map(element => parseInt(element))     
            let rgbToHexValue ="#";
            let rgbAverage = 0;
            for (let i=0; i<rgbNumberArray.length; i++) {

                rgbToHexValue += String(hexValues[(parseInt(rgbNumberArray[i]/hexValues.length))]) + String((hexValues[rgbNumberArray[i] % hexValues.length]))
                rgbAverage += rgbNumberArray[i]/rgbNumberArray.length
            }

            return [rgbToHexValue, rgbAverage];

        }

        let returnValue = rgbToHex();
        hexInput.value = returnValue[0];
        document.body.style.backgroundColor = returnValue[0]

        if(returnValue[1]<=127.5){

            allInputs.forEach(el=>{
                el.style.color = "white";
                el.style.borderBottom = "1px dotted white";
                footer.style.color = "white";
                links.style.color="white"
            })

        } 

        else{

            allInputs.forEach(el=>{
                el.style.color = "black";
                el.style.borderBottom = "1px dotted black";
                footer.style.color = "black";
                links.style.color="black"
            })
        }

        
        
       
    }

    else{
        rgbInput.value = rgbInput.value
      
    }
    
   
    }, 1000)
})