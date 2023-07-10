const fs = require("fs");
const users=require("./usersnew2");

let user={
	name:"saps1",
	age:25,
	language:["node","React","Graphq1"]
};

let user1={
	name:"saps2",
	age:26,
	language:["Msa","Graphq1"]
};
	
users.unshift(user);
users.push(user1);

fs.writeFile("usersnew2.json",JSON.stringify(users),err=>{
	if (err) throw err;
	
	console.log("Done writing");
});