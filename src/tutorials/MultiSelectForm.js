import React, {useState} from 'react';
import { Card, FormContentBody, EmptyBlock, Container, WidthComponent, 
    FormElementContainer, FormElementLabel, FormElementComponent, FormInput, Headline } from '../styledComponents/Unit1';
import { Navbar, GitLink } from '../styledComponents/Unit2';
import Accordian from './sub-components/Accordian';
import ReactJson from 'react-json-view'

const SECTIONS_CONFIG = {
    'SECTION1' : {
        label : 'Section 1',
        component : (props) => <Form1 {...props}/>
    },
    'SECTION2': {
        label : 'Section 2',
        component : (props) => <Form2 {...props} />
    }
}

const MultiSelectForm = (props) => {
    const [formData, setFormData] = useState({});
    const SECTIONS = Object.keys(SECTIONS_CONFIG);
    return <Card width={'80%'}>
        <Navbar />
        <Container>
            {
                SECTIONS.map((sectionId) => {
                    const {label,component} = SECTIONS_CONFIG[sectionId];
                    const componentProps = {
                        formData :  formData?.[`${sectionId}`] ? formData?.[`${sectionId}`] : {},
                        onFormDataChange : (key, value) => {
                            setFormData({
                                ...formData,
                                [`${sectionId}`] : {
                                    ...formData[`${sectionId}`],
                                    [`${key}`] : value
                                }
                            })
                        }
                    }
                    return <WidthComponent width={'95%'}>
                    <Accordian displayText={label}>
                        {
                            component(componentProps)
                        }
                    </Accordian>
                    </WidthComponent>
                })
            }
            <Headline>Form Data</Headline>
            <ReactJson src={formData} />
            <EmptyBlock />
            <GitLink />
            <EmptyBlock />
        </Container>
    </Card>
}

const Form1 = (props) => {
    const {formData} = props;
    return <Container>
        <FormContentBody>
            <FormElement label={'Name'}>
                <FormInput type={'text'} value={formData?.['name']} onChange={e => {
                    props.onFormDataChange('name', e.target.value)
                }}/>
            </FormElement>
            <FormElement label={'Age'}>
                <FormInput type={'text'} value={formData?.['age']} onChange={e => {
                    props.onFormDataChange('age', e.target.value)
                }}/>
            </FormElement>
        </FormContentBody>
    </Container>
};

const Form2 = (props) => {
    const {formData} = props;
    return <Container>
        <FormContentBody>
            <FormElement label={'Problem'}>
                <FormInput type={'text'} value={formData?.['problem']} onChange={e => {
                    props.onFormDataChange('problem', e.target.value)
                }}/>
            </FormElement>
            <FormElement label={'Question'}>
                <FormInput type={'text'} value={formData?.['question']} onChange={e => {
                    props.onFormDataChange('question', e.target.value)
                }}/>
            </FormElement>
        </FormContentBody>
    </Container>
};

const FormElement = ({width, label,...props}) => {
    return <FormElementContainer width={width}>
        <FormElementLabel >
            {label}
        </FormElementLabel>
        <FormElementComponent>
        {
            props.children
        }
        </FormElementComponent>
    </FormElementContainer>
}

export default MultiSelectForm;