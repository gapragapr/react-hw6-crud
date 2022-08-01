import React from 'react'
import Button from '../Button/Button'

export default function NewNoteForm({notesArr, setNotesArr}){
    return(
        <div className="new-note-form">
            <textarea placeholder='Введите текст новой заметки' name="" id="" cols="30" rows="10"></textarea>
            <Button notesArr={notesArr} setNotesArr={setNotesArr} imgUrl={'https://cdn-icons-png.flaticon.com/512/736/736161.png'} type={'send'}></Button>
        </div>
    )
}