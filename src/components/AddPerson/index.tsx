import { useState } from 'react'
import { Container, ModalButton } from './styles'
import { Modal } from '../Modal'
type Props = {
    personType: string;
}

export const AddPerson = ({ personType }: Props) => {
    const [showModal, setShowModal] = useState(false)

    const changeModal = () => {
        setShowModal(!showModal)
    }
     
    return (
        <Container>
            <ModalButton onClick={() => changeModal()}>Adicionar</ModalButton>
            <Modal showModal={showModal} setShowModal={setShowModal} personType='student'/>
        </Container>
    )
}