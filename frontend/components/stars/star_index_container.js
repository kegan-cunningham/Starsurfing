import StarIndex from './star_index';
import { connect } from 'react-redux';
import { fetchStars } from '../../actions/star_actions';

const mapStateToProps = (state) => {
  return {
    stars: Object.values(state.entities.stars)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStars: () => dispatch(fetchStars())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarIndex);
