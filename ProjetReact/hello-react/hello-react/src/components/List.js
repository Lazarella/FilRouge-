// ce fichier represente chaque liste dans le tableau , il contiendra les cartes 
// de chaque liste

import React from "react";
import Card from "./Card";

class List extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.cards.map((card) => (
          <Card key={card.id} text={card.text} />
        ))}
      </div>
    );
  }
}

export default List;