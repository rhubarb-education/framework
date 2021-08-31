import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';

interface IFooter {
    footer: JSX.Element | null | undefined;
    footerFixed: boolean;
    footerBasicBG?: string
}

const Footer: React.FC<IFooter> = ({ footer, footerFixed, footerBasicBG }) => {
    if (footerBasicBG) {
        return (
            <StyledFooter background={footerBasicBG} footerFixed={footerFixed}>
                <Container>
                    <Row>
                        <Col>
                            {footer}
                        </Col>
                    </Row>
                </Container>
            </StyledFooter>
        )
    }
    else {
        return (
            <StyledFooter footerFixed={footerFixed}>
                {footer}
            </StyledFooter>
        )
    }

};

const StyledFooter = styled.section<{ footerFixed: boolean, background?: string }>`
    ${(props) => props.background ?
        `
            background-color: ${props.background};
            height: 50px;
            padding: 10px 0;
            @media (min-height: 700px) {
                min-height: 75px;
            }
        `
        : null}
    ${(props) => props.footerFixed ?
        `
            position: fixed; bottom: 0; left: 0; right: 0; height: 50px;
            @media (min-height: 700px) {
                min-height: 75px;
            }
        `
        :
        `position: relative;`}
    z-index: 3;
    flex-shrink: 0;
`;

export default Footer;
