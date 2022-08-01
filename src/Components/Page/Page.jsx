import React from 'react'

import Header from '../Header/Header'
import NotesList from '../NotesList/NotesList'
import NewNoteForm from '../NewNoteForm/NewNoteForm'

export default function Page({notesArr, setNotesArr}){
    return(
        <div className="page">
            <Header notesArr={notesArr} setNotesArr={setNotesArr}></Header>
            <NotesList notesArr={notesArr} setNotesArr={setNotesArr}></NotesList>
            <NewNoteForm notesArr={notesArr} setNotesArr={setNotesArr}></NewNoteForm>
        </div>
    )
}