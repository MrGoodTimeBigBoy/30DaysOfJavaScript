//1
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


let info = Object.values(users)
console.log(info)
let names = Object.keys(users)
console.log(names)
for (const person of info){
  skillsList = person.skills.length
  console.log(skillsList)
}

//2
function loggedInUsers(){
  let loggedInCount = 0
  for (const person of info){
    if (person.isLoggedIn == true) {
      loggedInCount++
    }
  }
  return `users logged in: ${loggedInCount}`
}

console.log(loggedInUsers())

function highScores(){
  let highScoreCount = 0
  for (const person of info){
    if (person.points >= 50) {
      highScoreCount++
    }
  }
  return `hi scorers: ${highScoreCount}`
}

console.log(highScores())

//3
function mernDevs(){
  let mernDevCount = 0
  for (const person of info){
    if (person.skills.includes('MongoDB')&&person.skills.includes('Express')&&person.skills.includes('React')&&person.skills.includes('Node')){
      mernDevCount++
    }
  }
  return `MERN devs: ${mernDevCount}`
}

console.log(mernDevs())

//4

const usersCopy = Object.assign({}, users)
usersCopy.Ian = {
  email: 'ian@ian.com',
  skills: ['scribblin','Python','JavaScript'],
  age: 38,
  isLoggedIn: true,
  points: 10
}
console.log(usersCopy)

//5 see 1
//6 see 1
//7 literally what are they talking about? should I make an object just to print information from it?
// How about this, why don't I print my age and second skill, hmmm?

function flex(){
  return `hey, have you heard that I'm ${usersCopy.Ian.age} years old and have vague knowledge of ${usersCopy.Ian.skills[1]}?`
}
console.log(flex())