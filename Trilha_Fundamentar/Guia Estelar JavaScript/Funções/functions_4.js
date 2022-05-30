// function hoisting

sayMyName()

var sayMyName = function() {
    console.log('Rodrigo')
}

function sayMyName(){
    console.log('Rodrigo')
}