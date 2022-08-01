import React from 'react'
import Button from '../Button/Button'

export default function Note({id, content, notesArr, setNotesArr}){
    return (
        <div data-id={id} className="note">
            <p>{content}</p>
            <Button notesArr={notesArr} setNotesArr={setNotesArr} imgUrl={'https://cdn-icons-png.flaticon.com/512/1828/1828945.png'} type='delete'></Button>
        </div>
    )
}