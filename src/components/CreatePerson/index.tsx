import { useState } from 'react'
import axios from 'axios'
import { Container }  from './styles'

type Props = {
    personType: String;
}

export const CreatePerson = ({ personType}: Props) => {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    
    const handleCreatePerson = async () => {
        try {
            await axios.post(`http://localhost:3001/${personType}`, {
                name: name,
                cpf: cpf
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <Container>

            Adicionar Pessoa
            
            <input 
            type="text"
            value={name}
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
            />

            <input
                type="text"
                value={cpf}
                placeholder="CPF"
                onChange={e => setCpf(e.target.value)}
            />

            <button onClick={handleCreatePerson}>Adicionar</button>
        </Container>
    )

}