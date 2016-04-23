var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <p>
          Made with <span className="love">♥</span>
          <span> by </span>
          <a href={this.props.url}>{this.props.name}</a>
        </p>
      </footer>
    );
  }
});

module.exports = Footer;
