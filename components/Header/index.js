// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerArray = ["SMARCH 28, 2019", "Lambda Times", "98°"];

const headerContainer = document.querySelector(".header-container");

function Header(item1, item2, item3) {

    const header = document.createElement("div");
    const span1 = document.createElement("span");
    const h1Head = document.createElement("h1");
    const span2 = document.createElement("span");

    headerContainer.append(header);
    header.append(span1);
    header.append(h1Head);
    header.append(span2);

    header.classList.add("header");
    span1.classList.add("date");
    span2.classList.add("temp");

    span1.textContent = item1;
    h1Head.textContent = item2;
    span2.textContent = item3;

    return header;
}

Header(headerArray[0], headerArray[1], headerArray[2]);