import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../../store/types';
import TextMessage from '../../TextComponents/TextMessage/TextMessage';
import { CardWrapper , ImageBlock , ImageBackground, ProductImage , InfoBlock , StyledLink} from './styles';

const SearchResultsCard: FC<{ productInfo: IProduct }> = ({ productInfo }) => { 
    const fullPageURL = `/product/${productInfo.isbn13}`;

    return (
        <StyledLink to={fullPageURL}>
            <CardWrapper>
                <ImageBlock>
                    <ImageBackground>
                        <ProductImage src={productInfo.image} />
                    </ImageBackground> 
                </ImageBlock>
            
                <InfoBlock>               
                    <TextMessage variant='p'> {productInfo.title} </TextMessage>
                </InfoBlock>  
            </CardWrapper>
        </StyledLink>
    );
};

export default SearchResultsCard;