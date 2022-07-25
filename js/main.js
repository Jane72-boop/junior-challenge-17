const APIURL = "https://api.adviceslip.com/advice";
const button = document.getElementById("button");
const adviceID = document.getElementById("adviceID");
const adviceText = document.getElementById("adviceText");

button.addEventListener("click", getAdvice);

async function getAdvice() {
  try {
    const res = await fetch(APIURL);
    const data = await res.json();
    const { id, advice } = data.slip;

    adviceID.textContent = id;
    adviceText.textContent = advice;
  } catch (err) {
    adviceID.textContent = "ERROR";
    adviceText.textContent = err;
  }
}
