/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  sum = 0
  for (i = start ;i < end + 1 ;i++){
    if (i % 2 === 0) sum += i
  }
  return sum
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  amount = 0
  while(a > 0.2){
    a /= 2
    amount++
  }
  return amount
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  i = 2
  do{
    message = message.replace(message[i],'_')
      i += 3
    }
  while(i<message.length)
 return message
}
