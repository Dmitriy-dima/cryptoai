//Price.jsx
import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./Price.css";

Modal.setAppElement("#root");

const API_KEY = process.env.REACT_APP_API_KEY;

const BLOCKCHAINS = [
  { name: "BTC", img: require("../../images/Icons/btc.svg").default },
  { name: "ETH", img: require("../../images/Icons/eth.svg").default },
  { name: "LTC", img: require("../../images/Icons/ltc.svg").default },
  { name: "BNB", img: require("../../images/Icons/bnb.svg").default },
  { name: "SOL", img: require("../../images/Icons/sol.svg").default },
  { name: "USDT (TRX)", img: require("../../images/Icons/usdt.svg").default },
  { name: "XRP", img: require("../../images/Icons/xrp.svg").default },
  { name: "DOGE", img: require("../../images/Icons/doge.svg").default },
  { name: "NFT Check", img: require("../../images/Icons/nft.svg").default },
];

const SPECIAL_OPTIONS_MAP = {
  "8 Blockchain + NFT/Stakings": BLOCKCHAINS.map((b) => b.name).concat([
    "NFT Check",
  ]),
  "8 Blockchain": BLOCKCHAINS.slice(0, 8).map((b) => b.name),
  "Lifetime full access with all updates": BLOCKCHAINS.map(
    (b) => b.name
  ).concat(["NFT Check"]),
};

const PriceItem = ({
  blockchain,
  price,
  description,
  numBlockchains,
  long,
  showBuyButton,
}) => {
  const [selectedBlockchains, setSelectedBlockchains] = useState([]);

  const handleModalOpen = () => setModalIsOpen(true);
  const handleModalClose = () => setModalIsOpen(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const handleBuyButtonClick = () => {
    const initialSelectedBlockchains = SPECIAL_OPTIONS_MAP[blockchain];
    if (initialSelectedBlockchains) {
      setSelectedBlockchains(initialSelectedBlockchains);
      handleBuyClick(
        blockchain,
        `${description}. Selected blockchains: ${initialSelectedBlockchains.join(
          ", "
        )}`,
        price.replace("$", "")
      );
    } else {
      setSelectedBlockchains([]);
      handleModalOpen();
    }
  };

  const handleBuyClick = async () => {
    let updatedDescription = `${description}: ${selectedBlockchains
      .map((blockchain) => blockchain.name)
      .join(", ")}`;

    switch (blockchain) {
      case "8 Blockchain":
        updatedDescription =
          "All blockchains are included: " +
          BLOCKCHAINS.filter((b) => b.name !== "NFT Check")
            .map((blockchain) => blockchain.name)
            .join(", ");
        break;
      case "8 Blockchain + NFT/Stakings":
        updatedDescription =
          "All blockchains are included + NFT Check: " +
          BLOCKCHAINS.map((blockchain) => blockchain.name).join(", ");
        break;
      case "Lifetime full access with all updates":
        updatedDescription =
          "You will have a lifetime full access with all updates. As well as all the blockchains + NFT Check: " +
          BLOCKCHAINS.map((blockchain) => blockchain.name).join(", ");
        break;
      default:
        updatedDescription = `${description}. Selected blockchains: ${selectedBlockchains.join(
          ", "
        )}`;
    }

    try {
      const response = await axios.post(
        "https://api.commerce.coinbase.com/charges",
        {
          name: blockchain,
          description: updatedDescription,
          local_price: {
            amount: price.replace("$", ""),
            currency: "USD",
          },
          pricing_type: "fixed_price",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CC-Api-Key": API_KEY,
          },
        }
      );

      window.location.href = response.data.data.hosted_url;
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Please try again later.");
    }
  };

  const handleBlockchainSelect = (selectedBlockchain) => {
    if (SPECIAL_OPTIONS_MAP[blockchain]) {
      setSelectedBlockchains(SPECIAL_OPTIONS_MAP[blockchain]);
    } else {
      setSelectedBlockchains((prev) => {
        if (prev.includes(selectedBlockchain)) {
          return prev.filter((b) => b !== selectedBlockchain);
        } else if (
          prev.length < numBlockchains ||
          selectedBlockchain !== "NFT Check"
        ) {
          return [...prev, selectedBlockchain];
        } else {
          alert(`You can only select ${numBlockchains} blockchain(s).`);
          return prev;
        }
      });
    }
  };

  const handlePayClick = () => {
    if (selectedBlockchains.length === numBlockchains) {
      handleBuyClick();
      handleModalClose();
    } else {
      alert(
        `You need to select exactly ${numBlockchains} blockchain(s) for this purchase.`
      );
    }
  };

  const renderBlockchains = () => {
    return BLOCKCHAINS.filter(
      (blockchain) => blockchain.name !== "NFT Check"
    ).map((blockchain, i) => (
      <div
        key={i}
        onClick={() => handleBlockchainSelect(blockchain.name)}
        className={`blockchain-item ${selectedBlockchains.includes(blockchain.name) ? "selected" : ""}`}
      >
        <img src={blockchain.img} alt={blockchain.name} />
        <p>{blockchain.name}</p>
        {selectedBlockchains.includes(blockchain.name) && <span>✔️</span>}
      </div>
    ));
  };
  

  return (
    <div className={`price_item ${long ? "long_item" : "short_item"}`}>
      <div className="price_item_content">
        <p>{blockchain}</p>
        <p>
          {price}
          <span className="price_month_txt">/ month</span>
        </p>
        <p>{description}</p>
        {showBuyButton && (
          <button className="buy_button" onClick={handleBuyButtonClick}>
            Buy
          </button>
        )}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Blockchains Modal"
        className="blockchain-modal_content"
        overlayClassName="overlay"
        >
          <div className="blockchain-modal_content">
            <h2>Select Blockchains</h2>
            {renderBlockchains()}
            <p>Price: {price}</p>
            <button onClick={handlePayClick}>Pay</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const Price = () => {
  const options = [
    {
      blockchain: "1 Blockchain",
      price: "$200",
      description: "You will have the opportunity to choose one blockchain",
      showBuyButton: true,
      numBlockchains: 1,
    },
    {
      blockchain: "2 Blockchain",
      price: "$300",
      description: "You will have the opportunity to choose two blockchains",
      showBuyButton: true,
      numBlockchains: 2,
    },
    {
      blockchain: "4 Blockchain",
      price: "$400",
      description: "You will have the opportunity to choose four blockchains",
      showBuyButton: true,
      numBlockchains: 4,
    },
    {
      blockchain: "6 Blockchain",
      price: "$500",
      description: "You will have the opportunity to choose six blockchains",
      showBuyButton: true,
      numBlockchains: 6,
    },
  ];

  const specialOptions = [
    {
      blockchain: "8 Blockchain",
      price: "$600",
      description: "You will have the opportunity to choose eight blockchains",
      showBuyButton: true,
      numBlockchains: 8,
    },
    {
      blockchain: "8 Blockchain + NFT/Stakings",
      price: "$800",
      description:
        "You will have the opportunity to choose eight blockchains + NFT/Stakings Check",
      showBuyButton: true,
      long: true,
      numBlockchains: 8,
    },
    {
      blockchain: "Lifetime full access with all updates",
      price: "$2000",
      description:
        "You will have the opportunity to get lifetime full access with all updates",
      showBuyButton: true,
      long: true,
      numBlockchains: 8,
    },
  ];

  return (
    <div className="price_content">
      <div className="prices">
        <h1 className="price_title">License price</h1>
        <div className="grid">
          {options.map((item, i) => (
            <PriceItem key={i} {...item} />
          ))}
        </div>
        <div className="grid">
          {specialOptions.map((item, i) => (
            <PriceItem key={i} {...item} />
          ))}
        </div>
        <div className="grid-mobile">
          {options.map((item, i) => (
            <PriceItem key={i} {...item} long />
          ))}
          {specialOptions.map((item, i) => (
            <PriceItem key={i} {...item} long />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
