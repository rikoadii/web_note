import React from 'react'
import { FaTrash } from "react-icons/fa6";

export default function DeleteButton({id, onDelete}) {
  return (
    <button className='note-item__delete' onClick={() => onDelete(id)}>
        <FaTrash />
    </button>
  )
}
