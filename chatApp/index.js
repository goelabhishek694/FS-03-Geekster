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
        chat.forEach((msgObj,idx) => {
            let divEle = document.createElement('div');
            let divClassName = `user${(idx%2)+1}-container`;
            divEle.classList.add(divClassName);

            let pEle = document.createElement('p');
            let pClassName = `user${(idx % 2) + 1}-msg`;
            pEle.classList.add(pClassName);
            pEle.innerText = msgObj.msg.message;

            divEle.appendChild(pEle);

            chatData.appendChild(divEle);
        })
    }
    document.querySelector(".chat-box").appendChild(chatData);
}




