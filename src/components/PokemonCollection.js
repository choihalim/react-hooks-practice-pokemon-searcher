import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const renderPokemonCards = pokemons.map(pokemon =>
    <PokemonCard key={pokemon.id} pokemon={pokemon} />);
  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
