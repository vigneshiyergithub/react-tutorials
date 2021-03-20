import React from 'react';
import { Container, Headline, ContentBody, ItemList, Item, Card, EmptyBlock } from '../styledComponents/Unit1';
import { Link } from 'react-router-dom';

export const LandingPage = (props) => {
    const linkStyle = {
        textDecoration : 'none',
        color: 'black'
    }
    return <Card width={'50vw'}>
        <Container >
            <Headline>
                React Tutorials
            </Headline>
            <ContentBody>
                <ItemList>
                    <Item>
                        <Link to={`/tutorial?id=${"props"}`} style={linkStyle}>Passing props using spread operator</Link>
                    </Item>
                </ItemList>
            </ContentBody>
            <EmptyBlock />
        </Container>
    </Card>
}