const async = require("async");

function check(a) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			if (a%2==0){
			resolve("even");
			}
			else{resolve("odd");
			}
			
		},2000);
	});
}

async function output(a){
	const ans = await check(a);
	console.log(ans);
}
output(6);