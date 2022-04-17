const adviceId = document.querySelector('#advice-id')
const adviceText = document.querySelector('#adviceText')
const diceBtn = document.querySelector('.dice-container')

fetch ('https://api.adviceslip.com/advice')
.then(response => response.json())
.then((data) => 
{
    function random(){
    console.log(data)
    let advice = data.slip
    let mainAdvice = advice.advice
    let mainAdviceId = advice.id
    adviceId.textContent = mainAdviceId
    adviceText.textContent = mainAdvice
    }

    diceBtn.addEventListener("click", random)
    
})

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'inspiring-quotes.p.rapidapi.com',
// 		'X-RapidAPI-Key': '465d2053acmsh522bdd634ace202p16dc8djsn3db75d44c66d'
// 	}
// };

// fetch('https://inspiring-quotes.p.rapidapi.com/multiple?author=Einstein&count=50', options)
// 	.then(response => response.json())
// 	.then(response => {
//         console.log(response)
//     })
// 	.catch(err => console.error(err));
