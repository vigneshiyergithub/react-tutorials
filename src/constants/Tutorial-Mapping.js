export const Tutorials = {
    PropsSpreadOperator: 'props-spread-operator',
    ClickChildRef: 'click-child-ref',
    TabsImplementation: 'tabs-implentation'
}

export const TutorialMapping = {
    [`${Tutorials.PropsSpreadOperator}`]: {
        link: Tutorials.PropsSpreadOperator,
        title: 'How to pass props to child component using spread operator',
        videoLink: '',
        gist: 'vigneshiyergithub/fe8e30a543dfc7db5a0132ed909f3e4c',
        resources: [
            'https://reactjs.org/docs/jsx-in-depth.html#spread-attributes',
            'https://kentcdodds.com/blog/prop-drilling',
            'https://reactjs.org/docs/context.html',
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'    
        ]
    },
    [`${Tutorials.ClickChildRef}`]: {
        title: 'How to trigger child click event using refs',
        videoLink: '',
        gist: 'vigneshiyergithub/6c41293706893bb057af7977292adbc5',
        resources: [
            'https://reactjs.org/docs/refs-and-the-dom.html'
        ]
    },
    [`${Tutorials.TabsImplementation}`]: {
        title: 'How to implement Tabs',
        videoLink: '',
        gist: 'vigneshiyergithub/3c04f70e7d60708f53b4dd3af03d9740',
        resources: [
            'https://reactjs.org/docs/hooks-intro.html',
            'https://reactjs.org/docs/conditional-rendering.html',
            'https://reactjs.org/docs/lists-and-keys.html',
            
        ]
    }
};

