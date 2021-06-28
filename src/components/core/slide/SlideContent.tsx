import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const SlideContent: React.FC<{ animDisabled: boolean }> = ({ children, animDisabled = false }) => (
    <motion.section
        className="section--main"
        initial="hidden"
        animate="visible"
        variants={animDisabled ? undefined : variants}
    >
        <Container className="h-100">
            <Row className="h-100 align-items-center justify-content-center">
                <Col>{children}</Col>
            </Row>
        </Container>
    </motion.section>
);

export default SlideContent;
