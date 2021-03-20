import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: ${props => props?.marginTop}
`;

export const Headline = styled.h1`
    font-size: 20;
`;

export const ContentBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

export const ItemList = styled.ul`

`;

export const Item = styled.li`

`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    border:5px solid red;
`

export const TextBlock= styled.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    padding: 0.6rem;
`

export const Label = styled.div`
    font-weight: bold;
`

export const Value = styled.div`

`

export const TabContainer = styled.div`
    display : flex;
    flex-direction: row;
    width: 50vw;
    margin-top: 10rem;
    justify-content: space-between;
`
// Center 
export const TabLabel = styled.div`
    text-align: center;
    border: 2px solid black;
    width: 6vw;
    cursor: pointer;
    background-color: ${props => props.selected ? 'gray' : 'none'}
`
export const TabContentContainer = styled.div`
    border: 0.5px solid gray;
    width: 50vw;
    margin-top: 5rem;
`