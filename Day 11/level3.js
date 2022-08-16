function summarize(object){
    for (const {name, capital, languages, population, flag, currency} of object){
        let langArray = [...languages]
        let langOutput
        if (langArray.length > 1){
            langArray[langArray.length-1] = `and ${langArray[langArray.length-1]}`
            langOutput = `s are ${langArray.join(', ')}`
        } else {
            langOutput = ` is ${langArray}`
        }
        console.log(`The country of ${name}'s capital is ${capital}. It's population is ${population} and primary language${langOutput}.`)
    }
}

//summarize(countries)

//2

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = student
let jsScore = scores[2]
let reactScore = scores[3]
console.log(name, skills, jsScore, reactScore)

//3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(array){
    const outputArray =[]
    for (const [name, skills, scores] of array){
        outputArray.push({
            name: name,
            skills: skills,
            scores: scores
        })
    }
    return outputArray
}

console.log(convertArrayToObject(students))

//4

const oldStudent = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newStudent = {...oldStudent}
newStudent.skills.frontEnd.push({
    skill: 'Bootstrap',
    level: 8
})
newStudent.skills.backEnd.push({
    skill: 'Express',
    level: 9
})
newStudent.skills.dataBase.push({
    skill: 'SQL',
    level: 8
})
newStudent.skills.dataScience.push('SQL')

console.log(newStudent)