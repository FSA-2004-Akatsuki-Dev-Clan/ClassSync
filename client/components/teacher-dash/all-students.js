import React from 'react'
import {connect} from 'react-redux'
import {fetchStudents} from '../../store/students'

export class AllStudents extends React.Component {
  componentDidMount = () => {
    this.props.getStudents()
  }

  render() {
    const {students} = this.props
    return (
      <div>
        {students.map(student => (
          <div key={student.id}>
            <h3>{student.firstName}</h3>
            <h3>{student.lastName}</h3>
          </div>
        ))}
        {/* {sneakers.map(sneaker => (
          <div key={sneaker.id}>
            <div className="col s3 m3">
              <Link to={`/shop/${sneaker.id}`}>
                <ShopPageSneaker sneaker={sneaker} />
              </Link>
            </div>
          </div>
        ))} */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    students: state.students
  }
}

const mapDispatch = dispatch => {
  return {
    getStudents: () => dispatch(fetchStudents())
  }
}

export default connect(mapState, mapDispatch)(AllStudents)
