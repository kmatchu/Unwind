import React from "react";
import Jumbotron from "../Jumbotron";
import { Input, TextArea, FormBtn } from "../Form";

const Login = props =>(
<div>
    <Jumbotron>
    <h1>Create Account</h1>
    </Jumbotron>
    <form>
    <Input
    value={props.userName}
    onChange={props.handler}
    name="userName"
    placeholder="User Name"
    />
    <Input
    value={props.email}
    onChange={props.handler}
    name="email"
    placeholder="Email Address"
    />
    <Input
    value={props.password}
    onChange={props.handler}
    name="password"
    placeholder="Password"
    />
    <FormBtn
    // disabled={!(this.state.author && this.state.title)}
    onClick={props.create}
    >
    Submit
    </FormBtn>
    </form>
</div>
)
export default Login;