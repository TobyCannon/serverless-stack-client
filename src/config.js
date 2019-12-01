export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-2",
    BUCKET: "tc-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://dgfjuo22xc.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_EAYaqPh8L",
    APP_CLIENT_ID: "2k9s3prmigkllks7j3l5ti4eue",
    IDENTITY_POOL_ID: "eu-west-2:8eaa149c-ee3a-4b73-b361-2bfd3b60f215"
  }
};