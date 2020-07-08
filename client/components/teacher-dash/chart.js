import React from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'

export default class Chart extends React.Component {
  render() {
    const chartData = {
      labels: ['1', '2', '3'],
      datasets: [
        {
          label: ['Rem Sleep Time (in Hours)'],
          data: ['1', '2', '3'],
          backgroundColor: ['rgb(195, 190, 204)'],
          fontColor: 'rgb(195, 190, 204)'
        },

        {
          label: ['Rem Sleep Time for Current Tag (in Hours)'],
          data: ['1', '2', '3'],
          borderColor: ['rgb(179, 255, 0)'],
          borderWidth: 6,
          fontColor: 'rgb(195, 190, 204)',
          backgroundColor: ['rgb(179, 255, 0)']
        }
      ]
    }
    return (
      <div>
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
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      fontSize: 20,
                      fontColor: 'rgb(195, 190, 204)'
                    }
                  }
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      fontSize: 20,
                      fontColor: 'rgb(195, 190, 204)'
                    }
                  }
                ]
              },
              title: {
                text: 'REM Sleep Time by Tag',
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