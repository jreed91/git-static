var React = require('react')
var PostDate = require('./PostDate.jsx')

var PostItem = React.createClass({

  propTypes: {
    post: React.PropTypes.shape({
      title: React.PropTypes.string,
      subhead: React.PropTypes.string,
      excerpt: React.PropTypes.string,
      date: React.PropTypes.string,
      slug: React.PropTypes.string,
      draft: React.PropTypes.bool,
      thumbnail: React.PropTypes.string,
      link: React.React.PropTypes.string,
    })
  },

  render: function() {
    var post = this.props.post
    return (
     <div className="clearfix mxn2">
      <div className='sm-col sm-col-8 md-col-9 px2'>
        <div>

            <h2 className='h3'>
              <a href={'/posts/' + post.slug} className='link-block'>
            {post.title} 
            </a>
            {post.link ?  <span> - <a href={post.link}>∞</a></span> : false }
            </h2>
        </div>
        <PostDate date={post.date} />
        {post.thumbnail ? <img src={post.thumbnail} /> : false}
        <p className='georgia h3 mt1 mb0'>{post.excerpt}</p>
        <div className=''>
          <a href={'/posts/' + post.slug}
            className='h5 bold mr1'>
            Read more
          </a>
        </div>
      </div>
    </div>
    )
  }

})

module.exports = PostItem