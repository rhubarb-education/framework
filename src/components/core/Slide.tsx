import { AnimatePresence } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import SlideContent from './slide/SlideContent';
import SlideFooter from './slide/SlideFooter';
import SlideHeader from './slide/SlideHeader';


export interface ISlide<DataType = {}> {
    nextSlide(): void;
    previousSlide(): void;
    gotoSlide: (index: number) => void;
    onComplete(): void;
    defaultHeader: JSX.Element;
    data: DataType;
    currentIndex: number;
}

interface SlideProps {
    header: JSX.Element | null;
    footer?: JSX.Element | null;
    backgroundColor?: string;
    animDisabled?: boolean;
    footerHidden?: boolean;
    headerHidden?: boolean
    overflow?: boolean;
    headerTransparent?: boolean;
}

export const Slide: React.FC<SlideProps> = ({
    header,
    children,
    footer,
    backgroundColor = 'transparent',
    animDisabled = false,
    footerHidden = false,
    headerHidden = false,
    overflow = true,
    headerTransparent = false,
}) => {
    return (
        <AnimatePresence>
            <StyledSlide className="content-wrapper" backgroundColor={backgroundColor} oflow={overflow}>
                {!headerHidden ? <SlideHeader header={header} headerTransparent={headerTransparent} /> : null}
                <SlideContent animDisabled={animDisabled}>{children}</SlideContent>
                {!footerHidden ? <SlideFooter footer={footer} /> : null}
            </StyledSlide>
        </AnimatePresence>
    );
};

interface StyledSlideProps {
    backgroundColor: string;
    oflow: boolean;
}
const StyledSlide = styled.div<StyledSlideProps>`
    .section--main {
        background-color: ${(props: StyledSlideProps) => props.backgroundColor};
        overflow: ${(props: StyledSlideProps) => (props.oflow ? 'visible' : 'hidden')};
    }

    .section--footer {
        background-color: ${(props: StyledSlideProps) => props.backgroundColor};
    }
`;

export default Slide;
