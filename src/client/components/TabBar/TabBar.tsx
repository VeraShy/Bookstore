import React, { FC } from 'react';
import { IBookInfo } from '../../../store/types';
import { TabsWrapper , TabsButtons , TabButton , TabsContent , TabContent } from './styles';

interface ITabBarProps {
    book: IBookInfo
};

const TabBar: FC<ITabBarProps> = ({book}) => {
    return (
        <div>
            <TabsWrapper>
                <TabsButtons>
                    <TabButton>Description</TabButton>
                    <TabButton>Authors</TabButton>
                    <TabButton>Reviews</TabButton>
                </TabsButtons>

                <TabsContent>                
                    <TabContent>{book.desc}</TabContent>
                    <TabContent>{book.authors}</TabContent>
                    <TabContent>{book.rating}</TabContent>
                </TabsContent>
            </TabsWrapper>
        </div>
    );
};

export default TabBar;