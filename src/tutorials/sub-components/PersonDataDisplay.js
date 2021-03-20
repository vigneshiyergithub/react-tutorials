import React from 'react';
import {Container, Block, TextBlock, Label, Value } from '../../styledComponents/Unit1'

const PersonDataDisplay = (props) => {
    return <Container>
        <Block>
            <LabelComponent label={'Name'} value={props.name} />
            <LabelComponent label={'Age'} value={props.age} />
        </Block>
    </Container>
}

const LabelComponent = (props) => {
    return <TextBlock>
        <Label>{props.label}</Label>
        :
        <Value>{props.value}</Value>
    </TextBlock>
}

export default PersonDataDisplay;