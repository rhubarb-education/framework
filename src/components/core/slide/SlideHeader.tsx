import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import LangButton from '../../misc/LangButton';

type SlideHeaderProps = {
    header: JSX.Element | null,
    headerTransparent?: boolean;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({ header, headerTransparent }) => {
    const sectionClasses = headerTransparent ? 'section--header' : 'section--header bg-secondary-700';

    return (
        <section className={sectionClasses}>
            <Container className="h-100">
                <Row className="h-100 align-items-center justify-content-center">
                    <Col>
                        {header}
                        {/* <MuteButton></MuteButton> */}
                        {/* <LangButton></LangButton> */}
                        {/* <VoiceoverMuteButton></VoiceoverMuteButton> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default SlideHeader;
