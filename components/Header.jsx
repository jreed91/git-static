var React = require('react')

var Header = React.createClass({

  propTypes: {
    params: React.PropTypes.object,
    posts: React.PropTypes.array,
    title: React.PropTypes.string
  },

  render: function () {
    return (
      	<nav className="clearfix p2 border-bottom">
		  <div className="sm-col">
		    <a href="/" className="btn py2">{this.props.title}</a>
		  </div>
		  <div className="sm-col-right">
		    <a href="/" className="btn py2">About</a>
		  </div>
		</nav>
    )
  }

})

module.exports = Header