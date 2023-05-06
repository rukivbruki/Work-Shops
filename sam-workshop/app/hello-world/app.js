// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        let sum = 2+2;
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world new version',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

// const htmlResponse = require('./html-response');
// const formHtml = `
//   <html>
//   <head>
//     <meta charset="utf-8"/>
//   </head>
//   <body>
//     <form method="POST">
//       Please enter your name:
//       <input type="text" name="name"/>
//       <br/>
//       <input type="submit" />
//     </form>
//   </body>
//   </html>
// `;
//
// const thanksHtml = `
//   <html>
//   <head>
//     <meta charset="utf-8"/>
//   </head>
//   <body>
//     <h1>Thanks</h1>
//     <p>We received your submission</p>
//   </body>
//   </html>
// `;
//
// exports.lambdaHandler = async (event, context) => {
//   console.log(JSON.stringify(event, null, 2));
//
//   if (event.httpMethod === 'GET') {
//     return htmlResponse(formHtml);
//   } else {
//     return htmlResponse(thanksHtml);
//   }
// };
