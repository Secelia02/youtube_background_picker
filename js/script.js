document.querySelector("#purple").addEventListener("click", partyPurple);
document.querySelector("#green").addEventListener("click", partyGreen);
document.querySelector("#blue").addEventListener("click", partyBlue);
document.querySelector("#orange").addEventListener("click", partyOrange);

function partyPurple() {
  document.body.style.backgroundColor = "rgba(241,63,247,1)";
  document.body.style.color = "white";

}
function partyGreen() {
  document.body.style.backgroundColor = "rgba(0,253,81,1)";
  document.body.style.color = "white";

}

function partyBlue() {
  document.body.style.backgroundColor = "rgba(0,254,255)";
  document.body.style.color = "white";
}

function partyOrange() {
  document.body.style.backgroundColor = "rgb(255, 69, 0)";
  document.body.style.color = "white"
}