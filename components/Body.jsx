var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Header = require('./Header.jsx')

var Body = React.createClass({

  render: function () {
    return (
      <body className=''>
        <Header {...this.props} />
        <RouteHandler {...this.props} />
      </body>
    )
  }

})

module.exports = Body