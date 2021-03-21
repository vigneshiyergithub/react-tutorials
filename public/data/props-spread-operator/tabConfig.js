import {Example1, Example2, Example3} from './PropsSpreadOperatorExampleComponents';

export const TAB_CONFIG = [
    {
        tabName : 'Example 1',
        component : () => <Example1 />
    },
    {
        tabName : 'Example 2',
        component : () => <Example2 />
    },
    {
        tabName : 'Example 3',
        component : () => <Example3 />
    },
    // {
    //     tabName : 'New Component',
    //     component: () => <div>Hello I'm a new component</div>
    // }
]