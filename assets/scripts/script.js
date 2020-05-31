const participants = document.querySelector("textarea");
const selectBtn = document.querySelector("button");
const winnerDiv = document.querySelector("#winner");

selectBtn.addEventListener("click", () => {
  let participantsList = participants.value.split("\n");
  let totalParticipants = participantsList.length;
  let winner = Math.floor(Math.random() * totalParticipants);

  winnerDiv.innerHTML =
    "winner: <span class='pink winner'>@" +
    participantsList[winner] +
    "</span>";
});
