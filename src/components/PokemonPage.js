import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const pokemonURL = "http://localhost:3001/pokemon/"

  function onSearch(searchValue) {
    setSearch(searchValue);
  }

  function fetchPokemon() {
    fetch(pokemonURL)
      .then(res => res.json())
      .then(setPokemons)
  }

  function onFormSubmit(newPokemon) {
    fetch(pokemonURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon),
    })
      .then(res => res.json())
      .then(setPokemons([...pokemons, newPokemon]))
  }

  useEffect(fetchPokemon, []);

  const filteredPokemon = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={onFormSubmit} />
      <br />
      <Search search={search} onSearch={onSearch} />
      <br />
      <PokemonCollection pokemons={search === "" ? pokemons : filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
