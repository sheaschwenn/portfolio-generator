const fs = require("fs");
const inquirer = require("inquirer")

function makeHTML(response){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Portfolio generator</title>
    </head>
    <body>
        <header> 
            <h1>The most beautiful portfolio in the world!!!</h1>
        </header>
        <main >
            <div style="background-color: lightyellow" >
                <h2 style="color: darkblue" >Name: ${response.uname} </h2>
            </div>
            <div style="background-color: lightblue" >
                <h2 style="color: darkgreen" > Location: ${response.location} </h2>
            </div>
            <div style="background-color: lightgreen" >
                <h2 style="color: darkslateblue" > Short bio: ${response.bio} </h2>
            </div>
            <div style="background-color: lightgrey" >
                <h2 style="color: darkred" > LinkedIn: ${response.linkedin} </h2>
            </div>
            <div style="background-color: lightcoral" >
                <h2 style="color: darkviolet" > GitHub: <a href= 'https://github.com/${response.username}'target =_blank>${response.username}</a> </h2>
            </div>
           
        </main>
    </body>
    </html>`

}

inquirer
.prompt([
    {
        type: 'input',
        message: "What is your name?",
        name: 'uname'
    },
    {
        type: 'input',
        message: "What is your current location?",
        name: 'location'
    },
    {
        type: 'input',
        message: "Write a short bio",
        name: 'bio'
    },
    {
        type: 'input',
        message: "What is your Linkedin Url?",
        name: 'linkedin'
    },
    {
        type: 'input',
        message: "What is your github username?",
        name: 'username'
    },
])
.then((response) =>{
    console.log(response)
    fs.writeFile("index.html",makeHTML(response) ,err=>{
        err? console.error(err):console.log("your portfolio has been created")
    })
})
