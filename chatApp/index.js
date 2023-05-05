function createUserList({ avatar, name, time }, idx) {
  const newUser = document.createElement("div");
  if (idx == 0) {
    newUser.classList.add("active");
  }
  newUser.classList.add("user-list");
  newUser.innerHTML = `<div class="user-list-sub" onclick="checkScreen(this,${idx})">
                    <div class="avatar"><img src="${avatar}" alt="name"></div>
                    <div class="profile-highlight">
                        <div class="user-name">
                        <p class="title">${name}</p>
                        <p class="time">${time}</p>
                        </div>
                        <p class="highlights">Lorem ipsum dolor sit amet.....<p>
                    </div>
                </div>`;
  document.querySelector(".all-users").appendChild(newUser);
}

function setUserList(userData) {
  userData.forEach((user, idx) => createUserList(user, idx));
}
setUserList(usersData);

function checkScreen(ele, idx) {
  if (window.innerWidth <= 750) {
    document.querySelector(".left").style.display = "none";
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").style.width = "100%";
  }
  getCurrentUser(ele, idx);
}

function getCurrentUser(ele, idx) {
  //1. remove active from all
  const allUserList = document.querySelectorAll(".user-list");
  allUserList.forEach((user) => user.classList.remove("active"));
  //2. add active class on selected ele
  ele.parentElement.classList.add("active");
  //3. get data of selected user
  const userName = ele.children[1].children[0].children[0].innerText;
  // console.log(name);
  const currentUser = usersData.filter((user) => user.name == userName);
  console.log(currentUser);
  //4. get chat data
    let currentChat=undefined;
    if (Object.keys(chatData).includes(userName)) {
        currentChat=chatData[userName]
    }
  //5. display it in right box
    updateChatBox(currentUser, currentChat);
}

function updateChatBox(currentUser, currentChat) {
    updateUser(currentUser[0]);
    updateChat(currentChat);
}

function updateUser({ avatar, name, status }) {
   const currentUser = document.createElement("div");
   currentUser.classList.add("current-user");
   currentUser.innerHTML = `<div class="current-user-sub">
                        <div class="current-avatar">
                            <span><img
                                    src=${avatar} />
                                <div class="online"></div>
                            </span>
                        </div>
                        <div class="avatar-info">
                            <p class="current-title">${name}</p>
                            <p class="current-highlights">${status}</p>
                        </div>
                    </div>`;
   let chatBox = document.querySelector(".chat-box");
   chatBox.innerHTML = "";
   chatBox.appendChild(currentUser); 
}

function updateChat(chat) {
    const chatData = document.createElement("div");
    chatData.classList.add("chat");
    // document.querySelector('.chat-box').children[1].innerHTML = ``;
    if (chat) {
        chat.forEach((msgObj, idx) => {
            let userNum = msgObj.from.type;
            let divEle = document.createElement('div');
            let divClassName = `${userNum}-container`;
            divEle.classList.add(divClassName);

            let pEle = document.createElement('p');
            let pClassName = `${userNum}-msg`;
            pEle.classList.add(pClassName);
            pEle.innerText = msgObj.msg.message;

            divEle.appendChild(pEle);

            chatData.appendChild(divEle);
        })
    }
    document.querySelector(".chat-box").appendChild(chatData);
}

//auto adjusting of screen size
window.addEventListener('resize', function () {
    if (window.innerWidth <= 750) {
        document.querySelector('.left').style.display = 'block';
        document.querySelector('.left').style.width = '100%';
        document.querySelector('.right').style.display = 'none';
    }
    else if (window.innerWidth > 750) {
        document.querySelector(".left").style.display = "block";
        document.querySelector(".left").style.width = "32%";
      document.querySelector(".right").style.display = "block";
      document.querySelector(".right").style.width = "68%";
    }
})

function goLeft() {
    document.querySelector(".left").style.display = "block";
    document.querySelector(".left").style.width = "100%";
    document.querySelector(".right").style.display = "none";
}
//change theme
function selectTheme(e) {
    const root = document.querySelector(":root");
    let color = e.target.value || e.target.innerText;
    if (color == "Original Theme") {
        root.style.setProperty("--my-mssg", "#00A0AE");
    }
    else root.style.setProperty("--my-mssg", color);
    console.log(root);
    console.log(color);
}
//change background
function changeBackground(e) {
    const bgType = e.target.value;
    let chat = document.querySelector('.chat');
    switch (bgType) {
      case "Original Background":
        chat.style.setProperty(
          "--background-img",
          'url("https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg")'
        );
        break;
      case "Image1":
        chat.style.setProperty(
          "--background-img",
          'url("https://w0.peakpx.com/wallpaper/818/148/HD-wallpaper-whatsapp-background-cool-dark-green-new-theme-whatsapp.jpg")'
        );
        break;
      case "Image2":
        chat.style.setProperty(
          "--background-img",
          'url("https://wallpaperaccess.com/full/1288076.jpg")'
        );
        break;
      case "Image3":
        chat.style.setProperty(
          "--background-img",
          'url("https://i.pinimg.com/736x/78/1e/21/781e212cb0a891c6d8a3738c525e235d.jpg")'
        );
        break;
    }
}
//count char and words 
function charWordCount(inputBox, isMsgSent) {
    if (isMsgSent) {
        document.querySelector(
          ".count-char"
        ).innerText = `Current characters:${0} and current words:${0}`;
    }
    console.log(inputBox);
    let numOfChar = inputBox.value.length;
    let numOfWords = inputBox.value.split(' ').length;
    //traverse and delete extra spcaes from end. and remove consecutive spaces if found. alternatively use trim 
    console.log(numOfChar);
    console.log(numOfWords);
    if (numOfChar) {
        document.querySelector(
          ".count-char"
        ).innerText = `Current characters:${numOfChar} and current words:${numOfWords}`;
    }
}
// search user 
function searchUser(e) {
    let allUsers = document.querySelector(".all-users");
    allUsers.innerHTML = '';
    let input = e.target.value;
    console.log(input);
    const newList = usersData.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));
    console.log(newList);
    if (newList.length == 0) {
        allUsers.innerHTML='No User Found'
    }
    setUserList(newList);
}
//send msg 
function sendMsg(e) {
    let msgEle = document.querySelector(".input-msg");
    let msg = msgEle.value;
    console.log(msg);
    //we will always be user2
    const name = msgEle.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[1].children[0].innerText;
    console.log(name);
    const newMsg = {
        from: {
            type:'user2'
        },
        msg: {
            message:msg
        }
    }
    if (chatData[name]) {
        chatData[name] = [...chatData[name], newMsg];
    }
    else chatData[name] = [newMsg];

    console.log(chatData[name]);
    document.querySelector(".chat").remove();
    updateChat(chatData[name]);
    msgEle.value = '';
    charWordCount(msgEle, "sent");
}


