const markAllRead = document.querySelector(".mark-all-read");
const notificationCount = document.querySelector(".notification-count");
const notification = document.querySelectorAll(".notification");

markAllRead.addEventListener("click", () => {
  notificationCount.textContent = "0";

  const notificationMessage = document.querySelectorAll(
    ".notification-message"
  );
  notificationMessage.forEach(function (e) {
    e.classList.remove("notification-message-unread");
  });

  const unreadMessageIcon = document.querySelectorAll(".unread-message-icon");
  console.log(unreadMessageIcon);
  //   const icon = document.getElementsByClassName("unread-message-icon");
  //   console.log(icon);

  const iconInner = document.getElementsByClassName(".icon-inner");
  unreadMessageIcon.forEach(function (e) {
    console.log(e);
    e.parentNode.removeChild(e);
  });

  //   for (let i = 0; i < icon.length; i++) {
  //     console.log(icon[i]);
  //     icon[i].parentNode.removeChild(icon[i]);
  //     console.log(icon[i]);
  //   }
});

// function init(){

// const icon = document.getElementsByClassName("unread-message-icon");
// console.log(icon);

// for (let i = 0; i < icon.length; i++) {
//   console.log(icon[i]);
//   icon[i].parentNode.removeChild(icon[i]);
//   console.log(icon[i]);
// }

// }
