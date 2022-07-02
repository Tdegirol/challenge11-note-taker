const router = require('express').Router();
const {db} = require('../db/db.json');
const fs = require('fs');

let notesID = db.length;

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
    res.json(db);
});

router.post('/api/notes', (req, res) => {
    // db = JSON.parse(fs.readFileSync(db));
    // res.json(db);
    const newNote = req.body;
    newNote['id'] = notesID+1;
    notesID++;
    console.log(newNote);
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
})

module.exports = router;
