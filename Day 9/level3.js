//1
const countriesCap = [...countriesAll]
const sortedByCapital = countriesCap.sort((a,b) => {
    if (a.capital.toLowerCase() < b.capital.toLowerCase()) return -1
    if (a.capital.toLowerCase() > b.capital.toLowerCase()) return 1
    return 0
})

console.log(sortedByCapital)


const countriesPop = [...countriesAll]
const sortedByPopulation = countriesPop.sort((a,b) => {
    if (a.population < b.population) return 1
    if (a.population > b.population) return -1
    return 0
})

console.log(sortedByPopulation)

//2

function mostSpokenLanguages(array, num){
    const countriesLang = [...array]
    const allLanguages = []
    countriesLang.forEach((country) => {
        const langList = allLanguages.map((item) => item.name)
        country.languages.forEach((language) => {
            if (langList.includes(language)) {
                const langIndex = langList.indexOf(language)
                allLanguages[langIndex].occurances++
            } else {
                allLanguages.push({
                    name: language,
                    occurances: 1
                })
            }
        })
    })
    allLanguages.sort((a,b) => {
        if (a.occurances < b.occurances) return 1
        if (a.occurances > b.occurances) return -1
        return 0
    })
    return allLanguages.splice(0,num)
}

console.log(mostSpokenLanguages(countriesAll, 3))

//3
function mostPopulatedCountries(array, num){
    const countriesPop = [...countriesAll]
    const sortedByPopulation = countriesPop.sort((a,b) => {
        if (a.population < b.population) return 1
        if (a.population > b.population) return -1
        return 0
    })
    const outputArray = []
    for (i=0; i<num; i++){
        outputArray.push({
            country: countriesPop[i].name,
            population: countriesPop[i].population
        })
    }
    return outputArray
}

console.log(mostPopulatedCountries(countriesAll,10))