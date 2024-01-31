console.log('cocreta')

function searchCharacter() {
    const characterName = document.getElementById('characterName').value;
    const result = document.getElementById('container');
    const apiURL = `http://localhost:4000/characters/${characterName}`;

    result.innerHTML = '';

    fetch(apiURL)
    .then(response => response.json())
    .then(data => {

        if (data.length > 0) { // Check if data is an array and not empty

            data.forEach(item => {
                const { name, status, species, gender, origin: { name: originName }, image } = item;
                result.innerHTML += `
                <div class="card">
                    <img src="${image}" alt="${name}"/>
                    <p>${name}</p>
                    <p>${species}</p>
                    <p>${gender}</p>
                    <p>${originName}</p>
                </div>
                `;
            });

        } else {
            result.innerHTML = "No se ha encontrado el personaje";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        result.innerHTML = "Error al realizar la búsqueda";
    });
}
