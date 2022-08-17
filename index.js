// code here
const baseUrl = 'http://localhost:3000/shows'
const showLists = document.querySelector('#list')


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded!')
    getShows()
})

const getShows = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        showLists.innerHTML = ''
        data.map(show => {
            console.log(show)
            showLists.innerHTML += `<li>${show.title}</li>`
        })
    })
    
}