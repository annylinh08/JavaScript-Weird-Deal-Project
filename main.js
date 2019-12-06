// JavaScript Document

// Initialize the header and section
let header = document.querySelector('header');
let section = document.querySelector('section');

//Create a variable to store the json URL
let requestURL = "https://annylinh08.github.io/JavaScript-Weird-Deal-Project/mydeals.json";

//create a new XHR object
let request = new XMLHttpRequest();

//open a new request, using the open method
request.open('GET', requestURL);

//et up the request to accept JSON

request.responseType = 'json';

//send the request using the send method

request.send();


// adding an event handler that listens for loading json object
request.onload = function() {
  let weirdDeals = request.response;
  console.log(weirdDeals);
  populateHeader(weirdDeals);
  products(weirdDeals);
}

//Set up populateHeader function to fill in the header function
function populateHeader(jsonObj) {

// grab the store name from JSON object and then create a new element, adding text and appending to the header

  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);

//grab the established date and add a new paragraph to your HTML that displays this info

  let headerPara = document.createElement('p');
  headerPara.textContent = 'Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}

// define the features function to show the features of the products
function products(jsonObj) {

  //Connect features object to a variables
  let products = jsonObj['products'];

  for (let i = 0; i < products.length; i++) {
    //create some elements
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let list = document.createElement('ul');

  //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://annylinh08.github.io/JavaScript-Weird-Deal-Project/images/' + products[i].image);
    img.setAttribute('alt', products[i].image );

    h2.textContent = products[i].name;
    p1.textContent = 'Price: ' + products[i].price;
    p2.textContent = 'Description: ' + products[i].description;
    p3.textContent = 'Features: ';
    let features = products[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li');
      listItem.textContent = features[j];
      list.appendChild(listItem);
    }

  //Create and add each element to article, then append article to section

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(list);
    section.appendChild(article);

  }

}
