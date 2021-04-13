import data from './ArticleData.js';
const p = x => console.log(x);
const ce = x => document.createElement(x);
const qs = x => document.querySelector(x);
const el = (x, e, f) => x.addEventListener(e, f);

p(data);

const comp = (type, className='', content='', event='', callback=null) => {
  const elem = ce(type);
  if (className)
    elem.classList.add(className);
  elem.textContent = content;

  if (event)
    el(elem, event, callback);

  return elem;
};


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
*/
const articleMaker = (datum) => {

  const div = comp('div', 'article');
  const h2 = comp('h2', '', datum.title);
  const p0 = comp('p', 'date', datum.date);
  const p1 = comp('p', '', datum.firstParagraph);
  const p2 = comp('p', '', datum.secondParagraph); 
  const p3 = comp('p', '', datum.thirdParagraph);
  
  /*
    Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
    This listener should toggle the class 'article-open' on div.article.
  */
  const span = comp('span', 'expandButton', '+', 'click', 
                    () => div.classList.toggle('article-open'));

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



/*
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
 
//  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
//  to create a div.article element and append it to the DOM inside div.articles (see index.html).
const articles_div = qs('.articles');
const mapped = data.map((elem) => {
  console.log('hello');
  const article = articleMaker(elem);
  articles_div.appendChild(article);
});