import React, {Component} from 'react';

class Heroes extends Component {
    constructor(props) {
        super(props)
    }

    boundFunc = () => {
        const REQ_URL = `https://api.opendota.com`
        const REQ_OPTIONS = {
            method: "GET",
            mode: "cors"
        };
        fetch(`${REQ_URL}/api/heroStats`, REQ_OPTIONS).then(res => res.json()).then(data => console.log(data[0]))
    };
    componentDidMount() {


    }
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Heroes;