function uppercaseFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function handlePokemonTypeColors(type: string) {
  switch (type) {
    case 'bug':
      return {
        color: '#8CB230',
        backgroundColor: '#8BD674',
      };
    case 'dark':
      return {
        color: '#58575F',
        backgroundColor: '#6F6E78',
      };
    case 'dragon':
      return {
        color: '#0F6AC0',
        backgroundColor: '#7383B9',
      };
    case 'electric':
      return {
        color: '#EED535',
        backgroundColor: '#F2CB55',
      };
    case 'fairy':
      return {
        color: '#ED6EC7',
        backgroundColor: '#EBA8C3',
      };
    case 'fighting':
      return {
        color: '#D04164',
        backgroundColor: '#EB4971',
      };
    case 'fire':
      return {
        color: '#FD7D24',
        backgroundColor: '#FFA756',
      };
    case 'flying':
      return {
        color: '#748FC9',
        backgroundColor: '#83A2E3',
      };
    case 'ghost':
      return {
        color: '#556AAE',
        backgroundColor: '#8571BE',
      };
    case 'grass':
      return {
        color: '#62B957',
        backgroundColor: '#8BBE8A',
      };
    case 'ground':
      return {
        color: '#DD7748',
        backgroundColor: '#F78551',
      };
    case 'ice':
      return {
        color: '#61CEC0',
        backgroundColor: '#91D8DF',
      };
    case 'normal':
      return {
        color: '#9DA0AA',
        backgroundColor: '#B5B9C4',
      };
    case 'poison':
      return {
        color: '#A552CC',
        backgroundColor: '#9F6E97',
      };
    case 'psychic':
      return {
        color: '#EA5D60',
        backgroundColor: '#FF6568',
      };
    case 'rock':
      return {
        color: '#BAAB82',
        backgroundColor: '#D4C294',
      };
    case 'steel':
      return {
        color: '#417D9A',
        backgroundColor: '#4C91B2',
      };
    case 'water':
      return {
        color: '#4A90DA',
        backgroundColor: '#58ABF6',
      };
    default:
      return {
        color: '#FFFFFF',
        backgroundColor: '#FFFFFF',
      };
  }
}

function abbreviatePokemonStats(value: string) {
  switch (value) {
    case 'Special Attack':
      return 'Sp. Atk';
    case 'Special Defense':
      return 'Sp. Def';
    default:
      return value;
  }
}

function formatPokemonStatValue(value: string) {
  switch (value) {
    case '0.25':
      return '¼';
    case '0.5':
      return '½';
    case '1':
      return '';
    default:
      return value;
  }
}

function handlePokemonFriendshipRating(value: number) {
  if (value > 0 && value <= 99) return 'normal';
  if (value >= 100 && value <= 199) return 'medium';
  if (value >= 200 && value <= 255) return 'high';
}

export {
  uppercaseFirstLetter,
  handlePokemonTypeColors,
  abbreviatePokemonStats,
  formatPokemonStatValue,
  handlePokemonFriendshipRating,
};
