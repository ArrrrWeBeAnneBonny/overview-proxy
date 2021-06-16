const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const { AWSAccessKeyId, AWSSecretKey } = require('./aws.config.js');
AWS.config.update({
  accessKeyId: AWSAccessKeyId,
  secretAccessKey: AWSSecretKey,
  region: 'us-west-2'
});

const Bucket = 'fec-overview';
const s3Bucket = new AWS.S3({
  params: { Bucket }
});
const s3Url = 'https://fec-overview.s3-us-west-2.amazonaws.com/';

const CSSToS3 = (CSS) => {
  const pathName = 'css/proxy-style.css';
  const data = {
    Key: pathName,
    Body: CSS,
    ContentType: 'text/css',
    ACL: 'public-read'
  };
  return new Promise((resolve, reject) => {
    s3Bucket.putObject(data, err => {
      err ? reject(err) : resolve(s3Url + pathName)
    })
  })
    .then(result => {
      console.log('Success! CSS loaded at: ', result);
    })
    .catch(error => {
      console.log('Error in CSS Loading!');
      console.log(error);
    })
};

const uploadCSS = () => {
  const pathToCSS = path.resolve('./client/style.css');
  console.log('path: ', pathToCSS)
  const CSS = fs.readFileSync(pathToCSS);
  CSSToS3(CSS);
}

module.exports.uploadCSS = uploadCSS;
