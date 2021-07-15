import React from 'react';
import { Container } from 'react-bootstrap';

const SlideHeader: React.FC<{ footer: JSX.Element | null | undefined }> = ({ footer }) => (
    <section className="section--footer">
        <div className="section--footer__content">
            <Container>{footer}</Container>
        </div>
    </section>
);

export default SlideHeader;