const codebolt = require("@codebolt/codeboltjs").default;
const {readFileSync} = require("fs");
const {compile} = require("handlebars");
const path = require("path");
const os = require('os');

const CodeIdentifer = async (markdown, server) => { // typeof(tree)

	let templatePath = `${__dirname}/prompt.handlebars`;

	const PROMPT = readFileSync(templatePath, "utf-8").trim();
    
	let template = compile(PROMPT);

	let renderedTemplate = template({fullcode: markdown, server_name: server});


    const llmresponse = await codebolt.llm.inference(renderedTemplate);

	const commandFormat = llmresponse.message.trim().replace(/```/g, '');

	// const parsedMessage = JSON.parse(commandFormat);

	// const fileDetails = parsedMessage.commands;

	return commandFormat
}

module.exports = {
	CodeIdentifer
};
