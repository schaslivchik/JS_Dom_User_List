"use strict";

const users = [
  {
    firstName: "test1",
    lastName: "Testovich",
    age: 26,
    photoSrc:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
  },
  {
    firstName: "test2",
    lastName: "Testovich",
    age: 26,
    photoSrc:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
  },
  {
    firstName: "test3",
    lastName: "Testovich",
    age: 26,
    photoSrc:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
  },
  
  {
    firstName: "test4",
    lastName: "Testovich",
    age: 26,
    photoSrc:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
  },
];

const usersListEl = document.querySelector(".users-list");

const userListItems = users.map((u) => {
 return createUserListItem(u)
});

usersListEl.append(...userListItems);

function createUserListItem({firstName, lastName, age, photoSrc}){
  const userListItem = document.createElement("li");
  userListItem.classList.add("user-list-item");

  userListItem.append(
    createdUserImg(photoSrc, `${firstName} ${lastName}`),
    createUserMainInfo(`${firstName} ${lastName} ${age}`),
    createUserRemoveBtn()
  );
  return userListItem;
}


function createdUserImg(src, alt) {
  const userImgEl = document.createElement("img");
  userImgEl.src = src;
  userImgEl.alt = alt;
  return userImgEl;
}

function createUserMainInfo(textContent) {
  const userMainInfoEl = document.createElement("p");
  userMainInfoEl.textContent = textContent;
  return userMainInfoEl;
}

function createUserRemoveBtn() {
  const userRemoveBtn = document.createElement("button");
  userRemoveBtn.classList.add("remove-user-btn");
  userRemoveBtn.innerHTML = '<i class="far fa-trash-alt"></i> &ensp;Delete';
  
  userRemoveBtn.onclick = (e) => {
    e.currentTarget.closest(".user-list-item").remove();
  };
  
  return userRemoveBtn;
}

