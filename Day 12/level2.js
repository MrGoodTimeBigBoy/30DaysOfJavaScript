paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(input,returns){
    const clean = input.replace(/[^A-Za-z ]/g, '')
    console.log(clean)
    const wordArray = new Set(clean.split(' '))
    const countArray = []
    wordArray.forEach((word) => {
        const regex = "\\b" + word + "\\b"
        const pattern = new RegExp(regex, 'g')
        const count = paragraph.match(pattern)
        const outputObj = {
            word: word,
            count: count.length
        }
        countArray.push(outputObj)
    })
    countArray.sort((a,b) => {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })
    return countArray.splice(0,returns)
}

console.log(tenMostFrequentWords(paragraph,10))