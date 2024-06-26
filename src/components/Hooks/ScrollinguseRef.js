import React, { useEffect, useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function ScrollinguseRef() {
    const inputRef = useRef(null);

    const scrollToTarget = () => {
        inputRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        // You can perform any initial setup here if needed
    }, []);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <h2>Scrolling to a Target Element</h2>
                    <p>Click the button below to scroll to the target element</p>
                    <Button variant="success" onClick={scrollToTarget}>Scroll to Destination</Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <div style={{ height: "1200px", background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
                        <h3>Some Content</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla euismod justo ut tincidunt.</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <div ref={inputRef} style={{ background: "#e9f7ef", padding: "20px", borderRadius: "8px" }}>
                        <h3>This is the target element</h3>
                        <p>It will be scrolled into view when you click the button above.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ScrollinguseRef;
