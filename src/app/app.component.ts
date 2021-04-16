import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import More from "highcharts/highcharts-more";
import NoData from "highcharts/modules/no-data-to-display";

More(Highcharts);
NoData(Highcharts);

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  chart: Highcharts.Chart;

  ngOnInit() {
    this.chart = Highcharts.chart("container", this.options);
  }

  options: Highcharts.Options = {
    chart: {
      borderRadius: 4,
      plotBackgroundColor: {
        linearGradient: { x1: 0, x2: 1, y1: 1, y2: 1 },
        stops: [[0, "#19cf1f"], [0.5, "#ffda05"], [0.8, "#e3463b"]]
      }
    },
    title: null,
    credits: {
      enabled: false
    },
    yAxis: {
      tickWidth: 1,
      reversed: true,
      min: 0,
      max: 100,
      gridLineWidth: 0,
      tickInterval: 50,
      labels: {
        formatter: function() {
          return this.value + "%";
        }
      }
    },
    xAxis: {
      opposite: true,
      min: 0,
      tickInterval: 1,
      categories: isos
    },
    series: [
      {
        type: "bar",
        color: "#ffffff",
        shadow: true,
        showInLegend: false,
        data: [20, 10, 20, 20, 90, 70, 10, 20, 12, 15, 40, 25, 29, 90]
      }
    ]
  };
}

const isos = [
  "A.05 Information security policies",
  "A.06 Organization of information security",
  "A.07 Human resource security",
  "A.08 Asset management",
  "A.09 Access control",
  "A.10 Cryptography",
  "A.11 Physical and environmental security",
  "A.12 Operations security",
  "A.13 Communications security",
  "A.14 System acquisition, development and maintenance",
  "A.15 Supplier relationships",
  "A.16 Information security incident management",
  "A.17 Information security aspects of BCM",
  "A.18 Compliance"
];
