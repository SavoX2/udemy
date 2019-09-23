const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            "title": title,
            "body": body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    } else {
        console.log(chalk.red.inverse("Note title taken"));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse("No note found!"));
    }
};

const listNotes = () => {
    console.log(chalk.green("Your notes: "));
    loadNotes().forEach((note) => {
        console.log(chalk.magenta(note.title));
    });
};

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.json"));
    } catch (error) {
        return [];
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};