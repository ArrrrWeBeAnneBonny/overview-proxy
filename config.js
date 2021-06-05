module.exports = {
  dev: {
    overview: 'http://localhost:3003/',
    reviews: 'http://localhost:3001/',
    booking: 'http://localhost:3002/',
    photogallery: 'http://localhost:3004/',
    proxy: 'http://localhost:3000/'
  },
  production: {
    overview: 'https://fec-overview.s3-us-west-2.amazonaws.com/overview.js',
    reviews: 'https://reviews-avatars.s3-us-west-1.amazonaws.com/reviews.js',
    booking: 'http://localhost:3002/',
    photogallery: 'http://localhost:3004/',
    proxy: 'http://ec2-52-89-7-45.us-west-2.compute.amazonaws.com/'
  },
  allowedOrigins: [
    'http://localhost:3000/',
    'http://localhost:5500/',
    'https://fec-overview.s3-us-west-2.amazonaws.com/',
    'http://ec2-35-163-3-32.us-west-2.compute.amazonaws.com/',
    'http://35.163.3.32:3000/',
    'http://35.163.3.32:80/',
    'http://35.163.3.32/'
  ]
}