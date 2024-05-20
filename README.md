# Aws-bucket

This is a simple Node.js program that demonstrates how to create an S3 bucket and upload a file to it using the AWS SDK for JavaScript.

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
2. **AWS Account**: You need an AWS account to use AWS services. If you don't have one, you can create it [here](https://aws.amazon.com/).
3. **AWS CLI**: Install and configure the AWS CLI to set up your AWS credentials. You can download it from [aws.amazon.com/cli](https://aws.amazon.com/cli/).

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/HypertextCoder/Aws-bucket.git
   cd Aws-bucket
   ```

2. **Install Dependencies**

   ```bash
   npm install aws-sdk
   ```

3. **Configure AWS CLI**

   Run the following command to configure your AWS credentials:

   ```bash
   aws configure
   ```

   You will be prompted to enter your AWS Access Key ID, Secret Access Key, region, and output format. This will create a credentials file at `~/.aws/credentials`.

## Usage

1. **Run the Script**

   Make sure your AWS credentials are configured and then run your Node.js script:

   ```bash
   node Aws-bucket.js
   ```

## Explanation

- **AWS SDK and fs module**: The AWS SDK is used to interact with AWS services, and the fs module is used for file operations.
- **AWS Configuration**: The SDK uses your AWS credentials and region configuration. These can be set up using the AWS CLI.
- **S3 Service Object**: This object allows you to interact with Amazon S3.
- **Bucket and File Details**: Specify the name of the bucket and the file you want to upload.
- **Create Bucket Function**: This function creates a new S3 bucket using the `createBucket` method.
- **Upload File Function**: This function uploads a file to the S3 bucket using the `upload` method.
- **Run Function**: This function calls the `createBucket` and `uploadFile` functions sequentially.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
