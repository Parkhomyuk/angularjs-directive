
(function(){

angular.module('app')
    .directive('drawPieChart', function () {
        // return the directive link function. (compile function not needed)
        return function (scope, element, attrs) {

            var container = $(element).attr("id");

            // watch the expression, and update the UI on change.
            scope.$watch('data', function () {
                drawPlot();
            }, true);

            var def = function () {
                scope.data = [
                    ['Chrome', 33.3],
                    ['Firefox', 33.3],
                    ['IE', 33.3]
                ];
            };

            var black = function () {
                scope.$apply(function () {
                    scope.data = [
                        ['Chrome', 0.0],
                        ['Firefox', 1.0],
                        ['IE', 99.0]
                    ];
                });
            };

            var drawPlot = function () {
                var chart;
                chart = new Highcharts.Chart({
                    chart: {
                        renderTo: container
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage}%</b>',
                        percentageDecimals: 1
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: false
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Browser share',
                        data: scope.data
                    }]
                });
            }

            $("#nightmare").on('click', black);
            $("#broken").on('click', def);

        }
    });
})()