import React, { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.movieId}/reviews?api_key=5e053c5e248d64400c2519d2136543a4&language=en-US&page=1`,
    );
    this.setState({ reviews: response.data.results });
    console.log(response.data.results);
  }

  render() {
    return (
      <ul>
        {this.state.reviews.map(review => {
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
