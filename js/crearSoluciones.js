//?PROBLEMA A= ROBERTO TIENE $1.5 USD, PEDRO TIENE $1.7USD, COFLA TIENE $3 USD
//TODO: LOS PRECIOS DEL HELADO SON: PALITO DE HELADO DE AGUA: $0.6USD, PALITO DE HELADO DE CREMA: $ 1 USD, BOMBÓN HELADO MARCA HELADIX: 1.6 USD,BOMBÓN HELADO MARCA HELADOVICH: 1.7 USD, BOMBÓN HELADO MARCA HELARDO: 1.8 USD, POTECITO DE HELADO CON CONFETIES: 2.9 USD, POTE DE 1/4 KG -> 2.9 USD

let dineroCofla=prompt(`Cuanto dinero tienes Cofla?`)
let dineroRoberto=prompt(`Cuanto dinero tienes Roberto?`)
let dineroPedro=prompt(`Cuanto dinero tienes Pedro?`)

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert(`Cofla comprate el palito de agua`)
    vueltoCofla=(dineroCofla-0.6) 
}else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert(`Cofla comprate el palito de crema`)
     vueltoCofla=(dineroCofla-1) 
}else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert(`Cofla comprate el bombón helado marca heladix`)
     vueltoCofla=(dineroCofla-1.6) 
}else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert(`Cofla comprate el bombón helado marca heladovich`)
     vueltoCofla=(dineroCofla-1.7) 
}else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert(`Cofla comprate el bombón helado marca helardo`)
     vueltoCofla=(dineroCofla-1.8) 
}else if (dineroCofla >= 2.9) {
    alert(`Cofla podes comprarte POTECITO DE HELADO CON CONFETIES o POTE DE 1/4 KG`)
     vueltoCofla=(dineroCofla-2.9) 
}else {
    alert(`no te alcanza para ningun helado`)
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert(`Pedro comprate el palito de agua`)
    vueltoPedro=(dineroPedro-0.6) 
}else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert(`Pedro comprate el palito de crema`)
     vueltoPedro=(dineroPedro-1) 
}else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert(`Pedro comprate el bombón helado marca heladix`)
     vueltoPedro=(dineroPedro-1.6) 
}else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert(`Pedro comprate el bombón helado marca heladovich`)
     vueltoPedro=(dineroPedro-1.7) 
}else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert(`Pedro comprate el bombón helado marca helardo`)
     vueltoPedro=(dineroPedro-1.8) 
}else if (dineroPedro >= 2.9) {
    alert(`Pedro podes comprarte POTECITO DE HELADO CON CONFETIES o POTE DE 1/4 KG`)
     vueltoPedro=(dineroPedro-2.9) 
}else {
    alert(`Pedro no te alcanza para ningun helado`)
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert(`Roberto comprate el palito de agua`)
    vueltoRoberto=(dineroRoberto-0.6) 
}else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert(`Roberto comprate el palito de crema`)
     vueltoRoberto=(dineroRoberto-1) 
}else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert(`Roberto comprate el bombón helado marca heladix`)
     vueltoRoberto=(dineroRoberto-1.6) 
}else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert(`Roberto comprate el bombón helado marca heladovich`)
     vueltoRoberto=(dineroRoberto-1.7) 
}else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert(`Roberto comprate el bombón helado marca helardo`)
     vueltoRoberto=(dineroRoberto-1.8) 
}else if (dineroRoberto >= 2.9) {
    alert(`Roberto podes comprarte POTECITO DE HELADO CON CONFETIES o POTE DE 1/4 KG`)
     vueltoRoberto=(dineroRoberto-2.9) 
}else {
    alert(`no te alcanza para ningun helado`)
}

console.log(`El vuelto de Cofla es ${vueltoCofla.toFixed(3)}`)
console.log(`El vuelto de Rofla es ${vueltoRoberto.toFixed(3)}`)
console.log(`El vuelto de Pedro es ${vueltoPedro.toFixed(3)}`)