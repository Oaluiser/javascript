var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}