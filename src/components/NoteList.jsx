import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    const archivedNotes = notes.filter((note) => note.archived);
    const noArchivedNotes = notes.filter((note) => !note.archived);

    return (
        <>
            <div className="note-list">
                {noArchivedNotes.length > 0 ? (
                    noArchivedNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            {...note}
                        />
                    ))
                ) : (
                    <p>No note</p>
                )}
            </div>
            <p>archived</p>
            <div className="note-list-archived">
                {archivedNotes.length > 0 ? (
                    archivedNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            {...note}
                        />
                    ))
                ) : (
                    <p>No archived note</p>
                )}
            </div>
        </>
    );
}

export default NoteList;
