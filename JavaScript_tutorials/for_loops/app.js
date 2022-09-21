// for (let i =1; i<=10; i++){
//     console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// let randoArray = [
//     'rand1',
//     'rand2',
//     'rand3',
//     'rand4',
//     'rand5',
//     'rand6',
// ]

// for (let i = 0; i < randoArray.length; i++) {
//     console.log(randoArray[i]);
// }

// for (let i = randoArray.length -1; i >= 0; i--) {
//     console.log(randoArray[i]);
// }


// neststed loops

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for (i = 0; i < seatingChart.length; i++) {
//     for (j = 0; j < seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j])
//     }
// }

// a more explicit way to do the above loop

for (i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW ${i+1}:`)
    for (j = 0; j < row.length; j++) {
        console.log(`     ${row[j]}`)
    }
}