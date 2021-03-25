import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import {
    Container, ContentBody, Headline, Card,
    EmptyBlock, WidthComponent
} from '../styledComponents/Unit1';
// import { ReactComponent as DownSvg } from '../assets/down.svg';
// import { ReactComponent as UpSvg } from '../assets/up.svg';
// import styled from 'styled-components';
import { TutorialMapping } from '../constants/Tutorial-Mapping';
import { GitLink } from '../styledComponents/Unit2';
import { Navbar } from '../styledComponents/Unit2';
import { Link } from 'react-router-dom';
import ReactEmbedGist from 'react-embed-gist';

// const UpIcon = styled(UpSvg)`
//     transform: scale(0.5);
//     height: 3rem;
// `;

// const DownIcon = styled(DownSvg)`
//     transform: scale(0.5);
//     height: 3rem;
// `
//TODO: Add Resources block to display all the relevant references
const TutorialPage = (props) => {
    const [tutorialDetails, setTutorialDetails] = useState({});
    const query = useQuery();
    const id = query.get('id');
    useEffect(() => {
        const tutorialDetails = TutorialMapping[id];
        setTutorialDetails(tutorialDetails);
    }, [id]);
    const { title, link, gist, videoLink } = tutorialDetails;
    return <Card width={'80vw'}>
        <Container>
            <Navbar />
            <Headline underline>{title}</Headline>
            <ContentBody>
                <VideoPlayer src={videoLink} />
            </ContentBody>
            {
                link && <Headline><Link to={`/${link}`} >Link to example</Link></Headline>
            }
            <Headline>Related Files</Headline>
            <WidthComponent width={'80%'}>
                <ReactEmbedGist gist={gist} />
            </WidthComponent>
            <EmptyBlock />
            <GitLink />
            <EmptyBlock />
        </Container>
    </Card>
}

const VideoPlayer = (props) => {
    if (props.src) {
        return <ReactPlayer url={props.src} />
    }
    return null;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export default TutorialPage;