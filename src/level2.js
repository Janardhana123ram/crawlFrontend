import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, Row, Col, Divider } from 'reactstrap';
import {BrowserRouter as Link} from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';


const Lis = props => (
    <ul>
        <Link to={"/level3/"+props.data.link}><a href={"/level3/"+props.data.link}>{props.data.link}</a></Link>
    </ul>
)


export default class Level2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res_data:[],
        }
    }
    
    async componentDidMount(){
        document.getElementById('prog').style.display='block';
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://warm-atoll-21342.herokuapp.com/data/?name=https:/"+this.props.match.params[0]+"/&level=2";

        const res = await fetch(proxyurl + url);
        const crawl = await res.json();
        var resp = crawl;
        
        var d = this.state.res_data;
        for(var i=0;i<crawl.urls.length;i++){
            var a = {"link":crawl.urls[i]};
            d = d.concat(a);
        }
        this.setState({
            res_data:d
        })
        document.getElementById('prog').style.display='none';
    }



    getdata() {
        return this.state.res_data.map(function(currentdata, i) {
            return <Lis data={currentdata} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <LinearProgress color="primary" style={{display:'none'}} id='prog'/>
                <center><h2>Level-2</h2></center>
                <Card style={{margin:'20px',borderColor: '#95afc0'}} >
                    <CardBody>
                        <Row>
                            <Col sm="12">
                                { this.getdata() }
                            </Col>                  
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
