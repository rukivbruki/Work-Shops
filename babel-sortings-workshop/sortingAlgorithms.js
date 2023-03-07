const arr = [1, -2, 5, 10, 45, 2, 2, 9, 0];

/***************
 *  BubbleSort
 ***************/

// 1. Берем первое число из массива ((<->));
// 2. Берем второе число из массива (<->);
// 3. Если первое число больше второго, то меняем местами первое со вторым;
// 4. Возвращаем отсортированный массив после завершения 2-х циклов;

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j+1] < arr[j]) {
//                 let tmp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = tmp
//             }
//         }
//     }
//
//     return arr
// }

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(bubbleSort(arr));

/******************
 *  SelectionSort
 ******************/

// 1. ((<->)):
// Принимаем за минимальный индекс текущего элемента;
// 2. (<->):
// Ищем элемент меньше элемента с текущим индексом;
// Если находим, сохраняем минимальный индекс;
// Меняем текущий элемент с найденным минимальным;
// 3. Возвращаем отсортированный массив после завершения 2-х циклов;

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort(arr));

/******************
 *  insertionSort
 ******************/

const insertionSort = (array) => {
  const arr = Array.from(array);

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
};

console.log(insertionSort(arr));

/**********
 *  Merge
 **********/

// Принимает 2 отсортированных массива;
// Объединяет 2 отсортированных массива в один отсортированный массив;
// Возвращает отсортированный массив;

// 1. (<-->) пока левый массив и правый массив имеют элементы:
// Сравниваем первый элемент правого массива с первым элементом левого массива;
// "?":
// Первый элемент больше второго, сохраняем этот элемент в результатах;
// Удаляем сохраненный элемент из массива.
// "else": обратное.
// 2. Возвращаем конкатенированный массив из массива результатов, левого и правого массива;

const merge = (leftArr, rightArr) => {
  const res = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      res.push(leftArr.shift());
    } else {
      res.push(rightArr.shift());
    }
  }

  return [...res, ...rightArr, ...leftArr];
};

/**************
 *  MergeSort
 **************/

// function mergeSort(arr) {
//     if (arr.length === 1) {
//         return arr;
//     }
//
//     const center = Math.floor(arr.length / 2);
//     const left = arr.slice(0, center);
//     const right = arr.slice(center);
//
//     return merge(mergeSort(left), mergeSort(right));
// }

/****************
 *  MergeSort 2
 ****************/

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return ([arr[0], arr[1]] = [arr[1], arr[0]]);
    } else {
      return arr;
    }
  }

  const center = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, center);
  const rightArr = arr.slice(center);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort(arr));

/***************
 *  Quick Sort
 ***************/

// 1. Принимает неотсортированный массив;
// 2. Находим опорный элемент;
// 3. ↕:
//    1. Создаем 2 подмассива с элементами меньше опорного и больше опорного;
//    2. Объединяем левый подмассив, опорный подмассив и правый подмассив;

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const middleElem = Math.floor(array.length / 2);
  const less = [];
  const larger = [];

  for (let i = 0; i < array.length; i++) {
    if (middleElem === i) {
      continue;
    }

    if (array[middleElem] > array[i]) {
      less.push(array[i]);
    } else {
      larger.push(array[i]);
    }
  }

  return [...quickSort(less), array[middleElem], ...quickSort(larger)];
};

console.log(quickSort(arr));
