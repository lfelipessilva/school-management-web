
import { useState } from 'react'
import axios from 'axios'
import { Container } from './styles'
export const CreateStudent = () => {

    const [students, setStudents] = useState<any>([])

    const getStudents = async () => {
        const getStudents = await axios.get('http://localhost:3001/student')
        console.log(getStudents.data);

        setStudents(getStudents.data)
    }

    return (
        <Container>
            <button onClick={() => getStudents()} />
            {
                students.map((student: any) => 
                <div>
                    <li>{student.name}</li>
                    <li>{student.cpf}</li>
                </div>
                )
            }
        </Container>
    )
}