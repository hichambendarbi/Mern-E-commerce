
import React from 'react';
import styled from 'styled-components'

class FloatingLabelInput extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        className: "",
        opacity: 0,
        color: "gray",
        transition: "all 0.2s linear"
      };
      
      this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(evt) {
      if(evt.target.value !== '') {
        this.setState({
            className: "on",
            opacity:1,
            color: "#f5770b",
            
        });
      }
      else {
        this.setState({
            className: "",
            opacity: 0,
            color: "gray",
        });
      } 
    }
    
    render() {
      return (
    <FlotintContainer>
        <Label className={this.state.className} style={{
            opacity: this.state.opacity,
            color: this.state.color,
            transition: this.state.transition
        }}>{this.props.placeholder}</Label>
        <Input placeholder={this.props.placeholder} value={this.props.value} name={this.props.name} onChange={this.props.onChange} onKeyUp={this.handleInput}/>      
    </FlotintContainer>
        );
    }
  }

  const Label = styled.label`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 12px;
  color: "gray"
  transition: all 0.2s linear;
  opacity: 0;
  font-weight: normal;
  `

  const Input = styled.input`
  font-size: 16px;
  height: 35px;
  border: none;
  padding: 0 5px;
  `

  const FlotintContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-bottom: 45px;
  border-bottom: 1px solid #c7c7cd;
  `
  
export default FloatingLabelInput