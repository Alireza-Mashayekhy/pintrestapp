import {Component ,createContext,useState } from "react";

export const ForSearch = createContext()

class ForSearchProvider extends Component {
    state = { 
        searchHovered : false,
        searchIsHover : {imgBG : '#d3d2d2', inputBG : '#d3d2d2'},
        searchNotHover : {imgBG :'#ebebeb' , inputBG : '#ebebeb'}
    } 
    searchHover = () =>{
        this.setState({searchHovered : !this.state.searchHovered})
    }
    render() { 
        return (
            <ForSearch.Provider value={{...this.state, searchHover: this.searchHover}}>
                {this.props.children}
            </ForSearch.Provider>
          )
    }
}
 
export default ForSearchProvider;
