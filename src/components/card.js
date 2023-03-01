import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const newArticle = document.createElement("div");
  newArticle.classList.add("card");
  const newHeadline = document.createElement("div");
  newHeadline.classList.add("headline");
  newArticle.appendChild(newHeadline);
  const newAuthor = document.createElement("div");
  newAuthor.classList.add("author");
  newArticle.appendChild(newAuthor);
  const newImgCont = document.createElement("div");
  newImgCont.classList.add("img-container");
  const newImg = document.createElement("img");
  newImgCont.appendChild(newImg);
  const newAuthName = document.createElement("span");
  newAuthor.appendChild(newImgCont);
  newAuthor.appendChild(newAuthName);

  newHeadline.textContent = article.headline;
  newAuthName.textContent = `By ${article.authorName}`;
  newImg.src = article.authorPhoto;

  newArticle.addEventListener("click", event => {
    console.log(article.headline);
  });
  return newArticle;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5001/api/articles').then(response => {
    // console.log(`Card Appender: ${JSON.stringify(response.data)}`);
    const hardArt = response.data.articles;
    // console.log(`HARD ART ${JSON.stringify(hardArt)}`);
    for (const language in hardArt) {
      console.log(`heres a thing ${hardArt[language].length}`);
      for (let x = 0; x < hardArt[language].length; x++) {
        console.log(`asdasd ${hardArt[language][x]}`);
        let card = Card(hardArt[language][x]);
        let selectedElement = document.querySelector(selector);
        selectedElement.appendChild(card);
        
      }
    }
    // const tabs = Card(hardArt);
    // const selectedElement = document.querySelector(selector);
    // selectedElement.appendChild(tabs);
  });

  // const hardTop  = response.data.topics;
  // const tabs = Tabs(hardTop);
  // const selectedElement = document.querySelector(selector);
  // selectedElement.appendChild(tabs);
  return selectedElement;

}

export { Card, cardAppender }
