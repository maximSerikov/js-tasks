//Функиция для преобразования строкового массива в числовой
function StrArrToNumArr(arr) {
    let numArr = []
    for(let i = 0; i < arr.length; i++) {
        numArr.push(Number(arr[i]));
    }

    return numArr;
}

//Вывод массива в список на странице
function ArrToUl(arr, ulId) {
    let h = "";
    for(let i = 0; i < arr.length; i++) {
        h += "<li>" + arr[i] + "</li>";
    }
    document.getElementById(ulId).innerHTML = h;;
}

//Сортировка пузырьком
function BubbleSort(arr) {
    let temp = 0;
    for (let write = 0; write < arr.length; write++) {
        for (let sort = 0; sort < arr.length - 1; sort++) {
            if (arr[sort] > arr[sort + 1]) {
                temp = arr[sort + 1];
                arr[sort + 1] = arr[sort];
                arr[sort] = temp;
            }
        }
    }
    return arr;
}

//Меняет местами итый и житый элементы массива местами
function Swap(arr, i, j) {
    var swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
}

//Шейкерная сортировка
function ShakeSort(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                Swap(arr, i, i + 1);
            }
        }
        right--;
        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                Swap(arr, i, i - 1);
            }
        }
        left++;
    }
    return arr;
}


function start2() {
    let inpValue = document.getElementById('inputArr2').value;
    let strArr = inpValue.split(' ');
    let numArr = StrArrToNumArr(strArr);
    ArrToUl(numArr, 'notSortArr2');

    let start = performance.now();
    let BubbleNumArr = BubbleSort(numArr);
    let end = performance.now();
    document.getElementById('timeBubbleSort2').innerHTML = "Время выполнения: " + (end - start) + " мс"
    ArrToUl(BubbleNumArr, 'bubbleSort2');

    let Sstart = performance.now();
    let ShakeNumArr = ShakeSort(numArr);
    let Send = performance.now();
    document.getElementById('timeShakeSort2').innerHTML = "Время выполнения: " + (Send - Sstart) + " мс"
    ArrToUl(ShakeNumArr, 'shakeSort2');

    if((end - start) > (Send - Sstart)) {
        document.getElementById('task2').innerHTML = "Шейкерная сортировка быстрее";
    }
    else {
        document.getElementById('task2').innerHTML = "Сортировка пузырьком быстрее";
    }
}