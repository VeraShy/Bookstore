import styled from "styled-components";
import { builtinModules } from 'module';
import { Tab , Tabs , TabList , TabPanel } from 'react-tabs';

export const TabsWrapper = styled(Tabs) `
    width: 100%;
    margin: 72px 0 48px 0;
`

export const TabsButtons = styled(TabList) `
    display: flex;
    align-items: center; 
    border-bottom: 1px solid ${(props) => props.theme.palette.background.gray};
    .react-tabs__tab--selected {
        color: ${(props) => props.theme.palette.system.primary};
        border-bottom: 2px solid ${(props) => props.theme.palette.system.primary};
    };
`

export const TabButton = styled(Tab) `
    width: 180px;
    height: 50px;
    list-style-type: none;
    text-align: center;
    cursor: pointer;
    color: ${(props) => props.theme.palette.system.secondary};
    &:hover {
        color: ${(props) => props.theme.palette.system.primary};
    };
`

export const TabsContent = styled('div') `
    height: auto;
    margin-top: 48px;
`

export const TabContent = styled(TabPanel) `
    font-size: 16px;
    line-height: 32px;
`
