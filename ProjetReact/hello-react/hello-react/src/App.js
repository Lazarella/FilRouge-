import React from 'react';
import List from "./List.cs";

class Board extends React.Component {
  render() {
    const lists = [
      {
        id: "list-1",
        title: "List 1",
        cards: [
          { id: "card-1", text: "Card 1" },
          { id: "card-2", text: "Card 2" },
          { id: "card-3", text: "Card 3" },
        ],
      },
      {
        id: "list-2",
        title: "List 2",
        cards: [
          { id: "card-4", text: "Card 4" },
          { id: "card-5", text: "Card 5" },
          { id: "card-6", text: "Card 6" },
        ],
      },
    ];

    return (
      <div>
        <h1>Board</h1>
        {lists.map((list) => (
          <List key={list.id} title={list.title} cards={list.cards} />
        ))}
      </div>
    );
  }
}

export default Board;
