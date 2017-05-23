import SkiDayList from '../ui/SkiDayList'
import { connect } from 'react-redux'
import { removeDay } from '../../actions'

const mapStateToProps = (state, props) => ({
  days: state.allSkiDays,
  filter: props.params.filter,
})

const mapDispatchToProps = dispatch => ({
  onRemoveDay(date) {
    dispatch(
      removeDay(date)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)

// export default (props) =>
//     <SkiDayList days={sample}
//                 filter={props.params.filter}
//                 onRemoveDay={date => console.log('remove day on', date)} />
