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
        itemID.textContent = book.id;

        let itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemContainer.appendChild(itemName);
        itemName.textContent = book.name;

        let itemAuthor = document.createElement('div');
        itemAuthor.className = 'item-author';
        itemContainer.appendChild(itemAuthor);
        itemAuthor.textContent = book.author;
    }
}

function showForm() {
    bookContainer.innerHTML = '';

    let form = document.createElement('form');
    formContainer.className = 'form-container';
    bookContainer.appendChild(form);

    let labelName = document.createElement('label');
    labelName.htmlFor = 'input-name';
    labelName.textContent = 'Name';
    form.appendChild(labelName);
    
    let inputName = document.createElement('input');
    inputName.id = 'input-name';
    inputName.type = 'text';
    form.appendChild(inputName);

    let labelAuthor = document.createElement('label');
    labelAuthor.htmlFor = 'input-author';
    labelAuthor.textContent = 'Author';
    form.appendChild(labelAuthor);
    
    let inputAuthor = document.createElement('input');
    inputAuthor.id = 'input-name';
    inputAuthor.type = 'text';
    form.appendChild(inputAuthor);

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add';
    form.appendChild(submitButton);
}