import React from 'react';
import List from './List.js';

function App(props) {
  console.log(props);
  const listComponents = props.STORE.lists.map((list, index) => {
    const cards = list.cardIds.map(id => {
      const card = props.STORE.allCards[id];
      return {
          title: card.title,
          content: card.content
      };
    });
  return <List key={index} header={list.header} cards={cards}></List>;  
  })
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      {listComponents}
    </main>
  );
}

export default App;