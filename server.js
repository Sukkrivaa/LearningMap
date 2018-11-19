var app = require("./index");
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
	console.log(`Express Server is up on port ${PORT}`);
});
