const myLibrary = [];
let bookContainer = document.querySelector('.books')

function Book(name, author) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
}

function addBookToLibrary(name, author) {
    let newBook = new Book(name, author);
    myLibrary.push(newBook);
}

function getAllBooks() {
    bookContainer.innerHTML = '';

    for (let book of myLibrary) {
        let itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';
        bookContainer.appendChild(itemContainer);

        let itemID = document.createElement('div');
        itemID.className = 'item-id';
        itemContainer.appendChild(itemID);
        itemID.innerText = book.id;

        let itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemContainer.appendChild(itemName);
        itemName.innerText = book.name;

        let itemAuthor = document.createElement('div');
        itemAuthor.className = 'item-author';
        itemContainer.appendChild(itemAuthor);
        itemAuthor.innerText = book.author;
    }
}