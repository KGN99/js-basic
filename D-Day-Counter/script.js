const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");

const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";

const dateFormMarker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
};

const countMaker = function (data) {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  if (remaining <= 0) {
    setClearInterval();
    messageContainer.innerHTML = "<h3>타이머가 종료 되었습니다.</h3>";
    container.style.display = "none";
    messageContainer.style.display = "flex";
    return;
  } else if (isNaN(remaining)) {
    setClearInterval();
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    container.style.display = "none";
    messageContainer.style.display = "flex";
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor((remaining / 3600) % 24),
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };
  const timeKeys = Object.keys(remainingObj);

  const docArr = ["days", "hours", "min", "sec"];

  const format = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  let i = 0;
  for (let tag of docArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

const starter = (targetDataInput) => {
  if (!targetDataInput) {
    targetDataInput = dateFormMarker();
  }

  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval();
  countMaker(targetDataInput);
  const intervalId = setInterval(() => countMaker(targetDataInput), 1000);
  intervalIdArr.push(intervalId);
};

const setClearInterval = () => {
  localStorage.removeItem("saved-date");
  for (let id of intervalIdArr) {
    clearInterval(id);
  }
};
const resetTimer = () => {
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
  container.style.display = "none";
  messageContainer.style.display = "flex";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
  container.style.display = "none";
}
