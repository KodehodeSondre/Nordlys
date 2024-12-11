const lat = 62.197089;
const long = 6.126711;

let url = `https://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&forecast=false&threeday=true`;

fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data.threeday.values);

    createAverageColorDivs(data.threeday.values);
  })
  .catch(error => console.error('Error fetching data:', error));

function createAverageColorDivs(colorData) {
  const container = document.createElement('div'); 
  container.style.display = 'flex'; 
  container.style.flexWrap = 'wrap'; 
  container.style.gap = '10px'; 
  document.body.appendChild(container);

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
}
