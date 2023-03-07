// class LinkedListNode {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
//
// class LinkedList {
//   constructor() {
//     this.head = null;
//
//     this.insertNodeAtHead = function (node) {
//       if (this.head != null) {
//         node.next = this.head;
//         this.head = node;
//       } else this.head = node;
//     };
//
//     this.createLinkedList = function (list) {
//       list.reverse().forEach((element) => {
//         let newNode = new LinkedListNode(element);
//         this.insertNodeAtHead(newNode);
//       });
//     };
//   }
// }
//
// const linkedList = new LinkedList();
//
// linkedList.createLinkedList(['a', 'b', 'b', 'b', 'b', 'a']);
//
// // Создать переменную для перевернутого списка.
// // Создать цикл по списку.
// // Сохранить список без текущего элемента (начиная со следующего).
// // Присвоить в next первого элемента списка перевернутый список.
// // Присвоить перевернутому списку текущей список.
// // Присвоить переменной списка списку список без текущего элемента.
//
// // rev = null;
//
// //--------while list exists------------
//
// // list = (1 -> 2 -> 3 -> null)
// // next =      (2 -> 3 -> null)
// // list = (1  -> rev) ==> (1 -> null)
// // rev = list         ==> (1 -> null)
// // list = next        ==> (2 -> 3 -> null)
//
// //-------------------------------------
//
// // list = (2 -> 3 -> null)
// // next =      (3 -> null)
// // list = (2 -> rev) ==> (2 -> 1 -> null)
// // rev = list        ==> (2 -> 1 -> null)
// // list = next       ==> (3 -> null)
//
// //--------------------------------------
//
// // list = 3 -> null
// // next =      null
// // list = (3 -> rev) ==> (3 -> 2 -> 1 -> null)
// // rev = list        ==> (3 -> 2 -> 1 -> null)
// // list = next       ==> null
//
// //--------------------------------------
//
// // END
//
// const reversedLinkedList = (list) => {
//   let rev = null;
//
//   while (list !== null) {
//     let next = list.next;
//     list.next = rev;
//     rev = list;
//     list = next;
//   }
//
//   return rev;
// };
//
// export function palindrome(head) {
//   console.log(head);
//   let slowPointer = head;
//   let fastPointer = head;
//   let revHalf = null;
//
//   while (fastPointer && fastPointer.next) {
//     fastPointer = fastPointer.next.next;
//     slowPointer = slowPointer.next;
//   }
//
//   revHalf = reversedLinkedList(slowPointer);
//
//   while (revHalf) {
//     if (revHalf.data !== head.data) {
//       return false;
//     } else {
//       revHalf = revHalf.next;
//       head = head.next;
//     }
//   }
//
//   return true;
// }
//
// console.log(palindrome(linkedList.head));

// Завести Map для хранения индексов букв
// Завести переменную для текущей длинны окна
// Завести переменную для хранения самого длинного окна
// START LOOP (где счетчик === secondPointer):
// Если встречается буква уже присутствующая в Map то:
// Сохраняем текущую длину окна:
// Если она больше максимальной, обновляем максимальную
// Если нет, оставляем максимальную неизменной
/** Сдвигаем firstPointer на индекс + 1 больше предыдущего индекса
 повторенной буквы и продолжаем цикл */
/** При достижении конца списка снова проверяем длину получившегося окна
 и обновляем (при необходимости) */
// END LOOP
// Возвращаем максимальную длину окна.

// function findLongestSubstring(inputString) {
//   let maxWindowSize = 0;
//   let currentWindowSize = 0;
//   let firstPointer = 0;
//   let secondPointer = 0;
//   const characterMap = new Map();
//
//   if (!inputString) return '';
//
//   if (inputString.length === 1) return 1;
//
//   characterMap.set(inputString[0], 0);
//
//   for (let i = 1; i < inputString.length; i++) {
//     secondPointer = i;
//     let sortedCharacterArr = [...characterMap.entries()].sort((a, b) => {
//       return a[1] - b[1];
//     });
//
//     if (characterMap.get(inputString[secondPointer]) !== undefined) {
//       currentWindowSize =
//         sortedCharacterArr[sortedCharacterArr.length - 1][1] - firstPointer;
//
//       if (currentWindowSize > maxWindowSize) {
//         maxWindowSize = currentWindowSize;
//       }
//
//       firstPointer = characterMap.get(inputString[secondPointer]) + 1;
//       characterMap.set(inputString[secondPointer], i);
//     } else {
//       currentWindowSize = secondPointer - firstPointer;
//
//       if (currentWindowSize > maxWindowSize) {
//         maxWindowSize = currentWindowSize;
//       }
//
//       console.log(characterMap)
//
//       characterMap.set(inputString[secondPointer], i);
//     }
//   }
//   return maxWindowSize + 1;
// }
//
// console.log(findLongestSubstring('abas'));

function minSubArraylen(target, nums) {
  let sum = 0;
  let windowSize = Infinity;
  let startPointer = 0;
  let endPointer = 0;

  while (endPointer < nums.length) {
    sum += nums[endPointer];
    if (sum >= target) {
      windowSize = Math.min(windowSize, endPointer - startPointer + 1);
    }
    while (sum >= target) {
      sum -= nums[startPointer];
      windowSize = Math.min(windowSize, endPointer - startPointer + 1);
      ++startPointer;
    }
    ++endPointer;
  }

  return windowSize === Infinity ? 0 : windowSize;
}

console.log(minSubArraylen(5, [1, 2, 1, 3]));
