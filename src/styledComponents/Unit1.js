import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${props => props?.marginTop};
    margin-bottom: ${props => props?.marginBottom};
`;

export const EmptyBlock = styled.div`
    height : 2rem;
`

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    };
    width: ${props => props.width ? props.width : '100%'};
    margin: auto;
    background-color: white;
    margin-top: ${props => props.marginTop ? props.marginTop : '5rem'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '5rem'};
`;


export const Headline = styled.h1`
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    text-align: center;
`;

export const ContentBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const FormContentBody = styled.div`
    display: flex; 
    justify-content: space-around; 
    gap: 5px;
    width: 100%;
    margin: 0.5rem;
`;

export const Item = styled.li`
    background-color: #FFDF6C;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border: 1px solid gray;
    padding: 0.4rem;
    margin-bottom: 2rem;
`;

export const ItemList = styled.ul`
    list-style-type: none;
    width: 100%;
    margin-left: 3%;
    margin-right: 3%;
    overflow: auto;
    cursor: pointer;
    padding: 0;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    border:5px solid red;
`

export const TextBlock = styled.div`
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
    margin: 5rem;
    justify-content: space-between;
    flex-wrap: wrap;
`
// Center 
export const TabLabel = styled.div`
    text-align: center;
    border: 2px solid black;
    width: fit-content;
    cursor: pointer;
    background-color: ${props => props.selected ? 'gray' : 'none'};
    @media (min-width: 768px) {
        width: 6vw;
    }
`;

export const TabContentContainer = styled.div`
    border: 0.5px solid gray;
    width: 50vw;
    margin-top: 5rem;
    margin-bottom: 5rem;
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const NavItem = styled.div`
    width: 20%;
`;

export const WidthComponent = styled.div`
    width : ${props => props.width ? props.width : '100%'};
`;

export const AccordianContainer= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const AccordianLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
    margin-bottom: 0.5rem;
    word-break: break-all;
    padding: 0.2rem;
`;

export const AccordianText = styled.div`
    display: flex;
    align-items: center;
`


export const AccordianContent = styled.div`
    width: 100%;
`;

export const FormElementContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: ${props => props.width ? props.width : '50%'};
    padding: 0.5rem;
    border: 1px solid gray;
`;

export const FormElementLabel = styled(Label)`
    width: 20%;
`;

export const FormElementComponent = styled.div`
    width: 80%;
`;

export const FormInput = styled.input`
    width: 80%;
`
