import { Container, ClassBlock, TeacherName, ClassName } from './styles'
import { Class } from '../../types/Class'
import axios from 'axios'
type Props = {
    classes: Class[]
}

export const ClassListDashboard = ({ classes }: Props) => {

    const getTeacherName = async (teacherId: string) => {
        const getTeacher = await axios.get(`http://localhost:3001/teacher/${teacherId}`)
        return getTeacher
    }

    return (
        <Container>
                {classes.map((classy, key) => (
                    <ClassBlock>
                        <ClassName>
                            {classy.name}
                        </ClassName>

                        <TeacherName>
                            {
                            getTeacherName(classy.teacherId)
                            }
                        </TeacherName>
                    </ClassBlock>
                ))}
        </Container>
    )
}