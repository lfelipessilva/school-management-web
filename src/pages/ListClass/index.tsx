
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Title, Content } from './styles'
import { Class } from '../../types/Class'
import { ClassListDashboard } from '../../components/ClassListDashboard'
import { SideBar } from '../../components/SideBar'

export const ListClass = () => {

    const [classes, setClasses] = useState<Class[]>([])

    useEffect(() => {
        async function getClasses() {
            const getClasses = await axios.get<Class[]>('http://localhost:3001/class')
            setClasses(getClasses.data)
        }

        getClasses()
    }, [])


    return (
        <Container>
            <SideBar />
            <Content>

                <Title>
                    Turmas Cadastrados
                </Title>

                {/* <OptionsArea> */}
                    {/* <AddPerson personType={'student'} /> */}
                    {/* <SearchPerson personType={'student'} /> */}
                    {/* <SearchPerson personType={'student'}/> */}
                {/* </OptionsArea> */}
                
                <ClassListDashboard classes={classes} />


            </Content>
        </Container>
    )
}