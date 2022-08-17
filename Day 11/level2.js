//1
function printUsers(object) {
    for (const {name, scores, skills,age} of object){
        console.log(name, scores, skills, age)
    }
}

printUsers(users)

//2
function findSkills(object) {
    for (const {name, scores, skills, age} of object){
        if (skills.length < 2) {
            console.log (`${name} has less than 2 skills`)
        }
    }
}

findSkills(users)
