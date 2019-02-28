## AWS Lambda com Express Piloto - Serverless  Plugin 

## Dependencies
- express
- consign
- body-parser
- serverless-http
- pg

## Dependencies Dev
- serverless-offline 

## Installing dependencies 

 > npm install express --save  
 > npm install consign express --save  
 > npm install body-parser express --save  
 > npm installserverless-http express --save
 > npm install pg --save  
 > npm serverless-offline --save-dev  

##To run local

- Para executar o projeto localmente você deve rodar o seguinte comando: 

> serverless offline start --skipCacheInvalidation

- O framework serverless é responsável por simular uma aplicação serverless sendo executado no AWS Lambda, ao invés de consumir a URL da API Gateway você deve utilizar o seguinte endereço
http://localhost:3000/

## To deploy

- Assim que a sua aplicação for finalizada e caso você queira realizar o deploy para o ambiente produtivo você deve executar o seguinte comando:

> serverless deploy -v

- Esse comando é responsável por criar o template do CloudFormation com API Gateway e a função Lambda sua conta da AWS via ClI, esse comando só funcionará se você configurar o AWS CLI na sua máquina.

- ATENÇAO com o arquivo serverless.yml, ele é responsável por mapear as configurações pelo plugin do serverless e gerar a stack no CloudFormation.

## References

- Express: https://www.npmjs.com/package/express
- Consign: https://www.npmjs.com/package/consign
- Body-Parser: https://www.npmjs.com/package/body-parser
- Serverless-Http: https://www.npmjs.com/package/serverless-http
- Serverless-Offline: https://www.npmjs.com/package/serverless-offline
- Postgres: https://www.npmjs.com/package/pg 



