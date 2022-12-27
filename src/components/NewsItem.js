import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, publishedAt } = this.props;

    return (
      <div className="my-5">
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="cart-text">
              <small className="text-muted">
                By {author} on {publishedAt}
              </small>
            </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
