const h1 = document.querySelector('h1')

//event listener
h1.addEventListener('click', () => {
    h1.style.backgroundColor = 'red'
    h1.style.color = 'yellow'
})

h1.addEventListener('mouseover', () => {
  h1.style.fontFamily = 'sans-serif'
})