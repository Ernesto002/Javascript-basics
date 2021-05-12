// change h1 text 
title.querySelector('h1').innerText = "Programming Memes"

// create and append paragraph element
let p = `<p></p>`
title.innerHTML += p

// select paragraph and change contents
title.querySelector('p').innerText = "This is a page with fun programming memes"