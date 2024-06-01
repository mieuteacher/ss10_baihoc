// let a = 1;
// let b = 10;
// let c = 15;
// let d = 20;

/*
- Độ dài của mảng
- Phần tử của mảng
- Các cách thao tác.
*/

/* Khởi tạo mảng */
let numberArray = [1,2,3,4,5]; // index 0, 1, 2, 3

// console.log("numberArray", numberArray.length)
// console.log("vi tri dau tien", numberArray[0])
// console.log("vi tri cuối cùng", numberArray[3])
// console.log("vi tri thu 2", numberArray[1])

// for(let i = 0; i < numberArray.length; i++) {
//     console.log("i", i, "value", numberArray[i])
// }

// Cho 1 mảng như sau:  [1,2,3,4,5,7,8,9,10] yêu cầu duyệt từ đầu tới cuối mảng sau đó in ra các số chẵn
// 19:13 (VN)
/*
 b1/ Khởi tạo 1 mảng và giá trị của nó như đề bài:  (let b = [1,2,3,4,5,7,8,9,10])
 b2/ Duyệt mảng từ đầu tới cuối
 b3/ Kiểm tra số chẵn numberArray[i] % 2 === 0 => nếu đúng là số chẵn thì in ra màn hình console
*/


/* Thêm phần tử vào mảng */
    // console.log("numberArray before", numberArray)

    // numberArray.push(6); // thêm vào cuối

    // console.log("numberArray after", numberArray)

    // console.log("numberArray after length", numberArray.length)

    // console.log("numberArray", numberArray[numberArray.length - 1])

    // numberArray.unshift(0); // thêm vào đầu

    // console.log("numberArray last", numberArray)

// thêm giữa

// let arrayTest = [1,2,3,4] // array // thêm 6 vào giữa // number < array

// let indexMid = arrayTest.length / 2;

// let resultArray = []; // 1,2,6,3 (2)

// for(let i = 0; i < arrayTest.length; i++) {

//     if(i == indexMid) {
//         resultArray.push(6)
//     }


//     resultArray.push(arrayTest[i])
// }

// console.log("resultArray", resultArray)


// 1,2,3,4,5

// for(let i = 0; i < numberArray.length; i++) {
//     if(numberArray[i] == 3) {
//         numberArray.splice(i, 1)
//     }
// }

// console.log("numberArray", numberArray)

// bài tập
/*
- Yêu cầu người dùng nhập vào 1 số nguyên dương.
- Khởi tạo 1 mảng rỗng.
- Duyệt từ đầu tới số mà người dùng nhập.
- Mỗi lần như thế thêm 1 phần tử vào mảng. Với giá trị bất kỳ
- In mảng hoàn thành ra màn hình.
*/
/*
Input: cần 1 số
Output: chúng ta sẽ in ra 1 mảng, mà mảng đó có độ dài bằng số người dùng nhập với các phần tử là giá trị bất kỳ.
*/

/*
- Vị dụ input: 5;
- [1,2,3,4,5]
*/

