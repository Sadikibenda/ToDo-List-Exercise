

let button = document.getElementsByTagName('button')[0]
let input = document.getElementById('input')
let ul  =document.querySelector('ul')


button.addEventListener('click', function() {

    if (input.value.length > 0) {
        let li = document.createElement('li')
        let textnode = document.createTextNode(input.value)
        li.appendChild(textnode)
        ul.appendChild(li)
        input.value = '';
    } 
})


ul.addEventListener('click', function(){
    let li = document.querySelector('li')
    li.parentNode.removeChild(li)
})


/*let list = document.getElementById('demo')

 function typeHere(){
    let newitem = document.createElement('li')
    let textnode = document.createTextNode(input)
    let input = document.getElementsByClassName('input')[0].value;
     
     newitem.appendChild(textnode)
     list.appendChild(newitem)
 }*/