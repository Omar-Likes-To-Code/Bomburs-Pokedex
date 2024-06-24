async function fetchData() {
    try {
        const pokemonLocation = document.getElementById("pokemonLocation");
        const response = await fetch(`https://pokeapi.co/api/v2/location/${pokemonLocation}`);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data)
        
        
    } catch (error) {
        console.error(error);
    }
}
