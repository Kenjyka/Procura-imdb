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
var favoritos = document.getElementsByClassName('bi-star')
var target = document.getElementById('desc0')
var FavoritoC = 0
var IdFilme = 0

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

/* Event listeners */
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
                    resn.innerHTML += `<img src="${filme.Poster}" id = "poster${c}" alt="Capa">`
                    descn.innerHTML = ""
                    descn.innerHTML = `<h3>${filme.Title}</h3>`
                    descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                    descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
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

            document.getElementById('star0').addEventListener("click", () => {
                let star = document.getElementById('star0')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 0
                favoritar()
            })
            document.getElementById('star1').addEventListener("click", () => {
                let star = document.getElementById('star1')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 1
                favoritar()
            })
            document.getElementById('star2').addEventListener("click", () => {
                let star = document.getElementById('star2')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 2
                favoritar()
            })
            document.getElementById('star3').addEventListener("click", () => {
                let star = document.getElementById('star3')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 3
                favoritar()
            })
            document.getElementById('star4').addEventListener("click", () => {
                let star = document.getElementById('star4')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 4
                favoritar()
            })
            document.getElementById('star5').addEventListener("click", () => {
                let star = document.getElementById('star5')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 5
                favoritar()
            })
            document.getElementById('star6').addEventListener("click", () => {
                let star = document.getElementById('star6')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 6
                favoritar()
            })
            document.getElementById('star7').addEventListener("click", () => {
                let star = document.getElementById('star7')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 7
                favoritar()
            })
            document.getElementById('star8').addEventListener("click", () => {
                let star = document.getElementById('star8')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 8
                favoritar()
            })
            document.getElementById('star9').addEventListener("click", () => {
                let star = document.getElementById('star9')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 9
                favoritar()
            })
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
                    resn.innerHTML += `<img src="${filme.Poster}" id = "poster${c}"alt="Capa">`
                    descn.innerHTML = ""
                    descn.innerHTML = `<h3>${filme.Title}</h3>`
                    descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                    descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
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

            document.getElementById('star0').addEventListener("click", () => {
                let star = document.getElementById('star0')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 0
                favoritar()
            })
            document.getElementById('star1').addEventListener("click", () => {
                let star = document.getElementById('star1')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 1
                favoritar()
            })
            document.getElementById('star2').addEventListener("click", () => {
                let star = document.getElementById('star2')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 2
                favoritar()
            })
            document.getElementById('star3').addEventListener("click", () => {
                let star = document.getElementById('star3')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 3
                favoritar()
            })
            document.getElementById('star4').addEventListener("click", () => {
                let star = document.getElementById('star4')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 4
                favoritar()
            })
            document.getElementById('star5').addEventListener("click", () => {
                let star = document.getElementById('star5')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 5
                favoritar()
            })
            document.getElementById('star6').addEventListener("click", () => {
                let star = document.getElementById('star6')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 6
                favoritar()
            })
            document.getElementById('star7').addEventListener("click", () => {
                let star = document.getElementById('star7')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 7
                favoritar()
            })
            document.getElementById('star8').addEventListener("click", () => {
                let star = document.getElementById('star8')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 8
                favoritar()
            })
            document.getElementById('star9').addEventListener("click", () => {
                let star = document.getElementById('star9')
                star.style.color = "gold"
                star.setAttribute('class', 'bi bi-star-fill')
                star.style.fontSize = "3em"
                IdFilme = 9
                favoritar()
            })
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
                        resn.innerHTML += `<img src="${filme.Poster}" id = "poster${c}" alt="Capa">`
                        descn.innerHTML = ""
                        descn.innerHTML = `<h3>${filme.Title}</h3>`
                        descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>` 
                        descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
                    }
                } else {
                    console.log(request)
                    console.log(`ERROR ${request.status}`)
                }
                document.getElementById('star0').addEventListener("click", () => {
                    let star = document.getElementById('star0')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 0
                    favoritar()
                })
                document.getElementById('star1').addEventListener("click", () => {
                    let star = document.getElementById('star1')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 1
                    favoritar()
                })
                document.getElementById('star2').addEventListener("click", () => {
                    let star = document.getElementById('star2')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 2
                    favoritar()
                })
                document.getElementById('star3').addEventListener("click", () => {
                    let star = document.getElementById('star3')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 3
                    favoritar()
                })
                document.getElementById('star4').addEventListener("click", () => {
                    let star = document.getElementById('star4')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 4
                    favoritar()
                })
                document.getElementById('star5').addEventListener("click", () => {
                    let star = document.getElementById('star5')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 5
                    favoritar()
                })
                document.getElementById('star6').addEventListener("click", () => {
                    let star = document.getElementById('star6')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 6
                    favoritar()
                })
                document.getElementById('star7').addEventListener("click", () => {
                    let star = document.getElementById('star7')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 7
                    favoritar()
                })
                document.getElementById('star8').addEventListener("click", () => {
                    let star = document.getElementById('star8')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 8
                    favoritar()
                })
                document.getElementById('star9').addEventListener("click", () => {
                    let star = document.getElementById('star9')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 9
                    favoritar()
                })
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
                        resn.innerHTML += `<img src="${filme.Poster}" id = "poster${c}" alt="Capa">`
                        descn.innerHTML = ""
                        descn.innerHTML = `<h3>${filme.Title}</h3>`
                        descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                        descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
                    }
                } else {
                    console.log(request)
                    console.log(`ERROR ${request.status}`)
                }
                document.getElementById('star0').addEventListener("click", () => {
                    let star = document.getElementById('star0')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 0
                    favoritar()
                })
                document.getElementById('star1').addEventListener("click", () => {
                    let star = document.getElementById('star1')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 1
                    favoritar()
                })
                document.getElementById('star2').addEventListener("click", () => {
                    let star = document.getElementById('star2')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 2
                    favoritar()
                })
                document.getElementById('star3').addEventListener("click", () => {
                    let star = document.getElementById('star3')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 3
                    favoritar()
                })
                document.getElementById('star4').addEventListener("click", () => {
                    let star = document.getElementById('star4')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 4
                    favoritar()
                })
                document.getElementById('star5').addEventListener("click", () => {
                    let star = document.getElementById('star5')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 5
                    favoritar()
                })
                document.getElementById('star6').addEventListener("click", () => {
                    let star = document.getElementById('star6')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 6
                    favoritar()
                })
                document.getElementById('star7').addEventListener("click", () => {
                    let star = document.getElementById('star7')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 7
                    favoritar()
                })
                document.getElementById('star8').addEventListener("click", () => {
                    let star = document.getElementById('star8')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 8
                    favoritar()
                })
                document.getElementById('star9').addEventListener("click", () => {
                    let star = document.getElementById('star9')
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 9
                    favoritar()
                })
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

function favoritar() {   
    FavoritoC = localStorage.length / 3  
    let posterLocal = document.getElementById(`poster${IdFilme}`).getAttribute('src')
    let tituloLocal = document.getElementById(`desc${IdFilme}`).getElementsByTagName('h3')[0].innerText
    let anoLocal = document.getElementById(`desc${IdFilme}`).getElementsByTagName('p')[0].innerText
    console.log(tituloLocal)
    localStorage.setItem(`${FavoritoC}Poster`, posterLocal)
    localStorage.setItem(`${FavoritoC}Title`, tituloLocal)
    localStorage.setItem(`${FavoritoC}Ano`, anoLocal)
}