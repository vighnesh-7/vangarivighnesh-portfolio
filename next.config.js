const withVideos = require('next-videos')

module.exports = withVideos({
  images: {
    domains: ['i.postimg.cc', 'upload.wikimedia.org'],
  },
})
