import React from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
import {fetchSingleStudent} from '../store/single-student'
import SimpleTable from './table'

class SingleStudent extends React.Component {
  componentDidMount() {
    this.props.getSingleStudent(this.props.studentId)
    console.log('getting student', this.props.studentId)
  }

  render() {
    const student = this.props.student
    const liveStudent = this.props.students.find(
      liveStud => liveStud.id === student.id
    )
    console.log(liveStudent)
    let chartData = {
      labels: ['1', '2', '3'],
      datasets: [
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
    if (liveStudent) {
      chartData = {
        labels: liveStudent.times,
        datasets: [
          {
            label: ['Words Spoken'],
            data: liveStudent.times.map(time => time.clickCount),
            backgroundColor: ['rgb(195, 190, 204)'],
            fontColor: 'rgb(195, 190, 204)'
          }
        ]
      }
    }

    console.log('our student->', liveStudent)
    return (
      <div>
        {student.firstName}
        {student.lastName}
        {student.email}

        {liveStudent && <SimpleTable student={liveStudent} />}

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
                text: 'WordCount',
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

const mapState = state => {
  return {
    student: state.student,
    students: state.liveStudents
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleStudent: id => dispatch(fetchSingleStudent(id))
  }
}

export default connect(mapState, mapDispatch)(SingleStudent)
