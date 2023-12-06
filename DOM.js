

let button = document.getElementsByTagName('button')[0]
let input = document.getElementById('input')
let ul  =document.querySelector('ul')


button.addEventListener('click', function() {

    if (input.value.length > 0) {  // added this condition to erase the input field after entering value.
        let li = document.createElement('li')
        let textnode = document.createTextNode(input.value) // or you can use this line of code li.innerText = input.value
        
        li.appendChild(textnode)
        ul.appendChild(li)
        input.value = '';   // added this code to accomodate the condition.

       
         //use this code below to Strickthrough, then remove after 3sec 
        li.addEventListener('click', function(){
            li.style.textDecoration = "line-through"  
           setTimeout((li)=>{
            li.remove()
           }, 3000, li)
           
        })

    } 
})

     /* li.addEventListener('click', function() {          (used to remove a list line)
        li.remove()
      }*/