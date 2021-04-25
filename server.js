let express = require("express");
let useRequire = require("./src/useRequire");

// import { sayBye } from "./src/useImport.js"
// import { sayByeFn as AsSayByeFn } from "./src/useImport.js"
// import DefaultSayByeFn from "./src/useImport.js" // import { default as DefaultSayByeFn } from "./src/useImport"

// import * as publicImport from "./src/useImport.js";
// mjs
// import express from "express"

let app = express();

let server = app.listen(8081, function () {
	//- require [賦值]
	console.log(useRequire.sayHi);
	// useRequire.sayHi = "change me!"
	// console.log(useRequire.sayHi);
	// console.log(useRequire.callFn());
	// console.log(useRequire.useText);
	
	//- import [解構]
	// console.log(sayBye);
	// sayBye = "change me!"
	// console.log(sayBye);
	// console.log(AsSayByeFn());
	// console.log(DefaultSayByeFn());

	// console.log(publicImport);
	// console.log(publicImport.sayBye);
	// console.log(publicImport.sayByeFn());
	// console.log(publicImport.default());

	console.log("Server started at http://localhost:%s", 8081);
});
