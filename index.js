// code here
const baseUrl = 'http://localhost:3000/shows'
const showListsContainer = document.querySelector('#list')
const queuedShowListsContainer = document.querySelector('#queued')


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
            `<li id="showList" href="#" data-title="${show.title}">${show.title}</li>`
            
        })
        clickToLink()

    })
}

const clickToLink = () => {
    const showLists = document.querySelectorAll('li#showList')
      showLists.forEach(lists => {
        console.log(lists)
        lists.addEventListener('click', (e) => {
            // console.log('Clicked')
            // console.log(e.target.dataset.title)
            queuedShowListsContainer.innerHTML += `<li id="queuedList" href="#" data-title="${e.target.dataset.title}">${e.target.dataset.title}</li>`
        removeQueued()

        })

    })

}

const removeQueued = () => {
    const queuedLists = document.querySelectorAll('li#queuedList')
    queuedLists.forEach(lists => {
        console.log(lists)
        lists.addEventListener('click', (e) => {
            // console.log(e.target)
            e.target.remove()
            
        })
    })
}

const searchShow = () => {

}