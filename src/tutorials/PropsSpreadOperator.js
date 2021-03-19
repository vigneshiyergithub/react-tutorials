import React from 'react';
import { Container, ContentBody } from '../styledComponents/Unit1'
import PersonDataDisplay from './sub-components/PersonDataDisplay'

const PropsSpreadOperator = (props) => {
    // TODO: maybe add a Tab component and navigate different examples
    return <Example2 />
}

/*
    Scenario : Usually when there is a large number of props to be passed which can be easily consolidated in a object
*/
const Example1 = (props) => {
    const componetProps = {
        name : 'Person Name',
        age: 20
    }
    return <Container marginTop={'5rem'}>
        <ContentBody>
            <PersonDataDisplay {...componetProps}/> 
        </ContentBody>
    </Container>
}

/*
    Scenario : When component props is sourced from multiple sources.
    Variations: 
        - {...firstProps} {...secondProps}
        - {...{...firstProps, ...secondProps}}
*/
const Example2 = (props) => {
    const firstProps = {
        name : 'Person Name'
    }
    const secondProps = {
        age : 20
    }
    return <Container marginTop={'5rem'}>
    <ContentBody>
        <PersonDataDisplay {...firstProps} {...secondProps} /> 
    </ContentBody>
</Container>
}

/*
    Scenario : Override props and adding props
    Caution: overridding props : order is important
    Variations:
        {...componetProps} name={'Vignesh'}
        name={'Vignesh} {...componetProps}
        {...partialProps} name={'Vignesh}
*/
const Example3 = (props) => {
    const componetProps = {
        name : 'Person Name',
        age: 20
    }
    // const partialProps = {
    //     name : 'Person Name'
    // }
    return <Container marginTop={'5rem'}>
        <ContentBody>
            <PersonDataDisplay {...componetProps} name={'Vignesh'} /> 
        </ContentBody>
    </Container>
}

export default PropsSpreadOperator;