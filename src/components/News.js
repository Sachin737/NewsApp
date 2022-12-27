import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";

export class News extends Component {
  articles = [
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "New research on Sepsis clarifies how it can lead to cell death - The Hindu",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMifGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9zY2ktdGVjaC9zY2llbmNlL25ldy1yZXNlYXJjaC1vbi1zZXBzaXMtY2xhcmlmaWVzLWhvdy1pdC1jYW4tbGVhZC10by1jZWxsLWRlYXRoL2FydGljbGU2NjMwNjM5NC5lY2XSAYEBaHR0cHM6Ly93d3cudGhlaGluZHUuY29tL3NjaS10ZWNoL3NjaWVuY2UvbmV3LXJlc2VhcmNoLW9uLXNlcHNpcy1jbGFyaWZpZXMtaG93LWl0LWNhbi1sZWFkLXRvLWNlbGwtZGVhdGgvYXJ0aWNsZTY2MzA2Mzk0LmVjZS9hbXAv?oc=5",
      urlToImage: null,
      publishedAt: "2022-12-26T06:27:00Z",
      content: null,
    },
  ];

  static defaultProps = {
    country: "in",
    category: "",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d46ef1e41f774954bdb3578802e79777&page=1&pageSize=12`;

    // console.log(url);

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: 1,
      loading: false,
    });
  }

  handleNextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d46ef1e41f774954bdb3578802e79777&page=${this.state.page + 1}&pageSize=12`;

    this.setState({ loading: true });
    let parsedData = await (await fetch(url)).json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlePreviousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d46ef1e41f774954bdb3578802e79777&page=${this.state.page - 1}&pageSize=12`;

    this.setState({ loading: true });
    let parsedData = await (await fetch(url)).json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-5">
        {!this.state.loading && <h1 className={`${this.props.TextColour} text-center`}>NewsApp - Top Headlines</h1>}
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem author={ele.author === null ? "Unknown" : ele.author.slice(0, 4) === "http" ? new URL(ele.author).pathname.slice(1) : ele.author} publishedAt={new Date(ele.publishedAt).toGMTString()} title={ele.title !== null ? ele.title : "Title not available"} description={ele.description !== null && ele.description.length ? ele.description.slice(0, Math.min(80, ele.description.length)) : "No description available"} imgUrl={ele.urlToImage !== null ? ele.urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl={ele.url !== null ? ele.url : "/"}></NewsItem>
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between my-5">
          <button type="button" disabled={this.state.page <= 1} className={`btn btn-${this.props.mode === "light" ? "dark" : "light"} mx-1`} onClick={this.handlePreviousclick}>
            &larr; Previous
          </button>
          <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / 12)} className={`btn btn-${this.props.mode === "light" ? "dark" : "light"} mx-1`} onClick={this.handleNextclick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
