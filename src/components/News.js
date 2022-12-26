import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title: "Police say 2 dead, incendiary devices found at Jehovah's Witness Kingdom Hall in Thornton, Colorado - CBS News",
      description: "Thornton Police confirmed that the two adults found dead were a married couple who were former members of the Kingdom Hall congregation.",
      url: "https://www.cbsnews.com/news/thornton-colorado-jehovahs-witness-kingdom-hall-investigation/",
      urlToImage: "https://assets3.cbsnewsstatic.com/hub/i/r/2022/12/25/7f88e3fe-1474-4bce-8b2d-68ed2a51e586/thumbnail/1200x630/6c21abc1470286f8dbfe8f7e85eb44ab/thornton.jpg",
      publishedAt: "2022-12-26T04:32:00Z",
      content: "2 dead, police investigate homicide at Jehovah's Witnesses congregation in Thornton \r\n2 dead, police investigate homicide at Jehovah's Witnesses congregation in Thornton00:45\r\nA man shot and killed h… [+1290 chars]",
    },
    {
      source: {
        id: null,
        name: "Kstp.com",
      },
      author: "Morgan Reddekopp",
      title: "19-year-old killed in Mall of America shooting identified - KSTP",
      description: "The 19-year-old who was killed in a shooting at Mall of America on Friday was identified by the Hennepin County Medical Examiner as Johntae Raymon Hudson, of St. Paul.",
      url: "https://kstp.com/kstp-news/top-news/19-year-old-killed-in-mall-of-america-shooting-identified/",
      urlToImage: "https://kstp.com/wp-content/uploads/2022/12/MOA-FATAL-SHOOTING-UPDATE_PKG_KSTPcaa5_146_mxf_00.00.25.04.jpg",
      publishedAt: "2022-12-26T03:12:53Z",
      content: "The 19-year-old who was killed in a shooting at Mall of America on Friday was identified by the Hennepin County Medical Examiner as Johntae Raymon Hudson, of St. Paul.\r\nBloomington police say nine pe… [+949 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Russian missiles rain down on Ukraine towns - Reuters",
      description: "Russian forces bombarded scores of towns in Ukraine on Christmas Day as Russian President Vladimir Putin said he was open to negotiations, a stance Washington has dismissed as posturing because of continued Russian attacks.",
      url: "https://www.reuters.com/world/europe/russian-missiles-rain-down-ukraine-towns-putin-says-he-is-open-talks-2022-12-26/",
      urlToImage: "https://www.reuters.com/resizer/IUh39PQkgaqbSXes7BcgvXLFjbQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VGTORNYYQBN5HLHHY4KZOK2YQU.jpg",
      publishedAt: "2022-12-26T03:00:00Z",
      content: "KVIV/MOSCOW, Dec 26 (Reuters) - Russian forces bombarded scores of towns in Ukraine on Christmas Day as Russian President Vladimir Putin said he was open to negotiations, a stance Washington has dism… [+5564 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Reuters",
      title: "Six dead in Spain after bus plunges off bridge into river - CNN",
      description: "Six people died and two were injured after a passenger bus careened off a bridge and plunged into an overflowing river in northwestern Spain, emergency services said on Sunday.",
      url: "https://www.cnn.com/2022/12/25/europe/spain-bus-crash-deaths-intl-hnk/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/221226114003-bus-accident-spain-122522.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-26T02:57:00Z",
      content: "Six people died and two were injured after a passenger bus careened off a bridge and plunged into an overflowing river in northwestern Spain, emergency services said on Sunday.\r\nTwo survivors - the v… [+1743 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Covid Surge In China A Global Concern | Covid News Today | China Corona News Today | English News - CNN-News18",
      description: "Covid Surge In China A Global Concern | Covid News Today | China Corona News Today | English NewsChina Covid: As many as 248 million people, or nearly 18% of...",
      url: "https://www.youtube.com/watch?v=LDCKF98pQmU",
      urlToImage: "https://i.ytimg.com/vi/LDCKF98pQmU/maxresdefault_live.jpg",
      publishedAt: "2022-12-26T02:48:41Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Antony Blinken Warns Russian President Vladimir Putin | Russia Vs Ukraine War Update | News18 Live - CNN-News18",
      description: "Antony Blinken Warns Russian President Vladimir Putin | Russia Vs Ukraine War Update | News18 Live US Secretary of State Antony Blinken says Russia has shown...",
      url: "https://www.youtube.com/watch?v=yylpVTxlv_I",
      urlToImage: "https://i.ytimg.com/vi/yylpVTxlv_I/maxresdefault_live.jpg",
      publishedAt: "2022-12-26T02:41:19Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Kristen Rogers",
      title: "A 15-metric ton meteorite crashed in Africa. Now 2 new minerals have been found in it - CNN",
      description: "In a large meteorite found in Somalia, scientists have discovered two minerals that don't naturally form on Earth.",
      url: "https://www.cnn.com/2022/12/24/world/new-minerals-discovered-in-el-ali-meteorite-scn/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/221222195000-el-ali-meteorite-sample.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-26T02:08:00Z",
      content: "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nScientists have identified two minerals never before s… [+4796 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Jelani Scott",
      title: "Sports World Sounds Off on Broncos, Russell Wilson’s Abysmal Game vs. Rams - Sports Illustrated",
      description: "Christmas Day 2022 will certainly be one to forget for Denver and the veteran quarterback after a horrible blowout loss in L.A.",
      url: "https://www.si.com/extra-mustard/2022/12/26/reactions-broncos-russell-wilson-abysmal-game-rams",
      urlToImage: "https://www.si.com/.image/t_share/MTk0NzA0NjAwMTQ4NzQ3NDI2/usatsi_19679893-1.jpg",
      publishedAt: "2022-12-26T01:59:39Z",
      content: "Christmas Day 2022 will go down as one to forget for Russell Wilson and the Broncos (4–11) following a downright abysmal showing in a 51–14 loss to Baker Mayfield and the Rams (5–10) in Los Angeles.\r… [+1902 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title: "NFL Christmas Day top plays: Buccaneers-Cardinals; Rams, Packers win - FOX Sports",
      description: "Week 16 of the NFL season continues Sunday with a three-game Christmas Day slate. Here are the top plays!",
      url: "https://www.foxsports.com/stories/nfl/nfl-christmas-day-highlights-packers-upset-dolphins-broncos-facing-rams",
      urlToImage: "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/12/1408/814/12.19.22_NFL-Top-Plays_Holidays_16x9.jpg?ve=1&tl=1",
      publishedAt: "2022-12-26T01:52:30Z",
      content: "Week 16 of the NFL\r\n season continues Sunday and we've got you covered with all the action from the three-game Christmas Day slate! Currently, Tom Brady and the Tampa Bay Buccaneers are battling the … [+5276 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nouran Salahieh",
      title: "Prolonged winter storm causes at least 26 deaths and leaves thousands without power - CNN",
      description: "The prolonged winter storm that brought heavy snow, high winds and brutal cold to most of the US this past week has killed at least 26 people and left hundreds of thousands without power.",
      url: "https://www.cnn.com/2022/12/25/weather/christmas-arctic-winter-storm-power-outages-sunday/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/221224223525-winter-storm-new-york-1224-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-26T01:40:00Z",
      content: "The prolonged winter storm that brought heavy snow, high winds and brutal cold to most of the US this past week has killed at least 26 people and left hundreds of thousands without power.\r\nPerhaps th… [+8581 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "Jack Maloney",
      title: "Bucks vs. Celtics score: Jayson Tatum's 41 points (and monster dunk) leads Boston past Milwaukee - CBS Sports",
      description: "Celtics turn a tight Christmas matchup of the NBA's top two teams into a blowout",
      url: "https://www.cbssports.com/nba/news/bucks-vs-celtics-score-takeaways-jayson-tatums-41-points-and-monster-dunk-leads-boston-past-milwaukee/live/",
      urlToImage: "https://sportshub.cbsistatic.com/i/r/2022/12/26/864d3359-831d-4576-b844-9a75b59655c1/thumbnail/1200x675/b87e4d7af61ed3b7196fcf3621aeea47/untitled-design-32.png",
      publishedAt: "2022-12-26T01:30:00Z",
      content: "BOSTON --The Boston Celtics got the gift they were wishing for this Christmas. Their once unstoppable offense, which had disappeared over the last few weeks, has finally returned. Led by 41 points fr… [+7457 chars]",
    },
    {
      source: {
        id: null,
        name: "INSIDER",
      },
      author: "Rachel Askinasi",
      title: "Khloé Kardashian wore a $5,000 Santa bag to her family Christmas party - Insider",
      description: "Khloé Kardashian showed off her Judith Leiber on stories and it's currently available at Bergdorf's for almost $5k",
      url: "https://www.insider.com/khloe-kardashian-judith-leiber-santa-bag-family-christmas-party-fashion-2022-12",
      urlToImage: "https://i.insider.com/63a8e7c047bbe40019835cc6?width=1200&format=jpeg",
      publishedAt: "2022-12-26T00:46:47Z",
      content: "The Kardashian-Jenner family celebrated the holidays with their annual Christmas Eve party on December 24. Along with her bright red strapless gown, Khloé Kardashian was toting along an accessory wor… [+1632 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Paul Best",
      title: "More than 2,300 flights canceled across US on Christmas day amid brutal winter storm - Fox Business",
      description: "Travelers around the country were frustrated on Christmas as more than 2,300 flights were canceled and another 6,000 were delayed amid a winter storm.",
      url: "https://www.foxbusiness.com/economy/more-than-2300-flights-canceled-across-us-christmas-day-brutal-winter-storm",
      urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/12/0/0/flighttttt.png?ve=1&tl=1",
      publishedAt: "2022-12-25T23:44:31Z",
      content: "More than 2,300 flights were canceled and nearly 6,000 others were delayed on Christmas day as airports across the United States dealt with a historic winter storm, according to flight tracker Flight… [+1800 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "Pope says world suffering from ‘grave famine of peace’ in Christmas message - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMie2h0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5L2ludGVybmF0aW9uYWwvMzc4ODE4My1wb3BlLXNheXMtd29ybGQtc3VmZmVyaW5nLWZyb20tZ3JhdmUtZmFtaW5lLW9mLXBlYWNlLWluLWNocmlzdG1hcy1tZXNzYWdlL9IBf2h0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5L2ludGVybmF0aW9uYWwvMzc4ODE4My1wb3BlLXNheXMtd29ybGQtc3VmZmVyaW5nLWZyb20tZ3JhdmUtZmFtaW5lLW9mLXBlYWNlLWluLWNocmlzdG1hcy1tZXNzYWdlL2FtcC8?oc=5",
      urlToImage: null,
      publishedAt: "2022-12-25T23:07:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "HANNAH FINGERHUT",
      title: "Biden, first lady thank service members in Christmas calls - Yahoo News",
      description: "President Joe Biden celebrated a quiet Christmas with his family at the White House and spoke with service members stationed around the world.  “They’re away...",
      url: "https://news.yahoo.com/biden-first-lady-thank-members-224450419.html",
      urlToImage: "https://s.yimg.com/ny/api/res/1.2/zp3Oq_k125D7Cjpn2eAFVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/f12aeaf2d3615f667f91caba901854e3",
      publishedAt: "2022-12-25T22:44:50Z",
      content: "WASHINGTON (AP) President Joe Biden celebrated a quiet Christmas with his family at the White House and spoke with service members stationed around the world.\r\nTheyre away from their families to prot… [+1390 chars]",
    },
    {
      source: {
        id: null,
        name: "Videocardz.com",
      },
      author: null,
      title: "Death Stranding is currently free on Epic Games Store - VideoCardz.com",
      description: "Death Stranding is free for one day only As expected, Epic Games Store has prepared a big hit for the first day of Christmas.  The game was developed by the Kojima Productions studio and published by 505 Games. In a break from family gatherings, PC players wi…",
      url: "https://videocardz.com/newz/death-stranding-is-currently-free-on-epic-games-store",
      urlToImage: "https://cdn.videocardz.com/1/2022/12/Death-Stranding-HERO.jpg",
      publishedAt: "2022-12-25T21:18:00Z",
      content: "As expected, Epic Games Store has prepared a big hit for the first day of Christmas. \r\nThe game was developed by the Kojima Productions studio and published by 505 Games.\r\nIn a break from family gath… [+993 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Two substations attacked in Washington state, utility says - Reuters",
      description: "Thousands of residents were without power near Tacoma, Washington, after three electrical substations were vandalized, local authorities said on Sunday, adding that it was not yet clear if the Christmas Day incidents were linked.",
      url: "https://www.reuters.com/world/us/two-substations-attacked-washington-state-utility-says-2022-12-25/",
      urlToImage: "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=124",
      publishedAt: "2022-12-25T21:10:00Z",
      content: "Dec 25 (Reuters) - Thousands of residents were without power near Tacoma, Washington, after three electrical substations were vandalized, local authorities said on Sunday, adding that it was not yet … [+1840 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Leah Bitsky",
      title: "Cher teases fans with pic of diamond ring from Alexander 'AE' Edwards - Page Six",
      description: "The “Believe” singer was first linked to AE when they were spotted holding hands at Craig’s in West Hollywood in November and have been going strong since.",
      url: "https://pagesix.com/2022/12/25/cher-teases-fans-with-pic-of-diamond-ring-from-alexander-ae-edwards/",
      urlToImage: "https://pagesix.com/wp-content/uploads/sites/3/2022/12/cher-denies-engagement-rumors-alexander-edwards.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-12-25T21:04:00Z",
      content: "Cher sparked engagement rumors when she tweeted a photo of her boyfriend, Alexander “AE” Edwards, holding a massive diamond ring. \r\nBut the Goddess of Pop seemed to brush off the speculation, saying … [+2725 chars]",
    },
    {
      source: {
        id: null,
        name: "PhoneArena",
      },
      author: "Alan Friedman",
      title: "Galaxy S23 Ultra, Galaxy S23+ promo images leak - PhoneArena",
      description: "Leaked promotional images of the Galaxy S23 Ultra and Galaxy S23+ give us a real look at the upcoming models.",
      url: "https://www.phonearena.com/news/leaked-promo-images-galaxy-s23-ultra_id144472",
      urlToImage: "https://m-cdn.phonearena.com/images/article/144472-wide-two_1200/Galaxy-S23-Ultra-Galaxy-S23-promo-images-leak.jpg",
      publishedAt: "2022-12-25T18:42:15Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: "In Pics: These Stunning Images Captured By NASA's James Webb Telescope Is A Treat For Space Lovers - NDTV",
      description: "Here are 5 incredible images captured by the James Webb Space Telescope (JWST) in 2022 that have revolutionized space imagery.",
      url: "https://www.ndtv.com/feature/in-pics-these-stunning-images-captured-by-nasas-james-webb-telescope-is-a-treat-for-space-lovers-3637898",
      urlToImage: "https://c.ndtvimg.com/2022-12/1raa9a7o_webb-produced-this-detailed-image-of-the-cartwheel-and-two-smaller-companion-galaxies-in-august-2022_625x300_25_December_22.jpg",
      publishedAt: "2022-12-25T18:25:00Z",
      content: "Webb produced this detailed image of the Cartwheel and two smaller companion galaxies in August 2022\r\nDescribed as the world's most powerful telescope, NASA's James Web telescope has captured some st… [+3233 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-5">
        <h3>This is news section</h3>

        <div className="row">
          {this.state.articles.map((ele) => {
            if (ele.urlToImage != null) {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url}></NewsItem>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default News;
