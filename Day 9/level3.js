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
                allLanguages.language =+ 1
            } else {
                allLanguages.push({
                    name: language,
                    occurances: 1
                })
            }
        })
    })
    return allLanguages
}

console.log(mostSpokenLanguages(countriesAll, 10))