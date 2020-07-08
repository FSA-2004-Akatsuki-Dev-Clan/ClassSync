import React from 'react'
import {connect} from 'react-redux'
import {fetchStudents} from '../../store/students'

export class AllStudents extends React.Component {
  // componentDidMount = () => {
  //   this.props.fetchStudents()
  // }

  render() {
    console.log('props: ', this.props)
    return (
      <div>
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
    fetchStudents: () => dispatch(fetchStudents())
  }
}

export default connect(mapState, mapDispatch)(AllStudents)
