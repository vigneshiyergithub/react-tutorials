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
`

export const Label = styled.div`
    font-weight: bold;
`

export const Value = styled.div`

`