import React , {useRef} from 'react';
import { Container, Headline, ContentBody, ItemList, Item, Card, EmptyBlock } from '../styledComponents/Unit1';
import { Link } from 'react-router-dom';

export const LandingPage = (props) => {
    const linkStyle = {
        textDecoration : 'none',
        color: 'black'
    };
    const linkRef = useRef();
    const itemClick = (e) => {
        if(linkRef.current) {
            linkRef.current.click();
        }
    }
    return <Card width={'80vw'}>
        <Container >
            <Headline>
                React Tutorials
            </Headline>
            <ContentBody>
                <ItemList>
                    <Item onClick={itemClick}>
                        <Link ref={linkRef} to={`/tutorial?id=${"props-spread-operator"}`} style={linkStyle}>Passing props using spread operator</Link>
                    </Item>
                </ItemList>
            </ContentBody>
            <EmptyBlock />
        </Container>
    </Card>
}