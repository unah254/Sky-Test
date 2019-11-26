import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from '../redux/actions/actions';

function ContentComponent() {
  return (
    <div>
        ContentComponent
    </div>
  );
}

ContentComponent.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ fetchProducts }) => ({
  product: fetchProducts,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProducts: fetchProducts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
