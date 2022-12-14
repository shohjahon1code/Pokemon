const elForm = document.querySelector("form");
const elInput = document.querySelector("#input");
const cards = document.querySelector(".cards");
const elSelect = document.querySelector("#select");
const elSort = document.querySelector("#sort");

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
              <p class="text-purple-200">${item.weaknesses}</p>
    `;
    cards.appendChild(card);
  });
}

function renderSelect(pokemons) {
  const selectArr = [];
  pokemons.forEach((item) => {
    item.weaknesses.forEach((weak) => {
      if (!selectArr.includes(weak)) {
        selectArr.push(weak);
      }
    });
  });

  selectArr.forEach((select) => {
    const selectOption = document.createElement("option");
    selectOption.value = select;
    selectOption.textContent = select;
    elSelect.appendChild(selectOption);
  });
}

function sortItem(pokemons, value) {
  if (value == "a-z") {
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
  }

  if (value == "z-a") {
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
  }
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const elSelectValue = elSelect.value;
  const elRegPokemon = new RegExp(elInput.value.trim(), "gi");
  const elCartoonSearch = pokemons.filter(
    (item) =>
      item.name.match(elRegPokemon) &&
      (item.weaknesses.includes(elSelectValue) || elSelectValue === "All")
  );

  if (elCartoonSearch.length > 0) {
    sortItem(elCartoonSearch, elSort.value);
    console.log(elSort.value);
    renderItem(elCartoonSearch);
  } else {
    alert("No such cartoon found!?????????");
  }
});

renderItem(pokemons);
renderSelect(pokemons);
