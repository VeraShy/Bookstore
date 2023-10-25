import React from 'react';
import { useActions } from '../../../store/Hooks/useActions';
import { Close } from '@mui/icons-material';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import PreviewCard from '../ProductCards/PreviewCard/PreviewCard';
import { PopupBackground , PopupWrapper , CloseButtonWrapper , CloseButton , BookPreviewContent } from './styles';

const BookPreviewPopup = () => {
    const popupInfo = useTypedSelector(state => state.bookPreview.popupInfo);
    const { closePopup } = useActions();

    const closePreviewPopup = () => {
        closePopup();
    };

    return (
        <PopupBackground>
            <PopupWrapper>
                <CloseButtonWrapper>
                    <CloseButton onClick={closePreviewPopup}> <Close /></CloseButton>
                </CloseButtonWrapper>
                <BookPreviewContent>
                    {popupInfo && <PreviewCard book={popupInfo}></PreviewCard>}
                </BookPreviewContent>
            </PopupWrapper> 
        </PopupBackground>
    );
};

export default BookPreviewPopup;