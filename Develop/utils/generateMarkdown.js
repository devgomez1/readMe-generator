
// function to generate markdown for the README.md
function generateMarkdown(data) {

  return `
  # ${data.title}
  ## Github
  ### ${data.github}
  ## Installation:
  ### ${data.email}
  ## Usage:
  ### ${data.usage}
  ## Instalation:
  ### ${data.installation}
  ## Testing:
  ### ${data.testing}
  ## Liscense 
  ### ${data.license}
  ## Contributors 
  ### ${data.contributors}
  ## Contact me
  ### Email: ${data.email}
`;
}

// exports
module.exports = generateMarkdown;