import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container}  from './styles'
import { IconContext } from 'react-icons/lib'
import { AiOutlineSearch } from 'react-icons/ai'

type Props = {
    personType: String;
    changePeople: any;
}

export const SearchPerson = ({ personType, changePeople }: Props) => {

    const [name, setName] = useState('')
    
    useEffect(() => {
        const searchPerson = async () => {
                if(name !== '') {
                    const request = await axios.get(`http://localhost:3001/${personType}/name/${name}`)
                    changePeople(request.data)
                } else {
                    const request = await axios.get(`http://localhost:3001/${personType}/`)
                    changePeople(request.data)
                }
        }

        searchPerson()
    }, [changePeople, name, personType])

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