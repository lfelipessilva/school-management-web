
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Title, Content, OptionsArea } from './styles'
import { Teacher } from '../../types/Teacher'
import { PersonListTable } from '../../components/PersonListTable'
import { AddPerson } from '../../components/AddPerson'
import { SearchPerson } from '../../components/SearchPerson'
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

    const changePeople = (teachers: Teacher[]) => {
        setTeachers(teachers)
    }

    return (
        <Container>
            <SideBar />
            <Content>
                <Title>
                    Professores Cadastrados
                </Title>

                <OptionsArea>
                    <SearchPerson personType={'teacher'} changePeople={changePeople} />
                    <AddPerson personType={'teacher'} />
                </OptionsArea>

                <PersonListTable people={teachers} />
            </Content>
        </Container>
    )
}