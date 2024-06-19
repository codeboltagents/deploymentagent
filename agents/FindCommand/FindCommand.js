const codebolt = require("@codebolt/codeboltjs").default;
const {readFileSync} = require("fs");
const {compile} = require("handlebars");
const path = require("path");
const os = require('os');


const FindCommand = async (file_details) =>{

    let templatePath = `${__dirname}/prompt.handlebars`;

	const PROMPT = readFileSync(templatePath, "utf-8").trim();
    
	let template = compile(PROMPT);

	let renderedTemplate = template({file_details: file_details});

    console.log(renderedTemplate)
	
    const llmresponse = await codebolt.llm.inference(renderedTemplate);

    console.log(llmresponse);

}

module.exports={
    FindCommand
}

