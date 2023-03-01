import { queryByTestId } from "@testing-library/dom";

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  

  const newHeader = document.createElement("div");
  newHeader.classList.add("header");
  
  const newTitle = document.createElement("h1");
  const dateSpan = document.createElement("span");
  const tempSpan = document.createElement("span");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent = date;
  tempSpan.textContent = temp;
  newTitle.textContent = title;

  newHeader.appendChild(dateSpan);
  newHeader.appendChild(newTitle);
  newHeader.appendChild(tempSpan);
  
  return newHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

  const newHead2 = Header("Boop", "01/01/01", "Hot");
  const selectedElement = document.querySelector(selector);
  selectedElement.appendChild(newHead2);
  return selector;
}

export { Header, headerAppender }
