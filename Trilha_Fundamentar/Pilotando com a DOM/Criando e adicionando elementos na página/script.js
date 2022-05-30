// Criando e adicionando elementos

// createElement
// const div = document.createElement('div');
// div.innerHTML = "Olá devs!"

// append prepend
// const body = document.querySelector('body')

// body.append(div)


// Adicionando elementos
const div = document.createElement('div')
div.innerHTML = "Olá devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)