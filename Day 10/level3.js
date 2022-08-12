//1
const languagesRaw =[]
for (const country of countries){
    for (const language of country.languages){
        languagesRaw.push(language)
    }
}
const languagesList = new Set(languagesRaw)
console.log(languagesList)
const spokenCount = []
for (const language of languagesList){
    const languagecount = languagesRaw.filter((name) => name == language).length
    const outputObject = {
        name: language,
        count: languagecount
    }
    spokenCount.push(outputObject)
}

console.log(spokenCount)

function objectify (item) {
    outputObject = {
        [item.name]: item.count
    }
    return outputObject
}
function mostSpokenLanguages(num){
    spokenCount.sort((a,b) => {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })
    const spokenOutput = spokenCount.map((entry) => objectify(entry))
    return spokenOutput.splice(0,num)
}
console.log(mostSpokenLanguages(10))