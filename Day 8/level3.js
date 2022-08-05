const personAccount = {
    firstName: 'Belon',
    lastName: 'Busk',
    incomes: [
        3000000,
        4.99
    ],
    expenses:[
        4000000,
        12.99
    ],
    totalIncome: function() {
        let sumIncome = 0
        for (source of this.incomes){
            sumIncome+=source
        }
        return sumIncome
    },
    totalExpense: function(){
        let sumExpense = 0
        for (source of this.expenses){
            sumExpense+=source
        }
        return sumExpense
    },
    accountInfo: function(){
        return `This account belongs to ${this.firstName} ${this.lastName}.`
    },
    addIncome: function(amount){
        this.incomes.push(amount)
    },
    addExpense: function(amount){
        this.expenses.push(amount)
    },
    accountBalance: function(){
        return this.totalIncome()-this.totalExpense()
    }
}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())
personAccount.addExpense(400)
console.log(personAccount.accountBalance())


//2

console.log('2')
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(){
    const newName = prompt('Enter a new user name')
    let isMatch = false
    for (item of users2){
        if (item.username == newName){
            isMatch = true
            console.log('hit')
        }
    }
    console.log(isMatch)
    if (isMatch == true){
        console.log('This name is already in use.')
    } else if (isMatch == false) {
        users2.push({
            _id: randomUserID(),
            username: newName,
            email: `${newName}@${newName}.com`,
            password: randomPassword(),
            createdAt: showDateTime(),
            isLoggedIn: false
        })
    }
}

signUp()
console.log(users2[(users2.length-1)])

function randomUserID(){
    const charactersAskArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let passLength = 6
    const charOutputAskArray = []
    do   {
        character = Math.floor(Math.random()*37)
        charOutputAskArray.push(charactersAskArray[character])
    } while (charOutputAskArray.length<passLength)
    return charOutputAskArray.join('')
}

function randomPassword(){
    const passwordOutput =[]
    for (i=0; i<6; i++){
        passwordOutput.push(Math.floor(Math.random()*10))
    }
    return passwordOutput.join('')
}

function showDateTime(){
    const today = new Date()
    const formatYear = String(today.getFullYear()).padStart(4,'0')
    const formatMonth = (today.getMonth()+1).toString().padStart(2,'0')
    const formatDay = String(today.getDate()).padStart(2,'0')
    const formatHour = String(today.getHours()).padStart(2,'0')
    const formatMinute = today.getMinutes().toString().padStart(2,'0')
    return `${formatMonth}/${formatDay}/${formatYear} ${formatHour}:${formatMinute}`
    }

theDate = new Date()
console.log(theDate.getMonth())
console.log(users2)