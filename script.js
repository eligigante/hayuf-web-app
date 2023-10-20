const userInputValue = document.getElementById('animal-input').value;

const animalsAPIURL = 'https://api.api-ninjas.com/v1/animals?name=';
const animalsAPIKey = 'NCgsX/tZu9GD2YfAZGpM2A==6dfQiZXcvqGd8HcI';

const youtubeAPIKey = 'AIzaSyAlVamTr8Dxu5yes6i8dHiCVBJjmpZJvAo';
const youtubeAPIURL = 'https://www.googleapis.com/youtube/v3/search?key=${youtubeAPIKey}&q=${userInputValue}&part=snippet&type=video&maxResults=1';

document.getElementById('find-button').addEventListener('click', function(){
    const section = document.getElementById('results-section');
    section.innerHTML='';

    const resultsLabel = document.createElement('div');
    resultsLabel.className = 'your-results-label';
    resultsLabel.textContent = 'Results for '
    const spanResults = document.createElement('span');
    spanResults.className = 'results-span';
    spanResults.textContent = '"'+ userInputValue + '"';
    resultsLabel.appendChild(spanResults);
    section.appendChild(resultsLabel);

    var animalContainer = document.createElement('div');
    animalContainer.className = 'animal-cards-container';
    section.appendChild(animalContainer);

    fetch(animalsAPIURL + userInputValue, {
        method: 'GET',
        headers: {
            'X-Api-Key': animalsAPIKey,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.length != 0) {
            result.forEach(function(animal) {
                var card = document.createElement('div');
                card.className = 'card';

                var image = document.createElement('div');
                image.className = 'image';

                var content = document.createElement('div');
                content.className = 'content';

                var animalName = document.createElement('div');
                animalName.className = 'animal-name';
                animalName.textContent = animal.name;

                var mainDetails = document.createElement('div');
                mainDetails.className = 'main-details';

                var detailsOne = document.createElement('div');
                detailsOne.className = 'details-1';

                // start details-1 contents
                // phylum
                var labelPhylum = document.createElement('div');
                labelPhylum.className = 'label';
                labelPhylum.textContent = 'Phylum: ';

                var valuePhylum = document.createElement('span');
                valuePhylum.className = 'value';
                valuePhylum.textContent = animal.taxonomy.phylum;

                // class
                var labelClass = document.createElement('div');
                labelClass.className = 'label';
                labelClass.textContent = 'Class: ';

                var valueClass = document.createElement('span');
                valueClass.className = 'value';
                valueClass.textContent = animal.taxonomy.class;

                // order
                var labelOrder = document.createElement('div');
                labelOrder.className = 'label';
                labelOrder.textContent = 'Order: ';

                var valueOrder = document.createElement('span');
                valueOrder.className = 'value';
                valueOrder.textContent = animal.taxonomy.order;

                // genus
                var labelGenus = document.createElement('div');
                labelGenus.className = 'label';
                labelGenus.textContent = 'Genus: ';

                var valueGenus = document.createElement('span');
                valueGenus.className = 'value';
                valueGenus.textContent = animal.taxonomy.genus;

                // group
                var labelGroup = document.createElement('div');
                labelGroup.className = 'label';
                labelGroup.textContent = 'Group: ';

                var valueGroup = document.createElement('span');
                valueGroup.className = 'value';
                valueGroup.textContent = animal.characteristics.group;

                // diet
                var labelDiet = document.createElement('div');
                labelDiet.className = 'label';
                labelDiet.textContent = 'Diet: ';

                var valueDiet = document.createElement('span');
                valueDiet.className = 'value';
                valueDiet.textContent = animal.characteristics.diet;

                // locations
                var labelLocations = document.createElement('div');
                labelLocations.className = 'label';
                labelLocations.textContent = 'Locations: ';

                var valueLocations = document.createElement('span');
                valueLocations.className = 'value';
                valueLocations.textContent = animal.locations;

                var detailsTwo = document.createElement('div');
                detailsTwo.className = 'details-2';

                // start details-2 content
                // lifestyle
                var labelLifestyle = document.createElement('div');
                labelLifestyle.className = 'label';
                labelLifestyle.textContent = 'Lifestyle: ';

                var valueLifestyle = document.createElement('span');
                valueLifestyle.className = 'value';
                valueLifestyle.textContent = animal.characteristics.lifestyle;

                // family
                var labelFamily = document.createElement('div');
                labelFamily.className = 'label';
                labelFamily.textContent = 'Family: ';

                var valueFamily = document.createElement('span');
                valueFamily.className = 'value';
                valueFamily.textContent = animal.taxonomy.family;

                // Scientific Name
                var labelSN = document.createElement('div');
                labelSN.className = 'label';
                labelSN.textContent = 'SN: ';

                var valueSN = document.createElement('span');
                valueSN.className = 'value';
                valueSN.textContent = animal.taxonomy.scientific_name;

                // habitat
                var labelHabitat = document.createElement('div');
                labelHabitat.className = 'label';
                labelHabitat.textContent = 'Habitat: ';

                var valueHabitat = document.createElement('span');
                valueHabitat.className = 'value';
                valueHabitat.textContent = animal.characteristics.habitat;

                // lifespan
                var labelLifespan = document.createElement('div');
                labelLifespan.className = 'label';
                labelLifespan.textContent = 'Lifespan: ';

                var valueLifespan = document.createElement('span');
                valueLifespan.className = 'value';
                valueLifespan.textContent = animal.characteristics.lifespan;

                var videoButton = document.createElement('button');
                videoButton.className = 'video-button';

                var videoLabel = document.createElement('b');
                videoLabel.className = 'video-label';
                videoLabel.textContent = 'Video';

                // details-1
                detailsOne.appendChild(labelPhylum);
                labelPhylum.appendChild(valuePhylum);

                detailsOne.appendChild(labelClass);
                labelClass.appendChild(valueClass);

                detailsOne.appendChild(labelOrder);
                labelOrder.appendChild(valueOrder);

                detailsOne.appendChild(labelGenus);
                labelGenus.appendChild(valueGenus);

                detailsOne.appendChild(labelGroup);
                labelGroup.appendChild(valueGroup);

                detailsOne.appendChild(labelDiet);
                labelDiet.appendChild(valueDiet);

                detailsOne.appendChild(labelLocations);
                labelLocations.appendChild(valueLocations);

                detailsTwo.appendChild(labelLifestyle);
                labelLifestyle.appendChild(valueLifestyle);

                detailsTwo.appendChild(labelFamily);
                labelFamily.appendChild(valueFamily);

                detailsTwo.appendChild(labelSN);
                labelSN.appendChild(valueSN);

                detailsTwo.appendChild(labelHabitat);
                labelHabitat.appendChild(valueHabitat);

                detailsTwo.appendChild(labelLifespan);
                labelLifespan.appendChild(valueLifespan);

                card.appendChild(image);
                card.appendChild(content);
                content.appendChild(animalName);
                content.appendChild(mainDetails);
                mainDetails.appendChild(detailsOne);
                mainDetails.appendChild(detailsTwo);
                videoButton.appendChild(videoLabel);
                card.appendChild(videoButton);
                animalContainer.appendChild(card);
            });
            section.scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else {
            animalContainer.innerHTML = "<div class='card'><div class='animal-name'>Animal not found!</div></div>";
        }
    })
    .catch(function(error) {
        animalContainer.innerHTML = "<div class='card'><div class='animal-name'>Error occurred while fetching animal data.</div></div>";
        console.error('Error: ', error.message);
    });
});
