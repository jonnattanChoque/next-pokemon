const toggleFavorites = (id: number) => { 
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(id)) {
        favorites = favorites.filter((favorite: number) => favorite !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existFavorites = (id: number): boolean => {
    if (typeof window === 'undefined') return false;
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const allPokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const exported = { toggleFavorites, existFavorites, allPokemons }
export default exported;