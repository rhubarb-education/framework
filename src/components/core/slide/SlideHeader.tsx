import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
// import LangButton from '../../misc/LangButton';

type SlideHeaderProps = {
    header: JSX.Element | null,
    headerTransparent?: boolean;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({ header, headerTransparent }) => {
    const sectionClasses = headerTransparent ? 'section--header' : 'section--header bg-secondary-700';

    return (
        <HeaderWrapper className={sectionClasses}>
            <Container className="h-100">
                <Row className="h-100 align-items-center justify-content-center">
                    <Col>
                        {header}
                    </Col>
                </Row>
            </Container>
        </HeaderWrapper>
    )
};

export default SlideHeader;


const HeaderWrapper = styled.section`
.section {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 16px !important;
    padding-right: 16px !important;
}
    
    // Styles
.section--header {
    position: relative;
    z-index: 3;
    height: 75px;
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        display: inline-block;
        margin-bottom: 0;
    }
    flex-shrink: 0;
}

.section--header__complete {
    background-color: $btblue;
    color: $white;
    font-family: $btfontExtraBold;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    font-size: 12px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%) rotate(16deg);
    box-shadow: 0 6px $btpurple-900;
}

.section--header-overlay {
    height: 100px;
}

.section--main {
    position: relative;
    z-index: 2;
    flex: 1;
}

_:-ms-fullscreen,
:root .section--main {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
}

.section--footer__content {
    min-height: 80px;
    padding: 10px 0;
}

.section--footer {
    position: relative;
    z-index: 3;
    text-align: center;
    flex-shrink: 0;
}

@include media-breakpoint-up(lg) {
    .section--header__complete {
        position: absolute;
        display: inline-block;
        transform: rotate(-40deg);
        top: -12px;
        left: -28px;
        right: auto;
    }
}

.section--const {
    background-color: #13374d;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23163e57' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23153e57'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}

// Sizing
.section--full {
    padding-left: 16px !important;
    padding-right: 16px !important;
}
.section--semifull {
    padding-left: 16px !important;
    padding-right: 16px !important;
}

// Colours
.section--grey {
    background-color: $light-grey;
}
.section--navy {
    background-color: $navy;
}

// Elements

.section__title {
    margin-bottom: 20px;
}

@media (min-width: 744px) {
    .section--full {
        padding-left: 40px !important;
        padding-right: 40px !important;
    }
    .section--semifull {
        padding-left: 60px !important;
        padding-right: 60px !important;
    }
}

@media (min-width: 1128px) {
    .section--full {
        margin-right: auto !important;
        margin-left: auto !important;
        max-width: 1920px !important;
        padding-right: 80px !important;
        padding-left: 80px !important;
    }
    .section--semifull {
        margin-right: auto !important;
        margin-left: auto !important;
        max-width: 1280px !important;
        padding-right: 120px !important;
        padding-left: 120px !important;
    }
    .section--lg {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}
`;