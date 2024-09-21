import express from 'express';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

const pocRouter = express.Router();

// About page route.
pocRouter.get("/poc/*", (req, res) => {
    let index = path.join(__dirname, "../../../../", "poc", 'index.html')
    fs.readFile(index, (err, data) => {
        if (!err && data) {
            res.sendFile(index);
        } else {
            res.sendFile(path.join(__dirname, "../../../../", "poc", 'placeholder.html'));
        }
    })
});

pocRouter.get("/poc", (req, res) => {
    let index = path.join(__dirname, "../../../../", "poc", 'index.html')
    fs.readFile(index, (err, data) => {
        if (!err && data) {
            res.sendFile(index);
        } else {
            res.sendFile(path.join(__dirname, "../../../../", "poc", 'placeholder.html'));
        }
    })
});

export default pocRouter;