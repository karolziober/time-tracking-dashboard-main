"use strict";

class Dashboard {
  constructor() {
    this.activities = document.querySelector(".activities-container");
    this.timeFrames = document.querySelector(".time-frame-nav");
    this.data = null;
    this.periodLabels = {
      daily: "Previously",
      weekly: "Last Week",
      monthly: "Last Month",
    };
  }

  async init() {
    await this.loadData();
    this.renderCards("daily");
    this.handleClick();
  }

  async loadData() {
    const response = await fetch("data.json");
    this.data = await response.json();
  }

  renderCards(timeframe) {
    this.activities.innerHTML = "";
    this.data.forEach((item) => {
      this.activities.insertAdjacentHTML(
        "beforeend",
        `<div class="activity-card" >
          <div class="card-banner" data-category="${item.title.toLowerCase().replace(/ /g, "-")}">
          <img src="images/icon-${item.title.toLowerCase().replace(/ /g, "-")}.svg" alt="icon-${item.title.toLowerCase().replace(/ /g, "-")}">
          </div>
          <div class="card-body">
            <div class="card-title">${item.title}</div>
            <div class="time-section" aria-label="Current and previous time spent on work">
            <div class="time" aria-label="Current time spent on work">${item.timeframes[timeframe].current}hrs</div>
            <div class="time-previous" aria-label="Previous time spent on work">${this.periodLabels[timeframe]} - ${item.timeframes[timeframe].previous}hrs</div>
            </div>
          </div>
        </div>`,
      );
    });
  }

  handleClick() {
    this.timeFrames.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.tagName === "BUTTON") {
        const timeFrame = e.target.dataset.timeframe;
        this.renderCards(timeFrame);
      }
    });
  }
}

const app = new Dashboard();

async function startApp() {
  await app.init();
}
startApp();
