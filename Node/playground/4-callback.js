// setTimeout(() => {
//     console.log('Two seconds are up.');
// }, 2*1000);

// const names = ['Andrew', 'Jen', 'Jess'];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });

// shortNames.forEach((shortName) => {
//     console.log(shortName);
// });

// const geocode = (address, callback) => {
//     const data = {
//         latitude: 12.5, 
//         longitude: 25.3
//     };
//     callback(data);
// }

// geocode('Philadelphia', (data) => {
//     console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 2 * 1000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})