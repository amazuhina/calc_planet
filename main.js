// let weight = prompt('Ваш вес на Земле: в кг') - 0
// let sun = (27.85 * weight).toFixed(2)
// let moon = (0.165 * weight).toFixed(2)
// let mercury = (0.38 * weight).toFixed(2)
// let venus = (0.906 * weight).toFixed(2)
// let mars = (0.378 * weight).toFixed(2)
// let saturn = (1.065 * weight).toFixed(2)
// let jupiter = (2.442 * weight).toFixed(2)
// let neptune = (1.131 * weight).toFixed(2)
// let uranos = (0.903 * weight).toFixed(2)
// let pluto = (0.063 * weight).toFixed(2)
// let io = (0.183 * weight).toFixed(2)
// let europa = (0.134 * weight).toFixed(2)
// let ganymede = (0.146 * weight).toFixed(2)
// let callisto = (0.126 * weight).toFixed(2)
//
// document.write('на Земле: ' + weight + ' кг' + '<br />')
// document.write('на Солнце: ' + sun + ' кг' + '<br />')
// document.write('на Луне: ' + moon + ' кг' + '<br />')
// document.write('на Меркурии: ' + mercury + ' кг' + '<br />')
// document.write('на Венере: ' + venus + ' кг' + '<br />')
// document.write('на Марсе: ' + mars + ' кг' + '<br />')
// document.write('на Сатурне: ' + saturn + ' кг' + '<br />')
// document.write('на Юпитере: ' + jupiter + ' кг' + '<br />')
// document.write('на Нептуне: ' + neptune + ' кг' + '<br />')
// document.write('на Уране: ' + uranos + ' кг' + '<br />')
// document.write('на Плутоне: ' + pluto + ' кг' + '<br />')
// document.write('на Ио: ' + io + ' кг' + '<br />')
// document.write('на Европе: ' + europa + ' кг' + '<br />')
// document.write('на Ганимеде: ' + ganymede + ' кг' + '<br />')
// document.write('на Каллисто: ' + callisto + ' кг' + '<br />')



//let text = document.querySelector('.text')

// TODO: селекторы


// let button = document.querySelector('.btn')
// function helloWorld() {
//     alert('hello world')
// }
// button.addEventListener('click', helloWorld)



let input = document.querySelector('.input')
let button = document.querySelector('.btn')



document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        let sun = document.querySelector('.sun')
        let moon = document.querySelector('.moon')
        let mercury = document.querySelector('.mercury')
        let venus = document.querySelector('.venus')
        let mars = document.querySelector('.mars')
        let saturn = document.querySelector('.saturn')
        let jupiter = document.querySelector('.jupiter')
        let neptune = document.querySelector('.neptune')
        let uranos = document.querySelector('.uranos')
        let pluto = document.querySelector('.pluto')
        let io = document.querySelector('.io')
        let europa = document.querySelector('.europa')
        let ganymede = document.querySelector('.ganymede')
        let callisto = document.querySelector('.callisto')

        let weight = input.value - 0

        sun.value = (27.85 * weight).toFixed(2)
        moon.value = (0.165 * weight).toFixed(2)
        mercury.value = (0.38 * weight).toFixed(2)
        venus.value = (0.906 * weight).toFixed(2)
        mars.value = (0.378 * weight).toFixed(2)
        saturn.value = (1.065 * weight).toFixed(2)
        jupiter.value = (2.442 * weight).toFixed(2)
        neptune.value = (1.131 * weight).toFixed(2)
        uranos.value = (0.903 * weight).toFixed(2)
        pluto.value = (0.063 * weight).toFixed(2)
        io.value = (0.183 * weight).toFixed(2)
        europa.value = (0.134 * weight).toFixed(2)
        ganymede.value = (0.146 * weight).toFixed(2)
        callisto.value = (0.126 * weight).toFixed(2)
    }
})


