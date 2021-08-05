import React from 'react';

function Article ({title, date='January 1, 1970', preview, minutes}){
  const coffee = '☕️';
  const bento = '🍱';
  var coffeeNum;
  var bentoNum;
  
  const emojeConcat = (variable, emoje, times) => {
    variable = emoje;
    for(let i = 1; i < times; i++) variable += emoje;
    return variable
  }

  coffeeNum = emojeConcat(coffeeNum, coffee, (minutes/5));
  bentoNum = emojeConcat(bentoNum, bento, (minutes/10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} <span>&#183;</span> {minutes <= 10 ? coffeeNum : bentoNum} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;