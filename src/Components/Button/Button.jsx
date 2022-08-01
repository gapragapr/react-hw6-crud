import React from 'react'

export default function Button({type, imgUrl, notesArr, setNotesArr}){
    function handleClick(event){
        event.preventDefault()

        if (type === 'reload'){
            reloadNotes()
        } else if (type === 'send'){
            const newNoteFormTextarea = document.querySelector('textarea')
            const noteObj = {
                id: 0,
                content: newNoteFormTextarea.value
            }
            fetch('http://localhost:7777/notes', {
                method: 'POST',
                body: JSON.stringify(noteObj),
                headers: {
                    'Content-Type': 'application/json'
                  }
            }).then(() => {
                reloadNotes()
                newNoteFormTextarea.value = ''
            })
        } else if (type === 'delete'){
            const id = event.target.parentElement.parentElement.dataset.id
            fetch(`http://localhost:7777/notes/${id}`, {
                method: 'DELETE'
            }).then(() => {
                reloadNotes()
            })
        }
    }

    function reloadNotes(){
        fetch('http://localhost:7777/notes', {
                method: 'GET'
            }).then((response) => {
                return response.json()
            }).then((data) => {
                setNotesArr(data)
            })
    }

    return(
        <button onClick={handleClick} >
            <img src={imgUrl} alt="" />
        </button>
    )

}