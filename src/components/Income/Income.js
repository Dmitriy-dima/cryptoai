// Income.js
import React from "react";
import "./Income.css";
import btcImage from "../../images/Icons/btc.svg";
import ethImage from "../../images/Icons/eth.svg";
import ltcImage from "../../images/Icons/ltc.svg";
import bnbImage from "../../images/Icons/bnb.svg";
import solImage from "../../images/Icons/sol.svg";
import usdtImage from "../../images/Icons/usdt.svg";
import xrpImage from "../../images/Icons/xrp.svg";
import dogeImage from "../../images/Icons/doge.svg";
import nftImage from "../../images/Icons/nft.svg";

const blockchainData = [
  {
    id: 1,
    name: "BTC",
    description:
      "The oldest blockchain network. Many wallets have been created on it",
    image: btcImage,
  },
  {
    id: 2,
    name: "ETH",
    description:
      "The second most popular blockchain. You can find many wallets but with small balances",
    image: ethImage,
  },
  {
    id: 3,
    name: "LTC",
    description:
      "This one is simple to Bitcoin. Old blockchain that has many wallets created in the past",
    image: ltcImage,
  },
  {
    id: 4,
    name: "BNB",
    description:
      "New blockchain. A lot of projects have been created on this blockchain, so you can find valuable tokens",
    image: bnbImage,
  },
  {
    id: 5,
    name: "SOL",
    description:
      "The price of this coin has skyrocketed. Many owners have lost access to wallets that now contain fortunes",
    image: solImage,
  },
  {
    id: 6,
    name: "USDT (TRX)",
    description:
      "One of the most popular blockchains. Almost everyone has a wallet on the trx network",
    image: usdtImage,
  },
  {
    id: 7,
    name: "XRP",
    description: "Good Blockchain which had many loaded wallets",
    image: xrpImage,
  },
  {
    id: 8,
    name: "DOGE",
    description:
      "Popular Blockchain meme. The amount on the wallets can be $5,000 or more",
    image: dogeImage,
  },
  {
    id: 9,
    name: "NFT Сheck",
    description:
      "Most profitable parametr to check. Amount on such wallets can be MINIMUM $500",
    image: nftImage,
  },
];

const Income = () => (
    <div className="income_content">
      <div className="header-cards">
        On which blockchains
        <br /> can you get the maximum
        <br /> income?
      </div>
      <div className="card-grid">
        {blockchainData.map((blockchain) => (
          <div key={blockchain.id} className="card">
            <div className="card-info">
              <div className="card-header">
                <img src={blockchain.image} alt={blockchain.name} />
                <div className="card-title">{blockchain.name}</div>
              </div>
              <div className="card-description">{blockchain.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  

export default Income;
