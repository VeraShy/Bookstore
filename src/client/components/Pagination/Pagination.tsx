import React, { FC } from 'react';
import { Pagination } from '@mui/material';
import { PaginationWrapper } from './styles';

interface IPaginationProps {
    count: number,
    page?: number,
    onBtnClick: (event:any, page:number) => void, 
};

const PaginationBar: FC<IPaginationProps> = ({
    count, 
    page,
    onBtnClick,
}) => {
    return (
        <PaginationWrapper>
            <Pagination size='large' count={count} page={page} onChange={onBtnClick}/>
        </PaginationWrapper>
    );
};

export default PaginationBar;