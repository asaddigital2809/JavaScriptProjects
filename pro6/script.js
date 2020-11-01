const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
//Event listeners
//1. Toggle the nav
toggle.addEventListener('click',()=>
    document.body.classList.toggle('show-nav')
);
//2. show the modal
open.addEventListener('click', ()=>
    modal.classList.add('show-modal')
);
//3. close the modal
close.addEventListener('click', ()=>
    modal.classList.remove('show-modal')
);
//4. close the modal
window.addEventListener('click',e => 
    e.target === modal ? modal.classList.remove('show-modal') : false
);