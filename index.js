let startButton = document.getElementById("start");
startButton.onclick = () => {
  startButton.disabled = true;
  startButton.innerText = "Mining...";
  start();
  startButton.disabled = false;
  startButton.innerText = "Start mining";
};

function start() {
  let data = getData("data");
  let complexity = getData("complexity");
  console.table({
    complexity,
    data,
  });
  mining(data, +complexity);
}

function mining(data, complexity) {
  const startTime = Date.now();
  let nonce = 0;
  let hash = CryptoJS.SHA256(data + nonce).toString();

  let isMineDone = hash.startsWith("0".repeat(complexity));

  const timer = setInterval(() => {
    if (isMineDone) {
      const endTime = Date.now();
      renderResult(nonce, hash, endTime - startTime);
      clearInterval(timer);
    }
    renderResult(nonce, hash);
    nonce++;
    hash = CryptoJS.SHA256(data + nonce).toString();
    isMineDone = hash.startsWith("0".repeat(complexity));
  }, 0);
}

function renderResult(nonce, hash, msTime) {
  let hashId = "hash";
  let nonceId = "nonce";
  let timeId = "time";

  updateData(hashId, hash);
  updateData(nonceId, nonce);
  if (msTime) {
    updateData(timeId, `${msTime / 1000} seconds`);
  }
}

function updateData(id, data) {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = data;
  }
}

function getData(id) {
  let el = document.getElementById(id);
  if (el) {
    return el.value;
  }
}
