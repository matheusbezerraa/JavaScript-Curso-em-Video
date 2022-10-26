let array = [51, 'verde']

console.log(array[array.length - 1])
console.log('')

array.map((item, i) => {
   return console.log(i + 1,'',item)
})