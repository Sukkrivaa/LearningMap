var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var keys = require("./config/keys");
var cookieSession = require("cookie-session");
var passport = require("passport")

// app.set("view-engine", "ejs")

app.use(function(req,res,next){
	if(req.headers["x-forwarded-proto"] === "https"){
		res.redirect("http://" + req.hostname + req.url);
	}else{
		next();
	}
});


require("./config/passport-setup");

app.use(cookieSession({
  maxAge: 60*24*60*1000,
  keys: [keys.session.cookieKey]
}))


app.use(passport.initialize());
app.use(passport.session());

require("./api/authRoutes")(app);

app.use(express.static(__dirname+"/dist")); //react apps can only be used on the main route

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./api/appRoutesIndex.jsx")(app);

app.listen(PORT, function(){
	console.log(`Express Server is up on port ${PORT}`);
});
