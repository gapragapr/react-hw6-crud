import React from 'react'
import Button from '../Button/Button'


export default function Header({notesArr, setNotesArr}){
    return(
        <div className="header">
            <p className="header-title">Notes</p>
            <Button
                notesArr={notesArr}
                setNotesArr={setNotesArr} 
                imgUrl={'https://cdn-icons.flaticon.com/png/512/4181/premium/4181116.png?token=exp=1659369660~hmac=87f14ae79878da82d35cc3cb635a156f'} 
                type={'reload'}>
            </Button>
        </div>
    )
}