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
        addToQueued()
        searchShow()

    })
}

const addToQueued = () => {
    const showLists = document.querySelectorAll('li#showList')
      showLists.forEach(lists => {
        // console.log(lists)
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
        // console.log(lists)
        lists.addEventListener('click', (e) => {
            // console.log(e.target)
            e.target.remove()  
        })
    })
}

const searchShow = () => {
    const btn = document.querySelector('button#search-button')
    const inputValue = document.querySelector('#search')
    let showLists = document.querySelectorAll('li#showList')

    btn.addEventListener('click', () => {
        showListsContainer.innerHTML = ''
        showListsContainer.innerHTML = `<li>${inputValue.value}</li>`

    }) 
    addToQueued()

}
