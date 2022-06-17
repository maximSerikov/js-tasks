function start1() {
    //Тут мы получаем строковое значение из поля N
    let inputVal = document.getElementById("inputN").value;
    //Разбиваем нашу строку на массив по пробелу
    let strArr = inputVal.split(' ');
    //Преобразуем строковой массив в числовой
    let numArr = StrArrToNumArr(strArr);
    //Сортируем пузырьком
    numArr = BubbleSort(numArr);
    //Выводим отсортированный массив в список
    ArrToUl(numArr, 'UlTask1N');

    //Тут мы получаем строковое значение из поля K
    let inputValK = document.getElementById("inputK").value;
    //Разбиваем нашу строку на массив по пробелу
    let strArrK = inputValK.split(' ');
    //Преобразуем строковой массив в числовой
    let numArrK = StrArrToNumArr(strArrK);

    Task1(numArr, numArrK);
}


function Task1(arrN, arrK) {
    let h = "";
    for(let i = 0; i < arrK.length; i++) {
        let cond = BinSearch(arrN, arrK[i]);
        if(cond) {
            h += "<li>" + arrK[i] + ": Да</li>";
        }
        else {
            h += "<li>" + arrK[i] + ": Нет</li>";
        }
    }
    document.getElementById('UlTask1K').innerHTML = h;
}

//Бинарный поиск
function BinSearch(arr, key) {
    let n = arr.length;
    let left = -1;
    let right = n;
    while (right - left > 1) {
        let middle = (left + right);
        if (arr[middle] >= key) {
            right = middle;
        }
        else {
            left = middle;
        }
            
    }
        
    if (right != n && arr[right] == key) {
        return true;
    }
        
    else {
        return false;
    }
        
}

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