const participants = document.querySelector("textarea");
const selectBtn = document.querySelector("button");
const winnerDiv = document.querySelector("#winner");
const winnerInfo = document.querySelector("#info");

selectBtn.addEventListener("click", startChoosing);

let winnerUsername;

function selectRandomUser(prefix, participantsList, totalParticipants) {
  {
    let winner = Math.floor(Math.random() * totalParticipants);
    winnerUsername = participantsList[winner];
    winnerDiv.innerHTML =
      prefix + "<span class='pink winner'>@" + winnerUsername + "</span>";
  }
}

function showWinner(winner) {
  alert(winner);
}

function randomRepeater(participantsList, totalParticipants) {
  let i = 1;
  let count = 10;
  winnerInfo.style.display = "flex";
  const interval = setInterval(() => {
    selectRandomUser("choosing... ", participantsList, totalParticipants);
    if (i % 10 == 0) count--;
    winnerInfo.innerHTML = `<span class="num">${count}</span>`;
    i++;
    if (i > 100) {
      selectRandomUser("winner: ", participantsList, totalParticipants);
      winnerInfo.innerHTML = `congrats<span class="info-winner">@${winnerUsername}</span>`;

      $("#container").fireworks();

      clearInterval(interval);
    }
  }, 100);
}

function startChoosing() {
  selectBtn.blur();
  let participantsList = participants.value.split("\n");
  let totalParticipants = participantsList.length;
  randomRepeater(participantsList, totalParticipants);
}
