/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartReact from "highcharts-react-official";

interface IChartHomeRight {
  data: any;
}

const ChartHomeRight = ({ data }: IChartHomeRight) => {
  const [options, setOptions] = useState({
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    chart: {
      height: 320,
      type: "spline",
      backgroundColor: "transparent",
    },
  });
  const categories = data?.chart?.times.map((e: any, i: number) => {
    if (i % 2 !== 0) return e.hour + ":00";
    return "";
  });

  const axis: any = Highcharts.Axis;

  useEffect(() => {
    const queryHighchart = document.querySelector(".highchart");

    const options = {
      credits: {
        enabled: false,
      },
      accessibility: {
        enabled: false,
      },
      plotOptions: {
        spline: {
          lineWidth: 1.5,
          states: {
            hover: {
              lineWidth: 2,
              marker: {
                enabled: false,
              },
            },
          },
          marker: {
            enabled: false,
            symbol: "round",
            fillColor: "white",
            lineWidth: 2,
            radius: 3,
            states: {
              hover: {
                enabled: true,
                radius: 4,
              },
            },
          },
        },
        series: {
          events: {
            mouseOver() {
              const color = arguments[0].target.color;

              setTimeout(() => {
                const tooltipMainBox = document.querySelector(
                  `.highcharts-tooltip path:last-of-type`
                );
                if (tooltipMainBox) {
                  tooltipMainBox.setAttribute("fill", color);
                }
              });

              this.chart.update({
                series: {
                  marker: {
                    enabled: false,
                  },
                },
              });

              this.update({
                marker: {
                  enabled: true,
                  lineColor: color,
                },
              });

              queryHighchart.addEventListener("onmousemove", () => {
                this.update({
                  marker: {
                    enabled: true,
                    lineColor: color,
                  },
                });
              });
            },

            mouseOut() {
              this.update({
                marker: { enabled: false },
              });
            },
          },
        },
      },
      chart: {
        height: 320,
        type: "spline",
        backgroundColor: "transparent",
        events: {
          load() {
            let max = 0;
            let cur = 0;
            data.chart.items[data.items[0].encodeId].forEach(
              (item: any, i: number) => {
                // console.log(item)
                if (max < item.counter) {
                  max = item.counter;
                  cur = i;
                }
              }
            );
            this.tooltip.refresh(this.series[0].points[cur]);
            this.update({
              series: {
                marker: {
                  enabled: true,
                  lineColor: this.series[0].color,
                },
              },
            });
            setTimeout(() => {
              const tooltipMainBox = document.querySelector(
                `.highcharts-tooltip path:last-of-type`
              );
              if (tooltipMainBox) {
                tooltipMainBox.setAttribute("fill", this.series[0].color);
              }
            });
          },
        },
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: categories,
        crosshair: {
          width: 1,
        },
        lineWidth: 0,
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          formatter: () => "",
        },
        gridLineDashStyle: "dash",
        gridLineWidth: 0.2,
        gridLineColor: "#cdc",
      },
      series: [
        {
          marker: {
            lineColor: "#2596be",
          },
          artists: data.items[0].artistsNames,
          img: data.items[0].thumbnail,
          name: data.items[0].title,
          showInLegend: false,
          color: "#2596be",
          data: data.chart.items[data.items[0].encodeId].map(
            (item: any) => item.counter
          ),
        },
        {
          marker: {
            lineColor: "#BB4708",
          },
          artists: data.items[1].artistsNames,
          img: data.items[1].thumbnail,
          name: data.items[1].title,
          color: "#BB4708",
          showInLegend: false,
          data: data.chart.items[data.items[1].encodeId].map(
            (item: any) => item.counter
          ),
        },
        {
          marker: {
            lineColor: "#06AD4B",
          },
          artists: data.items[2].artistsNames,
          img: data.items[2].thumbnail,
          name: data.items[2].title,
          color: "#06AD4B",
          showInLegend: false,
          data: data.chart.items[data.items[2].encodeId].map(
            (item: any) => item.counter
          ),
        },
      ],
      tooltip: {
        hideDelay: 10000000,
        useHTML: true,
        padding: 4,
        borderWidth: 0,
        headerFormat: "",
        //   formatter: () => `<div class="flex justify-between items-center">
        //   <div class="w-[30px] h-[30px] rounded-[2px] overflow-hidden">
        //       <img class="w-[30px]" src="{series.img}"/>
        //   </div>
        //   <div class="flex flex-col leading-[12px] text-[9px] pl-1 text-zinc-50  ">
        //       <div class="font-semibold">{series.name}</div>
        //       <div class="text-[7px] text-slate-300">{series.artists}</div>
        //   </div>
        // </div>`,
      },
    };

    Highcharts.addEvent(axis, "afterDrawCrosshair", function ({ point }: any) {
      if (axis.cross && point) {
        axis.attr({
          stroke: point.series.color,
        });
      }
    });

    setOptions(options);
  }, []);

  return (
    <div className="highchart transition-none">
      <HighchartReact
        highcharts={Highcharts}
        options={options}
      ></HighchartReact>
    </div>
  );
};

export default memo(ChartHomeRight);
