var React = require('react');

var Error = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
});

module.exports = Error;
