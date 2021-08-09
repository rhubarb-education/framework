import { motion, Variants } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const Content: React.FC<{ animDisabled: boolean }> = ({ children, animDisabled = false }) => (
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

export default Content;
