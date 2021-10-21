
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Title, Content, OptionsArea } from './styles'
import { Student } from '../../types/Student'
import { PersonListTable } from '../../components/PersonListTable'
import { SearchPerson } from '../../components/SearchPerson'
import { AddPerson } from '../../components/AddPerson'
import { SideBar } from '../../components/SideBar'
export const ListStudent = () => {

    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        async function getStudents() {
            const getStudents = await axios.get<Student[]>('http://localhost:3001/student')
            setStudents(getStudents.data)
        }

        getStudents()
    }, [])


    const changeStudents = (students: Student[]) => {
        setStudents(students)
    }

    return (
        <Container>
            <SideBar />
            <Content>

                <Title>
                    Estudantes Cadastrados
                </Title>

                <OptionsArea>
                    <SearchPerson personType={'student'} changeStudents={changeStudents}/>
                    <AddPerson personType={'student'} />
                    {/* <SearchPerson personType={'student'}/> */}
                </OptionsArea>

                <PersonListTable people={students} />
            
            </Content>
        </Container>
    )
}