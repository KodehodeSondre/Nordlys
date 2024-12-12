const maincontainer = document.createElement("div");
maincontainer.className = "maincontainer";
document.body.appendChild(maincontainer);

const header = document.createElement("div");
header.className = "header";
header.textContent = "Skibidi Norldys";
maincontainer.appendChild(header);

const maincontent = document.createElement("div");
maincontent.className = "maincontent";
maincontent.id = "maincontent";
maincontainer.appendChild(maincontent);

const video = document.createElement("video");
video.className = "backgroundvideo";
video.autoplay = true;
video.loop = true;
video.muted = true;
// video.innerHTML = 'src="/img/121878-724720103_small.mp4" type="video/mp4">';

const source = document.createElement('source')
source.src = "/img/121878-724720103_small.mp4"; 
source.type = "video/mp4";
video.appendChild(source);
maincontent.appendChild(video)

const footer = document.createElement('div');
footer.className = "footer";
maincontainer.appendChild(footer);

const searchbar = document.createElement("div");
searchbar.className = "searchbar";
maincontent.appendChild(searchbar);

const maincontent2 = document.createElement("div");
maincontent2.className = "maincontent2";
maincontent.appendChild(maincontent2);

const maincontent2items = ["box1","box2", "box3", "box4"];
maincontent2items.forEach(item => {
    const box = document.createElement('div');
    box.className = "box";
    // box.textContent = item;
    box.id = item;
    maincontent2.appendChild(box);
});

const box1items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
const box1 = document.getElementById("box1");
box1items.forEach(item => {
    const box1item = document.createElement('div');
    box1item.className = "item";
    box1item.textContent = item;
    box1.appendChild(box1item);
});

const box2items = ["item1", "item2", "item3", "item4"];
const box2 = document.getElementById("box2");
box2items.forEach(item => {
    const box2item = document.createElement('div');
    box2item.className = "item";
    box2item.textContent = item;
    box2.appendChild(box2item);
});

const box3items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
const box3 = document.getElementById("box3")
box3items.forEach(item => {
    const box3item = document.createElement('div');
    box3item.className = "item";
    box3item.textContent = item;
    box3.appendChild(box3item);
});

const box4items = ["item1", "item2", "item3", "item4"];
const box4 = document.getElementById("box4");
box4items.forEach(item => {
    const box4item = document.createElement('div');
    box4item.className = "item";
    box4item.textContent = item;
    box4.appendChild(box4item);
});



