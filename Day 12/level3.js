sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(input,returns){
  const clean = input.replace(/[^A-Za-z ]/g, '')
  console.log(clean)
  const wordArray = new Set(clean.split(' '))
  const countArray = []
  wordArray.forEach((word) => {
      const regex = "\\b" + word + "\\b"
      const pattern = new RegExp(regex, 'g')
      const count = clean.match(pattern)
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

console.log(cleanText(sentence,3))