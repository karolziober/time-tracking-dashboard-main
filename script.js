"use strict";

// DATA FETCHING
async function loadData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}
const data = await loadData();

// SELECTORS
const activities = document.querySelector(".activities-container");
const timeFrames = document.querySelector(".time-frame-nav");

// HELPER FUNCTION
const renderCards = function (timeframe) {
  activities.innerHTML = "";
  data.forEach((item) => {
    activities.insertAdjacentHTML(
      "beforeend",
      `<div class="activity-card">
          <div class="card-banner"></div>
          <div class="card-body">
            <div class="card-title">${item.title}</div>
            <div class="time">${item.timeframes[timeframe].current}hrs</div>
            <div class="time-previous">Previous - ${item.timeframes[timeframe].previous}hrs</div>
          </div>
        </div>`,
    );
  });
};
renderCards("daily");

// EVENT DELEGATION
timeFrames.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    const timeFrame = e.target.dataset.timeframe;
    renderCards(timeFrame);
  }
});
