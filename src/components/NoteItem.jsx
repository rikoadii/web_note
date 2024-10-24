import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/index";

export default function NoteItem({
    id,
    title,
    body,
    createdAt,
    archived,
    onDelete,
}) {
    return (
        <div className="note-item">
            <NoteItemBody
                title={title}
                body={body}
                archived={archived}
                createdAt={showFormattedDate(createdAt)}
            />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}
