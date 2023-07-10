const async = require("async");

function root(a) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(Math.sqrt(a));
		},2000);
	});
}

async function output(a){
	const ans = await root(a);
	console.log(ans);
}
output(4);