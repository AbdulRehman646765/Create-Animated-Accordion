const ourItem = document.getElementsByClassName("item");
const hiddenBox = document.getElementsByClassName("hidden-box");
const openIcon = document.getElementsByClassName("open-icon");
const closeIcon = document.getElementsByClassName("close-icon");

for (let i = 0; i < ourItem.length; i++) {
  ourItem[i].addEventListener("click", () => {
    ourItem[i].classList.toggle("active");
    openIcon[i].classList.toggle("active");
    closeIcon[i].classList.toggle("active");
  });
}
