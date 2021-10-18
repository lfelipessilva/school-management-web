
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Title } from './styles'
import { Student } from '../../types/Student'
import { PersonListTable } from '../../components/PersonListTable'
import { CreatePerson } from '../../components/CreatePerson'

export const ListStudent = () => {

    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        async function getStudents() {
            const getStudents = await axios.get<Student[]>('http://localhost:3001/student')
            setStudents(getStudents.data)
        }

        getStudents()
    }, [])


    return (
        <Container>
            <Title>
                Estudantes Cadastrados
            </Title>

            <PersonListTable people={students} />

            <CreatePerson personType={'student'} />
            
        </Container>
    )
}