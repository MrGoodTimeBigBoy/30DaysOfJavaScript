let monthPrompt
let dayCount
monthPrompt=prompt("Pray ye, what month is it?")
let monthPick=monthPrompt.toLowerCase()
switch(monthPick){
    case 'december':
        console.log('Winter')
        dayCount=31
        break
    case 'january':
        console.log('Fools Spring')
        dayCount=31
        break
    case 'february':
        console.log('Second Winter')
        let yearPrompt = prompt('And the year?')
        const yearMod = yearPrompt%4
        const centMod = yearPrompt%100
        const quarMod = yearPrompt%400
        if (!quarMod){
            dayCount=29
        }else if (!centMod){
            dayCount=28
        }else if (!yearMod){
            dayCount=29
        }else {
            dayCount=28
        }
        break
    case 'march':
        console.log('Spring of Deception')
        dayCount=31
        break
    case 'april':
        console.log('Third Winter')
        dayCount=30
        break
    case 'may':
        console.log('The Pollening')
        dayCount=31
        break
    case 'june':
        console.log('Actual Spring')
        dayCount=30
        break
    case 'july':
        console.log('Summer')
        dayCount=31
        break
    case 'august':
        console.log('Hell\'s Front Porch')
        dayCount=31
        break
    case 'september':
        console.log('False Fall')
        dayCount=30
        break
    case 'october':
        console.log('Second Summer')
        dayCount=31
        break
    case 'november':
        console.log('Actual Fall')
        dayCount=30
        break
    default:
        console.log('I said tell me a month, can you read?')
}
console.log(`${monthPick} has ${dayCount} days.`)