import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const newTopic = document.createElement("div");
  newTopic.classList.add("topics");
  // const newTab1 = document.createElement("div");
  // newTab1.classList.add("tab");
  // const newTab2 = document.createElement("div");
  // newTab2.classList.add("tab");
  // const newTab3 = document.createElement("div");
  // newTab3.classList.add("tab");

  // newTopic.appendChild(newTab1);
  // newTopic.appendChild(newTab2);
  // newTopic.appendChild(newTab3);

  for (let i = 0; i < topics.length; i++) {
    let newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.textContent = topics[i];
    newTopic.appendChild(newTab);
  }
  return newTopic;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5001/api/topics') .then ( response => {
    console.log(response);
    const hardTop  = response.data.topics;
  const tabs = Tabs(hardTop);
  const selectedElement = document.querySelector(selector);
  selectedElement.appendChild(tabs);
  });

  // const hardTop  = response.data.topics;
  // const tabs = Tabs(hardTop);
  // const selectedElement = document.querySelector(selector);
  // selectedElement.appendChild(tabs);
  return selector;
}

export { Tabs, tabsAppender }
