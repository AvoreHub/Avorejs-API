const apimethods = require("./theApi");
const TheApi = new apimethods("earlyaccess");


async function Main() {
    TheApi.getDate().then((data) => {
        console.log(data);
    }).catch((e) => {
        console.warn(e);
    })
    TheApi.getLogo().then((data) => {
        console.log(data);
    }).catch((e) => {
        console.warn(e);
    })
}
Main();