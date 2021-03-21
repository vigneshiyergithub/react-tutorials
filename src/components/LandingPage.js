import React, { useRef } from 'react';
import { Container, Headline, ContentBody, ItemList, Item, Card, EmptyBlock, GitBlock } from '../styledComponents/Unit1';
import { Link } from 'react-router-dom';
import { Tutorials, TutorialMapping } from '../constants/Tutorial-Mapping';
import { ReactComponent as GitHubSvg } from '../assets/github.svg';
import styled from 'styled-components';

const GitHubIcon = styled(GitHubSvg)`
    transform: scale(1);
`

export const LandingPage = (props) => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        marginBottom: '0.3rem'
    };
    const linkRef = useRef();
    const itemClick = (e) => {
        if (linkRef.current) {
            linkRef.current.click();
        }
    };
    const tutorials = Object.values(Tutorials)
    return <Card width={'80vw'}>
        <Container >
            <Headline>
                React Tutorials
            </Headline>
            <ContentBody>
                <ItemList>
                    {
                        tutorials.map((tutorialLink, index) => {
                            const title = TutorialMapping?.[tutorialLink]?.title;
                            return <Item onClick={itemClick} key={index}>
                                <Link ref={linkRef} to={`/tutorial?id=${tutorialLink}`} style={linkStyle}>{title}</Link>
                            </Item>
                        })
                    }
                </ItemList>
            </ContentBody>
            <EmptyBlock />
            <GitLink />
            <EmptyBlock />
        </Container>
    </Card>
}

const GitLink = (props) => {
    return <GitBlock href={"https://github.com/vigneshiyergithub/react-tutorials"} target="_blank"><GitHubIcon /></GitBlock>
}