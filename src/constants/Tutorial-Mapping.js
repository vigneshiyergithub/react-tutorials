export const Tutorials = {
    PropsSpreadOperator : 'props-spread-operator',
    ClickChildRef: 'click-child-ref'
}

export const TutorialMapping = {
    [`${Tutorials.PropsSpreadOperator}`] : {
        link : Tutorials.PropsSpreadOperator,
        title: 'How to pass props to child component using spread operator',
        videoLink : '',
        fileLocationList : [
            'data/props-spread-operator/PersonDataDisplay.js',
            'data/props-spread-operator/PropsSpreadOperator.js',
            'data/props-spread-operator/PropsSpreadOperatorExampleComponents.js',
            'data/props-spread-operator/tabConfig.js',
            'data/props-spread-operator/Tabs.js'
        ]
    },
    [`${Tutorials.ClickChildRef}`] : {
        title: 'How to trigger child click event using refs',
        videoLink : '',
        fileLocationList : [
            'data/click-child-ref/LandingPage.js'
        ]
    }
};

