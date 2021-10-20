import { useState } from 'react'
import axios from 'axios'
import { Background, ModalWrapper, ModalContent, CloseButton } from './styles'

type Props = {
    showModal: boolean;
    setShowModal: any;
    personType: string;
}

export const Modal = ({ showModal, setShowModal, personType}: Props) => {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    const handleCreatePerson = async () => {
        await axios.post(`http://localhost:3001/${personType}`, { name: name, cpf: cpf })
        setName('')
        setCpf('')
        setShowModal()
    }

    const handleCreatePersonWithNext = async () => {
        await axios.post(`http://localhost:3001/${personType}`, { name: name, cpf: cpf })
        setName('')
        setCpf('')
    }


    if(showModal === true) {
    return (
        <Background >
            <ModalWrapper>
                <CloseButton onClick={() => setShowModal()}>X</CloseButton>
                <ModalContent>
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
                    <button onClick={handleCreatePersonWithNext}>Adicionar outro em Seguida</button>
                </ModalContent>
            </ModalWrapper>
        </Background>
    )} else {
        return (
            <>
            </>
        )
    }
}
