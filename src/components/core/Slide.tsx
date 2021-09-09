import { AnimatePresence } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Content from './template/Content';
import Footer from './template/Footer';
import Header from './template/Header';
import Navbar from './template/Navbar';

export interface ISlide<DataType = {}> {
    nextSlide(): void;
    previousSlide(): void;
    gotoSlide: (index: number) => void;
    onComplete(): void;
    defaultHeader: JSX.Element;
    defaultFooter: JSX.Element;
    data: DataType;
    currentIndex: number;
}

interface SlideProps {
    header?: JSX.Element | null;
    footer?: JSX.Element | null;
    backgroundColor?: string;
    animDisabled?: boolean;
    overflow?: boolean;
    children: React.ReactNode;
    headerHidden?: boolean;
    headerBasicBG?: string;
    footerHidden?: boolean;
    footerFixed?: boolean;
    footerBasicBG?: string;
}

export const Slide = ({
    header = <Navbar />,
    children,
    footer,
    backgroundColor = 'transparent',
    animDisabled = false,
    footerHidden = false,
    headerHidden = false,
    overflow = true,
    footerFixed = true,
    footerBasicBG,
    headerBasicBG,
}: SlideProps) => {
    return (
        <AnimatePresence>
            <StyledSlide backgroundColor={backgroundColor} oflow={overflow}>
                {!headerHidden ? <Header headerBasicBG={headerBasicBG} header={header} /> : null}
                <Content
                    bottomPadding={footerFixed}
                    backgroundColor={backgroundColor}
                    oflow={overflow}
                    animDisabled={animDisabled}
                >
                    {children}
                </Content>
                {!footerHidden ? (
                    <Footer footerBasicBG={footerBasicBG} footer={footer} footerFixed={footerFixed} />
                ) : null}
            </StyledSlide>
        </AnimatePresence>
    );
};

interface StyledSlideProps {
    backgroundColor: string;
    oflow: boolean;
}
const StyledSlide = styled.div<StyledSlideProps>`
    /* Take up 100% of screen */
    height: 100%;
    display: flex;
    flex-flow: column;
`;

export default Slide;
