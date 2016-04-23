'use strict';

var React     = require('react');
var Row       = require('react-bootstrap/lib/Row');
var Col       = require('react-bootstrap/lib/Col');
var Modal     = require('react-bootstrap/lib/Modal');
var Button    = require('react-bootstrap/lib/Button');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

// ADD este componente em Store

var Cart = React.createClass({
  propTypes: {
    beers: React.PropTypes.object.isRequired,
    cart: React.PropTypes.object.isRequired,
    removeFromCart: React.PropTypes.func.isRequired
  },

  render: function() {
    var items = Object.keys(this.props.cart);

    return (
      <div>
        <nav className="nav-cart">
          <Row>
            <Col md={12}>
              <div className="pull-right">
                <Button
                  bsStyle="success"
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
