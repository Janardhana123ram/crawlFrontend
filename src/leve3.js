import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, Row, Col} from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Lis = props => (
    <TableRow>
        <TableCell align="center"><img src={props.data.link} style={{height:'200px',width:'300px'}}/></TableCell>
        <TableCell align="center"><a href={props.data.link}>{props.data.link}</a></TableCell>
    </TableRow>
)


export default class Level3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res_data:[],
        }
    }
    
    async componentDidMount(){
        document.getElementById('prog').style.display='block';
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://warm-atoll-21342.herokuapp.com/data/?name=https:/"+this.props.match.params[0]+"/&level=3";
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
                <center><h2>Level-3</h2></center>
                <Card style={{margin:'20px',borderColor: '#95afc0'}} >
                    <CardBody>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><h4>Image</h4></TableCell>
                                    <TableCell align="center"><h4>Image URL</h4></TableCell>
                                </TableRow>
                            </TableHead>
                                { this.getdata() }
                            <TableBody>
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
