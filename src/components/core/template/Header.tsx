import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
// import LangButton from '../../misc/LangButton';

type HeaderProps = {
    header: JSX.Element | null,
    headerBasicBG?: string
}

const Header: React.FC<HeaderProps> = ({ header, headerBasicBG }) => {
    if (headerBasicBG) {
        return (
            <StyledHeader background={headerBasicBG}>
                <Container>
                    <Row>
                        <Col>
                            {header}
                        </Col>
                    </Row>
                </Container>
            </StyledHeader>
        )
    }
    else {
        return (
            <StyledHeader>
                {header}
            </StyledHeader>
        )
    }
};

export default Header;


const StyledHeader = styled.section<{ background?: string }>`
    ${(props) => props.background ?
        `background-color: ${props.background};
        min-height: 75px;
        padding: 10px 0;`
        : null}
    position: relative;
    z-index: 3;
    flex-shrink: 0;
`;
