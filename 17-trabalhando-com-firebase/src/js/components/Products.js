'use strict';

var React   = require('react');
var Row     = require('react-bootstrap/lib/Row');
var Product = require('./Product');

// COMO NÂO EXISTE O COMPONENTE PRODUCT É LANÇADO UMA EXCEÇÃO NO TERMINAL

// ADD esse componente em Store

var Products = React.createClass({
  // propTypes: é possivel dizer qual é o tipo de props que o componente 
  // está recebendo e dizer se ele é requirido ou não.

  propTypes: {
    beers: React.PropTypes.object.isRequired,
    addToCart: React.PropTypes.func.isRequired
  },

  // index e key vai guardar o ID de cada cerveja beer1, beer2 ...

  // O atributo produto vai receber esse objeto, quando faz:
  // this.props.beers[beer1]

  // beer1: {
  //   name: 'Biritis',
  //   image: 'build/img/beers/biritis.png',
  //   price: '6.20',
  //   status: 'unavailable'
  // }

  renderBeer: function(key) {
    return (
      <Product
        index={key}
        key={key}
        product={this.props.beers[key]}
        addToCart={this.props.addToCart}
      />
    )
  },

  // precisamos obter a lista de cervejas e cada cerveja será um componente Product

  // Object.keys retorna um array com os dados da cerveja
  // Exemplo: ["beer1", "beer2", "beer3", "beer4", ...]

  // .map() retorna cada cerveja beer1, beer2

  render: function() {
    return (
      <main className="products">
        <Row>
          {Object.keys(this.props.beers).map(this.renderBeer)}
        </Row>
      </main>
    );
  }
});

module.exports = Products;
