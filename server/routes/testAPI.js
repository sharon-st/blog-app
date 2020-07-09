var express = require("express")
var router = express.Router()
const jsonfile = require('jsonfile')
fs = require('fs');
const blog = require("./blogData.json");
var cors = require('cors');

var path = require("path");
// console.log("__dirname:    ", __dirname);
// fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });



router.get("/", function (req, res, next) {
    res.json(blog)
    console.log("reading file working fine")
})
console.log(blog.length)
let indexOfId
router.post('/send', (req, res, next) => {
    let blogdata
    if (req.body.id) {
        // for (let i = 0; i < blog.length; i++) {
        //     if (blog[i].id === req.body.id-1) {
        //         indexOfId = i;
        //         break
        //     }
        // }

        blog[req.body.id-1].id = req.body.id,
            blog[req.body.id-1].Title = req.body.Title,
            blog[req.body.id-1].Description = req.body.data

    }
    else {
        blogdata = {
            id: blog.length + 1,
            Title: req.body.Title,
            Description: req.body.data
        }
        blog.push(blogdata);


    }


    console.log("reading api working fine")
    //    console.log(blogdata)
    const filePath = path.join(__dirname, '/blogData.json');

    fs.writeFile(filePath, JSON.stringify(blog), err => {

        // Checking for errors 
        if (err) throw err;

        console.log("Done writing"); // Success 
    });
    console.log(blog.length)
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)



module.exports = router