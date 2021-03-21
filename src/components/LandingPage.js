import React, { useRef } from 'react';
import { Container, Headline, ContentBody, ItemList, Item, Card, EmptyBlock } from '../styledComponents/Unit1';
import { Link } from 'react-router-dom';
import { Tutorials, TutorialMapping } from '../constants/Tutorial-Mapping';

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
        </Container>
    </Card>
}