// code here
const baseUrl = 'http://localhost:3000/shows'
const showListsContainer = document.querySelector('#list')
const queuedShowLists = document.querySelector('#queued')


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded!')
    getShows()

})

const getShows = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        showListsContainer.innerHTML = ''
        data.map(show => {
            // console.log(show)
            showListsContainer.innerHTML += 
            `<li id="showList" href="#" data-name="${show.title}">${show.title}</li>`
            
        })
        clickToLink()

    })
}

const clickToLink = () => {
    const showLists = document.querySelectorAll('li#showList')
      showLists.forEach(lists => {
        // console.log(lists)
        lists.addEventListener('click', (e) => {
            // console.log('Clicked')
            // console.log(e.target.dataset.name)
            queuedShowLists.innerHTML += `<li id="queuedList" href="#" data-name="${e.target.dataset.name}">${e.target.dataset.name}</li>`

        })
    })
}

