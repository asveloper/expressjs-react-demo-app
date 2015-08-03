var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello {this.props.title}!</h1>
      </div>
    );
  }
});

module.exports = Home;
