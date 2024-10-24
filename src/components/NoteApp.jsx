import React, { Component } from "react";
import { getInitialData} from "../utils/index";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

export default class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }
    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }
    onAddNoteHandler({ title, body, archived }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived,
                        createdAt: +new Date(),
                    },
                ],
            };
        });
    }
    render() {
        return (
            <div className="note-app">
                <h1>Daftar Catatan</h1>
                <NoteInput addNote={this.onAddNoteHandler} />
                <NoteList
                    notes={this.state.notes}
                    onDelete={this.onDeleteHandler}
                />
            </div>
        );
    }
}
