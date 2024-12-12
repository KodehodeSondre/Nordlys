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

const source = document.createElement('source')
source.src = "/img/121878-724720103_small.mp4"; 
source.type = "video/mp4";
video.appendChild(source);
maincontent.appendChild(video)

const footer = document.createElement('div');
footer.className = "footer";
maincontainer.appendChild(footer);

const searchbar = document.createElement("div");
const searchinput = document.createElement("input");
searchbar.className = "searchbar";
searchinput.className = "searchinput";
searchinput.placeholder = "Search location";
searchbar.appendChild(searchinput);
maincontent.appendChild(searchbar);

const maincontent2 = document.createElement("div");
maincontent2.className = "maincontent2";
maincontent.appendChild(maincontent2);

const maincontent2items = ["Volda","Tonight", "Oslo", "Tonight"];

maincontent2items.forEach((item,index) => {
    const box = document.createElement('div');
    box.className = "box";
    box.id = `box${index + 1}`;

    const boxHeader = document.createElement('div');
    boxHeader.className = "box-header";
    boxHeader.textContent = item;
    const itemcontainer = document.createElement('div');
    itemcontainer.className = "itemcontainer";
    itemcontainer.id = `itemcontainer${index + 1}`;
    box.appendChild(boxHeader);
    box.appendChild(itemcontainer);
    maincontent2.appendChild(box);
});


const box1items = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const itemcontainer1 = document.getElementById("itemcontainer1");
box1items.forEach(item => {
    const box1item = document.createElement('div');
    box1item.className = "item";
    box1item.textContent = item;
    itemcontainer1.appendChild(box1item);
});

const box2items = ["item1", "item2", "item3", "item4"];
const itemcontainer2 = document.getElementById("itemcontainer2");
box2items.forEach(item => {
    const box2item = document.createElement('div');
    box2item.className = "item";
    box2item.textContent = item;
    itemcontainer2.appendChild(box2item);
});

const box3items = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const itemcontainer3 = document.getElementById("itemcontainer3")
box3items.forEach(item => {
    const box3item = document.createElement('div');
    box3item.className = "item";
    box3item.textContent = item;
    itemcontainer3.appendChild(box3item);
});

const box4items = ["item1", "item2", "item3", "item4"];
const item4container = document.getElementById("itemcontainer4");
box4items.forEach(item => {
    const box4item = document.createElement('div');
    box4item.className = "item";
    box4item.textContent = item;
    item4container.appendChild(box4item);
});