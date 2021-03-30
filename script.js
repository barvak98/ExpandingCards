const panels = document.querySelectorAll('.panel')//Node list - array list of panels. Without all it will give only the first one.
panels.forEach((panel)=> {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}