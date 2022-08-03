//1

function userIdGeneratedByUser(){
    const charactersAskArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let passLength = prompt('How long should the ID be?')
    let numID = prompt('How many IDs do you need?')
    let eachID =  () => {
        const charOutputAskArray = []
        do   {
            character = Math.floor(Math.random()*37)
            charOutputAskArray.push(charactersAskArray[character])
        } while (charOutputAskArray.length<passLength)
        return charOutputAskArray.join('')
        }
    for (let i = 0; i < numID; i++ )
        console.log(eachID())
}

// userIdGeneratedByUser()

//2

function rgbColorGenerator(){
    let array = []
    for (i=0; i<3; i++){
        array.push(Math.floor(Math.random()*256))
    }
    return `rgb(${array.join(',')})`
}

console.log(rgbColorGenerator())

//3

function hexaColorGenerator(){
    const charactersHex = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
    const colorArray = []
    for (i=0; i<6; i++){
        colorArray.push(charactersHex[Math.floor(Math.random()*16)])
    }
    return `#${colorArray.join('')}`
}

console.log(`test hex color ${hexaColorGenerator()}`)

function arrayOfHexaColors(num){
    let array = []
    for (j=0; j<num; j++){
        let color = hexaColorGenerator()
        array.push(color)
    }
    return array
}

console.log(arrayOfHexaColors(7))

//4

function arrayOfRgbColors(num){
    let array = []
    for (j=0; j<num; j++){
        array.push(rgbColorGenerator())
    }
    return array
}

console.log(arrayOfRgbColors(3))

//5

function convertHexaToRgb(hexa){
    console.log(`test: ${hexa}`)
    let colorArray=[]
    colorArray.push(parseInt(hexa[1],16)*parseInt(hexa[2],16))
    colorArray.push(parseInt(hexa[3],16)*parseInt(hexa[4],16))
    colorArray.push(parseInt(hexa[5],16)*parseInt(hexa[6],16))
    return `rgb(${colorArray.join(',')})`
}

console.log(convertHexaToRgb(hexaColorGenerator()))

//6

function convertRgbtoHexa(RGB){
    console.log(`test: ${RGB}`)
    colorData = RGB.substring(4,RGB.length-1).split(',')
    return `#${parseInt(colorData[0]).toString(16).padStart(2,'0')}${parseInt(colorData[1]).toString(16).padStart(2,'0')}${parseInt(colorData[2]).toString(16).padStart(2,'0')}`
}

console.log(convertRgbtoHexa(rgbColorGenerator()))