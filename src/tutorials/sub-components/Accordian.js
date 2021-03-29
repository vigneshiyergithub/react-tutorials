import React, {useState} from 'react';
import {
    AccordianContent,
    AccordianContainer, AccordianLabel, AccordianText
} from '../../styledComponents/Unit1';
import { ReactComponent as DownSvg } from '../../assets/down.svg';
import { ReactComponent as UpSvg } from '../../assets/up.svg';
import styled from 'styled-components'

const UpIcon = styled(UpSvg)`
    transform: scale(0.5);
    height: 3rem;
`;

const DownIcon = styled(DownSvg)`
    transform: scale(0.5);
    height: 3rem;
`;

const Accordian = (props) => {
    const [expand, setExpand] = useState(false);
    const accordianClick = (e) => {
        setExpand(!expand)
    }
    return <AccordianContainer>
        <AccordianLabel onClick={accordianClick}>
            <AccordianText>{props.displayText}</AccordianText>
            {
                expand ? <UpIcon /> : <DownIcon />
            }
        </AccordianLabel>
        <AccordianContent>
            {
                expand && props.children
            }
        </AccordianContent>
    </AccordianContainer>
};

export default Accordian;