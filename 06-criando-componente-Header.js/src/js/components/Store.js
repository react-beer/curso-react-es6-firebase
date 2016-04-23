'use strict';

var React  = require('react');
var Grid   = require('react-bootstrap/lib/Grid');
var Header = require('./Header');
var Footer = require('./Footer');

var Store = React.createClass({
  render: function() {
    return (
      <Grid>
        <Header />
        <Footer name="JSday" url="http://jsday.com.br" />
      </Grid>
    );
  }
});

module.exports = Store;
