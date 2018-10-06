const passport = require("passport");

module.exports = (app) => {
  app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile"]
  }));

  app.get("/auth/google/redirect", passport.authenticate("google"), (req,res)=>{
    console.log(req.user);
    res.redirect("/");
  })


  app.get("/getCookieValue", (req,res) => {
    res.send(req.user);
  })

  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
}
