import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([
    {
      status: "ok",
      totalResults: 70,
      articles: [
        {
          source: {
            id: null,
            name: "Investing.com",
          },
          author: "Reuters",
          title: "Oil prices fall on worries about China COVID surge, global recession By Reuters - Investing.com",
          description: "Oil prices fall on worries about China COVID surge, global recession",
          url: "https://www.investing.com/news/commodities-news/oil-prices-rise-on-hopes-for-china-demand-boost-2970567",
          urlToImage: "https://i-invdn-com.investing.com/news/LYNXNPEB8604B_L.jpg",
          publishedAt: "2022-12-28T09:25:00Z",
          content: "By Dmitry Zhdannikov and Isabel Kua\r\nLONDON (Reuters) -Oil prices fell on Wednesday on concerns that rising COVID-19 cases in China, the world's top oil importer, will disrupt its economic recovery a… [+1829 chars]",
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const UpdatePage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=12`;

    document.title = `NewsApp |     ${props.category[0].toUpperCase()}${props.category.slice(1)}`;

    props.setProgress(10);
    let data = await fetch(url);

    props.setProgress(40);
    let parsedData = await data.json();

    props.setProgress(70);

    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };

  useEffect(() => {
    UpdatePage();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=12`;
    setpage(page + 1);
    let parsedData = await (await fetch(url)).json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      {
        <h1 className={`${props.TextColour} text-center`} style={{ margin: "7rem 0 0 0" }}>
          NewsApp - Top {props.category[0].toUpperCase() + props.category.slice(1)} Headlines
        </h1>
      }

      <br />

      {loading && <Spinner mode={props.mode} />}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner mode={props.mode} />}>
        {!loading && (
          <div className="container">
            <div className="row">
              {articles.map((ele) => {
                return (
                  <div className="col-md-4" key={ele.url}>
                    <NewsItem mode={props.mode} TextColour={props.TextColour} source={ele.source.name} author={ele.author === null ? "Unknown" : ele.author.slice(0, 4) === "http" ? new URL(ele.author).pathname.slice(1) : ele.author} publishedAt={new Date(ele.publishedAt).toGMTString()} title={ele.title !== null ? ele.title : "Title not available"} description={ele.description !== null && ele.description.length ? ele.description.slice(0, Math.min(120, ele.description.length)) : "No description available"} imgUrl={ele.urlToImage !== null ? ele.urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl={ele.url !== null ? ele.url : "/"}></NewsItem>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
