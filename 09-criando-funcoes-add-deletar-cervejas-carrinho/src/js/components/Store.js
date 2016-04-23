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

  componentWillMount: function() {
    this.loadBeers();
  },

  loadBeers: function() {
    this.setState({
      beers: require('../utils/data-beers')
    });
  },

  addToCart: function(key, amount) {
    
    // Se não existir o objeto no state cart ele add amount
    // caso contrario, pega a quantidade que existe + amount
    // exemplo:
    // { beer1: 3 } antes
    // { beer1: 8 } depois
    // { beer1: 3 + 5 = 8 }

    // key é o id da cerveja, por exemplo: beer1, beer2

    this.state.cart[key] = this.state.cart[key] + amount || amount;
    this.setState({
      cart: this.state.cart
    });
  },

  removeFromCart: function(key) {

    // delete é nativo do JS
    // key é o id da cerveja, por exemplo: beer1, beer2

    delete this.state.cart[key];
    this.setState({
      cart: this.state.cart
    });
  },

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
