// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error ('Nome é obrigatório')
    }

    console.log(name)
}

// try...catch
try {
    sayMyName('Rodrigo')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')