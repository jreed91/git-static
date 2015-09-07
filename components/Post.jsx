var React = require('react')

var Post = React.createClass({

  propTypes: {
    params: React.PropTypes.object,
    posts: React.PropTypes.array
  },

  render: function () {
    var post = this.props.post

    return (
      <div className='py2'>
        <div
          className='prose mb3'
          dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className='mt3'>
        </div>
      </div>
    )
  }

})

module.exports = Post
