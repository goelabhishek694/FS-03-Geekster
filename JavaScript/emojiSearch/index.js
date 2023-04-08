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
        li.classList='emoji'
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
        if (isMatches(emojiName, searchText)) {
          filteredEmojis[emojiName] = allEmojis[emojiName];
        }
    });
    console.log(filteredEmojis);
    displayEmojis(filteredEmojis)
}

function isMatches(emojiName, searchText) {
    var searchText = searchText.replace("/\ /g", "").toLowerCase();
    var tokens = [];
    var p2 = 0;
    for (var p1 = 0; p1 < emojiName.length; p1++){
        var char = emojiName[p1];
        if (char.toLowerCase() == searchText[p2]) {
            p2++;
        }
        tokens.push(char);
    }
    if (p2 != searchText.length) {
        return '';
    }
    return tokens.join('');
}

document.querySelector("#emoji-list").addEventListener("click", (e) => {
    var text = e.target.textContent;
    navigator.clipboard.writeText(text).then(() => {
        e.target.classList.add("fade");
        setTimeout(() => e.target.classList.remove("fade"),1000);
    }, (err) => {
        console.log("text could not be copied",err);
    })
})
/* rfd 
 ReadableStream*/