 const cli = require("grasseum_cli");


const localCWD =process.cwd();
const localARGV =process.argv.splice(2); 


cli({
    "cwd":localCWD,
    "argv":localARGV
});