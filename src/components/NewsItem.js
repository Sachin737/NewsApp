import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, publishedAt, source, mode, TextColour } = this.props;

    return (
      <div className={`my-5 card bg-${mode === "dark" ? "dark" : "light"} text-${TextColour === "text-dark" ? "dark" : "light"} `}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="cart-text">
            <small className={`text-${mode === "light" ? "success" : "white-50"}`}>
              {author} | {publishedAt}
            </small>
          </p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-${mode === "dark" ? "light" : "dark"} btn-sm`}>
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
