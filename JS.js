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

/* Botões de avançar e voltar da aba de favoritos */
var bF = document.createElement('button')
bF.innerText = 'Próxima Página >>'
bF.setAttribute('id', 'NextFav')
bF.setAttribute('class', 'btn btn-dark btn-sm')
bF.addEventListener('click', (n)=>{
    n.stopPropagation
    proxPagFav()
})
var bvF = document.createElement('button')
bvF.innerText = '<< Página anterior'
bvF.setAttribute('id', 'PrevFav')
bvF.setAttribute('class', 'btn btn-dark btn-sm')
bvF.addEventListener('click', (n)=>{
    n.stopPropagation
    antPagFav()
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
                    let resn = document.getElementById(`res${c}`)
                    let descn = document.getElementById(`desc${c}`)
                    if (JSON.parse(request.response).Search[c] == undefined | null) {
                        resn.style.display = "none"
                        descn.style.display = "none"
                    } else {
                        let filme = JSON.parse(request.response).Search[c] 
                        resn.innerHTML += `<img src="${filme.Poster}" id = "poster${c}" alt="Capa">`
                        descn.innerHTML = ""
                        descn.innerHTML = `<h3>${filme.Title}</h3>`
                        descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                        if (localStorage.getItem(`${filme.Poster}`) == filme.Title) {
                            descn.innerHTML+= `<i class="bi bi-star-fill" id="star${c}"></i>`
                        } else {
                            descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
                        }
                        resn.style.display = "flex"
                    }
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
            if (document.getElementById('NextFav')!= undefined) {
                footer.removeChild(bF)    
            }
            if (document.getElementById('PrevFav') != undefined) {
                footer.removeChild(bvF)
            }
            

            document.getElementById('star0').addEventListener("click", () => {
                let star = document.getElementById('star0')
                if (star.getAttribute('class') == "bi bi-star-fill") {
                    window.alert ('deletor')
                } else {
                    star.style.color = "gold"
                    star.setAttribute('class', 'bi bi-star-fill')
                    star.style.fontSize = "3em"
                    IdFilme = 0
                    favoritar()
                }
                
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
                     
                    let resn = document.getElementById(`res${c}`)
                    let descn = document.getElementById(`desc${c}`)
                    if (JSON.parse(request.response).Search[c] == undefined | null) {
                        resn.style.display = "none"
                        descn.style.display = "none"
                    } else {
                        let filme = JSON.parse(request.response).Search[c]
                        resn.innerHTML = ""
                        resn.innerHTML += `<img src="${filme.Poster}" id = "poster${c}"alt="Capa">`
                        descn.innerHTML = ""
                        descn.innerHTML = `<h3>${filme.Title}</h3>`
                        descn.innerHTML += `<p>Lançado no ano de ${filme.Year}</p>`
                        if (localStorage.getItem(`${filme.Poster}`) == filme.Title) {
                            descn.innerHTML+= `<i class="bi bi-star-fill" id="star${c}"></i>`
                        } else {
                            descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
                        }
                        resn.style.display = "flex" 
                    }
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
            if (document.getElementById('NextFav')!= undefined) {
                footer.removeChild(bF)    
            }
            if (document.getElementById('PrevFav') != undefined) {
                footer.removeChild(bvF)
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

function proxpag() {
    window.scrollTo (0,0)
    p++
    var rurl = `${url}&page=${p}`
    const request = new XMLHttpRequest()
    request.open("GET", rurl)
    request.send()
    request.onload = () => {
    /* Garantindo que o request foi bem sucessidido */
        if (request.status === 200) {
            let data = JSON.parse(request.response).Search
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
                    if (localStorage.getItem(`${filme.Poster}`) == filme.Title) {
                        descn.innerHTML+= `<i class="bi bi-star-fill" id="star${c}"></i>`
                    } else {
                        descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
                    }
                    resn.style.display = "flex"
                    if (document.getElementById('NextFav')!= undefined) {
                        footer.removeChild(bF)    
                    }
                    if (document.getElementById('PrevFav') != undefined) {
                        footer.removeChild(bvF)
                    }
                }
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
            } else {
                console.log(request)
                console.log(`ERROR ${request.status}`)
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
                    center.style.display = "none"
                    navbar.style.display = "flex"
                    footer.style.display = "flex"
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
                        if (localStorage.getItem(`${filme.Poster}`) == filme.Title) {
                            descn.innerHTML+= `<i class="bi bi-star-fill" id="star${c}"></i>`
                        } else {
                            descn.innerHTML += `<i class="bi bi-star" id="star${c}"></i>`
                        }
                        resn.style.display = "flex"
                        if (document.getElementById('NextFav')!= undefined) {
                            footer.removeChild(bF)    
                        }
                        if (document.getElementById('PrevFav') != undefined) {
                            footer.removeChild(bvF)
                        }
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
    FavoritoC = localStorage.length / 4  
    let posterLocal = document.getElementById(`poster${IdFilme}`).getAttribute('src')
    let tituloLocal = document.getElementById(`desc${IdFilme}`).getElementsByTagName('h3')[0].innerText
    let anoLocal = document.getElementById(`desc${IdFilme}`).getElementsByTagName('p')[0].innerText
    console.log(tituloLocal)
    localStorage.setItem(`${FavoritoC}Poster`, posterLocal)
    localStorage.setItem(`${FavoritoC}Title`, tituloLocal)
    localStorage.setItem(`${FavoritoC}Ano`, anoLocal)
    localStorage.setItem(`${posterLocal}`, tituloLocal)
}

var pagCFav = 0
function pagfavoritos() {
    if (localStorage.length != 0 ) {
        window.scrollTo(0,0)
        for (let c = 0 ; c < 10; c++) {
            let filmePoster = localStorage.getItem(`${c + pagCFav}Poster`)
            let filmeTitle = localStorage.getItem(`${c + pagCFav}Title`)
            let filmeAno = localStorage.getItem(`${c + pagCFav}Ano`)
            let resn = document.getElementById(`res${c}`)
            let descn = document.getElementById(`desc${c}`)
            resn.innerHTML = ""
            descn.innerHTML = ""
            if (filmePoster != null) {
                resn.innerHTML += `<img src="${filmePoster}" id = "poster${c}" alt="Capa">`
                descn.innerHTML = `<h3>${filmeTitle}</h3>`
                descn.innerHTML += `<p>Lançado no ano de ${filmeAno}</p>`
                descn.innerHTML += `<i class="bi bi-star-fill" id="star${c}"></i>`
                resn.style.display = "flex"
                descn.style.display = "flex"
                
            } else {
                resn.style.display = "none" 
                descn.style.display = "none"
            }
        }
        center.style.display = "none"
        navbar.style.display = "flex"
        footer.style.display = "flex"
        console.log (document.getElementById('Next'))
        if (document.getElementById ('Next') != null) {
            footer.removeChild (b)    
        }
        
        if (localStorage.length / 4 > 9) {
            footer.appendChild(bF)
        }
        
        if (pagCFav > 1) {
            footer.appendChild(bvF)
            if (document.getElementById('Prev') != null) {
                footer.removeChild(bv)
            }
            if (localStorage.length / 4 < 9 + pagCFav) {
                footer.removeChild(bF)   
            }
        }
        if (pagCFav == 0 && document.getElementById('PrevFav') != null) {
            footer.removeChild(bvF)
        }
        
    } else {
        alert('Você ainda não possui favoritos')
    }
}

function proxPagFav() {
    if (localStorage.length / 4 > 9) {
        pagCFav += 10
        pagfavoritos()
    }
}

function antPagFav () {
    pagCFav -= 10
    pagfavoritos()
}