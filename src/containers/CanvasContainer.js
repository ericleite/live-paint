import { connect } from 'react-redux';

import Canvas from 'components/Canvas';

const mapStateToProps = (store) => ({
  activeTool: store.tools.active,
  activeColor: store.colors.active
});

export default connect(
  mapStateToProps,
  null
)(Canvas);
