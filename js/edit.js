const id = new URLSearchParams(window.location.search).get('id'); 
const form = document.querySelector('form')

const renderPost = async () => {
    const response = await fetch('http://localhost:3333/posts' + id) 
    const post = await response.json()

    form.title.value = post.title
    form.body.value = post.body
}

const editPost = async (event) => {
    event.preventDefault();

    const editedPost = {
        title: form.title.value,
        body: form.body.value
    }

    await fetch('http://localhost:3333/posts' + id, {
        method: 'PATCH',
        body: JSON.stringify(editedPost), 
        headers: {'Content-Type': 'application/json'} 
    })

    window.location.replace('./index.html') 
}

window.addEventListener('DOMContentLoaded', renderPost)
form.addEventListener('submit', editPost)