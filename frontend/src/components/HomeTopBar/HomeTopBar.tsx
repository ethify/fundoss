import React, { useContext } from "react";
import "./HomeTopBar.scss";
import { StateContext } from "../../hooks";
import { Search, ChevronDown } from "react-feather";

function HomeTopBar() {
  // const { searchBusinesses } = useContext(ActionContext);
  const { roundDetails } = useContext(StateContext);

  return (
    <>
      <div className="home-top-bar">
        <div id="left-side" className="left-side">
          <div id="text" className="card-headline">
            One our amazing collectives.
          </div>

          <img src={require("../../assets/card.svg")} alt="example-card" />
        </div>

        <div id="right-side" className="right-side">
          <h1 id="h1" className="headline">
            {" "}
            $150,000 & A Brand New Way To Sustain Open Source
          </h1>
          <h1 id="time-period" className="time-period">
            March 8th - 23rd, 2021
          </h1>
          <p id="info" className="info">
            {" "}
            What is this? Explainer + Friendly Illustration - $100k distributed to
            OSS Projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum lobortis laoreet posuere. Nulla laoreet nisl ut malesuada
            pharetra.
            <br />
            <br />
            <a
              href={`https://www.wtfisqf.com/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More about Democratic Funding
            </a>
          </p>
          <div id="sponsors">
            <div className="sponsor-headline">Brought to You By</div>
            <div id="sponsors-logo">
              <img src={require("../../assets/logo_osc.svg")} alt="osc" />
              <img
                src={require("../../assets/logo_gitcoin.svg")}
                alt="osc"
                style={{ paddingLeft: "1.5rem" }}
              />
              <img
                src={require("../../assets/logo_sustain.svg")}
                alt="osc"
                style={{ paddingLeft: "1.5rem" }}
              />
              <img
                src={require("../../assets/logo_synth.svg")}
                alt="osc"
                style={{ paddingLeft: "1.5rem" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="filter-bar" className="filter-bar">
        <div className="list-action-container">
          <div className="home-search-container">
            <Search />
            <input
              type="search"
              className="search-input"
              placeholder="Quick Search"
              // value={searchText}
              // onChange={(e) => searchBusinesses(e.target.value, backupBusinesses)}
            />
          </div>
          <div className="home-sort-container">
            <span>Sort By:</span>
            <div className="home-sort-value">
              <span>Least Funded</span>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTopBar;
