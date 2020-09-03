// OPTIONAL: if you're feeling adventurous, try to make the data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import { data } from './Article-data.js';
const print = x => console.log(x);
const ce = x => document.createElement(x);
const qs = x => document.querySelector(x);
print('Article.js');
print(data);


/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!
*/
const articleMaker = (datum) => {


  const div = ce('div');
  div.classList.add('article');


  const h2 = ce('h2');
  h2.textContent = datum.title;


  const p0 = ce('p');
  p0.classList.add('date');
  p0.textContent = datum.date;

  const p1 = ce('p');
  p1.textContent = datum.firstParagraph;

  const p2 = ce('p');
  p2.textContent = datum.secondParagraph;
  
  const p3 = ce('p');
  p3.textContent = datum.thirdParagraph;  


  const span = ce('span');
  span.classList.add('expandButton');
  span.textContent = '+';

  /*
    Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
    This listener should toggle the class 'article-open' on div.article.
  */
  span.addEventListener('click', () => {
    div.classList.toggle('article-open');
  });

  /* Step 3: Don't forget to return something from your function */
  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>
  //   {three separate paragraph elements}
  //   <span class="expandButton">+</span>
  // </div>
  div.appendChild(h2);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(span);
  return div;
};




// Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
// to create a div.article element and append it to the DOM inside div.articles (see index.html).
const articles_div = qs('.articles');
const mapped = data.map((elem) => {
  console.log('hello');
  const article = articleMaker(elem);
  articles_div.appendChild(article);
  return 'foo';
});
console.log(mapped);