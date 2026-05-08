
document.getElementById("updateTime").innerText =
  new Date().toLocaleString("ko-KR");

const priceChart = new Chart(
  document.getElementById("priceChart"),
  {
    type: "line",
    data: {
      labels: ["1주", "2주", "3주", "4주"],
      datasets: [{
        label: "평균 운임",
        data: [520000, 490000, 450000, 412000],
        tension: 0.4
      }]
    }
  }
);

