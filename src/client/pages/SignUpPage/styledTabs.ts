import styled from "styled-components";
import { builtinModules } from 'module';
import { Tab , Tabs , TabList , TabPanel } from 'react-tabs';

export const TabsWrapper = styled(Tabs) `
    width: 100%;
`

export const TabsButtons = styled(TabList) `
    display: flex;
    align-items: center; 
    border-bottom: 1px solid ${(props) => props.theme.palette.background.gray};
    padding: 0 32px;
    .react-tabs__tab--selected {
        color: ${(props) => props.theme.palette.system.primary};
        border: none;
        border-bottom: 2px solid ${(props) => props.theme.palette.system.primary};
        outline: none;
    };
`

export const TabButton = styled(Tab) `
    width: 50%;
    list-style-type: none;
    text-align: center;
    cursor: pointer;
    color: ${(props) => props.theme.palette.system.secondary};
    &:hover {
        color: ${(props) => props.theme.palette.system.primary};
    };
`

export const TabsContent = styled('div') `
    width: 100%;
`

export const TabContent = styled(TabPanel) `
    width: 100%;
`

