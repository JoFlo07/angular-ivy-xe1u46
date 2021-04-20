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
  isos = {
    "component.iso.clause.A05.titleKeyKeyKeyKeyKey": 0.2,
    "component.iso.clause.A06.titleKeyKey": 0.8,
    "component.iso.clause.A07.titleKeyKey": 0.1,
    "component.iso.clause.A08.title": 1,
    "component.iso.clause.A09.title": 0.7,
    "component.iso.clause.A10.title": 0.3,
    "component.iso.clause.A11.titleKeyKey": 0.5,
    "component.iso.clause.A12.title": 0,
    "component.iso.clause.A13.title": 0.2,
    "component.iso.clause.A14.title": 0.5,
    "component.iso.clause.A15.title": 0.4,
    "component.iso.clause.A16.title": 0.2,
    "component.iso.clause.A17.title": 0.7,
    "component.iso.clause.A18.title": 0.3
  };

  ngOnInit() {
    this.chart = Highcharts.chart("container", this.options);
    const data = this.createDataSet(this.isos);
    this.chart.series[0].setData(data);
  }

  options: Highcharts.Options = {
    chart: {
      margin: [10, 250, 35, 10],
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
      gridLineWidth: 0,
      tickPositions: [0, 50, 100],
      labels: {
        formatter: function() {
          return this.value + "%";
        }
      }
    },
    xAxis: {
      type: "category",
      opposite: true,
      min: 0,
      tickInterval: 1,
      labels: {
        autoRotationLimit: 10
      }
    },
    series: [
      {
        type: "bar",
        color: "#ffffff",
        shadow: true,
        showInLegend: false
      }
    ]
  };

  private createDataSet(securityLevels: any) {
    return Object.keys(securityLevels).map((securityLevelKey, index) => {
      return {
        x: index,
        y: Math.round(securityLevels[securityLevelKey] * 100),
        name: securityLevelKey
      };
    });
  }
}
