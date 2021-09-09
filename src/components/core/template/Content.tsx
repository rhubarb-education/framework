import { motion, Variants } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

interface IContent {
    animDisabled: boolean;
    oflow: boolean;
    backgroundColor: string;
    bottomPadding: boolean;
}

const Content: React.FC<IContent> = ({ children, animDisabled = false, oflow, backgroundColor, bottomPadding }) => (
    <StyledContent
        className="section--main"
        initial="hidden"
        animate="visible"
        variants={animDisabled ? undefined : variants}
        oflow={oflow}
        backgroundColor={backgroundColor}
        bottomPadding={bottomPadding}
    >
        {children}
    </StyledContent>
);

interface IStyledContent {
    backgroundColor: string;
    oflow: boolean;
    bottomPadding: boolean;
}

const StyledContent = styled(motion.section)<IStyledContent>`
    background-color: ${props => props.backgroundColor};
    overflow: ${props => (props.oflow ? 'visible' : 'hidden')};
    position: relative;
    z-index: 2;
    flex: 1;
    ${props => (props.bottomPadding ? 'padding-bottom: 75px;' : null)};
`;

export default Content;
