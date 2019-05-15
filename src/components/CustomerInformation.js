import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleTextArea } from "../redux/actions/pdfGenActions";

const CustomerInformation = (
  // dispatch,
  // handleChange,
  // title,
  // value,
  // placeholder
  props
) => {
  console.log(props);
  return (
    // console.log(mapStateToProps)
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        /* placeholder={placeholder} */
        value={props.customerInformation}
        onChange={props.handleTextArea}
        /* onChange={(e) =>
          props.dispatch({
            type: HANDLE_TEXT_AREA,
            data: e.target.value
          })
        } */

        /* handleChange(e.target.value)} */
        /* rows={props.rows}
        style={props.resize ? null : { resize: "none" }}
        name={props.name} */
      />
      <p>{props.customerInformation}</p>
    </div>
  );
};

CustomerInformation.propTypes = {
  handleTextArea: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string
};

CustomerInformation.defaultProps = {
  handleChange: (e) => console.info(`New value : ${e.target.value}`),
  title: null,
  value: null
};

const mapStateToProps = (state) => {
  return {
    customerInformation: state.customerInformation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTextArea: (e) => {
      console.log(e.target.value);
      dispatch({
        type: "HANDLE_TEXT_AREA",
        text: e.target.value
      });
    }
  };
};

export default CustomerInformation;

connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerInformation);
