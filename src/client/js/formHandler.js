import {checkForURL} from'./nameChecker'

  export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let agreement0 = document.getElementById('agreement')
    let subjectivity0 = document.getElementById('subjectivity')
    let confidence0 = document.getElementById('confidence')
    let irony0 = document.getElementById('irony')
    let score_tag0 = document.getElementById('score_tag')

    if (Client.checkForURL(formText)){
    console.log("::: Form Submitted :::")
     console.log(Client.checkForURL(formText))
        try {
     fetch(`http://localhost:8081/analyse?url=${formText}`, {
        method: 'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{
        'Content-Type':'application/json',
        },
    }) .then(res => res.json())
        .then(function(res) {
            console.log(res); 
            agreement0.innerHTML = res.agreement
            subjectivity0.innerHTML = res.subjectivity
            confidence0.innerHTML = res.confidence
            irony0.innerHTML = res.irony
            score_tag0.innerHTML = res.score_tag
        })
   /* const {agreement,subjectivity,confidence,irony,score_tag}=data
        agreement0.innerHTML = `Agreement = ${agreement}`
        subjectivity0.innerHTML = `Subjectivity = ${subjectivity}`
        confidence0.innerHTML = `Confidence = ${confidence}`
        irony0.innerHTML = `Irony = ${irony}`
        score_tag0.innerHTML = `score_tag = ${score_tag}`*/

    } catch (error) {
        console.log('error')
    }

    }else {
        alert('Invalid URL')
    }
   
}
//module.exports = handleSubmit;
