const modal = document.querySelector('dialog')
const buttons = document.querySelectorAll('.buttons')
const closeBtn = document.querySelector('#close')

const title = document.querySelector('#title')
const habitants = document.querySelector('#habitants')
const spots = document.querySelector('#spots')
const danger = document.querySelector('#danger')
const description = document.querySelector('#description')
const image = document.querySelector('#image')
const card  = document.querySelector('.card')

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{

        const place = button.getAttribute("data-place")

        changeThings(
            places[place].description,
            places[place].source,
            places[place].color,
            places[place].border,
        )

        modal.show()
    })
})

const changeThings = (descricao, titulo, cor, borda)=>{
    title.innerHTML = titulo
    description.innerHTML = `Descrição: ${descricao}`
    card.style.backgroundColor = cor
    card.style.borderColor = borda
}

closeBtn.addEventListener('click', ()=>{
    modal.close()
})

let places ={  
        covilGeno: {
            source: 'Covil Geno',
            description: 'Principal Fortaleza e refúgio do clã geno nesse reino, n cheira mt bem por fora pode provocar nauseas',
            color: '#A65D03',
            border: '#BF7E04'
        },
        vilaAna: {
            source: 'vila Anã',
            description: 'Uma vila comum de anões onde pode de se encontrar muitas cavernas e minas para minerar, todos são muito amigaveis',
            color: '#3E2723',
            border: '#5D4037'
        },
        forest: {
            source: 'Floresta Morta',
            description: 'Há lendas que um dia essa floresta ja teve vida e agia por si msm, tendo como consciência o espirito da floresta porém desde as últimas eras a floresta perdeu sua essência e suas criaturas',
            color: '#18261E',
            border: '#365942'
        },
        castle: {
            source: 'Castelo',
            description: 'Em algum tempo ja foi um lugar de honra e destaque, agora é um simbolo de medo e temor',
            color: '#56067F',
            border: '#693E7F'
        },
        village: {
            source: 'Vila',
            description: 'A vila em volta do castelo existe antes mesmo da construção do próprio, a mão de obra para o lider é cruelmente retirada de lá',
            color: '#56067F',
            border: '#693E7F'
        },
        pike: {
            source: 'Pico',
            description: 'Há poucas casas, inclusive a de um muito conhecido inventor',
            color: '#585859',
            border: '#BABBBF'
        },
        cave: {
            source: 'Cavernas',
            description: 'Ninguém nunca saiu de lá o mesmo, muitos dizem haver monstros terríveis ali ou uma magia bizarra capaz de mudar a aparência e memórias',
            color: '#585859',
            border: '#BABBBF'
        },
        
    }

