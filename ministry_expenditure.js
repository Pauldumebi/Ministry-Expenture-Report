const data = [
  {
    ministry: "Water Resources",
    minister: "Muhammad",
    twitter: "mo",
    amount: 50000000,
  },
  {
    ministry: "Agriculture",
    minister: "Muhammad",
    twitter: "mo",
    amount: 75000000,
  },
  {
    ministry: "Water Resources",
    minister: "Muhammad",
    twitter: "mo",
    amount: 35000000,
  },
  {
    ministry: "Agriculture",
    minister: "Muhammad",
    twitter: "mo",
    amount: 47000000,
  },
  {
    ministry: "Water Resources",
    minister: "Muhammad",
    twitter: "mo",
    amount: 65000000,
  },
  {
    ministry: "Agriculture",
    minister: "Muhammad",
    twitter: "mo",
    amount: 20000000,
  },
  {
    ministry: "Water Resources",
    minister: "Muhammad",
    twitter: "mo",
    amount: 90000000,
  },
  {
    ministry: "Agriculture",
    minister: "Muhammad",
    twitter: "mo",
    amount: 25000000,
  },
  {
    ministry: "Water Resources",
    minister: "Muhammad",
    twitter: "mo",
    amount: 50000000,
  },
  {
    ministry: "Agriculture",
    minister: "Muhammad",
    twitter: "mo",
    amount: 25000000,
  },
];

const createCol = (content, classes) => {
  let contentCol = document.createElement("td");
  contentCol.append(content);
  for (let aClass of classes) {
    contentCol.classList.add(aClass);
  }
  return contentCol;
};

let table = document.querySelector("#myTable");
for (let item of data) {
  let row = document.createElement("tr");
  row.appendChild(createCol(item.ministry, ["ministry"]));
  row.appendChild(createCol(item.minister, ["minister"]));
  let link = document.createElement("a");
  link.setAttribute("href", `https://twitter.com/${item.twitter}`);
  link.innerText = `@${item.twitter}`;
  row.appendChild(createCol(link, []));
  let amountInNaira = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  }).format(item.amount);
  row.appendChild(createCol(amountInNaira, []));
  table.appendChild(row);
}

let newData = [50000000, 75000000, 35000000, 47000000, 65000000, 20000000, 90000000, 25000000, 50000000, 25000000]
const ctx = document.getElementById("graph_canvas").getContext("2d");
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        fill: "origin",
        fillColor: "",
        pointBackgroundColor: "white",
        pointBorderColor: "#00945E",
        pointHoverBackgroundColor: "#00945E",
        pointHoverBorderColor: "#00945E",
        lineTension: 0,
        data: newData,
        backgroundColor: "white",
        borderColor: "#00945E",
        borderWidth: 1,
        label: "",
      },
    ],
  },
  

  // Configuration options go here
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "#ddd",
            display: false,
          },
          ticks: {
            fontSize: 15,
            fontColor: "black",
            maxTicksLimit: 30,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "#ddd",
          },
          ticks: {
            fontSize: 15,
            fontColor: "black",
            beginAtZero: false,
            callback: (value, index, values) => value / 1000000,
          },
        },
      ],
    },
    title: {
      display: false,
    },
    legend: {
      labels: {
        boxWidth: 0,
      },
    },
  },
});

//   console.log(chart.data.datasets[0].data.sort(function(a, b) {
//   return b - a;
// }))

data
  .sort((m1, m2) => m1.amount - m2.amount)
  .slice(0, 10)
  .forEach((topMinistry, index) => {
    document.querySelector(`#rank${index + 1}`).innerHTML =
      topMinistry.ministry;
  });

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let button = document.querySelector("#High-to-low")
let all = document.querySelector("#all")

function myFunction(value) {
  if(value == 'highLow') {
    chart.data.datasets[0].data = newData.sort((a, b) => {return a - b})
    chart.update()
    return
 } else {
   chart.data.datasets[0].data = newData.sort((a, b) => {return b - a})
    chart.update()
    return

 }
}

all = () => {   
     chart.data.datasets[0].data  = newData
     chart.update()
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');

//       }
//     }
//   }
// }