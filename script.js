const apiUrl = "https://api.adviceslip.com/advice";
const title = document.querySelector(".title");
const advice = document.querySelector(".advice");
const nextBtn = document.querySelector(".nextBtn");

getAdvice();
async function getAdvice() {
  const resp = await fetch(apiUrl);
  const data = await resp.json();

  console.log(data);

  title.innerHTML = "ADVICE #" + data.slip.id;
  advice.innerHTML = `"${data.slip.advice}"`;
}

nextBtn.addEventListener("click", () => {
  window.location.reload();
});
