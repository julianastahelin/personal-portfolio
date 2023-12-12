const fs = require("fs")
const YAML = require("yamljs")


if (process.argv.length < 2) {
    console.error('Usage: node <script.js> <filePath> <language>')
    process.exit(1)
}

const filePath = process.argv[2]
const language = process.argv[3]
const data = require(filePath)

fs.writeFile(`data/${language}.md`, "---\r\n", err => {
    fs.appendFile(`data/${language}.md`, YAML.stringify(data), err => {
        fs.appendFile(`data/${language}.md`, "\r\n---\r\n", err => {
            if (err) throw err;
            console.log(`data/${language}.md has been saved!`)
        });
    })
})
