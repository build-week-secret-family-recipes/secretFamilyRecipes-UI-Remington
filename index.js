const mouseoverRed = document.querySelectorAll('.content');
mouseoverRed.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = "#e3e3e3";
        setTimeout(()=> event.target.style.color = "", 3000)
    })
})