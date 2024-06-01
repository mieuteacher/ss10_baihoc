let numbers = [1,2,3,5]

for(let i = 0; i < numbers.length; i++){
    console.log(`numbers[${i}]`, numbers[i]) // template string `${biến javascript}`
    //console.log("numbers[" + i +  "]", numbers[i])
}

for(let index in numbers) { // duyệt qua các index
    console.log("number in", numbers[index])
}

for(let number of numbers) { // duyệt qua các giá trị
    console.log("number of", number)
}