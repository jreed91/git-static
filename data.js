var _assign = require('lodash').assign
var fs = require('fs')
var path = require('path')
var fm = require('front-matter')
var marked = require('marked')
var markedRenderer = require('./marked-renderer')
var cssnext = require('cssnext')
var cheerio = require('cheerio')
var pkg = require('./package.json')

var dir = './src'
var filenames = []
var posts = []
var traverseFileSystem = function(currentPath) {
  var files = fs.readdirSync(currentPath).filter(isValid)
  function isValid (child) {
    return (child !== '.DS_store' && child.indexOf('.') !== 0);
  }

  for (var i in files) {
    var currentFile =  currentPath + '/' + files[i]
    var stats = fs.statSync(currentFile);
       if (stats.isFile()) {
        var content = fs.readFileSync(currentFile, 'utf8')
        var matter = fm(content)
        var html = marked(matter.body, { renderer: markedRenderer })
        var $ = cheerio.load(html)
        var excerpt = matter.attributes.excerpt || $('p').first().text()
        var post = _assign(matter.attributes, {
          slug: files[i].replace(/\.md/, ''),
          body: matter.body,
          html: html,
          excerpt: excerpt
        })
        filenames.push(files[i])
        posts.push(post)
       }
      else if (stats.isDirectory()) {
             traverseFileSystem(currentFile);
           }
  }
}
traverseFileSystem(dir)


posts.sort(function (a, b) {
  return new Date(b.date) - new Date(a.date)
})

var routes = filenames.map(function (filename) {
  return '/posts/' + filename.replace(/\.md$/, '')
})
routes.unshift('/')

var pageSize = 24
var pages = Math.ceil(posts.length / pageSize)
console.log('pagination', pages)
for (var i = 0; i < pages; i++) {
  routes.push('/page/' + (i + 1))
}

module.exports = {
  title: 'Stream-Of-Consciousness',
  description: pkg.description,
  author: pkg.author,
  keywords: pkg.keywords,
  posts: posts,
  routes: routes,
  baseUrl: '/',
  pageSize: pageSize,
  pages: pages,
  tweetScript: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");'
}