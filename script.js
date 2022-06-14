const $keyBoard = document.getElementById('keyboard')
const $footer = document.getElementById('resultado')
const $quadroTexto = document.getElementById('quadro-texto')
const $bind = document.querySelector('.binds')
let shiftOn = false
let capsOn = false


window.addEventListener('load', () => {
    gerarTeclasDeEscrita()
})

const teclas = ['esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',
    'tab','q','w','e','r','t','y','u','i','o','p', '´', '[',
    'caps','a','s','d','f','g','h','j','k','l','ç','~', ']',
    'shift','z','x','c','v','b','n','m',',', '.', ';',
    '?123','ctrl','alt','space','ralt','rctrl','selecionar'
]
const teclasEspeciais = [
    'num1','num2','num3','num4','num5','num6','num7','num8','num9','num0',
    '1','2','3','4','5','6','7','8','9','0','-','+',
    '=','´','[',']','@','#','$','%','&','*','(',')','!','?','.',
    ',',':',';','?','/','\\','|',"'",'"',`&lt;`,'&gt;','ABC','selecionar'
]


const gerarTecla = (tecla) => `<div id="${tecla}" class="tecla" onclick="digitar(this)">${tecla}</div>`

const gerarTeclasDeEscrita = () =>{
    teclas.forEach(tecla => {
        $keyBoard.innerHTML += gerarTecla(tecla)
    })
}

const gerarTeclasEspeciais = () => {
    teclasEspeciais.forEach(tecla => {
        $keyBoard.innerHTML += gerarTecla(tecla)
    })
}


const digitar = (that) => {
    const $textArea = document.getElementById('keyboard-text')
    let txt
    switch(that.innerText){
        case 'BACKSPACE':
            txt = $textArea.value
            txt = txt.substr(0,txt.length-1)
            $textArea.innerText = txt
            return

        case '?123':
            document.querySelectorAll('.tecla').forEach(v => $keyBoard.removeChild(v))
            gerarTeclasEspeciais()
            return
        case 'ABC':
            document.querySelectorAll('.tecla').forEach(v => $keyBoard.removeChild(v))
            gerarTeclasDeEscrita()
            return
        case 'SELECIONAR':
            if($textArea.value == ''){
                return
            } else {
                $footer.classList.remove("hide");
                $quadroTexto.innerHTML = $quadroTexto.innerHTML + `<p>bind ${$textArea.value} ${$bind.value}</p>`
                $textArea.innerHTML = ''
                return
            }
    }


    $quadroTexto.innerHTML = ''
    $textArea.innerHTML += that.innerText.toLowerCase()
}

