import React, { Component } from 'react';
import { Card, CardBody,Row, Col, FormGroup} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import createHistory from 'history/createBrowserHistory'
export const history = createHistory();

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level:[],
        }
    }
    
    gogtolevel1(){
        var link = document.getElementById("outlined-text-input").value;
        window.location.href = "/level1/"+link;
    }

    render() {
        return (
            <div>
                <Card style={{margin:'20px',borderColor: '#95afc0'}} >
                    <CardBody>
                        <Row>
                            <Col sm="6">
                                <FormGroup>
                                    <TextField
                                    id="outlined-text-input"
                                    label="Enter URL here.."
                                    className="textField"
                                    type="text"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Enter website url here...!"
                                    required
                                    />
                                </FormGroup>
                            </Col>
                            <br/>
                            <Col sm="3">
                                <FormGroup>
                                    <Button variant="outlined" color="secondary" fullWidth style={{padding:'10px'}} onClick={this.gogtolevel1.bind(this)}>Get Data</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
