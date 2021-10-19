
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Title, Content } from './styles'
import { Teacher } from '../../types/Teacher'
import { PersonListTable } from '../../components/PersonListTable'
import { CreatePerson } from '../../components/CreatePerson'
import { SideBar } from '../../components/SideBar'

export const ListTeacher = () => {

    const [teachers, setTeachers] = useState<Teacher[]>([])

    useEffect(() => {
        async function getStudents() {
            const getTeachers = await axios.get<Teacher[]>('http://localhost:3001/teacher')
            setTeachers(getTeachers.data)
        }

        getStudents()
    }, [])


    return (
        <Container>
            <SideBar />
            <Content>
                <Title>
                    Professores Cadastrados
                </Title>

                <PersonListTable people={teachers} />

                <CreatePerson personType={'teacher'} />
            </Content>
        </Container>
    )
}