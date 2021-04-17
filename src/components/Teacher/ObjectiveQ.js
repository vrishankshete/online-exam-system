import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class ObjectiveQ extends React.Component{
    render(){
        return (
            <Row>
                <Col sm={10}>
                    <Row className="font-weight-bold">
                        {`Q ${this.props.qNo + 1}`}) {this.props.q.q}
                    </Row>
                    {this.props.q.options.map((el, index)=>{
                        return <Row>{index+1 }:{el}</Row>;
                    })}
                </Col>
                <Col sm={2}>
                    <Row>
                        <Button onClick={()=>this.props.remFunc(this.props.qNo)}>
                            Remove
                        </Button>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default ObjectiveQ;