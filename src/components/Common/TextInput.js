import React from "react";
import SelectSearch from "./SelectSearch";
import ActivityLoader from "./ActivityLoader";
class TextInput extends React.Component {
  render() {
    const inputType = this.props.type || "text";

    return (
      <div className="form-group row">
        <label
          style={this.props.labelStyle}
          className={`col-form-label ${
            this.props.wrap ? "col-sm-12" : "col-sm-3 "
          }`}
        >
          {this.props.label}
        </label>
        <div className={`${this.props.wrap ? "col-sm-12" : "col-sm-9"}`}>
          <div className="input-group mb-0">
            {this.props.leftIcon && (
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {!this.props.loading && (
                    <>
                      {!this.props.leftComponent && (
                        <i className={this.props.leftIcon}></i>
                      )}
                      {this.props.leftComponent}
                    </>
                  )}

                  {this.props.loading && (
                    <ActivityLoader inline={true} size={16.8} />
                  )}
                </span>
              </div>
            )}

            {inputType !== "textarea" && inputType !== "select" && (
              <input
                type={inputType || "text"}
                className="form-control"
                placeholder={this.props.placeholder || this.props.label}
                onChange={this.props.onChange}
                value={this.props.value}
                autoFocus={this.props.autoFocus}
                readOnly={this.props.readonly || false}
                required={this.props.required || false}
                name={this.props.name}
              />
            )}

            {inputType === "textarea" && (
              <textarea
                type={inputType}
                className="form-control"
                placeholder={this.props.placeholder || this.props.label}
                onChange={this.props.onChange}
                value={this.props.value}
                readOnly={this.props.readonly || false}
                required={this.props.required || false}
              />
            )}

            {inputType === "select" && (
              <SelectSearch
                placeholder={this.props.placeholder || this.props.label}
                className="form-control"
                options={this.props.options}
                onChange={this.props.onChange}
                onType={this.props.onType}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TextInput;
