const appConfig = require('config').get('app');
const port = process.env.PORT || appConfig.port;

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Node app is running on port ${port}`);
});