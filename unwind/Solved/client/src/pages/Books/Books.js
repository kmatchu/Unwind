import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Button from "../../components/Button";
import ProblemSelector from "../../components/ProblemSelector";
import Jumbotron from "../../components/Jumbotron";
import Login from "../../components/Login";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Books extends Component {
  state = {
    currentUser: "",
    userName: "",
    email: "",
    password: "",
    _id: "",
    difficulty: 0,
    equation: "",
    step2: "",
    step3: "",
    step4: "",
    step2Ans: "",
    step3Ans: "",
    step4Ans: "",
    category: "algebra",
    hint2: "",
    hint3: "",
    hint4: ""
  };


  makeAccount = event =>{
    event.preventDefault();
    if(!(API.getBook(this.state._id)
    .then(res => res.data.userName)) ){
      if(!this.state.userName){
        alert("You must enter a username.");
      }
      else if (!this.state.email){
        alert("You must enter an email");
      }
      else if(!this.state.password){
        alert("You must enter a password")
      }
      else{
        API.saveBook({
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        _id: this.state._id
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
  };      
  }
  }

  loginUser = event =>{
    event.preventDefault();
    API.getBook(this.state._id)
    .then(res => this.setState({ currentUser: res.data.userName }))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    // this.loadBooks();
    this.makeEquation();
  }

  makeEquation = () =>{
    switch(this.state.category){
      case 'algebra':
        this.algebra();
      break;
      case 'quadratic':
        this.quadratic();
      break;
      default:
      alert("No subject selected");
    }
  }



  algebra = () =>{
    var num1 = Math.floor(Math.random()*12 + 2);
    var num2 = Math.floor(Math.random()*12 + 2);
    var num3 = Math.floor(Math.random()*12 + 2);
    var num4 = Math.floor(Math.random()*12 + 2)

    switch(this.state.difficulty){
    case 0:
        this.setState({ hint2: "Move all X terms to one side, and all other numbers to the other side." });
        this.setState({ hint3: "Divide both sides so that X is alone on one side." });
        this.setState({ hint4: "The last area should be left blank "})
        switch(Math.floor(Math.random()*4)){
            case 0:
            this.setState({ equation: `${num1}x + ${num2*num1} = 0` });
            this.setState({ step2Ans: `${num1}X\\s*=\\s*${0 - num2*num1}|${num2*num1}\\s*=\\s*${0 - num1}X` });
            this.setState({ step3Ans: `X\\s*=\\s*${0 - num2}|${0 - num2}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            case 1:
            this.setState({ equation: `${0 - num1}x + ${num2*num1} = 0` });
            this.setState({ step2Ans: `${num2*num1}\\s*=\\s*${num1}X|${0 - num1}X\\s*=\\s*${0 - num2*num1}` });
            this.setState({ step3Ans: `X\\s*=\\s*${num2}|${num2}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            case 2:
            this.setState({ equation: `${num1}x - ${num2*num1} = 0` });
            this.setState({ step2Ans: `${num1}X\\s*=\\s*${num2*num1}|${0 - num2*num1}\\s*=\\s*${0 - num1}X` });
            this.setState({ step3Ans: `X\\s*=\\s*${num2}|${num2}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            case 3:
            this.setState({ equation: `${0 - num1}x - ${num2*num1} = 0` });
            this.setState({ step2Ans: `${0 - num1}X\\s*=\\s*${num2*num1}|${0 - num2*num1}\\s*=\\s*${num1}X` });
            this.setState({ step3Ans: `X\\s*=\\s*${0 - num2}|${0 - num2}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            default:
            alert("Error, please refresh.");   }
    break;

    case 1:
        this.setState({ hint2: "Move all X terms to one side, and all other numbers to the other side." });
        this.setState({ hint3: "Divide both sides so that X is alone on one side." });
        this.setState({ hint4: "The last area should be left blank "})
        switch(Math.floor(Math.random()*4)){
            case 0:
            this.setState({ equation: `${num1}X - ${num4}=${0 - num2}X + ${num3*(num1 + num2) - num4}` });
            this.setState({ step2Ans: `${num1 + num2}X\\s*=\\s*${num3*(num1 + num2)}|${0 - num3*(num1 + num2)}\\s*=\\s*${0 - num2 - num1}X` });
            this.setState({ step3Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            case 1:
            this.setState({ equation: `${0 - num1}X - ${num4}=${0 - num2}X + ${num3*(num2 - num1) - num4}` });
            this.setState({ step2Ans: `${num2 - num1}X\\s*=\\s*${num3*(num2 - num1)}|${num3*(num1 + num2)}\\s*=\\s*${num1 - num2}X` });
            this.setState({ step3Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            case 2:
            this.setState({ equation: `${0 - num1}X + ${num4}=${num2}X + ${num3*(num2 - num1) + num4}` });
            this.setState({ step2Ans: `${num2 + num1}X\\s*=\\s*${num3*(num2 + num1)}|${num3*(num1 + num2)}\\s*=\\s*${num1 + num2}X` });
            this.setState({ step3Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            case 3:
            this.setState({ equation: `${num1}X + ${num4}=${num2}X + ${num3*(num1 - num2) + num4}` });
            this.setState({ step2Ans: `${num1 - num2}X\\s*=\\s*${num3*(num1 - num2)}|${num3*(num2 - num1)}\\s*=\\s*${num2 - num1}X` });
            this.setState({ step3Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            this.setState({ step4Ans: `` });
            break;
            default:
            alert("Error, please refresh."); 
            }
    
    break;

    case 2:
    //Minus sign breaks RegExp check
      this.setState({ hint2: "Add or subtract any terms with their like terms, on the same side." });  
      this.setState({ hint3: "Move all X terms to one side, and all other numbers to the other side." });
      this.setState({ hint4: "Divide both sides so that X is alone on one side." });
            switch(Math.floor(Math.random()*2)){
            case 0:
            this.setState({ equation: `${num1}X +${num2-num1}X + ${num4} + ${num3} = ${num2+num1}X - ${num2}X + ${num3*(num2 - num1) + num4 + num3}` });
            this.setState({ step2Ans: `${num2}X\\s*+\\s*${num4 + num3}\\s*=\\s*${num1}X\\s*+\\s*${num3*(num2 - num1)+ num4 + num3}` });
            this.setState({ step3Ans: `${num2-num1}X\\s*=\\s*${num3*(num2 - num1)}|${0 - num3*(num2 - num1)}\\s*=\\s*${num1 - num2}X` });
            this.setState({ step4Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            break;
            // case 1:
            // this.setState({ equation: `${num1}X +${num2-num1}X - ${num4} - ${num3} = ${num2+num1}X - ${num2}X + ${num3*(num2 - num1) - num4 - num3}` });
            // this.setState({ step2Ans: `${num2}X\\s*\-\\s*${num4 + num3}\\s*=\\s*${num1}X\\s*+\\s*${num3*(num2 - num1) - num4 - num3}` });
            // this.setState({ step3Ans: `${num2-num1}X\\s*=\\s*${num3*(num2 - num1)}|${0 - num3*(num2 - num1)}\\s*=\\s*${num1 - num2}X` });
            // this.setState({ step4Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            // break;
            case 1:
            this.setState({ equation: `${num1}X +${num1} + ${num2-num1}X = ${num2+num1}X - ${num2}X + ${num3*(num2 - num1) + num4 + num1} - ${num4}` });
            this.setState({ step2Ans: `${num2}X\\s*+\\s*${num1}\\s*=\\s*${num1}X\\s*+\\s*${num3*(num2 - num1)+num1}` });
            this.setState({ step3Ans: `${num2-num1}X\\s*=\\s*${num3*(num2 - num1)}|${0 - num3*(num2 - num1)}\\s*=\\s*${num1 - num2}X` });
            this.setState({ step4Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            break;
            // case 3:
            // this.setState({ equation: `${num1}X -${num1-num2}X - ${num4} - ${num3} = -${num2+num1}X + ${num2}X + ${num3*(num2 + num1) - num4*num3 - num4 - num3} + ${num3*num4}` });
            // this.setState({ step2Ans: `${num2}X\\s*\-\\s*${num4+num3}\\s*=\\s*${0 - num1}X\\s*+\\s*${num3*(num2 + num1) - num4 - num3}` });
            // this.setState({ step3Ans: `${num2+num1}X\\s*=\\s*${num3*(num2 + num1)}|${0 - num3*(num2 + num1)}\\s*=\\s*${num1 + num2}X` });
            // this.setState({ step4Ans: `X\\s*=\\s*${num3}|${num3}\\s*=\\s*X` });
            // break;
            default:
            alert("Error, please refresh."); 
            }
    break;

    // case 3:
    // // equation = `${num1}X + ${num4}=${0 - num2}X + ${num3*(num1 + num2) + num4}`;
    // //floats instead of integers
    // console.log("expert difficulty not ready yet");
    // break;
    default:
    alert("Error, please refresh. Make sure you selected a difficulty."); 
    }
};

  quadratic = () => {
    var num1 = Math.floor(Math.random()*3 + 2);
    var num2 = Math.floor(Math.random()*3 + 2);
    // var num3 = Math.floor(Math.random()*12 + 2);
    // var num4 = Math.floor(Math.random()*12 + 2)
    this.setState({ hint2: "Try a few guesses. The equation can be reduced to a small expression squared, and drop the squared. Also, us '^' for exponent. " });
    this.setState({ hint3: "Something squared is only equal to zero if the thing itself is zero. Drop the squared, and move the non-x components to the other side." });
    this.setState({ hint4: "Divide to solve for X"})
    this.setState({ equation: `${Math.pow(num1,2)}X^2 + ${2*num1*num2*num1}X + ${Math.pow((num2*num1),2)} = 0` })
    this.setState({ step2Ans: `(${num1}X\\s*+\\s*${num2*num1})\\s*=\\s*0` })
    this.setState({ step3Ans: `${num1}X\\s*=\\s*${0 - num2*num1}|${num2*num1}\\s*=\\s*${0 - num1}X` })
    this.setState({ step4Ans: `X\\s*=\\s*${0-num2}|${0-num2}\\s*=\\s*X` })
  // switch(difficulty){
  //     case 0:
  //     this.setState({ hint2: "Move all X terms to one side, and all other numbers to the other side." });
  //     this.setState({ hint3: "Divide both sides so that X is alone on one side." });
  //     this.setState({ hint4: "The last area should be left blank "})
  //         switch(randoNum){
  //             case 0:
  //                 equation = `${Math.pow(num1,2)}X^2 + ${2*num1*num2*num1}X + ${Math.pow((num2*num1),2)}\\s*=\\s*0`;
  //                 step1 = `(${num1}X\\s*+\\s*${num2*num1})\\s*^\\s*2)\\s*=\\s*0`
  //                 step2 = `${num1}X\\s*=\\s*${0 - num2*num1}|${num2*num1}\\s*=\\s*${0 - num1}X`
  //                 step3 = `X\\s*=\\s*${0-num2}|${0-num2}\\s*=\\s*X`
  //             break;
  //             case 1:
  //                 equation = `${Math.pow(num1,2)}X^2 - ${2*num1*num2*num1}X + ${Math.pow((num2*num1),2)}\\s*=\\s*0`;
  //                 step1 = `(${num1}X\\s*-\\s*${num2*num1})\\s*^\\s*2)\\s*=\\s*0`
  //                 step2 = `${num1}X\\s*=\\s*${num2*num1}|${0 - num2*num1}\\s*=\\s*${0 - num1}X`
  //                 step3 = `X\\s*=\\s*${num2}|${num2}\\s*=\\s*X`
  //             break;  
  //             case 2:
  //                 console.log("not ready yet");
  //             break;
  //             case 3:
  //                 console.log("not ready yet");
  //             break;
  //             default:
  //             alert("Error, please refresh."); 
  //             }
  //     break;
      
  //     case 1:
  //     //complete the square
  //         console.log("not ready yet");
  //     break;

  //     case 2:
  //     //quadratic equation
  //         switch(num1>num2){
  //             case true:
  //             equation = `${num1}X^2 + ${Math.floor(Math.random()*7 + 2*num1)}X +${num2}`;
  //             break;
  //             default:
  //             equation = `${num1}X^2 + ${Math.floor(Math.random()*7 + 2*num2)}X +${num2}`;    }
  //     break;

  //     default:
  //         alert("Error, please refresh. Make sure you selected a difficulty."); 
  //     }
}

displayHint = event =>{
event.preventDefault();
alert(`1. ${this.state.hint2}
  2. ${this.state.hint3}
  3. ${this.state.hint4}`);
}

//makes equation before changing difficulty
toEasy = event =>{
  event.preventDefault();
  this.setState({ difficulty: 0 },this.makeEquation);
}

toMed = event =>{
  event.preventDefault();
  this.setState({ difficulty: 1 },this.makeEquation);
}

toHard = event =>{
  event.preventDefault();
  this.setState({ difficulty: 2 },this.makeEquation);
}

toAlgebra = event =>{
  event.preventDefault();
  this.setState({ category: "algebra" },this.makeEquation);
}

toQuadratic = event =>{
  event.preventDefault();
  this.setState({ category: "quadratic" },this.makeEquation);
}

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.setState({ _id: this.state.userName });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if((this.state.step2).match(new RegExp(this.state.step2Ans, 'i')) && (this.state.step3).match(new RegExp(this.state.step3Ans, 'i'))&& (this.state.step4).match(new RegExp(this.state.step4Ans, 'i'))) {

      alert("Correct!");
      this.makeEquation();
   
    }
    else{
      console.log("Incorrect.");
    };
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3 sm-12">
            <Jumbotron>
              <h1>Login</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="User Name"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email Address"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.loginUser}
              >
                Login
              </FormBtn>
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.makeAccount}
              >
                Create Account
              </FormBtn>
              </form>

              {/* Does not submit but does update state */}
              {/* <Login userName={this.state.userName} email={this.state.email} password={this.state.password} handler={this.handleInputChange} create={this.makeAccount} />  */}
            {/* <ProblemSelector toEasy={this.toEasy} toMed={this.toMed} toHard={this.toHard} toAlgebra={this.toAlgebra} /> */}
            <Row>
            <Button onClick={this.toEasy}>
            Easy
            </Button>
            <Button onClick={this.toMed}>
            Medium
            </Button>
            <Button onClick={this.toHard}>
            Hard
            </Button>
            <Button onClick={this.toAlgebra}>
            Basic algebra
            </Button>
            <Button onClick={this.toQuadratic}>
            Quadratics
            </Button>
            </Row>
          </Col>
          <Col size="md-9">
          <Jumbotron>
              <h1>{this.state.currentUser}</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>{this.state.equation}</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.step2}
                onChange={this.handleInputChange}
                name="step2"
                placeholder="Step 2"
              />
              <Input
                value={this.state.step3}
                onChange={this.handleInputChange}
                name="step3"
                placeholder="Step 3"
              />
              <Input
                value={this.state.step4}
                onChange={this.handleInputChange}
                name="step4"
                placeholder="Step 4"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
                <FormBtn
                onClick={this.displayHint}
                >
                Show the hints
                </FormBtn>
                {/* <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}
            </form>
          </Col>
          
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          
        </Row>
        
        {/* <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div> */}
      </Container>
    );
  }
}

export default Books;
