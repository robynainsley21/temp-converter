const domElements = {
    celcius: document.getElementById('celcius'),
    fahrenheit: document.getElementById('fahrenheit'),
    convertBtn: document.querySelector('[convert-btn]')
}

domElements.convertBtn.addEventListener('click', () => {
    let celciusValue = domElements.celcius.value
    let fahrenheitValue = domElements.fahrenheit.value
    


    if(celciusValue ){
        let celciusCalc = (parseFloat((domElements.fahrenheit - 32) * (5 / 9)))
        console.log(celciusCalc)
    } else if(fahrenheitValue ){
        let fahCalc = (parseFloat((domElements.celcius * (9 / 5)) + 32))
        
        console.log(fahCalc)

    } else(
        console.log('Error')
    )
    // console.log(celciusCalc)
})