import React from "react";
import Header from "./components/Header/Header.js";
import Section from "./components/Section/Section.js";
import Start from "./components/Start/Start.js";
import Income from "./components/Income/Income.js";
import Works from "./components/Works/Works.js";
import Results from "./components/Results/Results.js";
import Price from "./components/Price/Price.js";
import Reviews from "./components/Reviews/Reviews.js";
import FAQ from "./components/FAQ/FAQ.js";
import Telegram from "./components/Telegram/Telegram.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

const sections = [
  "start",
  "income",
  "works",
  "results",
  "price",
  "reviews",
  "faq",
  "telegram",
];

const App = () => (
  <div className="App">
    {/* Header */}
    <Header />

    {/* Sections */}
    {sections.map((section) => (
      <Section key={section} id={section}>
        {getSectionComponent(section)}
      </Section>
    ))}

    {/* Footer */}
    <Footer />
  </div>
);

// Helper function to get the corresponding component for a section
const getSectionComponent = (section) => {
  switch (section) {
    case "start":
      return <Start />;
    case "income":
      return <Income />;
    case "works":
      return <Works />;
    case "results":
      return <Results />;
    case "price":
      return <Price />;
    case "reviews":
      return <Reviews />;
    case "faq":
      return <FAQ />;
    case "telegram":
      return <Telegram />;
    default:
      return null;
  }
};

export default App;
