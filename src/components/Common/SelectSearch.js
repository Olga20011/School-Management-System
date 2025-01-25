import React from "react";
import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    //borderBottom: '2px dotted green',
    color: state.isSelected ? "#FFFFFF" : "black",
    //backgroundColor: state.isSelected ? '#1c1c38' : 'white',
    // color: '#000000',
    textAlign: "left",
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    display: "flex",
    border: state.isFocused ? "2px solid #007bff" : "1px solid #ddd",
    boxShadow: state.isFocused ? "0 0 5px rgba(0, 123, 255, 0.5)" : "none",
    "&:hover": {
      border: "1px solid #ccc",
    },
    // marginTop:'-7px',
    // borderRight:'0px',
    // borderLeft:'0px',
    // borderRadius:'0px',
    // marginLeft:'-12px'
    // marginTop: "5%",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000000",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "16px",
  }),
  container: (provided) => ({
    ...provided,
    // marginLeft:'-12px',
    padding: "0px",
    border: "0px",
  }),
  hasFocus: (provided) => ({
    ...provided,
    // marginLeft:'-12px',
    border: "10px",
  }),
};

class SelectSearch extends React.Component {
  render() {
    return (
      <Select
        options={this.props.options}
        className={this.props.className}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        value={this.props.value}
        styles={customStyles}
        onKeyDown={this.props.onType}
      />
    );
  }
}

export default SelectSearch;
