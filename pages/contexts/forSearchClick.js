import {Component, createContext} from 'react'

export const ForSearchClick = createContext()

class ForSearchClickProvider extends Component {
    state = {
        searchClicked : false,
        searchIsClick : {imgDisplay : 'none', inputBR : '30px', inputB : 'solid #38c2d4 4px', bodyBG : 'brightness(50%)',searchesDis: 'grid', searchMargin: '515px'},
        searchNotClick : {imgDisplay : 'flex', inputBR : '0px 30px 30px 0px', inputB : 'none', bodyBG : 'brightness(100%)',searchesDis: 'none', searchMargin: '0px'}
    } 
    openSearch = () =>{
        if(this.state.searchClicked == false){
            this.setState({searchClicked : !this.state.searchClicked})
        }
    }
    closeSearch = () =>{
        if(this.state.searchClicked == true){
            this.setState({searchClicked : !this.state.searchClicked})
        }
    }
    render() { 
        return (
            <ForSearchClick.Provider value={{...this.state, openSearch: this.openSearch, closeSearch: this.closeSearch}}>
                {this.props.children}
            </ForSearchClick.Provider>
        );
    }
}
 
export default ForSearchClickProvider;