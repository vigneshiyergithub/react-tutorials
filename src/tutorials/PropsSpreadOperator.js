import React from 'react';
import Tabs from './Tabs';
import { TAB_CONFIG } from './sub-components/tabConfig'
import { Card, ContentBody, EmptyBlock } from '../styledComponents/Unit1'
import { Navbar } from '../styledComponents/Unit2';
import { GitLink } from '../styledComponents/Unit2';

const PropsSpreadOperator = (props) => {
    return <Card width={'80%'}>
        <Navbar />
        <Tabs
            config={TAB_CONFIG}
        />
        <ContentBody>
            <EmptyBlock />
            <GitLink />
            <EmptyBlock />
        </ContentBody>
    </Card>
}

export default PropsSpreadOperator;