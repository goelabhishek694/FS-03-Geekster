let allEmojis;
fetch('emoji.json')
    .then(res => res.json())
    .then(data => {
        allEmojis = data;
        displayEmojis(allEmojis)
    });

function displayEmojis(emojis) {
    //ul slect
    const ul = document.querySelector("#emoji-list");
    ul.innerHTML = '';
    Object.keys(emojis).forEach(emoji => {
        const li = document.createElement("li");
        li.innerHTML = `${emojis[emoji]}`;
        ul.appendChild(li);
    })
}
