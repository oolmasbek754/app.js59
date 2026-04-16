//11-usul
//const list = document.querySelector("ol");
//let i = 0;

//function loop() {
//  for (let j = 0; j < 200; j++) {
//   if (i >= 10000) return;

//   const li = document.createElement("li");
//    li.textContent = "hiii";
//   list.appendChild(li);

//    i++;
//  }

//  setTimeout(loop, 0);
//}

//loop();

//12-usul
//const list = document.querySelector("ol");

//function* generateItems(n) {
//  for (let i = 0; i < n; i++) {
//    yield "hiii";
//  }
//}

//const fragment = document.createDocumentFragment();

//for (const text of generateItems(10000)) {
//  const li = document.createElement("li");
//  li.textContent = text;
//  fragment.appendChild(li);
//}

//list.appendChild(fragment);

//13-usul
const list = document.querySelector("ol");

const observer = new MutationObserver(() => {
  console.log("List o'zgardi!");
});

observer.observe(list, { childList: true });

for (let i = 0; i < 100; i++) {
 list.appendChild(document.createElement("li")).textContent = "hiii";
}
