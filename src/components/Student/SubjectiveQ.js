import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';

class SubjectiveQ extends React.Component{
    render(){
        return (
            <Row>
                <Col>
                <Form>
                    <Row>
                        <Form.Group controlId="formBasicSubQ">
                            <Form.Label>{`Q ${this.props.qNo + 1}`}) {this.props.q}</Form.Label>
                            <Form.Control as="textarea" rows={2}
                                onBlur={(e) => this.props.subAns(this.props.qNo, e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                </Form>
                </Col>
            </Row>
        );
    }
}

export default SubjectiveQ;