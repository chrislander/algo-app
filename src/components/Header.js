import React from 'react';
import Button from './Button'

class Header extends React.Component {

    render(){
        return (
                
            <div class="header">
                <Button
                    title="Create Array"
                    rtype="createArray"
                    handleClick = {this.handleClick.bind(this)}              
                />

                <Button 
                    title="Bubble Sort"
                    rtype="bubbleSort"
                    handleGenericSort = {this.handleGenericSort.bind(this)}                                        
                />

                <Button 
                    title="Selection Sort"
                    rtype="selectionSort"              
                    handleGenericSort = {this.handleGenericSort.bind(this)}      

                />                            
            </div>
        );
    }
}

export default Header;