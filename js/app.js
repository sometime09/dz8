const renderPosts = async () => {
    const container = document.querySelector('.blogs');
    const response = await fetch('http://localhost:3333/posts');
    const posts = await response.json();

    let template = ''

    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p>
                    <small>${post.likes}</small>
                </p>
                <p>${post.body.slice(0,200)}</p>
                <a href="./details.html?id=${post.id}">Read More</a>
            </div>
        `
    })

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', renderPosts)
