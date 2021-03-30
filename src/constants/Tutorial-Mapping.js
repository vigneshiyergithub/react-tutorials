export const Tutorials = {
    PropsSpreadOperator: 'props-spread-operator',
    ClickChildRef: 'click-child-ref',
    TabsImplementation: 'tabs-implentation',
    MultiSectionForm: 'multi-section-form',
    Accordian: 'accordian'
}

export const TutorialMapping = {
    [`${Tutorials.PropsSpreadOperator}`]: {
        link: Tutorials.PropsSpreadOperator,
        title: 'How to pass props to child component using spread operator',
        videoLink: '',
        gist: 'vigneshiyergithub/fe8e30a543dfc7db5a0132ed909f3e4c',
        sandbox: "https://codesandbox.io/s/react-insights-props-spread-operator-1d38b?fontsize=14&hidenavigation=1&theme=dark",
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
    },
    [`${Tutorials.MultiSectionForm}`]: {
        title: 'Implementing Multi section Forms',
        gist: 'vigneshiyergithub/4f9d1cbe181d69a7f5c531cf31db01b4',
        link: Tutorials.MultiSectionForm,
        resources: [
            'https://reactjs.org/docs/jsx-in-depth.html#spread-attributes',
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'
        ]
    },
    [`${Tutorials.Accordian}`]: {
        title: 'How to implement Accordian',
        gist: 'vigneshiyergithub/123e6a6572ae2138488de4d308962bc0',
        link: Tutorials.Accordian,
        resources: [
            'https://reactjs.org/docs/hooks-intro.html',
            'https://reactjs.org/docs/conditional-rendering.html',
        ]
    }
};

