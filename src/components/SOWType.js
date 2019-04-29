import React from "react";

class SOWType extends React.Component {
  render() {
    console.log(this.props); //you should have access to componentList
    return (
      <div className="form-group">
        <label htmlFor={this.props.name} className="form-label">
          {this.props.title}
          <h6>{this.props.subtitle}</h6>
        </label>
        <div className="checkbox-group">
          {this.props.options.map(option => {
            return (
              <label key={option}>
                <input
                  className="form-checkbox"
                  name={this.props.setName}
                  onChange={this.props.controlFunc}
                  value={option}
                  checked={this.props.selectedOptions.indexOf(option) > -1}
                  type={this.props.type}
                />
                {option}
                {this.props.selectedOptions.indexOf(option) > -1 ? (
                  <h5>{this.props.componentList[option]}</h5>
                ) : (
                  " "
                )}
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}

// const SOWType = props => {
//   console.log(props);
//   return (
//     <div className="form-group">
//       <label htmlFor={props.name} className="form-label">
//         {props.title}
//         <h6>{props.subtitle}</h6>
//       </label>
//       <div className="checkbox-group">
//         {props.options.map(option => {
//           return (
//             <label key={option}>
//               <input
//                 className="form-checkbox"
//                 name={props.setName}
//                 onChange={props.controlFunc}
//                 value={option}
//                 checked={props.selectedOptions.indexOf(option) > -1}
//                 type={props.type}
//               />
//               {option}
//             </label>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default SOWType;
