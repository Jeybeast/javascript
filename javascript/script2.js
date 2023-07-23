let cities = ['karur', 'trichy', 'madurai']
console.log(cities[cities.length - 1])
let ramp = [1, 2, 3, 4, [4, 5], "j", "e"]
console.log(ramp[4])
ramp.push("r") //insert the element at last
console.log(ramp)
ramp.pop() //deletes last element of the array
console.log(ramp.pop())
console.log(ramp)
ramp.shift() //deletle the first element in the array
console.log(ramp.shift())
console.log(ramp)
ramp.unshift("a") //adds an element at first of the array
console.log(ramp)
delete ramp[3] //delete the element at any place 
console.log(ramp)
ramp.splice(3, 1, 'x') //(index to be deleted,how many needs tobe deleted,replace element or insert an element)
console.log(ramp)
ramp.splice(1, 0, "k")
console.log(ramp)

console.log(ramp.slice(1, 3))
ramp.reverse() //reverse the entire array element
console.log(ramp)

console.log(ramp.join())