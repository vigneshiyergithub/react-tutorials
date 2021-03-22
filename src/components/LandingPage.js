import React, {  useRef } from 'react';
import { Container, Headline, ContentBody, ItemList, Item, Card, EmptyBlock } from '../styledComponents/Unit1';
import { Link } from 'react-router-dom';
import { Tutorials, TutorialMapping } from '../constants/Tutorial-Mapping';
import {GitLink} from '../styledComponents/Unit2';

export const LandingPage = (props) => {
    const tutorials = Object.values(Tutorials)
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        marginBottom: '0.3rem'
    };
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
                            return <TutorialItem 
                                key={index}
                                title={title}
                                tutorialLink={tutorialLink}
                                linkStyle={linkStyle}
                            />
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

const TutorialItem = (props) => {
    const linkRef = useRef();
    const itemClick = (e) => {
        if (linkRef.current) {
            linkRef.current.click();
        }
    };
    return <Item onClick={itemClick}>
    <Link ref={linkRef} to={`/tutorial?id=${props.tutorialLink}`} style={props.linkStyle}>{props.title}</Link>
</Item>
}