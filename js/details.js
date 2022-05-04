const id = new URLSearchParams(window.location.search).get('id');

const renderPost = async () => {
    const container = document.querySelector('.details');
    const response = await fetch('http://localhost:3333/posts' + id);
    const post = await response.json();

    const template = `
        <h1>${post.title}</h1>
        <p>
            <small>${post.likes}</small>
        </p>
        <p>${post.body}</p>
        <button class="delete_btn">Delete Post</button>
        <a class="edit_btn" href="/edit.html?id=${id}">Edit Post</a>
    `

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', renderPost)