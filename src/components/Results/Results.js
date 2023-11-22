import React from "react";
import "./Results.css";
import btcImage from "../../images/Icons/btc.svg";
import ethImage from "../../images/Icons/eth.svg";
import xrpImage from "../../images/Icons/xrp.svg";
import telegramIcon from "../../images/svg/white-telegram.svg";

const data = [
  {
    name: "XRP",
    amount: "201.87$",
    timeAgo: "5 min ago",
    count: 8,
    imgSrc: xrpImage,
  },
  {
    name: "ETH",
    amount: "20.04$",
    timeAgo: "24 min ago",
    count: 16,
    imgSrc: ethImage,
  },
  {
    name: "BTC",
    amount: "91.16$",
    timeAgo: "2 hours ago",
    count: 3,
    imgSrc: btcImage,
  },
];

const Results = () => (
  <div className="results_container">
    <div className="results_content">
      <div className="section_header">
        <div className="section_header_top">
          <div className="section_header_txt">
            <h2>
              Track results of our
              <br /> customers in real time!
            </h2>
            <p>
              Join our channel in Telegram, where the bot automatically sends
              all the results. Now you can keep track of how much money our
              software brings to our customers!
            </p>
          </div>
          <button className="join_channel_btn">
            <img src={telegramIcon} alt="Channel Icon" />
            Join Channel
          </button>
        </div>
      </div>
      <div className="section_findings">
        <div className="latest_findings">
          <div className="center_container">
            <div className="latest_findings_content">
            <div>
          <h3>Latest findings from our customers</h3>
          </div>
              <div className="results_cards">
                <div className="card_grid">
                  {data.map((item, index) => (
                    <div className="result_card" key={index}>
                      <div className="card_row">
                        <div className="card_left">
                          <img src={item.imgSrc} alt="Crypto Icon" />
                          <p>{item.name}</p>
                        </div>
                        <div className="card_right">
                          <p>{item.timeAgo}</p>
                        </div>
                      </div>
                      <div className="card_row">
                        <div className="card_left">
                          <p>Server</p>
                        </div>
                        <div className="card_right">
                          <p>{item.count}</p>
                        </div>
                      </div>
                      <div className="card_row">
                        <div className="card_left">
                          <p>Amount</p>
                        </div>
                        <div className="card_right card_amount">
                          <p>{item.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Results;
