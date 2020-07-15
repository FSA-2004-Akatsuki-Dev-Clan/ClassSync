import React from 'react'
import {Line} from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default class Chart extends React.Component {
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

    const {data, compare} = this.props

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
      labels: data.times ? data.times.map(time => time.time - firstTime) : [],
      datasets: [
        {
          label: [this.state.metric],
          data: data.times
            ? data.times.map(time => time[this.state.metric])
            : [50, 100, 150, 200, 250],
          backgroundColor: ['rgb(13, 221, 220, .2)'],
          fontColor: 'rgb(13, 221, 220)'
        }
      ]
    }

    chartData.datasets.push({
      label: ['Class Average'],
      data: [50, 170, 140, 120, 50],
      backgroundColor: ['rgb(208, 226, 101, .2)'],
      fontColor: 'rgb(208, 226, 101)'
    })

    if (compare) {
      chartData.datasets.push({
        label: ['Class Average'],
        data: compare.times
          ? compare.times.map(time => time[this.state.metric])
          : [],
        backgroundColor: ['rgb(208, 226, 101, .2)'],
        fontColor: 'rgb(208, 226, 101)'
      })
    }

    return (
      <div>
        <label htmlFor="metric">Select Metric:</label>
        <select
          name="metric"
          value={this.state.metric}
          onChange={evt => this.setState({metric: evt.target.value})}
        >
          <option value="Word Count">Words Spoken</option>
          <option value="Face Score">Face Score</option>
          <option value="Key Count">Key Presses</option>
          <option value="Click Count">Mouse Clicks</option>
        </select>
        <div className="chart">
          <Line
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
                      labelString: 'Session Minutes',
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
