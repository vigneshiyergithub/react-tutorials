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

const DEFAULT_TUTORIAL_DETAILS = {
    link: null,
    title: '',
    videoLink: '',
    gist: '',
    resources: []
}

const TutorialPage = (props) => {
    const [tutorialDetails, setTutorialDetails] = useState(DEFAULT_TUTORIAL_DETAILS);
    const query = useQuery();
    const id = query.get('id');
    useEffect(() => {
        const tutorialDetails = TutorialMapping[id];
        setTutorialDetails(tutorialDetails);
    }, [id]);
    const { title, link, gist, videoLink, resources } = tutorialDetails;
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
                <Resources resources={resources} />
            </WidthComponent>
            <EmptyBlock />
            <GitLink />
            <EmptyBlock />
        </Container>
    </Card>
}

const Resources = (props) => {
    const { resources } = props;
    if (resources.length > 0) {
        return <>
        <Headline>Resources</Headline>
        <ul>
            {
                resources.map((resource, index) => <li key={index}>
                    <a href={resource}
                        target={'_blank'}
                        rel='noreferrer'
                    >{resource}</a>
                </li>)
            }
        </ul>
        </>
    }
    return null;
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