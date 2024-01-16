let arr = ["esto", "es", "un", "array", "con", "siete", "palabras"];

function bubbleSort(arr) {

    let cambio = false;

    for (let i = arr.length; i > 0; i--) {
        cambio = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                cambio = false;
            }
        }
        if (cambio) break;
    }
    return arr;
}

bubbleSort(arr);

alert(arr);