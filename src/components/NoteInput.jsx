import React, { Component } from "react";

export default class NoteInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            archived: false,
        };
    }

    onTitleChangeEventHandler = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 50) {
            this.setState({ title: inputValue });
            if (inputValue.length === 50) {
                event.target.classList.add("input-title");
                window.alert(
                    "Character limit (50) reached in the title field."
                );
            } else {
                event.target.classList.remove("input-title");
            }
        }
    };

    onBodyChangeEventHandler = (event) => {
        this.setState({ body: event.target.value });
    };

    onArchivedChangeEventHandler = (event) => {
        this.setState({ archived: event.target.checked });
    };

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: "", body: "", archived: false });
    };

    render() {
        return (
            <div>
                <form
                    className="note-input"
                    onSubmit={this.onSubmitEventHandler}>
                    <input
                        type="text"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                    />
                    <span className="char-count">
                        {50 - this.state.title.length} character
                        {50 - this.state.title.length !== 1 ? "s" : ""}{" "}
                        remaining
                    </span>
                    <textarea
                        type="text"
                        placeholder="body"
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.archived}
                            onChange={this.onArchivedChangeEventHandler}
                        />
                        Archived
                    </label>
                    <button type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}
