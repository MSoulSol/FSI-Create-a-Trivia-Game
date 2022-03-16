let userName =window.prompt('Please enter your name:')
for(let i=0; i<questions.length; i++){
    console.log(questions[i])

        let question = questions[i]
        let userAnswer = window.prompt(questions[i].text)
    if(userAnswer = questions[i].correctAnswer){
        console.log('Correct'), 
        userScore = userScore + 10
    }

}
window.alert('Your score is' +userScore)