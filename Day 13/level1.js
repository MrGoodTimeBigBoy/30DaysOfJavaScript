console.table(countriesAll)

console.group('Countries')
countriesAll.forEach((country) => console.table(country))
console.groupEnd()

