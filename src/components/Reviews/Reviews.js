import React, { Component } from 'react';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => {
          return (
            <li style={{ padding: 40 }} key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Reviews;
