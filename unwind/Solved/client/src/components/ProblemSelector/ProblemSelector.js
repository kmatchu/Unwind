import React from "react";
import Jumbotron from "../Jumbotron";
import Button from "../Button";
import { Col, Row, Container } from "../Grid";

const ProblemSelector = props =>(
<div>
    <Row>
    <Button onClick={props.toAlgebra}>
    Basic algebra
    </Button>
    </Row>
    <Row>
    <Button onClick={props.toEasy}>
    Easy
    </Button>
    <Button onClick={props.toMed}>
    Medium
    </Button>
    <Button onClick={props.toHard}>
    Hard
    </Button>
    </Row>
</div>
)

export default ProblemSelector;