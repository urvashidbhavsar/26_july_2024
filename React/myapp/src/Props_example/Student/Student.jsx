import React from 'react'
import StudentDetails from './StudentDetails'

const Student = () => {
    return (
        <>
            <ul>
                <StudentDetails name="Kajal" grade="A" />
                <StudentDetails name="Kinjal" grade="B" />
            </ul>
        </>
    )
}

export default Student
