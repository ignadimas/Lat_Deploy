//DOM (Document Object Model)

// let p = document.querySelector("p")

// console.log(p.style.backgroundColor = "red")
// // console.log(p.classList.add("pindah"))

// let button = document.querySelector("button")
// let input = document.querySelector("input")

// input.addEventListener('input', function() {
//     var isi = input.value
//     console.log(p.innerText = isi)
// } )

$(document).ready(function() {
    // let h2 = $('h2')

    // h2.html(" <b>Selamat Datang</b> ")
    // h2.append('<i>Pelanggan</i>')
    // h2.prepend(' <i>Hello</i> ')
    // h2.after('<i>After</i>')
    // h2.before('<i>Before</i>')

    // let input = $('input')
    // console.log(input.val(""))

    // h2.addClass('biru')
    // h2.removeClass('border')

    // let style = {
    //     color: 'salmon',
    //     fontSize: '10px'
    // }

    // h2.css(style)

    let button = $('button')
    let input = $('input')
    let p = $('p')

    
    button.on('click', function () {
        p.toggleClass('biru')
        p.toggle(2000)
    })
    
})

// document.querySelector('h2').classList.add('biru')