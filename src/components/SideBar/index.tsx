import { Link } from 'react-router-dom';
import { Container, LinkArea } from './styles'

import { IconContext } from 'react-icons';
import { BsFillPersonFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { SiGoogleclassroom } from 'react-icons/si'

export const SideBar = () => {

    return (
        <Container>
            <nav className='navbar'>
                <IconContext.Provider value={{className: 'react-icons'}}>
                    <Link className='link-class' to="/student">
                        <LinkArea>
                            <BsFillPersonFill/>
                            <p>Estudantes</p>
                        </LinkArea>
                    </Link>
                
                    <Link className='link-class' to="/teacher">
                        <LinkArea>
                            <GiTeacher />
                            <p>Professores</p>
                        </LinkArea>
                    </Link>

                    <Link className='link-class' to="/class">
                        <LinkArea>
                            <SiGoogleclassroom />
                            <p>Turmas</p>
                        </LinkArea>
                    </Link> 
                </IconContext.Provider>
            </nav>
        </Container>
    )
}