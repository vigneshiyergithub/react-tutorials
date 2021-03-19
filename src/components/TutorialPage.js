import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import {useLocation} from 'react-router-dom';
import { Container, ContentBody, Headline } from '../styledComponents/Unit1';
import { CodeBlock, dracula } from "react-code-blocks";

const fileMap = {
    'LandingPage' : 'https://github.com/vigneshiyergithub/joke-guesser-game/blob/main/ui/src/App.js'
}

const TutorialPage = (props) => {
    const query = useQuery();
    const id = query.get('id');
    const [videoLink, setVideoLink] = useState(null);
    const [codeText, setCodeText] = useState('');
    useEffect(() => {
        setVideoLink('https://www.youtube.com/watch?v=MbWS706Xaxk');
        fetch('data/App.js').then(resp => resp.text()).then(data => {
            setCodeText(data)
        })
    }, [])
    return <Container>
        <Headline>Tutorial title</Headline>
        <ContentBody>
            <VideoPlayer src={videoLink}/>
        </ContentBody>
        <Headline>Related Files</Headline>
        <CodeBlock
            text={codeText}
            language={'js'}
            showLineNumbers={true}
            theme={dracula}
        />
    </Container>
}

const VideoPlayer = (props) => {
    if(props.src) {
        return <ReactPlayer url={props.src} />
    }
    return null;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  

export default TutorialPage;