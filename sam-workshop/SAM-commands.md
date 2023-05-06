# Serverless Applications with AWS Lambda

**Prerequisites:** `aws CLI`, `python + pip`, `node.js + npm`, `docker`

```bash
pip install awscli
```

```bash
pip install aws-sam-cli
```

```bash
aws configure --profile sam-user
```

```bash
aws sts get-caller-identity --profile sam-user
```

```bash
sam init --runtime nodejs16.x --name --app --app-template hello-world
```

```bash
sam build --region us-east-1 --profile sam-user
```

```bash
sam build
```

```bash
aws s3 mb s3://sam-bucket-tf-workshop
```

```bash
aws s3 mb s3://sam-bucket-tf-workshop --region us-east-1
```

```bash
sam package --s3-bucket sam-bucket-tf-workshop --output-template-file output.yaml --region us-east-1
```

```bash
sam deploy --template-file output.yaml --stack-name sam-test --capabilities CAPABILITY_IAM --region us-east-1 --profile sam-user
```

```bash
aws cloudformation describe-stacks --stack-name sam-test --region us-east-1
```

```bash
sam logs -n HelloWorldFunction --stack-name sam-test --region us-east-1
```

```bash
sam logs -n HelloWorldFunction --stack-name sam-test --filter ERROR -s '1 month ago' --region us-east-1
```

```bash
sam logs -n HelloWorldFunction --stack-name sam-test --tail --region us-east-1
```

```bash
sam local start-api --host=0.0.0.0
```

```bash
sam local invoke HelloWorldFunction --event events/event.json
```

```bash
cfn-init template.yaml
```

```bash
aws cloudformation list-stack-resources --stack-name sam-test --region us-east-1
```

```bash
aws lambda get-function-configuration --function-name sam-test-HelloWorldFunction-CKSVo1KCAGCk --region us-east-1
```

```bash
aws lambda list-versions-by-function --function-name sam-test-HelloWorldFunction-CKSVo1KCAGCk --region us-east-1
```

`sam-test-1-HelloWorldFunction-QL5VEY42DZ2C:1`

```bash
aws lambda invoke --function-name sam-test-HelloWorldFunction-CKSVo1KCAGCk:1 result.txt --region us-east-1
```

[Deploying serverless applications gradually - AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html)
