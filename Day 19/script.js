const booksContainer = document.getElementById("booksContainer");
const versesContainer = document.getElementById("versesContainer");


fetch("https://www.abibliadigital.com.br/api/books")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const name = document.createElement("h1");
      name.textContent = `Name: ${book.name}`;

      const cardContent = document.createElement("div");

      const group = document.createElement("div");
      group.textContent = `Group: ${book.group}`;

      const chapters = document.createElement("div");
      chapters.textContent = `Chapters: ${book.chapters}`;

      const testament = document.createElement("div");
      testament.textContent = `Testament: ${book.testament}`;

      const author = document.createElement("div");
      author.textContent = `Author: ${book.author}`;

      cardContent.appendChild(group);
      cardContent.appendChild(chapters);
      cardContent.appendChild(testament);
      cardContent.appendChild(author);

      card.appendChild(name);
      card.appendChild(cardContent);

      booksContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the books data:", error);
  });


fetch("https://www.abibliadigital.com.br/api/verses/nvi/gn/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const card = document.createElement("div");
    card.classList.add("card");

    data.forEach((verse) => {
      const verseNumber = document.createElement("p");
      verseNumber.textContent = `Verse Number: ${verse.number}`;

      const verseText = document.createElement("p");
      verseText.textContent = `Verse Text: ${verse.text}`;

      card.appendChild(verseNumber);
      card.appendChild(verseText);
    });

    versesContainer.appendChild(card);
  })
  .catch((error) => {
    console.error("There was a problem fetching the verses data:", error);
  });
