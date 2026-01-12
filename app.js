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

const mapList = document.getElementById('mapList');

function displayMappedArray(newArray) {
    mapList.innerHTML = '';
    newArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        mapList.appendChild(li);
    });
}

function mapDouble() {
    const originalArray = Array.from(mySet);
    const doubledArray = originalArray.map(item => {
        return Number(item) ? item * 2 : item + " (NaN)";
    });

    displayMappedArray(doubledArray);
}

function mapSquare() {
    const originalArray = Array.from(mySet);
    const squaredArray = originalArray.map(item => {
        return Number(item) ? item * item : "Cannot square text";
    });
    displayMappedArray(squaredArray);
}

function mapTitle() {
    const originalArray = Array.from(mySet);
    const titleArray = originalArray.map(item => "Item: " + item);
    displayMappedArray(titleArray);
}
