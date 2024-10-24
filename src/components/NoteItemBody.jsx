import React from 'react'

export default function NoteItemBody({title, body, createdAt}) {
  return (
    <div className='note-item__body'>
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__body">{body}</p>
        <p className='note-item__createdAt'>{createdAt}</p>
    </div>
  )
}
