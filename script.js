

document.addEventListener('keydown',e =>{
    if(e.key == 'Escape'){
    Limpar();}
})
document.addEventListener('keypress', e=>{
    if(e.key == 'Enter'){
        Calcular();
    }
})

function Calcular(){
    let LadoA=parseFloat(document.getElementById('ladoa').value)
    let LadoB=parseFloat(document.getElementById('ladob').value)
    let LadoC=parseFloat(document.getElementById('ladoc').value)
    let res =document.querySelector('.res')
    res.innerHTML=''
    if(!isNaN(LadoA) &&  !isNaN(LadoB) && !isNaN(LadoC)){
        let P = (LadoA+LadoB+LadoC)/2
        let Area =Math.sqrt(P * (P-LadoA) *(P-LadoB) * (P-LadoC))
        res.innerHTML='Calculando:'
        res.innerHTML+=`<br/>O Triangulo com os lados A:${LadoA}; B:${LadoB}; C:${LadoC} Tem sua <strong>Área:${Area.toFixed(2)}</strong>`

    }else{
        res.innerHTML='Impossivel Calcular'
    }
}
function Limpar(){
    document.getElementById('ladoa').value=''
    document.getElementById('ladob').value=''
    document.getElementById('ladoc').value=''
    document.querySelector('.res').innerHTML='Resultado:'

}