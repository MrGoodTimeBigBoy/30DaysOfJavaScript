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

//4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    count: function() {
        return ages.length
    },
    sum: function() {
        return ages.reduce((acc,cur) => acc+ cur, 0)
    }
}

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
//console.log('Min: ', statistics.min()) // 24
//console.log('Max: ', statistics.max()) // 38
//console.log('Range: ', statistics.range() // 14
//console.log('Mean: ', statistics.mean()) // 30
//console.log('Median: ',statistics.median()) // 29
//console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
//console.log('Variance: ',statistics.var()) // 17.5
//console.log('Standard Deviation: ', statistics.std()) // 4.2
//console.log('Variance: ',statistics.var()) // 17.5
//console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]