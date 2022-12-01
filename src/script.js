const elForm = document.querySelector("form");
const elInput = document.querySelector("#input");
const cards = document.querySelector(".cards");

function renderItem(pok, reg = "") {
  cards.innerHTML = "";
  pok.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img class="rounded-t-lg mb-3" src=${item.img} alt=${item.name}>
            <div class="flex justify-around w-full items-center">
              <h3 class="text-purple-300 font-bold bg-amber-700 p-2 rounded">${item.name}</h3>
              <p class="text-sky-100 rounded-full p-3 bg-red-600">${item.weight}</p>
              <p class="absolute top-0 right-0 rounded-full bg-yellow-600 p-2 ">${item.num}</p>
            </div>
    `;
    cards.appendChild(card);
  });
}

elForm.addEventListener("keyup", (evt) => {
  evt.preventDefault();

  console.log(elInput.value);
  const elRegPokemon = new RegExp(elInput.value.trim(), "gi");
  const elCartoonSearch = pokemons.filter((item) =>
    item.name.match(elRegPokemon)
  );

  if (elCartoonSearch.length > 0) {
    renderItem(elCartoonSearch);
  } else {
    alert("No such cartoon found!❌❌❌");
  }
});

renderItem(pokemons);
