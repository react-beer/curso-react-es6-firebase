'use strict';

var React     = require('react');
var Row       = require('react-bootstrap/lib/Row');
var Col       = require('react-bootstrap/lib/Col');
var Modal     = require('react-bootstrap/lib/Modal');
var Button    = require('react-bootstrap/lib/Button');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var Cart = React.createClass({
  propTypes: {
    beers: React.PropTypes.object.isRequired,
    cart: React.PropTypes.object.isRequired,
    removeFromCart: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      modalCart: false
    }
  },

  showModalCart: function() {
    this.setState({
      modalCart: true
    });
  },

  hideModalCart: function() {
    this.setState({
      modalCart: false
    });
  },

  // EU REMOVI

  // <Modal
  //   {...this.props}  => ISTO AQUI
  //   show={this.state.modalCart}
  //   onHide={this.hideModalCart}
  // >

  // O método reduce() aplica uma função sobre um acumulador e cada valor do array 
  // (da esquerda para direita), deve reduzí-lo a um único valor.

  // [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  //   return previousValue + currentValue;
  // }, 10);
  // 1 + 2 = 3 + 3 = 6 + 6 = 10 + 10 = 20
  // REsultado 20

  // O método toFixed() formata um número utilizando notação de ponto fixo.

  renderModalCart: function() {
    var self = this;
    var cartIds = Object.keys(this.props.cart);

    // prevTotal é o valor antigo que tem no carrinho + a soma do novo valor
    // 1º 0
    // 2º 6.2
    // 3º 10.12

    var total = cartIds.reduce(function(prevTotal, key) {
      var product = self.props.beers[key];
      var count = self.props.cart[key];
      var isAvailable = product && product.status === 'available';

      console.log(product);
      // {name: "Bamberg O Calibre", image: "build/img/beers/bamberg-o-calibre.png", price: "6.20", status: "available"}
      console.log(count);
      // 1 => quantidade de cerveja no carrinho amount
      console.log(isAvailable);
      // true

      if (product && isAvailable) {

        console.log(prevTotal);
        // 1º 0
        // 2º 6.2
        // 3º 10.12

        return prevTotal + (count * parseFloat(product.price) || 0);
      }

      return prevTotal;
    }, 0); // 0 é o primeiro valor do carrinho

    return (
      <Modal
        show={this.state.modalCart}
        onHide={this.hideModalCart}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            <Glyphicon glyph="shopping-cart" /> Details Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <h4 className="total">Total: $ {total.toFixed(2)}</h4>
        </Modal.Footer>
      </Modal>
    );
  },

  // ADD em RENDER this.renderModalCart()
  // onClick={this.showModalCart}

  render: function() {
    var items = Object.keys(this.props.cart);

    return (
      <div>
        {this.renderModalCart()}
        <nav className="nav-cart">
          <Row>
            <Col md={12}>
              <div className="pull-right">
                <Button
                  bsStyle="success"
                  onClick={this.showModalCart}
                >
                  <Glyphicon
                    glyph="shopping-cart"
                  /> Show Cart ({items.length})
                </Button>
              </div>
            </Col>
          </Row>
        </nav>
      </div>
    );
  }
});

module.exports = Cart;
