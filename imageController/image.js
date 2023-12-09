const database = require('../model/db');
const fs = require('fs');
const path = require('path');

exports.getImageUrl = (req, res) => {
    const filename = req.params.filename;
    const readStream = fs.createReadStream(path.join(`${__dirname}/../`, 'uploads', filename))
    readStream.pipe(res);
    console.log(readStream.path)
}


exports.newImageUpload =  (req, res) => {
    // console.log(req.file);
    const {filename, path} = req.file
    const description = req.body.description;


    // save these details to a database
    const image_url = `/images/${filename}`;
     database.createPost(description, image_url, (error, insertId) => {
        if(error){
            res.send({error: error.message})
            return;
        }
        res.status(201).send({
            id: insertId,
            description,
            image_url
        })
    })

    // res.send("coming from backend....");
}



exports.getUploadedImage = (req, res) => {
    // res.send("not in use for now...")
    database.getPost((error, posts) => {
        if(error){
            res.send({error: error.message})
            return;
        }
        res.status(200).send({posts})
    })
}
exports.delImage = (req, res) => {
    // res.send("not in use for now...")
    const id = req.params.id;
    database.deletePost(id, (error, posts) => {
        if(error){
            res.send({error: error.message})
            return;
        }
        res.status(204).send({posts})
    })
}


