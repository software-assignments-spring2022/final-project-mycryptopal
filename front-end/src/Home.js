import { useState } from 'react';
import {
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";
import './Home.css';
import ArticleSmall from "./ArticleSmall";

const COLORS = ["blue", "green", "yellow", "coral"]

const allocation = [
  {
    name: "BTC",
    value: 0.35,
  },
  {
    name: "ETH",
    value: 0.2,
  },
  {
    name: "DOGE",
    value: 0.2,
  },
  {
    name: "SOL",
    value: 0.25
  }
];

function Home() {
    const news = [];

    for (let i = 0; i < 5; i++) {
        news.push(<ArticleSmall key={i} />);
    }

    let initialShown = news.length > 3 ? 3 : news.length;

    const [articles, setArticles] = useState(news);
    const [numShown, setNumShown] = useState(initialShown);
    const [expanded, setExpanded] = useState(false);
    
    function showMore(){
        if (numShown === initialShown){
            setNumShown(articles.length);
            setExpanded(true);
        }
        else {
            setNumShown(initialShown);
            setExpanded(false);
        }
    }

    return (
    <>
        <div>
          <div className="container">
            <PieChart width={730} height={250}>
              <Pie data={allocation} dataKey="value" nameKey="name">
                {allocation.map((item, index) => (
                  <Cell key={index} stroke={'#000'} strokeWidth={1} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
        <div id="page-content">
          <div id="news">
            <div id="news-header">News</div>
            {news.slice(0, numShown)}
            <button id="expand-button" onClick={showMore}>
              {expanded ? (
                  <span>Show Less</span>
              ) : (
                  <span>Show More</span>
              )}
            </button>
          </div>
        </div>
        <div>
        </div>
    </>
    );
}

export default Home;
