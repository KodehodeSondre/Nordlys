let locationurl = `https://api.auroras.live/v1/?type=locations&tz=-60`;

fetch(locationurl)
  .then(response => response.json())
  .then((data) => {
    console.log(data); 
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
      const locationDiv = document.createElement('div');
      locationDiv.classList.add('location');
  
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = `${location.name || "N/A"}`; 
  
      //const latElement = document.createElement('p');
      //latElement.textContent = `Latitude: ${location.lat || "N/A"}`; 
  
      //const longElement = document.createElement('p');
      //longElement.textContent = `Longitude: ${location.long || "N/A"}`; 
  
      locationDiv.appendChild(nameElement);
      //locationDiv.appendChild(latElement);
      //locationDiv.appendChild(longElement);
  
      container.appendChild(locationDiv);
      console.log(location.lat, location.long);
      fetchLocationStory(location.lat, location.long, locationDiv);
    });
  }
  
  function fetchLocationStory(locationlat, locationlong, parentDiv) {
    console.log(locationlat, locationlong);
    fetch(`https://api.auroras.live/v1/?type=all&lat=${locationlat}&long=${locationlong}&forecast=false&threeday=true`)
      .then(response => response.json())
      .then((data) => {
        console.log(data.threeday.values);
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

  function createAverageColorDivs(colorData, parentDiv) {
    const container = document.createElement('div'); 
    container.style.display = 'flex'; 
    container.style.flexWrap = 'wrap'; 
    container.style.gap = '10px'; 
  
    colorData.forEach(innerArray => {
      let totalValue = 0;
      let colorFrequency = {}; 
      let count = innerArray.length;
  
      innerArray.forEach(item => {
        let value = parseFloat(item["value"]);
        if (!isNaN(value)) {
          totalValue += value;
        }
        const color = String(item["colour"]); 
        if (colorFrequency[color]) {
          colorFrequency[color]++;
          console.log(color);
        } else {
          colorFrequency[color] = 1;
        }
      });
  
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