let mapWidth = 20
let mapHeight = 40
let input = document.getElementById("input");
let save = document.getElementById("save");
let load = document.getElementById("load");
let rooms = []
let roomData = []
let roomList = document.getElementById("roomList")

document.getElementById("mapHeight").value = mapHeight;
document.getElementById("mapWidth").value = mapWidth;
createMap(mapHeight, mapWidth)
onLoad()

input.addEventListener("submit", (e) => {
    e.preventDefault();

    mapHeight = document.getElementById("mapHeight").value;
    mapWidth = document.getElementById("mapWidth").value;



    createMap(mapHeight, mapWidth);
});

save.addEventListener("submit", (e) => {
    e.preventDefault(); 
    saveMap();
    var ListItem = document.createElement("li")
    ListItem.innerText = rooms[rooms.length - 1]
    roomList.appendChild(ListItem)

});

load.addEventListener("submit", (e) => {
    e.preventDefault()
    let roomNumber = Number(document.getElementById("loadroom").value)
    loadRoom(roomNumber-1);
})

function onLoad(){
    roomData_unsplit = localStorage.getItem("Room Data")
    rooms_unsplit = localStorage.getItem("Room Names")
    
    if (rooms_unsplit != null){
        rooms = rooms_unsplit.split(",")
    }
    if(roomData_unsplit != null){
        roomData_splitonce = roomData_unsplit.split(":")

        for (let i = 0; i < roomData_splitonce.length; i++){
            roomData.push(roomData_splitonce[i].split(","))
        }
    }


    console.log(roomData.length)
    console.log(roomData)

    
    for (let i = 0; i < rooms.length; i++){
        var ListItem = document.createElement("li")
        ListItem.innerText = rooms[i]
        roomList.appendChild(ListItem)
    }
    
}

function loadRoom(roomNumber){
    console.log(roomNumber)
    console.log(roomData)
    console.log(roomData[roomNumber])
    let container = document.getElementById("gridContainer")
    height = roomData[roomNumber].length
    width = roomData[roomNumber][0].length

    container.innerHTML = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++){
            let box = document.createElement("div")

            box.classList.add("box")

            box.addEventListener("click", () => {
                box.classList.toggle("active");
            });

            if (roomData[roomNumber][i][j] == "1"){
                box.classList.toggle("active");
            }

            container.appendChild(box)
            
        }
        container.appendChild(document.createElement("br"));
    }
}

function createMap(height, width) {
    let container = document.getElementById("gridContainer");

    container.innerHTML = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++){
            let box = document.createElement("div")

            box.classList.add("box")

            box.addEventListener("click", () => {
                box.classList.toggle("active");
            });

            container.appendChild(box)
            
        }
        container.appendChild(document.createElement("br"));
    }

}

function saveMap(){
    let roomName = document.getElementById("savename").value
    let totalBoxes = document.getElementsByClassName("box");
    let height = Number(mapHeight)
    let width = Number(mapWidth)
    let mapArray = []

    for (let row = 0; row < map_height; row++) {
        let thisRow = ""
        for (let box = 0; box < width; box++){
            let currentBox = totalBoxes[(row * width) + box]
            if (currentBox.classList.contains("active")){
                thisRow += 1
            }
            else{
                thisRow += 0
            }
        }
        mapArray.push(thisRow)
    }
    rooms.push(roomName)
    roomData.push(mapArray)
    console.log(roomName + mapArray)
    
    let roomDataString = roomData.join(":");
    localStorage.setItem("Room Data", roomDataString);
    localStorage.setItem("Room Names", rooms);

    console.log(localStorage)
    console.log(localStorage.getItem("Room Data"))
    console.log(roomData)

    console.log(roomData[0].length)
    console.log(roomData[0][0].length)
}
