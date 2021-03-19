import React from 'react';
import {Container, Headline, ContentBody, ItemList, Item} from '../styledComponents/Unit1';
import {Link} from 'react-router-dom';

export const LandingPage = (props) => {
    return <Container>
            <Headline>
                React Tutorials
            </Headline>
            <ContentBody>
                <ItemList>
                    <Item>
                        <Link to={`/tutorial?id=${"props"}`}>Passing props using spread operator</Link>
                    </Item>
                </ItemList>
            </ContentBody>
        </Container>
}