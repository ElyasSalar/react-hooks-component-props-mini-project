import React from 'react';
import Article from './Article';

function ArticleList ({posts}){
  return (
    <main>
      {
        posts.map(({id, title, preview, minutes}) => {
          return <Article key={id} title={title} preview={preview} minutes={minutes} />
        })
      }
    </main>
  )
}

export default ArticleList;