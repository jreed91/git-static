var React = require('react')

var Header = React.createClass({

  propTypes: {
    params: React.PropTypes.object,
    posts: React.PropTypes.array,
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <header className=''>
        <h1 className=''>
          <a href='/' className='link-block'>
            {this.props.title}
          </a>
        </h1>
      </header>
    )
  }

})

module.exports = Header