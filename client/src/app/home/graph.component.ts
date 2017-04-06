import { Component } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    templateUrl: 'graph.component.html'
})

// Component class
export class GraphComponent {
    public text: string;

    constructor() {
        this.text = "Hello world!";
    }

    public pieChartOptions = {
        chartType: 'PieChart',
        dataTable: [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ],
        options: {'title': 'Tasks'},
    };

    public line_ChartData = {
        chartType: `LineChart`,
        dataTable: [
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]],
    options: {'title': 'dataAndStuff'},
    };

    public bubble_ChartData = {
        chartType: `BubbleChart`,
        dataTable: [
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
            ['CAN',    80.66,              1.67,      'North America',  33739900],
            ['DEU',    79.84,              1.36,      'Europe',         81902307],
            ['DNK',    78.6,               1.84,      'Europe',         5523095],
            ['EGY',    72.73,              2.78,      'Middle East',    79716203],
            ['GBR',    80.05,              2,         'Europe',         61801570],
            ['IRN',    72.49,              1.7,       'Middle East',    73137148],
            ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
            ['ISR',    81.55,              2.96,      'Middle East',    7485600],
            ['RUS',    68.6,               1.54,      'Europe',         141850000],
            ['USA',    78.09,              2.05,      'North America',  307007000]],
        options: {'title': 'dataAndStuff'},
    };
}