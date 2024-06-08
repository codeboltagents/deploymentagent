const codebolt = require("@codebolt/codeboltjs").default;
const {CodeIdentifer} = require("./agents/CodeIdentifer/CodeIdentifer");
const path = require("path")
async function execute() {

	await codebolt.waitForConnection();
	var message = await codebolt.chat.waitforReply("Hi I am Code Identifer Agent,I will help you to identify the programming language in which the provided code is written");
	
	
	
	const {markdown} = await codebolt.codeutils.getAllFilesAsMarkDown();

	const extractdata = await CodeIdentifer(markdown);
	


}


(async () => {
	await execute();
})();
