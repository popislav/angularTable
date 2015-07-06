var port = 8000,
	express = require("express"),
	app = express();
	
var $ = require("jquery");	

app.use("/", express.static("app/view"));
app.use("/styles", express.static("app/styles"));
app.use("/scripts", express.static("app/scripts"));
app.use("/data", express.static("app/data"));
app.listen(port);
console.log("Magic happens on http://localhost:" + port);