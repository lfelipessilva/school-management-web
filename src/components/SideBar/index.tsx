import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles'

import { IconContext } from 'react-icons';
import { BsFillPersonFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { SiGoogleclassroom } from 'react-icons/si'

export const SideBar = () => {

    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar) 

    return (
        <Container active={sidebar}>
            <nav className='navbar'>
                <IconContext.Provider value={{className: 'react-icons'}}>
                
                    <Link className='link-class' to="/student">
                        <BsFillPersonFill/>
                        <p>Estudantes</p>
                    </Link>
                
                    <Link className='link-class' to="/teacher">
                        <GiTeacher />
                        <p>Professores</p>
                    </Link>

                    <Link className='link-class' to="/class">
                        <SiGoogleclassroom />
                        <p>Turmas</p>
                    </Link> 
                
                </IconContext.Provider>
            </nav>
        </Container>
    )
}