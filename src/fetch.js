export default async function testFetch() {
  const response = await fetch(
    "https://baconipsum.com/api/?type=meat-and-filler"
  );
  const conJSON = await response.json();
  const el = document.querySelector(".fetch");
  el.innerHTML = conJSON;
}
