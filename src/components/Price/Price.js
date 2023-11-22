// Price.js
import React from "react";
import "./Price.css";

const PriceItem = ({ blockchain, price, description, long, showBuyButton }) => (
  <div className={`price_item ${long ? "long_item" : "short_item"}`}>
    <div className="price_item_content">
      <p>{blockchain}</p>
      <p>
        {price}
        <span className="price_month_txt">/ month</span>
      </p>
      <p>{description}</p>
      {long && showBuyButton && <button className="buy_button">Buy</button>}
    </div>
  </div>
);

const Price = () => (
  <div className="price_content">
    <div className="prices">
      <h1 className="price_title">License price</h1>
      <div className="grid">
        {[
          {
            blockchain: "1 Blockchain",
            price: "$200",
            description:
              "You will have the opportunity to choose one blockchain",
          },
          {
            blockchain: "2 Blockchain",
            price: "$300",
            description:
              "You will have the opportunity to choose two blockchains",
          },
          {
            blockchain: "4 Blockchain",
            price: "$400",
            description:
              "You will have the opportunity to choose four blockchains",
          },
          {
            blockchain: "6 Blockchain",
            price: "$500",
            description:
              "You will have the opportunity to choose six blockchains",
          },
        ].map((item, i) => (
          <PriceItem key={i} {...item} />
        ))}
      </div>
      <div className="grid">
        <PriceItem
          blockchain="8 Blockchain"
          price="$600"
          description="You will have the opportunity to choose eight blockchains"
        />
        <PriceItem
          blockchain="8 Blockchain + NFT/Stakings"
          price="$800"
          description="You will have the opportunity to choose eight blockchains + NFT/Stakings Check"
          long
          showBuyButton
        />
        <PriceItem
          blockchain="Lifetime full access with all updates"
          price="$2000"
          description="You will have the opportunity to get lifetime full access with all updates"
          long
        />
      </div>
    </div>
  </div>
);

export default Price;
