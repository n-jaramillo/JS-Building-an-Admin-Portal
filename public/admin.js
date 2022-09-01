async function main() {
    let res = await fetch('http://localhost:3001/listBooks')

    let books = res.json()
}

main()