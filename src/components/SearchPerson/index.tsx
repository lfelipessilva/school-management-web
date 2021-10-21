import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container}  from './styles'
import { IconContext } from 'react-icons/lib'
import { AiOutlineSearch } from 'react-icons/ai'

type Props = {
    personType: String;
    changeStudents: any;
}

export const SearchPerson = ({ personType, changeStudents }: Props) => {

    const [name, setName] = useState('')
    
    useEffect(() => {
        const searchPerson = async () => {
                if(name !== '') {
                        const request = await axios.get(`http://localhost:3001/student/name/${name}`)
                        changeStudents(request.data)
                } else {
                    const request = await axios.get(`http://localhost:3001/student/`)
                    changeStudents(request.data)
                }
        }

        searchPerson()
    }, [changeStudents, name])

    return (
        <Container>
            <input 
                type="text"
                value={name}
                placeholder="Procurar"
                onChange={e => setName(e.target.value)}
            />

            <IconContext.Provider value={{ className: 'react-icons' }}>
                <AiOutlineSearch />
            </IconContext.Provider>
        </Container>
    )

}