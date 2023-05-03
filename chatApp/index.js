function createUserList({ avatar,name, time },idx) {
    const newUser = document.createElement('div');
    if (idx == 0) {
        newUser.classList.add('active')
    }
    newUser.classList.add("user-list");
    newUser.innerHTML = `<div class="user-list-sub">
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
    userData.forEach((user,idx)=>createUserList(user,idx))
}
setUserList(usersData)