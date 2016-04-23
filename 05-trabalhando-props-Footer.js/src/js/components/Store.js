'use strict';

var React  = require('react');
var Grid   = require('react-bootstrap/lib/Grid');
var Footer = require('./Footer');

// Criar 2 props
// name
// url

var Store = React.createClass({
  render: function() {
    return (
      <Grid>
        <Footer name="JSday" url="http://jsday.com.br" />
      </Grid>
    );
  }
});

module.exports = Store;
