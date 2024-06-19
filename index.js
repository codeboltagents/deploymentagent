const codebolt = require("@codebolt/codeboltjs").default;
const {CodeIdentifer} = require("./agents/CodeIdentifer/CodeIdentifer");
const path = require("path")
const {FindCommand} = require("./agents/FindCommand/FindCommand");

async function execute() {

	await codebolt.waitForConnection();
	var message;
	message =  codebolt.chat.sendMessage("Hi I am Deployment Agent,I will help you deploy your project");
	message = await codebolt.chat.waitforReply("Can you please provide details about the server where you want to deploy this project? ");

	const {markdown} = await codebolt.codeutils.getAllFilesAsMarkDown();

	const extractdata = await CodeIdentifer(markdown, message.message);

	console.log(extractdata);

	 
	// combinedContent = ''
	// for (const file of extractdata) {
	// 	try {
	// 	const data = await codebolt.fs.readFile(file, '');
	// 	combinedContent += " ## " + file + "\n\n";
	// 	combinedContent += data.content + "\n\n";
	// 	} catch (err) {
	// 	console.error(`Error reading file ${file}:`, err);
	// 	}
	// }
	// console.log(combinedContent);  
    // const file_details = await codebolt.fs.readFile(extractdata, '');
	// const command = await FindCommand(combinedContent);

}

(async () => {
	await execute();
})();
