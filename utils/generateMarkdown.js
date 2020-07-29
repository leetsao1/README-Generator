function generateMarkdown(data, license, githubURL) {
  return `## ${data.name}
  Version: ${data.version}
  URL: ${data.url}
  GITHUB: ${githubURL}

  License: ${data.license}:
  
  ${license[data.license]}


  ## Description, Installation, Usage, Contributing, and Tests

  * ${data.description}
  
  * Installation: ${data.installation}


  * Usage: ${data.usage}



  * Contributors: ${data.contributing}

  * Test: ${data.test}

  * Questions: ${data.questions}

`;
}


module.exports = generateMarkdown;
