import { Link } from 'react-router-dom';
import { Container } from './styles'

export const SideBar = () => {
    return (
        <Container>
            <nav>
                <li><Link to="/student">Estudantes</Link></li>
                <li><Link to="/teacher">Professores</Link></li>
            </nav>
        </Container>
    )
}