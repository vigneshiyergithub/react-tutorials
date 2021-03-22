import styled from 'styled-components'
import { Container, ContentBody } from '../../styledComponents/Unit1'
import PersonDataDisplay from './PersonDataDisplay'


const EnhancedContentBody = styled(ContentBody)`
    margin: 5rem;
`;

/*
    Scenario : Usually when there is a large number of props to be passed which can be easily consolidated in a object
*/

export const Example1 = (props) => {
    const componetProps = {
        name: 'Subject 1',
        age: 25
    }
    return <Container >
        <EnhancedContentBody>
            <PersonDataDisplay {...componetProps} />
        </EnhancedContentBody>
    </Container>
}

/*
    Scenario : When component props is sourced from multiple sources.
    Variations: 
        - {...firstProps} {...secondProps}
        - {...{...firstProps, ...secondProps}}
*/
// Note : Order is important here while spreading multple objects, in the example age in the first object is overriden by second object
export const Example2 = (props) => {
    const firstProps = {
        name: 'Test Subject', 
        age : 20
    }
    const secondProps = {
        age: 25
    }
    return <Container >
        <EnhancedContentBody>
            <PersonDataDisplay {...firstProps} {...secondProps} />
        </EnhancedContentBody>
    </Container>
}

/*
    Scenario : Override props and adding props
    Caution: overridding props : order is important
    Variations:
        {...componetProps} name={'Vignesh'}
        name={'Vignesh'} {...componetProps}
        {...partialProps} name={'Vignesh'}
*/

export const Example3 = (props) => {
    // const componetProps = {
    //     name : 'Person Name',
    //     age: 20
    // }
    const partialProps = {
        age: 26
    }
    return <Container >
        <EnhancedContentBody>
            <PersonDataDisplay {...partialProps} name={'Vignesh'} />
        </EnhancedContentBody>
    </Container>
}