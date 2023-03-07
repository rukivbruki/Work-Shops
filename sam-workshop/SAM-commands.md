# Serverless Applications with AWS Lambda
https://www.notion.so/rukivbruki/Serverless-Applications-with-AWS-Lambda-389c2cff4c664090bc5b8037e2d8842b?pvs=4

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
View the live logs for the "HelloWorldFunction" in the "sam-test" CloudFormation stack in the us-east-1 region
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
