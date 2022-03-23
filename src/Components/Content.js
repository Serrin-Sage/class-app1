import {Component} from 'react'
import tree from '../images/tree.jpg'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            numImages: 1
        }
    }

    displayImages = () => {
        let {numImages} = this.state;
        let images = []

        for (let i=0; i < numImages; i++){
            images.push(
                <img src={tree} alt={i.toString()}/>
            );
        }

        return (
            images
        );
    }

    handleChange = (event) => {
        this.setState({numImages: event.target.value})
    }

    render () {
        return (
            <div className='content-container'>
                <div className='drop-down'>Choose number of images
                    <select value={this.state.numImages} onChange={this.handleChange} className='select-menu'>
                        <option value="0" className='option'>0</option>
                        <option value="1" className='option'>1</option>
                        <option value="2" className='option'>2</option>
                        <option value="3" className='option'>3</option>
                        <option value="4" className='option'>4</option>
                    </select>
                </div>
                <div className='image-container'>
                    {this.displayImages()}
                </div>
            </div>
            
        );
    }
}

export default Content
