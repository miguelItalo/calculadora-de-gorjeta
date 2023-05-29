const totalInput = document.querySelector('#total')
const person = document.querySelector('#personTotal')
const btns = document.querySelectorAll('.opc')
const custom = document.querySelector('#custom')
const outPerson = document.querySelector('#outPerson')
const outTotal = document.querySelector('#outTotal')
const reset = document.querySelector('.reset')
const zero = document.querySelector('.zero')

let valorBtn
let valorTotal
let personTip
let customValue

function resetAll(){
      for (let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = 'var(--very-dark-cyan)'
            btns[i].style.color = 'var(--white)'
      }
}

reset.addEventListener('click', () => {
      totalInput.value = ''
      person.value = ''
      outPerson.textContent = '$0.00'
      outTotal.textContent = '$0.00'
      custom.value = ''

      valorBtn = 0
      valorTotal = 0
      personTip = 0
      customValue = 0

      resetAll()
})


btns.forEach((btn) => {
      let valorBtnPerCent = btn.textContent
      btn.addEventListener('click', () => {
            for(let i = 0; i < btns.length; i++){
                  btns[i].style.backgroundColor = 'var(--very-dark-cyan)'
                  btns[i].style.color = 'var(--white)'
            }
            valorBtn = valorBtnPerCent.replaceAll('%', '')
            valorBtn = Number(valorBtn)
            test(valorBtn, valorTotal, personTip, customValue)
            btn.style.backgroundColor = 'var(--strong-cyan)'
            customValue = 0
            custom.value = ''

      })
})

custom.addEventListener('keyup', () => {
      resetAll()
      customValue = +custom.value
      valorBtn = customValue
      test(valorBtn, valorTotal, personTip, customValue)

})

totalInput.addEventListener('keyup', () => {
      valorTotal = +totalInput.value
      test(valorBtn, valorTotal, personTip, customValue)
})

person.addEventListener('keyup', () => {
      if(person.value == 0){
            zero.textContent = "Can't be zero"
      }
      else{
            personTip = +person.value
            test(valorBtn, valorTotal, personTip, customValue)
            zero.textContent = ""
      }
})

function test(valorBtn, valorTotal, personTip, customValue){
      if(valorBtn && valorTotal && personTip){
            outPerson.textContent = `$ ${(valorTotal * (valorBtn / 100) / personTip).toFixed(2)}`
            outTotal.textContent = `$ ${(valorTotal * (valorBtn / 100)).toFixed(2)}`
      }
      else if(customValue && valorTotal && personTip){
            outPerson.textContent = `$ ${(valorTotal * (customValue / 100) / personTip).toFixed(2)}`
            outTotal.textContent = `$ ${(valorTotal * (valorBtn / 100)).toFixed(2)}`
      }
}
