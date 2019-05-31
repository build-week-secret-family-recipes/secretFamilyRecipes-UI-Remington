const mouseoverRed = document.querySelectorAll('.content');
mouseoverRed.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = "#e3e3e3";
        setTimeout(()=> event.target.style.color = "", 1500)
    })
})
const mouseoverGrey= document.querySelectorAll('.recipes');
mouseoverGrey.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = "#1f1f44";
        setTimeout(()=> event.target.style.color = "", 1500)
    })
})
const mouseoverCREAM= document.querySelectorAll('.contact');
mouseoverCREAM.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = "#a00000";
        setTimeout(()=> event.target.style.color = "", 1500)
    })
})