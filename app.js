
// --- SET PRACTICE ---
const mySet = new Set();
const setInput = document.getElementById('setValue');
const setList = document.getElementById('setList');

function updateSetDisplay() {
    setList.innerHTML = '';
    mySet.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        setList.appendChild(li);
    });
}

function addToSet() {
    if (setInput.value) {
        mySet.add(setInput.value);
        updateSetDisplay();
        setInput.value = '';
    }
}

function checkInSet() {
    alert(mySet.has(setInput.value) ? "Exists in Set" : "Not found");
}

function deleteFromSet() {
    mySet.delete(setInput.value);
    updateSetDisplay();
    setInput.value = '';
}

function clearSet() {
    mySet.clear();
    updateSetDisplay();
}


// --- MAP PRACTICE ---
const myMap = new Map();
const mapKey = document.getElementById('mapKey');
const mapValue = document.getElementById('mapValue');
const mapList = document.getElementById('mapList');

function updateMapDisplay() {
    mapList.innerHTML = '';
    for (const [key, value] of myMap) {
        const li = document.createElement('li');
        li.textContent = `${key} => ${value}`;
        mapList.appendChild(li);
    }
}

function addToMap() {
    if (mapKey.value) {
        myMap.set(mapKey.value, mapValue.value);
        updateMapDisplay();
        mapKey.value = '';
        mapValue.value = '';
    }
}

function getFromMap() {
    alert(myMap.has(mapKey.value) ? myMap.get(mapKey.value) : "Key not found");
}

function checkInMap() {
    alert(myMap.has(mapKey.value) ? "Key exists" : "Key does not exist");
}

function deleteFromMap() {
    myMap.delete(mapKey.value);
    updateMapDisplay();
    mapKey.value = '';
}

function clearMap() {
    myMap.clear();
    updateMapDisplay();
}
