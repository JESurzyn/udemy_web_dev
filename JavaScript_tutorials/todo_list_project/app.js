let input = ''
const tdList = []
while(input !== 'quit') {
    input = prompt('What would you like to do?');
    if (input ==='new') {
        let item = prompt('Add item')
        tdList.push(item)
        console.log(`${item} added to the list`)
    } else if (input == 'list') {
        let decor = '**********'
        console.log(decor)
        for (let i = 0; i < tdList.length; i++) {
            console.log(`${i}: ${tdList[i]}`)
        }
        console.log(decor)
    } else if (input === 'delete') {
        let toDelete = parseInt(prompt("What's the index of the item you want to delete?"))
        deleted = tdList.splice(toDelete,1)
        console.log(`${deleted[0]} successfully deleted`)
    }
}