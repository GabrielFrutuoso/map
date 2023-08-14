const modal = document.querySelector('dialog')
const buttons = document.querySelectorAll('.buttons')
const closeBtn = document.querySelector('#close')

const title = document.querySelector('#title')
const habitants = document.querySelector('#habitants')
const spots = document.querySelector('#spots')
const danger = document.querySelector('#danger')
const description = document.querySelector('#description')
const image = document.querySelector('#image')

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{

        const place = button.getAttribute("data-place")

        changeTexts(
            places[place].title,
            places[place].habitants,
            places[place].spots,
            places[place].danger,
            places[place].description,
            places[place].source
        )

        modal.show()
    })
})

const changeTexts = (titulo, habitantes, lugares, perigo, descricao, imagem)=>{
    title.innerHTML = titulo
    habitants.innerHTML = `habitantes: ${habitantes}`
    spots.innerHTML = `Pontos de Interesse: ${lugares}`
    danger.innerHTML = `Periculosidade: ${perigo}`
    description.innerHTML = `descrição: ${descricao}`
    image.src = `images/${imagem}.jpg`
    
}

closeBtn.addEventListener('click', ()=>{
    modal.close()
})

let places ={  
        village: {
            source: 'village',
            title: 'Vila Muito Bacana',
            habitants: 120,
            spots: 'Mercador, Ferreiro, Igrejinha, Taverna',
            danger: 'Baixa',
            description: 'Uma pequena vila próxima do castelo, ela parece ser uma vila muito bacana.'
        },
        mill: {
            source: 'mill',
            title: 'Cata-vento',
            habitants: 1,
            spots: 'cata-vento',
            danger: 'Baixa',
            description: 'Uma cata-vento onde vive velho fazendeiro.'
        },
        lightHouse: {
            source: 'lighthouse',
            title: 'Velho Farol',
            habitants: 0,
            spots: 'o velho farol',
            danger: 'Baixa',
            description: 'Um velho farol do antigo ponto, aquele lugar me dá arrepios!'
        },
        Forest: {
            source: 'forest',
            title: 'Floresta Apavorante',
            habitants: '?',
            spots: 'Vila do Duendes da floresta',
            danger: 'moderada',
            description: 'Uma densa floresta repleta de criaturas, onde há boatos de uma vila de duendes'
        },
        castle: {
            source: 'castle',
            title: 'Castelo Real',
            habitants: 587,
            spots: 'Loja de armaduras, Taverna do Rei, ',
            danger: 'baixa',
            description: 'Uma densa floresta repleta de criaturas, onde há boatos de uma vila de duendes'
        },
        farm: {
            source: 'farm',
            title: 'Fazenda Real',
            habitants: 24,
            spots: 'Estábulo, Plantações',
            danger: 'baixa',
            description: 'A fazenda Real, onde é nala platada diversas leguminosas e vegetais, além de conter diversos animais, todos os seus recursos vão para o Castelo Ceal'
        },
    }


console.log(places.farm.title)