import React from 'react'
import Note from '../Note/Note'

export default function NotesList({notesArr, setNotesArr}){
    return(
        <div className="notes-list">
            {notesArr.map(item => {
                console.log(item)
                return <Note id={item.id} notesArr={notesArr} setNotesArr={setNotesArr} key={item.id} content={item.content}></Note>
            })}
        </div>
    )
}