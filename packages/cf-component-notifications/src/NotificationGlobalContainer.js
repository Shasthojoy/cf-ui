import React from 'react';

import PropTypes from 'prop-types';

class NotificationGlobalContainer extends React.Component {
  render() {
    return (
      <div className="cf-notifications__global_container">
        {this.props.children}
      </div>
    );
  }
}

NotificationGlobalContainer.propTypes = {
  children: PropTypes.node
};

export default NotificationGlobalContainer;
