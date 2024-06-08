const codebolt = require("@codebolt/codeboltjs").default;
const {readFileSync} = require("fs");
const {compile} = require("handlebars");
const path = require("path");
const os = require('os');

const CodeIdentifer = async (markdown) => { // typeof(tree)

	let templatePath = `${__dirname}/prompt.handlebars`;

	const PROMPT = readFileSync(templatePath, "utf-8").trim();
    
	let template = compile(PROMPT);

	let renderedTemplate = template({fullcode: markdown, OS: os.platform()});

    const llmresponse = await codebolt.llm.inference(renderedTemplate);
  
	console.log(llmresponse)
  	
 
}

module.exports = {
	CodeIdentifer
};
