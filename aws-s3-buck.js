// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Load the fs module for file system operations
const fs = require('fs');

// Set the region and credentials (you can also use environment variables or AWS CLI configured credentials)
AWS.config.update({ region: 'us-east-1' });

// Create an S3 service object
const s3 = new AWS.S3();

// Bucket name and file details
const bucketName = 'my-example-bucket';
const fileName = 'example.txt';
const fileContent = 'Hello, this is a test file.';

// Function to create a new S3 bucket
const createBucket = async () => {
    try {
        const bucketParams = {
            Bucket: bucketName
        };
        await s3.createBucket(bucketParams).promise();
        console.log(`Bucket "${bucketName}" created successfully.`);
    } catch (err) {
        console.error('Error creating bucket:', err);
    }
};

// Function to upload a file to the S3 bucket
const uploadFile = async () => {
    try {
        const uploadParams = {
            Bucket: bucketName,
            Key: fileName,
            Body: fileContent
        };
        await s3.upload(uploadParams).promise();
        console.log(`File "${fileName}" uploaded successfully.`);
    } catch (err) {
        console.error('Error uploading file:', err);
    }
};

// Run the functions
const run = async () => {
    await createBucket();
    await uploadFile();
};

run().catch(console.error);