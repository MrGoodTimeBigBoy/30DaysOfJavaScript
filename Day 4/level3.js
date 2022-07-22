let monthPrompt
let dayCount
monthPrompt=prompt("Pray ye, what month is it?")

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

let monthPick=titleCase(monthPrompt)
switch(monthPick){
    case 'December':
        console.log('Winter')
        dayCount=31
        break
    case 'January':
        console.log('Fools Spring')
        dayCount=31
        break
    case 'February':
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
    case 'March':
        console.log('Spring of Deception')
        dayCount=31
        break
    case 'April':
        console.log('Third Winter')
        dayCount=30
        break
    case 'May':
        console.log('The Pollening')
        dayCount=31
        break
    case 'June':
        console.log('Actual Spring')
        dayCount=30
        break
    case 'July':
        console.log('Summer')
        dayCount=31
        break
    case 'August':
        console.log('Hell\'s Front Porch')
        dayCount=31
        break
    case 'September':
        console.log('False Fall')
        dayCount=30
        break
    case 'October':
        console.log('Second Summer')
        dayCount=31
        break
    case 'November':
        console.log('Actual Fall')
        dayCount=30
        break
    default:
        console.log('I said tell me a month, can you read?')
}
console.log(`${monthPick} has ${dayCount} days.`)