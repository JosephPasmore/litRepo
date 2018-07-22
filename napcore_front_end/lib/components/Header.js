var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Arrange from 'terra-arrange';
import Search from './Search';

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(Arrange
      // fitStart={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABkCAMAAAC8R1L8AAAAllBMVEUBQRz///8AQRzg4+AAIAAAMgAAMAAAKQAANQAALAAAPhcAPRQALgAAIwDv8fAAOQs1VDzn6uiPnJG6w70lSSygqaLb3dvCyMNsgHFGW0gURCEbRCL4+vkqTjCrsqzR19NZblyzurWCjYN2hXlkdmYsSzIPOhiXpJo9XURTZVUAFwB/kYOWnZYjQidJZE8AAAAAHAB1fXahpSaSAAAEJ0lEQVRoge2aa3OqMBCGzWoghEsEa9VTK+K1ra2n5///ucNdtIQECWpneD84TlnjM+vuZrNpD8moP4DejfXruRKywmv5W1XPfr2/Oq6Oq02uLh9jdVwd10NwdfkYq+PquB6CSzqvgDJ4vHwEE2+nvebuVcxlGsNRf2Y2xlLMpQ8nqK8rwFLJBcxaIORjqgBLIRdoSzc0fVLhLYX5SDUvtJzPWLkZUM7nWs5HMILI8oDLLYG+kVpJqogLvv3I0Nd5hni0qQWmhgsGMRb64sY8+UQzktgyTQJQCRdY8Y+IFhbXhK2RMwxjj2JrNca34YI45MOgf+KXCPOIkPtE9K3noKNEykpzVeQOWyZmI/3ns+wt/RMaPM8CJ/RqmVkL+Qisn5gtK/wAdraYW+HVK/zFlzVOv7Ainin+my12kIguFVz0KbXiRj2wwXacreXLZKMCLtBHqdWSlVuY9mZyWmvPLXFqueKAjuQMy+OGvvlnix34xeQaLl7u4EVq9GzC5bP4BXrD98Oo7+SrbXCJmep8hF32hb7OM6Em0fXXIFst3dsV+YujrHYhFFT+PkBWoY37bxHWlDl/u1LGZWRRjwS7C9uENkusDQbH8ZgJY78hF33pZ0ZeNZf5Fm0IYZyCSbIDU3tc5iw3EnABCzM23RDEWE3zkU1zoz2+eHb+Fr7RXuM8K/lDQ39peR1HC63aX7a/q9EYNuTST5V8wqsTqcxhnRNJQy77OTfyOa19rlrnt2ZcoOfpKNm/3IgLn7jQu5qTY02u0tw54zqQs2f3nOcUf0fk283HOLmacRXjntvo3IOrUCeEFf+WXIW6GjpMrhVVyyXch0KtyIPEfXHfjhymLvIbchX6nEieqObfiqvQF8baSrTIN+E69dGJpZoppspzR6LAUvNLSnMJz2mp9gZI5RyteFaHi6f8XJvJMyQ8BuytepdvzHWaA+Rg4moBxtoj7XKd5ia5AlvQ8dCPsSuoKM258jlTwX5WtSMB2floIygoCrjyudxJ8z3jTZ+BGes5CkTTJmmuity5qGGx3DXDFHoXOQeU4E3YGrnJJKDNfOyd5r4XH/K2mFDIz7DRxaT2NY2HTkfhtqCCK5+TX2g+Wb1YGBPCGCEYW7vpKCnCa/E2qoQrv1f4KcdfjFfr9epzMXGzv33aIip19zAfPLCf+pTphhRxZfdWElpJDX6luUR9Jy0N/h9ylhjKlmjrnq+X3osK5G8lb9XUcaX3yJXybNn2TCFXL7l352tB5NtstVzR/ykE89I13DGr08sq5or+r+Pr4DsXC7ijzS7ZlpRzSZ8Dwz3Q2i69Sd91Qrnuc3B4fzHYne7dz51GTazb5OV1+PpHsw1i1nJVPX9dIRrpymNIm1xN1HG1xHXlXOZO85zW1HF1XA/B1eVjrI6r43oIri4fYz0o139o8D4kCQn7jwAAAABJRU5ErkJggg==" className="App-logo" alt="logo" />}
      , { fill: React.createElement(
          'h1',
          { className: 'App-title' },
          'Napcore'
        ),
        fitEnd: React.createElement(Search, { searchForLocations: this.props.searchForLocations }),
        align: 'center'
      });
    }
  }]);

  return Header;
}(Component);

export default Header;