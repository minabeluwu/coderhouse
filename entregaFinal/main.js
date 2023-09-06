const form = document.getElementById("formid");
const pokemonid = document.getElementById("pokemonid");
const height = document.getElementById("height");
const type = document.getElementById("type");
const abilities = document.getElementById("abilities");
const weight = document.getElementById("weight");
const pokemonimage = document.getElementById("pokeimg");
const pokemonTitulo = document.getElementById("titlePokemon");
const caracteristicas = document.getElementById("caracteristicas");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    
    async function buscarNombre(nombre) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    
    while (abilities.firstChild) {
        abilities.removeChild(abilities.firstChild);
    }

    if (pokemon.ok) {
        const pokemonData = await pokemon.json();
        const {
            sprites: { front_default },
            name,
        } = pokemonData;

        if(!caracteristicas.classList.contains("active")){
            caracteristicas.classList.add("active")
        }

        pokemonimage.src = front_default;
        pokemonTitulo.innerHTML = name;
        height.innerHTML = 'Height: ' + pokemonData.height / 10 + 'm';
        weight.innerHTML = 'Weight: ' +pokemonData.weight / 10 + 'kg';
        type.innerHTML = 'Type: ' + pokemonData.types[0].type.name;
        type.classList.add(pokemonData.types[0].type.name)

        const abilityNodes = pokemonData.abilities.map((a, i) => {
            const ability = document.createElement('li');
            ability.innerHTML = a.ability.name;

            return ability
        })

        abilities.append('abilities: ', ...abilityNodes)

        }

    }
    console.log(pokemonid.value);
    buscarNombre(pokemonid.value);
});
