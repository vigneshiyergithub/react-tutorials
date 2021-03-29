import {Example1, Example2, Example3} from './PropsSpreadOperatorExampleComponents';

export const TAB_CONFIG = [
    {
        tabName : 'Example 1',
        component : (props) => <Example1 {...props} />
    },
    {
        tabName : 'Example 2',
        component : (props) => <Example2 {...props} />
    },
    {
        tabName : 'Example 3',
        component : (props) => <Example3 {...props} />
    },
    // {
    //     tabName : 'New Component',
    //     component: () => <div>Hello I'm a new component</div>
    // }
]