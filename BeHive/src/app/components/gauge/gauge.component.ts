import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.XYChart;
  overallRating: number;
  technicalRating: number;
  personalRating: number;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.overallRating = 50;
    this.technicalRating = 98;
    this.personalRating = 57;
  }

  makeGauge(name: string, value: number)
  {
      // Overall Rating
      const chart = am4core.create(name, am4charts.GaugeChart);

      // Create axis
      const axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
      axis.min = 0;
      axis.max = 100;
      axis.strictMinMax = true;

      // Set inner radius
      chart.innerRadius = -20;

      // Add ranges
      const range = axis.axisRanges.create();
      range.value = 0;
      range.endValue = 70;
      range.axisFill.fillOpacity = 1;
      range.axisFill.fill = am4core.color('#DE8F6E');
      range.axisFill.zIndex = - 1;

      const range2 = axis.axisRanges.create();
      range2.value = 70;
      range2.endValue = 90;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = am4core.color('#DBD56E');
      range2.axisFill.zIndex = - 1;

      const range3 = axis.axisRanges.create();
      range3.value = 90;
      range3.endValue = 100;
      range3.axisFill.fillOpacity = 1;
      range3.axisFill.fill = am4core.color('#056123');
      range3.axisFill.zIndex = - 1;

      // Add hand
      const hand = chart.hands.push(new am4charts.ClockHand());
      hand.value = 65;
      hand.pin.disabled = true;
      hand.fill = am4core.color('#2D93AD');
      hand.stroke = am4core.color('#2D93AD');
      hand.innerRadius = am4core.percent(50);
      hand.radius = am4core.percent(80);
      hand.startWidth = 15;

      let color = '';
      if (value < 70)
      {
        color = '#DE8F6E';
      }else if (value < 90)
      {
        color = '#DBD56E';
      }else
      {
        color = '#056123';
      }

      const label = chart.radarContainer.createChild(am4core.Label);
      label.isMeasured = false;
      label.fontSize = 50;
      label.x = am4core.percent(50);
      label.y = am4core.percent(100);
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'bottom';
      label.fill = am4core.color(color);
      label.text = value + '%';

      const label1 = chart.radarContainer.createChild(am4core.Label);
      label1.isMeasured = false;
      label1.fontSize = 30;
      label1.x = am4core.percent(50);
      label1.y = am4core.percent(100);
      label1.horizontalCenter = 'middle';
      label1.verticalCenter = 'top';
      label1.fill = am4core.color('#88AB75');
      label1.text = name.replace('chart', '') + ' Rating';

      // Animate
      setInterval((anim) => {
        hand.showValue(value, 1000, am4core.ease.cubicOut);
      }, 1000);
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.makeGauge('chartOverall', this.overallRating);
      this.makeGauge('chartSkills', this.technicalRating);
      this.makeGauge('chartPersonal', this.personalRating);
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
