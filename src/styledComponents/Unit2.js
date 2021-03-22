import { ReactComponent as GitHubSvg } from '../assets/github.svg';
import styled from 'styled-components';
import {NavContainer, NavItem} from './Unit1'
import { ReactComponent as BackSvg } from '../assets/back-icon.svg';
import { Link } from 'react-router-dom';

const BackIcon = styled(BackSvg)`
    transform: scale(0.5);
    height: 3rem;
`;

const GitHubIcon = styled(GitHubSvg)`
    transform: scale(1);
`;

export const GitLink = (props) => {
    return <a href={"https://github.com/vigneshiyergithub/react-tutorials"} target="_blank"  rel="noreferrer"><GitHubIcon /></a>
}

export const Navbar = (props) => {
    //TODO: move this link style to a common place
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    }
    return <NavContainer>
        <NavItem>
            <Link to={`/`} style={linkStyle}><BackIcon /></Link>
        </NavItem>
    </NavContainer>
}