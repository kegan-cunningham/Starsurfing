import StarShow from './star_show';
import { connect } from 'react-redux';
import { fetchStar, fetchStars } from '../../actions/star_actions';

const mapStateToProps = (state, ownProps) => {
  const star = state.entities.stars[ownProps.match.params.id];
  return {
    star,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStar: (id) => dispatch(fetchStar(id)),
  fetchStars: () => dispatch(fetchStars()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarShow);
