import React from 'react'
import {Bar} from 'react-chartjs-2'

export default class BarGraph extends React.Component {
  constructor() {
    super()
    this.state = {
      metric: 'Words Spoken'
    }
  }

  render() {
    // const camelCase = str => {
    //   return str
    //     .replace(/\s(.)/g, function(a) {
    //       return a.toUpperCase()
    //     })
    //     .replace(/\s/g, '')
    //     .replace(/^(.)/, function(b) {
    //       return b.toLowerCase()
    //     })
    // }

    const {data, student} = this.props

    const firstTime = data.times ? data.times[0].time : 0

    let yMin, yMax

    switch (this.state.metric) {
      case 'Face Score':
        yMin = 0
        yMax = 100

      case 'Word Count':
        yMin = 0
        yMax = 300

      case 'Click Count':
        yMin = 0
        yMax = 40

      case 'Key Count':
        yMin = 0
        yMax = 50
    }

    const chartData = {
      labels: [
        'Click Count',
        'Face Score(Out of 100%)',
        'Key Count',
        'Word Count'
      ],
      datasets: [
        {
          label: ['Student Averages'],
          data: student,
          backgroundColor: ['rgb(1, 184, 181)', 'rgb(1, 184, 181)', 'rgb(1, 184, 181)', 'rgb(1, 184, 181)'],
          fontColor: 'rgb(170, 120, 250)'
        },
        {
          label: ['Class Averages'],
          data: data,
          backgroundColor: ['rgb(207, 226, 101)', 'rgb(207, 226, 101)', 'rgb(207, 226, 101)', 'rgb(207, 226, 101)'],
          fontColor: 'rgb(170, 120, 250)'
        }
      ]
    }

    // chartData.datasets.push({
    //   label: ['Class Average'],
    //   data: [50, 170, 140, 120, 50],
    //   backgroundColor: ['rgb(180, 250, 120, .2)'],
    //   fontColor: 'rgb(180, 250, 120)',
    // })

    // if (compare) {
    //   chartData.datasets.push({
    //     label: ['Class Average'],
    //     data: compare.times
    //       ? compare.times.map(time => time[this.state.metric])
    //       : [],
    //     backgroundColor: ['rgb(180, 250, 120, .2)'],
    //     fontColor: 'rgb(180, 250, 120)'
    //   })
    // }

    return (
      <div>
        <div className="chart">
          <Bar
            data={chartData}
            options={{
              elements: {
                point: {
                  radius: 3,
                  backgroundColor: 'rgb(179, 255, 0)'
                }
              },
              // time: {
              //   unit: 'minute',
              // },
              plugins: {
                datalabels: {
                  align: 260
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      suggestedMin: yMin,
                      suggestedMax: yMax
                    },
                    scaleLabel: {
                      labelString:
                        this.state.metric === 'faceScore'
                          ? 'Percentage of successful face detections'
                          : 'Count',
                      display: true,
                      fontSize: 15,
                      fontColor: 'rgb(195, 190, 204)'
                    }
                  }
                ],
                xAxes: [
                  {
                    // time: {
                    //   unit: 'minute',
                    // },
                    // ticks: {
                    //   suggestedMin: 0,
                    //   suggestedMax: 30,
                    // },
                    scaleLabel: {
                      labelString: 'Session in Minutes',
                      display: true,
                      fontSize: 15,
                      fontColor: 'rgb(195, 190, 204)'
                    }
                  }
                ]
              },
              title: {
                text: this.state.metric,
                fontSize: 25,
                spanGaps: true,
                fontColor: 'rgb(195, 190, 204)'
              }
            }}
          />
        </div>
      </div>
    )
  }
}
