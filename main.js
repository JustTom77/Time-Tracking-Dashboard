const workCurrentTime = document.getElementById("work-current");
const workPreviousTime = document.getElementById("work-previous");
const playCurrentTime = document.getElementById("play-current");
const playPreviousTime = document.getElementById("play-previous");
const studyCurrentTime = document.getElementById("study-current");
const studyPreviousTime = document.getElementById("study-previous");
const exercisePreviousTime = document.getElementById("exercise-previous");
const exerciseCurrentTime = document.getElementById("exercise-current");
const socialPreviousTime = document.getElementById("social-previous");
const socialCurrentTime = document.getElementById("social-current");
const selfCareCurrentTime = document.getElementById("self-care-current");
const selfCarePreviousTime = document.getElementById("self-care-previous");
const dailyTimeframe = document.getElementById("daily");
const weeklyTimeframe = document.getElementById("weekly");
const monthlyTimeframe = document.getElementById("monthly");

const timeframes = document.getElementsByClassName("timeframes");

console.log(timeframes);

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    let dailycurrentTimes = [];
    let dailypreviousTimes = [];
    let weeklycurrentTimes = [];
    let weeklypreviousTimes = [];
    let monthlycurrentTimes = [];
    let monthlypreviousTimes = [];
    data.forEach(element => {
      dailypreviousTimes.push(element.timeframes.daily.previous);
      dailycurrentTimes.push(element.timeframes.daily.current);
      weeklypreviousTimes.push(element.timeframes.weekly.previous);
      weeklycurrentTimes.push(element.timeframes.weekly.current);
      monthlypreviousTimes.push(element.timeframes.monthly.previous);
      monthlycurrentTimes.push(element.timeframes.monthly.current);
    });
    console.log("currentDaily", dailycurrentTimes);
    console.log("previousDaily", dailypreviousTimes);

    dailyTimeframe.addEventListener("click", () => {
      weeklyTimeframe.classList.remove("active");
      dailyTimeframe.classList.add("active");
      monthlyTimeframe.classList.remove("active");

      workCurrentTime.innerHTML = `${dailycurrentTimes[0]}hrs`;
      workPreviousTime.innerHTML = `Last Day - ${dailypreviousTimes[0]}hrs`;

      playCurrentTime.innerHTML = `${dailycurrentTimes[1]}hrs`;
      playPreviousTime.innerHTML = `Last Day - ${dailypreviousTimes[1]}hrs`;

      studyCurrentTime.innerHTML = `${dailycurrentTimes[2]}hrs`;
      studyPreviousTime.innerHTML = `Last Day - ${dailypreviousTimes[2]}hrs`;

      exerciseCurrentTime.innerHTML = `${dailycurrentTimes[3]}hrs`;
      exercisePreviousTime.innerHTML = `Last Day - ${dailypreviousTimes[3]}hrs`;

      socialCurrentTime.innerHTML = `${dailycurrentTimes[4]}hrs`;
      socialPreviousTime.innerHTML = `Last Day - ${dailypreviousTimes[4]}hrs`;

      selfCareCurrentTime.innerHTML = `${dailycurrentTimes[1]}hrs`;
      selfCarePreviousTime.innerHTML = `Last Day - ${dailypreviousTimes[1]}hrs`;
    });

    weeklyTimeframe.addEventListener("click", () => {
      weeklyTimeframe.classList.add("active");
      dailyTimeframe.classList.remove("active");
      monthlyTimeframe.classList.remove("active");

      workCurrentTime.innerHTML = `${weeklycurrentTimes[0]}hrs`;
      workPreviousTime.innerHTML = `Last Day - ${weeklypreviousTimes[0]}hrs`;

      playCurrentTime.innerHTML = `${weeklycurrentTimes[1]}hrs`;
      playPreviousTime.innerHTML = `Last Day - ${weeklypreviousTimes[1]}hrs`;

      studyCurrentTime.innerHTML = `${weeklycurrentTimes[2]}hrs`;
      studyPreviousTime.innerHTML = `Last Day - ${weeklypreviousTimes[2]}hrs`;

      exerciseCurrentTime.innerHTML = `${weeklycurrentTimes[3]}hrs`;
      exercisePreviousTime.innerHTML = `Last Day - ${weeklypreviousTimes[3]}hrs`;

      socialCurrentTime.innerHTML = `${weeklycurrentTimes[4]}hrs`;
      socialPreviousTime.innerHTML = `Last Day - ${weeklypreviousTimes[4]}hrs`;

      selfCareCurrentTime.innerHTML = `${weeklycurrentTimes[1]}hrs`;
      selfCarePreviousTime.innerHTML = `Last Day - ${weeklypreviousTimes[1]}hrs`;
    });

    monthlyTimeframe.addEventListener("click", () => {
      monthlyTimeframe.classList.add("active");
      dailyTimeframe.classList.remove("active");
      weeklyTimeframe.classList.remove("active");

      workCurrentTime.innerHTML = `${monthlycurrentTimes[0]}hrs`;
      workPreviousTime.innerHTML = `Last Day - ${monthlypreviousTimes[0]}hrs`;

      playCurrentTime.innerHTML = `${monthlycurrentTimes[1]}hrs`;
      playPreviousTime.innerHTML = `Last Day - ${monthlypreviousTimes[1]}hrs`;

      studyCurrentTime.innerHTML = `${monthlycurrentTimes[2]}hrs`;
      studyPreviousTime.innerHTML = `Last Day - ${monthlypreviousTimes[2]}hrs`;

      exerciseCurrentTime.innerHTML = `${monthlycurrentTimes[3]}hrs`;
      exercisePreviousTime.innerHTML = `Last Day - ${monthlypreviousTimes[3]}hrs`;

      socialCurrentTime.innerHTML = `${monthlycurrentTimes[4]}hrs`;
      socialPreviousTime.innerHTML = `Last Day - ${monthlypreviousTimes[4]}hrs`;

      selfCareCurrentTime.innerHTML = `${monthlycurrentTimes[1]}hrs`;
      selfCarePreviousTime.innerHTML = `Last Day - ${monthlypreviousTimes[1]}hrs`;
    });
  });
