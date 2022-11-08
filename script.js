/******************************************************************
+-----------------------------------------------------------------+
|                    DECLARING/INITIALIZING VARIABLES             |
|-----------------------------------------------------------------|
|                                                                 |
+-----------------------------------------------------------------+
******************************************************************/
const date = document.getElementById("date");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const textColor = ["white", "black"]
const colorHolder = document.querySelector(".colorHolder");
const footer = document.querySelector("footer");
const links = document.querySelector(".links a")



/******************************************************************
+-----------------------------------------------------------------+
|        ADDING EVENT LISTENER TO THE COLOR HOLDER                |
|-----------------------------------------------------------------|
|                                                                 |
+-----------------------------------------------------------------+
******************************************************************/
colorHolder.addEventListener("click", function (){
       
    let colorName ="#" 
    let j = 0 

    while (j<6) {
        
        colorName += hexValues[getRandomNumber()]
        
        console.log(colorName)

        colorHolder.textContent = colorName;
        
        document.body.style.backgroundColor = colorName 

        j++;
        
    }

/******************************************************************
+-----------------------------------------------------------------+
| FUNCTION FOR CHECKING WHETHER THE EXCERPT FROM THE COLOR PART   |
|-----------------------------------------------------------------|
|                    IS A NUMBER OR NOT                           |
+-----------------------------------------------------------------+
******************************************************************/
    function eachColorPartType(a,b){

        let eachColorPart = colorName.slice(a,b)
    
        if(!isNaN(eachColorPart)){
            eachColorPart = Number(eachColorPart)
        }

        else{
            eachColorPart = eachColorPart
        }

        return eachColorPart;
    }       




    

/******************************************************************
+-----------------------------------------------------------------+
| FUNCTIONS FOR CALCULATING EACH COLOR PART AND THEIR AVERAGE     |
|-----------------------------------------------------------------|
|        LIKE DECIMAL VALUE FOR RED, GREEN, AND BLUE              |
+-----------------------------------------------------------------+
******************************************************************/

    
    function calculatedEachColorPart (a,b,c,d) {
        let eachSixteenValue = eachColorPartType(a,b)
        let eachUnitValue = eachColorPartType(c,d)

        return hexValues.indexOf(eachSixteenValue) * hexValues.length + hexValues.indexOf(eachUnitValue) 
    }
    
    function colorPartSum() {

        let redColorValue = calculatedEachColorPart(1,2,2,3);
        console.log(redColorValue)

        let greenColorValue = calculatedEachColorPart(3,4,4,5);
        console.log(greenColorValue)

        let blueColorValue = calculatedEachColorPart(5,6,-1)
        console.log(blueColorValue)

        return (redColorValue + greenColorValue + blueColorValue )/3
    }

    console.log(colorPartSum())




    function colorBrightness () {
    

        if ( colorPartSum() <= 128) {

            colorHolder.style.color = textColor[0]
            footer.style.color = textColor[0]
            links.style.color = textColor[0]
            // WHITE

        }

        else{
            colorHolder.style.color = textColor[1]
            footer.style.color = textColor[1]
            links.style.color = textColor[1]
            // BLACK
        }

        
        
    }

    colorBrightness()


})


/******************************************************************
+-----------------------------------------------------------------+
|        FUNCTIONS FOR GENERATING RANDOM NUMBER                   |
|-----------------------------------------------------------------|
|        SERVING AS INDEX TO THE HEXVALUE ARRAY                   |
+-----------------------------------------------------------------+
******************************************************************/
function getRandomNumber() {

    return Math.floor(Math.random() * hexValues.length );

}

//UPDATE COPYRIGHT YEAR AUTOMATICALLY
date.innerHTML = new Date().getFullYear();
