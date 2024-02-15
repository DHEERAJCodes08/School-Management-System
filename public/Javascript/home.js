const btns = document.querySelectorAll(".dashboard_list_items");
const Data_at_Right = document.querySelectorAll(".Content");
const DataEntryBtn = document.getElementById("DataEntryBtn");
const leftPanel = document.getElementById("leftPanel");

leftPanel.addEventListener("click", function (e) {
  const click_Id = e.target.dataset.id;
  console.log(click_Id);

  if (click_Id) {
    btns.forEach(function (btn) {
        btn.classList.remove("btn_active");
    });

    e.target.classList.add("btn_active");
    console.log(e.target.classList.contains("btn_active"));


    Data_at_Right.forEach(function (info) {
      info.classList.remove("active"); //
        console.log("active class removed");
    });

    const element = document.getElementById(click_Id);
    element.classList.add("active");
    console.log("active class added In" + " "  +click_Id);
  }
});


/*  Dashboard Chart  */
var options = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();



/* Chart 2 */
var options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#chart2"), options);

chart.render();


