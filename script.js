const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const buttonn = document.querySelector('header button')

buttonn.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
//const today = '01/01'
const dayExists = nlwSetup.dayExists(today)

if(dayExists) {
    alert ("Dia ja incluso")
    return
}

alert("Adicionado com sucesso✅")
nlwSetup.addDay(today)
}

function save() {
localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) || {}
}


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()