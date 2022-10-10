/* legenda
    as variáveis que possuem "H" no nome são referentes a navbar ou o "header" da página
*/

/* Setando valores de URL e Página(p) para futuro uso */
var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=1e6a7982' 
var p = 1

/* selecionando as Tags do HTML */
var button = document.getElementById('procura')
var footer = document.getElementById('footer')
var textonf = document.getElementById('procura-texto')
var content = document.getElementById('imagens')
var navbar = document.getElementById('navbar')
var textonfH = document.getElementById('procura-textoH')
var primeira_tela = document.getElementById('primeira-tela')

/* Botões de avançar e voltar */
var b = document.createElement('button')
b.innerText = 'Próxima Página >>'
b.setAttribute('id', 'Next')
b.setAttribute('class', 'btn btn-dark btn-sm')
b.addEventListener('click', (n)=>{
    n.stopPropagation
    proxpag()
})
var bv = document.createElement('button')
bv.innerText = '<< Página anterior'
bv.setAttribute('id', 'Prev')
bv.setAttribute('class', 'btn btn-dark btn-sm')
bv.addEventListener('click', (n)=>{
    n.stopPropagation
    antpag()
})

/* Fazendo o Enter iniciar as funções */
textonf.addEventListener ('keydown', (evento)=> {
    if (evento.key == "Enter") {
        evento.stopPropagation
        pesquisar()
    }
})
textonfH.addEventListener ('keydown', (evento)=> {
    if (evento.key == "Enter") {
        evento.stopPropagation
        pesquisarH()
    }
})


/* Função de pesquisa */
function pesquisar() {
    /* Resetando os valores da url e p para o inicial garantindo que a página vá para a primeira do filme selecionado */
    url = 'http://www.omdbapi.com/?i=tt3896198&apikey=1e6a7982'
    p = 1

    console.log ('olá')

    /* Alertando caso não tenha texto */
    if (textonf.value.length == 0) {
        window.alert('Digite um nome Elegível')
    } else {
    /* transformando o input em string para adicionar na URL */
        var texto = String(textonf.value)
        url += `&s=${texto}`
        console.log(url, texto)

        /* Fazendo o request e carregando ele */
        let request = new XMLHttpRequest()
        request.open ('GET', url)
        request.send ()
        request.onload = () => {
            /* Garantindo que o request foi bem sucessidido */
            if (request.status === 200) {
                /* resetando o footer para criar apenas o avançar */
                footer.innerHTML = ``
                const data = JSON.parse(request.response).Search
                data.map((movie) => {
                    console.log('Filme individual', movie)
                })
                for (let c = 0; c < 10; c++) {
                    var filme = JSON.parse(request.response).Search[c] 
                    let resn = document.getElementById(`res${c}`)
                    let descn = document.getElementById(`desc${c}`)
                    resn.innerHTML += `<img src="${filme.Poster}" alt="Capa">`
                    descn.innerHTML = ""
                    descn.innerHTML = `<h3>${filme.Title}</h3>`
                    descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                }
            } else {
                console.log(request)
                console.log(`ERROR ${request.status}`)
            }
            center.style.display = "none"
            navbar.style.display = "flex"
            footer.style.display = "flex"
            footer.appendChild(b)
            content.style.display = "flex"
        }  
    } 
}

function pesquisarH() {

    console.log ('olá')

    /* Alertando caso não tenha texto */
    if (textonfH.value.length == 0) {
        window.alert('Digite um nome Elegível')
    } else {
        /* Resetando os valores da url e p para o inicial garantindo que a página vá para a primeira do filme selecionado */
        url = 'http://www.omdbapi.com/?i=tt3896198&apikey=1e6a7982'
        p = 1
        window.scrollTo(0,0)
    /* transformando o input em string para adicionar na URL */
        var texto = String(textonfH.value)
        console.log(texto)
        url += `&s=${texto}`
        console.log(url, texto)

        /* Fazendo o request e carregando ele */
        let request = new XMLHttpRequest()
        request.open ('GET', url)
        request.send ()
        request.onload = () => {
            /* Garantindo que o request foi bem sucessidido */
            if (request.status === 200) {
                /* resetando o footer para criar apenas o avançar */
                footer.innerHTML = ``
                const data = JSON.parse(request.response).Search
                console.log (data)
                data.map((movie) => {

                    console.log('Filme individual', movie)
                })
                for (let c = 0; c < 10; c++) {
                    var filme = JSON.parse(request.response).Search[c] 
                    let resn = document.getElementById(`res${c}`)
                    let descn = document.getElementById(`desc${c}`)
                    resn.innerHTML = ""
                    resn.innerHTML += `<img src="${filme.Poster}" alt="Capa">`
                    descn.innerHTML = ""
                    descn.innerHTML = `<h3>${filme.Title}</h3>`
                    descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                }
            } else {
                console.log(request)
                console.log(`ERROR ${request.status}`)
            }
            center.style.display = "none"
            navbar.style.display = "flex"
            footer.style.display = "flex"
            footer.appendChild(b)
            content.style.display = "flex"
            textonfH.value = ''
        }
    }
}

function proxpag() {
    window.scrollTo (0,0)
    p++
    var rurl = `${url}&page=${p}`
    const request = new XMLHttpRequest()
    request.open("GET", rurl)
    request.send()
    request.onload = () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response).Search
            if (data == undefined) {
                b.style.display = "none"
                bv.style.display = "none"
                for (let c = 0; c < 10; c++) {
                    let resn = document.getElementById(`res${c}`)
                    let descn = document.getElementById(`desc${c}`)
                    resn.style.display = "none"
                    descn.style.display = "none"
                }
                center.style.display = 'flex'
                setInterval (countdown, 1000)
                footer.style.display = "flex"
                content.style.display = "none"
                primeira_tela.innerHTML = ""
            } else {
                window.scrollTo(0,0)
                /* Garantindo que o request foi bem sucessidido */
                if (request.status === 200) {
                    /* resetando o footer para criar apenas o avançar */
                    footer.innerHTML = ``
                    footer.style.display = "flex"
                    footer.appendChild(bv)
                    footer.appendChild(b)
                    center.style.display = "none"
                    navbar.style.display = "flex"
                    content.style.display = "flex"
                    textonfH.value = ''
                    for (let c = 0; c < 10; c++) {
                        var filme = data[c]
                        let resn = document.getElementById(`res${c}`)
                        let descn = document.getElementById(`desc${c}`)
                        resn.innerHTML = ""
                        resn.innerHTML += `<img src="${filme.Poster}" alt="Capa">`
                        descn.innerHTML = ""
                        descn.innerHTML = `<h3>${filme.Title}</h3>`
                        descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>` 
                    }
                } else {
                    console.log(request)
                    console.log(`ERROR ${request.status}`)
                }
            }
        }
    }
}


function antpag () {
    window.scrollTo (0,0)
    p--
    var rurl = `${url}&page=${p}`
    const request = new XMLHttpRequest()
    request.open("GET", rurl)
    request.send()
    request.onload = () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response).Search
            if (data == undefined) {
                b.style.display = "none"
                bv.style.display = "none"
                for (let c = 0; c < 10; c++) {
                    let resn = document.getElementById(`res${c}`)
                    let descn = document.getElementById(`desc${c}`)
                    resn.style.display = "none"
                    descn.style.display = 'none'
                }
                res0.style.display = "flex"
                res0.innerHTML = "<p>Desculpe não achamos mais resultados para a página indicada</p>"
            } else {
                window.scrollTo(0,0)
                /* Garantindo que o request foi bem sucessidido */
                if (request.status === 200) {
                    /* resetando o footer para criar apenas o avançar */
                    footer.innerHTML = ``
                    center.style.display = "none"
                    navbar.style.display = "flex"
                    footer.style.display = "flex"
                    footer.appendChild(bv)
                    footer.appendChild(b)
                    content.style.display = "flex"
                    textonfH.value = ''
                    b.style.display= "flex"
                    if (p == 1) {
                        bv.style.display = "none"
                    }
                    for (let c = 0; c < 10; c++) {
                        var filme = data[c]
                        let resn = document.getElementById(`res${c}`)
                        let descn = document.getElementById(`desc${c}`)
                        resn.innerHTML = ""
                        resn.innerHTML += `<img src="${filme.Poster}" alt="Capa">`
                        descn.innerHTML = ""
                        descn.innerHTML = `<h3>${filme.Title}</h3>`
                        descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                    }
                } else {
                    console.log(request)
                    console.log(`ERROR ${request.status}`)
                }
            }
        }
    }
}

var contador = 10
function countdown() {
    if (contador == 0) {
        location.reload()
    } else {
        console.log(contador)
        primeira_tela.innerHTML = "<h1>Desculpe não achamos mais resultados para a página indicada</h1>"
        primeira_tela.innerHTML += `<h2>Retornando a página inicial em ${contador}</h2>`
        contador--
    }
}
