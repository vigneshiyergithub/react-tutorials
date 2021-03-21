import { Container, ContentBody } from '../../styledComponents/Unit1'
import PersonDataDisplay from './PersonDataDisplay'

/*
    Scenario : Usually when there is a large number of props to be passed which can be easily consolidated in a object
*/
export const Example1 = (props) => {
    const componetProps = {
        name: 'First Person',
        age: 20
    }
    return <Container marginTop={'5rem'}>
        <ContentBody>
            <PersonDataDisplay {...componetProps} />
        </ContentBody>
    </Container>
}

/*
    Scenario : When component props is sourced from multiple sources.
    Variations: 
        - {...firstProps} {...secondProps}
        - {...{...firstProps, ...secondProps}}
*/
export const Example2 = (props) => {
    const firstProps = {
        name: 'Second Person'
    }
    const secondProps = {
        age: 25
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
    return <Container marginTop={'5rem'}>
        <ContentBody>
            <PersonDataDisplay {...partialProps} name={'Vignesh'} />
        </ContentBody>
    </Container>
}