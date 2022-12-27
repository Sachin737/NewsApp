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

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 1,
    };
    document.title = `NewsApp |     ${this.props.category[0].toUpperCase()}${this.props.category.slice(1)}`;
  }

  scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  async UpdatePage() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d46ef1e41f774954bdb3578802e79777&page=${this.state.page}&pageSize=12`;

    this.setState({ loading: true });
    let parsedData = await (await fetch(url)).json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false,
    });
  }

  async componentDidMount() {
    this.UpdatePage();
  }

  handleNextclick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.UpdatePage();
  };

  handlePreviousclick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.UpdatePage();
  };

  render() {
    return (
      <div className="container my-5">
        {!this.state.loading && <h1 className={`${this.props.TextColour} text-center`}>NewsApp - Top {this.props.category[0].toUpperCase() + this.props.category.slice(1)} Headlines</h1>}
        {this.state.loading && <Spinner />}

        <br />
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem mode={this.props.mode} TextColour={this.props.TextColour} source={ele.source.name} author={ele.author === null ? "Unknown" : ele.author.slice(0, 4) === "http" ? new URL(ele.author).pathname.slice(1) : ele.author} publishedAt={new Date(ele.publishedAt).toGMTString()} title={ele.title !== null ? ele.title : "Title not available"} description={ele.description !== null && ele.description.length ? ele.description.slice(0, Math.min(120, ele.description.length)) : "No description available"} imgUrl={ele.urlToImage !== null ? ele.urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl={ele.url !== null ? ele.url : "/"}></NewsItem>
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-around my-5">
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
