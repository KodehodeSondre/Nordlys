let locationurl = `https://api.auroras.live/v1/?type=locations&tz=-60`;

fetch(locationurl)
  .then(response => response.json())
  .then((data) => {
    if (typeof data === 'object') {
    createLocationDivs(Object.values(data));
      }
    else {
      console.error('Unexpected data structure', data);
    }
  })
  .catch(error => console.error('Error fetching data:', error));

  function createLocationDivs(locations) {
    const container = document.getElementById('location-container');
  
    locations.forEach((location, index) => {
        if (location.name !== undefined) {
      const locationDiv = document.createElement('div');
      locationDiv.classList.add('location');

      const nameElement = document.createElement('h3');
      nameElement.className = 'locationfont';
      nameElement.textContent = `${location.name}`; 
  
      //const latElement = document.createElement('p');
      //latElement.textContent = `Latitude: ${location.lat || "N/A"}`; 
  
      //const longElement = document.createElement('p');
      //longElement.textContent = `Longitude: ${location.long || "N/A"}`; 
  
      locationDiv.appendChild(nameElement);
      //locationDiv.appendChild(latElement);
      //locationDiv.appendChild(longElement);
  
      container.appendChild(locationDiv);
      fetchLocationStory(location.lat, location.long, locationDiv);
      createLocationData(location.lat, location.long, locationDiv);
      }
    });
  }
  
  function fetchLocationStory(locationlat, locationlong, parentDiv) {
    fetch(`https://api.auroras.live/v1/?type=all&lat=${locationlat}&long=${locationlong}&forecast=false&threeday=true`)
      .then(response => response.json())
      .then((data) => {
        createAverageColorDivs(data.threeday.values, parentDiv);
        createMiddlePart(parentDiv);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function createMiddlePart (parentDiv) {
    const container = document.createElement('div');
    container.className = 'line';
    parentDiv.appendChild(container); 
  }

  function createLocationData(locationlat, locationlong, parentDiv) {
    fetch(`https://api.auroras.live/v1/?type=all&lat=${locationlat}&long=${locationlong}&forecast=false&twentysevenday=true`)
      .then(response => response.json())
      .then((data) => {
        const reducedDays = data.twentysevenday.values.slice(4, 11);
        createForecastColorDivs(reducedDays, parentDiv);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  //First Three
  function createAverageColorDivs(colorData, parentDiv) {
    const container = document.createElement('div'); 
    container.className = 'firstthree'; 
    container.style.display = 'flex'; 
    container.style.flexWrap = 'wrap'; 
    container.style.gap = '10px'; 
  
    colorData.forEach(innerArray => {
      let totalValue = 0;
      let colorFrequency = {}; 
      let count = innerArray.length;
      
      for (let obj in innerArray) {
        let value = parseFloat(innerArray[obj].value);
        if (!isNaN(value)) {
          totalValue += value;
        }
        const color = String(innerArray[obj].colour); 
        if (colorFrequency[color]) {
          colorFrequency[color]++;
        } else {
          colorFrequency[color] = 1;
        }
    
      };
  
      let avgValue = Math.round(totalValue / count);
  
      let avgColor = Object.keys(colorFrequency).reduce((a, b) => colorFrequency[a] > colorFrequency[b] ? a : b);
  
      const colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = avgColor;
      colorDiv.className = 'square';
      colorDiv.textContent = avgValue;
  
      container.appendChild(colorDiv);
    });
  
    parentDiv.appendChild(container); 
  }
  // Last Seven 
  function createForecastColorDivs(reducedDays, parentDiv) {
    const forecastContainer = document.createElement('div'); 
    forecastContainer.className = 'lastseven'
    forecastContainer.style.display = 'flex'; 
    forecastContainer.style.flexWrap = 'wrap'; 
    forecastContainer.style.gap = '10px'; 
   
    reducedDays.forEach(value => {
        const forecastColorDiv = document.createElement('div');
        if (value.colour === "green") {
            forecastColorDiv.style.backgroundColor = "green";
        } else if (value.colour === "yellow") {
            forecastColorDiv.style.backgroundColor = "yellow";
        } else if (value.colour === "red") {
            forecastColorDiv.style.backgroundColor = "red";
        }  
        forecastColorDiv.className = 'square';
        forecastColorDiv.textContent = value.value;
  
        forecastContainer.appendChild(forecastColorDiv);
    });
  
    parentDiv.appendChild(forecastContainer); 
  }

  // SEARCH BOX
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener("input", (event) => { 
        const locations = document.querySelectorAll('.location');
        const filter = event.target.value.toLowerCase();
        locations.forEach(location => {

            const locationName = location.querySelector('h3').textContent.toLowerCase();
            if (locationName.includes(filter)) {
                location.classList.remove('hidden');
            } else {
                location.classList.add('hidden');
            }
        });
    });