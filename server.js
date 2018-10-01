var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.use(function(req,res,next){
	if(req.headers["x-forwarded-proto"] === "https"){
		res.redirect("http://" + req.hostname + req.url);
	}else{
		next();
	}
});

app.use(express.static("dist"));
//require(pageRoutes)(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/api/routesIndex.jsx")(app);

app.listen(PORT, function(){
	console.log(`Express Server is up on port ${PORT}`);
});
