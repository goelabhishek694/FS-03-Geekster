let allEmojis;
fetch('emoji.json')
    .then(res => res.json())
    .then(data => {
        allEmojis = data;
        displayEmojis(allEmojis)
    });

function displayEmojis(emojiObj) {
    //ul slect
    const ul = document.querySelector("#emoji-list");
    ul.innerHTML = '';
    Object.keys(emojiObj).forEach((emojiName) => {
      const li = document.createElement("li");
      li.innerHTML = `${emojiObj[emojiName]}`;
      ul.appendChild(li);
    });
}

const emojiInput = document.querySelector("#emoji-input");
emojiInput.addEventListener('keyup', (e) => {
    // console.log(emojiInput.value);
    e.preventDefault();
    getEmojis(emojiInput.value)
})

function getEmojis(searchText) {
    let filteredEmojis = {};
    Object.keys(allEmojis).forEach(emojiName => {
        // if (/*emojiName and searchText matches*/) {
            filteredEmojis[emojiName] = allEmojis[emojiName]
        // }
    });
    displayEmojis(filteredEmojis)
}


/* rfd 
 ReadableStream*/