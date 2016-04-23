'use strict';

var React  = require('react');
var Grid   = require('react-bootstrap/lib/Grid');
var Header = require('./Header');
var Footer = require('./Footer');

var Store = React.createClass({
  getInitialState: function() {
    return {
      beers: {},
      cart: {}
    }
  },

  // Add console.log

  render: function() {
    console.log(this.state);

    return (
      <Grid>
        <Header />
        <Footer name="JSday" url="http://jsday.com.br" />
      </Grid>
    );
  }
});

module.exports = Store;
