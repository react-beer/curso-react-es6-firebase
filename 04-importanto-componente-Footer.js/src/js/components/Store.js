'use strict';

var React  = require('react');

// Vamos usar Bootstrap como componentes de React.

var Grid   = require('react-bootstrap/lib/Grid');

var Footer = require('./Footer');

// Perceba também que antes de renderizar o componente, foi adicionado a tag <Grid>, 
// que vai servir de container para os demais elementos.

var Store = React.createClass({
  render: function() {
    return (
      <Grid>
        <Footer />
      </Grid>
    );
  }
});

module.exports = Store;
