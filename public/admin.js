async function main(){
    let res = await fetch('http://localhost:3001/listBooks')

    let books = await res.json()

    books.forEach(displayBook)
}

function displayBook(book){
    let rootDiv = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let input = document.createElement('input')
    input.value = book.quantity

    let saveButt = document.createElement('button')
    saveButt.textContent = 'Save'

    saveButt.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook',{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                id: book.id,
                quantity: input.value
            })
        })
    })

    li.append(input, saveButt)
    rootDiv.append(li)
}

main()