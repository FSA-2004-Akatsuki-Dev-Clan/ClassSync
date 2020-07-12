import React from 'react'
import {Line} from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      metric: 'faceScore'
    }
  }

  render() {
    const {data, compare} = this.props

    const firstTime = data.times ? data.times[0].time : 0

    const chartData = {
      labels: data.times
        ? data.times.map(time => time.time - firstTime)
        : [1, 2, 3, 4, 5],
      datasets: [
        {
          label: [this.state.metric],
          data: data.times
            ? data.times.map(time => time[this.state.metric])
            : [10, 20, 30, 40, 50],
          backgroundColor: ['rgb(195, 190, 204, .2)'],
          fontColor: 'rgb(195, 190, 204)'
        }
      ]
    }

    chartData.datasets.push({
      label: ['Class Average'],
      data: [20, 40, 60, 80, 100],
      backgroundColor: ['rgb(250, 240, 260, .2)'],
      fontColor: 'rgb(215, 230, 240)'
    })

    if (compare) {
      chartData.datasets.push({
        label: ['Class Average'],
        data: compare.times
          ? compare.times.map(time => time[this.state.metric])
          : [],
        backgroundColor: ['rgb(250, 240, 260, .2)'],
        fontColor: 'rgb(215, 230, 240)'
      })
    }

    let yMin, yMax

    switch (this.state.metric) {
      case 'faceScore':
        yMin = 0
        yMax = 100

      case 'wordCount':
        yMin = 0
        yMax = 300

      case 'clickCount':
        yMin = 0
        yMax = 40

      case 'keyCount':
        yMin = 0
        yMax = 50
    }

    return (
      <div>
        <label htmlFor="metric">Select Metric:</label>
        <select
          name="metric"
          value={this.state.metric}
          onChange={evt => this.setState({metric: evt.target.value})}
        >
          <option value="faceScore">Face Score</option>
          <option value="wordCount">Words Spoken</option>
          <option value="keyCount">Key Presses</option>
          <option value="clickCount">Mouse Clicks</option>
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
                      display: true,
                      fontSize: 20,
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
                      display: true,
                      fontSize: 20,
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
