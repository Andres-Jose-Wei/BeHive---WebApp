import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ThrowStmt } from '@angular/compiler';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { Skill } from 'src/app/classes/skill';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-skillsgraph',
  templateUrl: './skillsgraph.component.html',
  styleUrls: ['./skillsgraph.component.scss']
})
export class SkillsgraphComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.XYChart;
  skillName: string;

  constructor(private zone: NgZone, private userService: UserService) { }

  newSkill(){
    this.userService.addSkill(this.skillName);
    this.generateChart();
  }

  generateChart(){
    this.zone.runOutsideAngular(() => {
      this.createSkillBar('skills');
      this.userService.getUser().skillStats.forEach((value: number, key: Skill) => {
        this.addSkillToChart('skills', key.name, value);
    });
    });
  }

  disposeChart()
  {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  addSkillToChart(chartName: string, skillName: string, valueSkill: any){
    console.log('click');
    this.chart.data.push({category: skillName, value: valueSkill});
  }

  createSkillBar(name: string)
  {

    this.chart = am4core.create(name, am4charts.XYChart);
    this.chart.data = [];
    this.chart.scrollbarY = new am4charts.XYChartScrollbar();
    const scrollBar = this.chart.scrollbarY;
    scrollBar.width = 3;
    scrollBar.start = 0.80;
    const categoryAxis = this.chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.fontSize = 25;
    categoryAxis.renderer.labels.template.fill = am4core.color('#FFFFFF');
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.1;
    categoryAxis.renderer.axisFills.template.fill = am4core.color('#88AB75');

    const valueAxis = this.chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 110;
    valueAxis.visible = false;

    const series = this.chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = 'value';
    series.dataFields.categoryY = 'category';

    const valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = '{value}';
    valueLabel.label.fontSize = 25;
    valueLabel.label.horizontalCenter = 'left';
    valueLabel.label.dx = 10;
    valueLabel.label.fill = am4core.color('#fff');

    // const categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    // categoryLabel.label.text = '{category}';
    // categoryLabel.label.fontSize = 20;
    // categoryLabel.label.horizontalCenter = 'right';
    // categoryLabel.label.dx = -10;
    // categoryLabel.label.fill = am4core.color('#fff');

    this.chart.maskBullets = true;
    this.chart.paddingRight = 200;
    this.chart.paddingTop = 200;

    // Chart Label
    const labelChart = this.chart.chartContainer.createChild(am4core.Label);
    labelChart.text = 'Skill List';
    labelChart.isMeasured = false;
    labelChart.fontSize = 64;
    labelChart.x = am4core.percent(50);
    labelChart.y = am4core.percent(0);
    labelChart.horizontalCenter = 'middle';
    labelChart.verticalCenter = 'bottom';
    labelChart.fill = am4core.color('#88AB75');
    //labelChart.fill = am4core.color('#FFFFFF');

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.generateChart();
  }

  ngOnDestroy()
  {
    this.disposeChart();
  }

}
