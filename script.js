window.onload = function () {
    //setup
    //reference 
    let theButtons = document.querySelectorAll('.btn');
    console.log(theButtons);
    let theNumbers = document.querySelectorAll('.num');
    //reference the output
    let theDisplay = document.querySelector('.digits');
    //variable
    let theEquation = '';
    let firstEmpty = true;
    let secondEmpty = true;
    let opEmpty = true;
    let theKey = '';

    //end reference

    let firstNum = "", secondNum = "", Opr = "", turn;

    //initiate click event
    theButtons.forEach((k) => {
        //click event
        k.addEventListener('click', () => {
            //check for button c
            //if(k.title === 'c')

            //---------- Custom Code Start ----------//
            
            if (Opr == '') {
                if (k.title === '+' || k.title === '-' || k.title === '*' || k.title === '/') {
                    Opr = k.title;

                } else {
                    if (firstNum == '') {
                        firstNum = k.title;
                    } else {
                        firstNum += k.title;
                    }
                    console.log("FirstNum " + firstNum);
                }
            } else if (Opr !== '' && firstNum !== '') {
                if (k.title === '+' || k.title === '-' || k.title === '*' || k.title === '/') {
                    theDisplay.textContent = 'cannot operate'
                } else {
                    if (secondNum == '') {
                        secondNum = k.title;
                    } else {
                        secondNum += k.title;
                    }
                    console.log("SecondNum " + secondNum);
                }
            }

            if (k.title === 'c') {
                firstNum = '';
                Opr = '';
                secondNum = '';

                resetRoutine();
            } else if (k.title === '+' || k.title === '-' || k.title === '*' || k.title === '/') {
                if (theEquation = '') {
                    theDisplay.textContent = 'no number'
                } else {
                    theKey = k.title;
                    addOperators();
                }
            } else if (k.title === '=') {

                validation();

            } else {
                theEquation += parseInt(k.title);
                theDisplay.textContent += k.title;

                if (!firstEmpty && !opEmpty) {
                    secondEmpty = false;
                }
            }
        })
    })

    //end initiate click event

    //function reset
    function resetRoutine() {
        theEquation = '';
        firstEmpty = true;
        secondEmpty = true;
        opEmpty = true;
        theKey = '';
        theDisplay.textContent = '';
    }
    //end function 

    //function add oprator
    function addOperators() {
        if (firstEmpty) {
            if (opEmpty) {
                firstEmpty = false;
                opEmpty = false;
                theEquation += theKey;
                theDisplay.textContent += theKey;
            }
        } else {
            if (opEmpty) {
                firstEmpty = false;
                opEmpty = false;
                theEquation += theKey;
                theDisplay.textContent += theKey;
            } else {
                if (secondEmpty) {
                    theDisplay.textContent = 'too many operators'
                } else {
                    theDisplay.textContent += theKey;
                    theEquation += theKey;
                }
            }
        }
    }

    //end function add oprator

    //function validate equation
    function validateEquation() {
        console.log("Equaling..");
        let theAnswer = '';
        let errorFree = true;
        let myEquation = [...theEquation];
        console.log(myEquation);
        for (let i = 1; i < myEquation.length; i++) {
            if ((myEquation[i] === '+' || myEquation[i] === '-' || myEquation[i] === '*' || myEquation[i] === '/') && (myEquation[i - 1] === '+' || myEquation[i - 1] === '-' || myEquation[i - 1] === '*' || myEquation[i - 1] === '/')) {
                errorFree = false;
            }
        }
        if (errorFree) {
            theAnswer = eval(theEquation);
        } else {
            display = error;
        }
    }

    //end func validate equation


    function validation() {
        switch (Opr) {
            case "+":
                theDisplay.textContent = parseInt(firstNum) + parseInt(secondNum)
                break;
            case "-":
                theDisplay.textContent = parseInt(firstNum) - parseInt(secondNum)
                break;
            case "*":
                theDisplay.textContent = parseInt(firstNum) * parseInt(secondNum)
                break;
            case "/":
                theDisplay.textContent = parseInt(firstNum) / parseInt(secondNum)
                break;

            default:
                theDisplay.textContent = "Error!"
                break;
        }
    }

}