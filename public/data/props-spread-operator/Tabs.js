import React, { useEffect, useState } from 'react';
import { ContentBody, Container, TabContainer, TabContentContainer, TabLabel } from '../styledComponents/Unit1';

/*
    config : [
        {
            tabName,
            component
        }
    ]
*/

const Tabs = (props) => {
    const [currentTab, setCurrentTab] = useState(null);
    const [tabsMap, setTabsMap] = useState([])
    useEffect(() => {
        setTabsMap([...props.config])
    }, [props.config]);
    const tabs = tabsMap.map(item => {
        return item.tabName;
    });
    const onTabClick = (tabName) => {
        if (currentTab === tabName) {
            setCurrentTab(null)
        } else {
            setCurrentTab(tabName)
        }
    }
    const tabDetails = tabsMap.filter(tabConfig => {
        return tabConfig.tabName === currentTab;
    })?.[0];
    return <Container>
        <ContentBody>
            <TabContainer>
            {
                tabs.map((item, index) => {
                    return <Tab
                        key={index}
                        tabName={item}
                        selected={currentTab === item}
                        onClick={onTabClick}
                    />
                })
            }
            </TabContainer>
        </ContentBody>
        {
            tabDetails &&
            <ContentBody>
                <TabDetails tabDetails={tabDetails} />
            </ContentBody>
        }
    </Container>
}

const Tab = (props) => {
    const tabClick = (e) => {
        props.onClick(props.tabName);
    }
    return <TabLabel onClick={tabClick} selected={props.selected}>{props.tabName}</TabLabel>
}

const TabDetails = (props) => {
    const componentToRender = props?.tabDetails?.component
    return <TabContentContainer>
        {
            componentToRender()
        }
    </TabContentContainer>
}

export default Tabs;