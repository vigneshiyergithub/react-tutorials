import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import {
    Container, ContentBody, Headline, Card,
    EmptyBlock, NavContainer, NavItem, WidthComponent, AccordianContent,
    AccordianContainer, AccordianLabel, AccordianText
} from '../styledComponents/Unit1';
import { CopyBlock, dracula } from "react-code-blocks";
import { Link } from 'react-router-dom';
import { ReactComponent as BackSvg } from '../assets/back-icon.svg';
import { ReactComponent as DownSvg } from '../assets/down.svg';
import { ReactComponent as UpSvg } from '../assets/up.svg';
import styled from 'styled-components';
import { TutorialMapping } from '../constants/Tutorial-Mapping'

const BackIcon = styled(BackSvg)`
    transform: scale(0.5);
    height: 3rem;
`;
const UpIcon = styled(UpSvg)`
    transform: scale(0.5);
    height: 3rem;
`;

const DownIcon = styled(DownSvg)`
    transform: scale(0.5);
    height: 3rem;
`

const TutorialPage = (props) => {
    const [tutorialDetails, setTutorialDetails] = useState({})
    const [codeMap, setCodeMap] = useState({});
    const query = useQuery();
    const id = query.get('id');
    useEffect(() => {
        const tutorialDetails = TutorialMapping[id];
        const { fileLocationList } = tutorialDetails;
        setTutorialDetails(tutorialDetails);
        fileLocationList.forEach(fileLocation => {
            fetch(fileLocation).then(resp => resp.text()).then(data => {
                if(!codeMap[fileLocation]) {
                    setCodeMap({
                        ...codeMap,
                        [`${fileLocation}`]: data
                    })
                }
            })
        })
    }, [id, codeMap]);
    const fileLocationList = tutorialDetails?.fileLocationList;
    const title = tutorialDetails?.title;
    const link = tutorialDetails?.link;
    return <Card width={'80vw'}>
        <Container>
            <Navbar />
            <Headline>{title}</Headline>
            <ContentBody>
                <VideoPlayer src={tutorialDetails?.videoLink} />
            </ContentBody>
            {
                link && <Headline><Link to={`/${link}`} >Link to example</Link></Headline>
            }
            <Headline>Related Files</Headline>
            <WidthComponent width={'80%'}>
                {
                    Object.keys(codeMap).length === fileLocationList?.length && fileLocationList?.map((fileLocation, index) => {
                        const codeText = codeMap[fileLocation];
                        
                        return <Accordian displayText={fileLocation} key={index}
                            onRender = {
                                () => {
                                    if(codeText) {
                                        return <CopyBlock
                                            text={codeText}
                                            language={'js'}
                                            showLineNumbers={true}
                                            theme={dracula}
                                            codeBlock
                                        />
                                    }
                                    return null;
                                }
                            }
                        >
                            
                        </Accordian>
                    })
                }
            </WidthComponent>
            <EmptyBlock />
        </Container>
    </Card>
}


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
                expand && props.onRender()
            }
        </AccordianContent>
    </AccordianContainer>
}

const VideoPlayer = (props) => {
    if (props.src) {
        return <ReactPlayer url={props.src} />
    }
    return null;
}

const Navbar = (props) => {
    //TODO: move this link style to a common place
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    }
    return <NavContainer>
        <NavItem>
            <Link to={`/`} style={linkStyle}><BackIcon /></Link>
        </NavItem>
    </NavContainer>
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export default TutorialPage;