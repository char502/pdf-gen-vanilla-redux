import React from "react";
// import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraDataSow from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";
// import ProdSOWExtOptions from "./ExtendedOptions/ProdSOWExtOptions";
// import TeradataExtOptions from "./ExtendedOptions/TeradataExtOptions";
// import CustomProfExtOptions from "./ExtendedOptions/CustomProfExtOptions";
// import PropTypes from "prop-types";
// import SowType from "./SOWType";

class PdfGenFormContainer extends React.Component {
  // constructor(props) {
  // super(props);
  //   // this.state = {
  //   //   id: null,
  //   //   serviceRegion: ["EMEA", "APAC", "NA & LATAM"],
  //   //   areaSelectedOption: [],
  //   //   customerInformation: "",
  //   //   sowType: [
  //   //     "ProductSow",
  //   //     "Teradata Customer SOW",
  //   //     "Custom Professional Services SOW"
  //   //   ],
  //   //   sowTypeSelectedOption: [],
  //   //   // prodSowTestInformation: "",
  //   //   // customProfServicesInformation: "",
  //   //   checkboxes: [],
  //   //   product_families: [],
  //   //   productFamilyNew: {
  //   //     product_family: ""
  //   //   }
  //   // };
  //   this.componentList = {
  //     ProductSow: (
  //       <ProdSOWExtOptions
  //         title={"Extended Customer Info"}
  //         name={"Extended Customer Info"}
  //         type={"text"}
  //         placeholder={"Extended Text Area"}
  //         value={this.state.prodSowTestInformation}
  //         handleExtText={this.handleExtendedTextArea}
  //       />
  //     ),
  //     "Teradata Customer SOW": <TeradataExtOptions />,
  //     "Custom Professional Services SOW": (
  //       <CustomProfExtOptions
  //         title={"Custom Options Info"}
  //         name={"Custom Options Info"}
  //         type={"text"}
  //         placeholder={"Custom Options Text Area"}
  //         value={this.state.customProfServicesInformation}
  //         handleCustProf={this.handleCustomProfTextArea}
  //       />
  //     )
  //   };
  //   this.handleFormSubmit = this.handleFormSubmit.bind(this);
  //   this.handleClearForm = this.handleClearForm.bind(this);
  //   this.handleTextArea = this.handleTextArea.bind(this);
  //   this.renderProdFamilies = this.renderProdFamilies.bind(this);
  //   this.getProductFamilies = this.getProductFamilies.bind(this);
  //   this.addProductFamily = this.addProductFamily.bind(this);
  //   // this.checkForDups = this.checkForDups.bind(this);
  //   // SOW Type Methods
  //   this.handleRadioBtns = this.handleRadioBtns.bind(this);
  //   this.handleSOWTypeCheckbox = this.handleSOWTypeCheckbox.bind(this);
  //   // Extended Sow Type methods
  //   // this.handleExtendedTextArea = this.handleExtendedTextArea.bind(this);
  // }

  // componentWillMount() {
  //   this.props.setUpEditableForm();
  // }

  // === SOW Type group ===
  componentDidMount = () => {
    this.getProductFamilies();
  };

  getProductFamilies = () => {
    fetch("http://localhost:4000/product_familes")
      .then((response) => response.json())
      .then((response) => this.setState({ product_families: response.data }))
      .catch((err) => console.error(err));
  };

  // checkForDups = () => {
  //   const { productFamilyNew, product_families } = this.state;
  //   console.log(product_families.indexOf(productFamilyNew.product_family));

  //   if (product_families.indexOf(productFamilyNew.product_family) === -1) {
  //     alert("this is a duplicate entry!");
  //   }
  // };

  // === add entered data into sql database ===

  // == Middleware for redux store? ==
  addProductFamily = () => {
    const { productFamilyNew /* product_families */ } = this.state;
    fetch(
      `http://localhost:4000/product_familes/add?product_family=${
        productFamilyNew.product_family
      }`
    )
      .then(this.getProductFamilies)
      // .then(this.checkForDups())
      .catch((err) => console.error(err));
  };
  // === end of add entered data into sql database ===

  // === End of SOW Type group ===

  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      areaSelectedOption: this.state.areaSelectedOption,
      customerInformation: this.state.customerInformation,
      sowTypeSelectedOption: this.state.sowTypeSelectedOption,
      prodSowTestInformation: this.state.prodSowTestInformation,
      customProfServicesInformation: this.state.customProfServicesInformation
    };
    // console.log("handleFormSubmit Clicked");
    console.log(formPayload);
    // alert(formPayload);
    // this.handleClearForm(e);
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      areaSelectedOption: [],
      customerInformation: "",
      sowTypeSelectedOption: [],
      prodSowTestInformation: "",
      customProfServicesInformation: ""
    });
  }

  // handleSOWTypeCheckbox(e) {
  //   const newSelection = e.target.value;
  //   let newSelectionArray;

  //   if (this.state.sowTypeSelectedOption.indexOf(newSelection) > -1) {
  //     newSelectionArray = this.state.sowTypeSelectedOption.filter(
  //       (item) => item !== newSelection
  //     );
  //   } else {
  //     newSelectionArray = [...this.state.sowTypeSelectedOption, newSelection];
  //   }
  //   this.setState(
  //     {
  //       sowTypeSelectedOption: newSelectionArray
  //     },
  //     () =>
  //       console.log("sow Type Selection: ", this.state.sowTypeSelectedOption)
  //   );
  // }

  // handleTextArea(e) {
  //   this.setState(
  //     {
  //       customerInformation: e.target.value
  //     },
  //     () => console.log("Customer Information:", this.state.customerInformation)
  //   );
  // }

  handleExtendedTextArea = function(e) {
    console.log("This happens?", e.target.value);
    this.setState(
      {
        prodSowTestInformation: e.target.value
      },
      () => console.log("prodSow Info:", this.state.prodSowTestInformation)
    );
  }.bind(this);

  handleCustomProfTextArea = function(e) {
    console.log("This also happens", e.target.value);
    this.setState(
      {
        customProfServicesInformation: e.target.value
      },
      () =>
        console.log(
          "Custom Prof Serv Info:",
          this.state.customProfServicesInformation
        )
    );
  }.bind(this);

  handleRadioBtns(e) {
    this.setState(
      {
        areaSelectedOption: [e.target.value]
      },
      () => console.log("Region", this.state.areaSelectedOption)
    );
  }

  renderProdFamilies = ({ idprod_family, product_family }) => (
    <div key={idprod_family}>{product_family}</div>
  );

  render() {
    // const { product_families, productFamilyNew } = this.state;
    // const {
    //   addChange
    //   // discardChanges,
    //   // formView,
    //   // formEdit
    //   // hasChanged
    //   // saveChanges
    // } = this.props;
    // console.log(this.props);

    // if (!formEdit || !formView) {
    //   return <span>LOADING</span>;
    // }
    console.log(this.props);
    return (
      <div>
        <CustomerInformation
          customerInformation={this.customerInformation}
          /* handleChange={(newValue) => addChange("field", newValue)}
          title="Customer Information"
          value={this.props.value} */
          /* rows={10}
          resize={false}
          name={"customerInformation"}
          value={this.state.customerInformation}
          handleChange={this.handleTextArea}
          placeholder={"Enter Customer Information Here"} */
        />
      </div>
    );
  }
}

// PdfGenFormContainer.propTypes = {
//   // addChange: PropTypes.func.isRequired,
//   // discardChanges: PropTypes.func.isRequired,
//   formView: PropTypes.shape({
//     title: PropTypes.string,
//     field: PropTypes.string
//   }),
//   formEdit: PropTypes.shape({
//     title: PropTypes.string,
//     field: PropTypes.string
//   }),
//   hasChanged: PropTypes.bool
//   // saveChanges: PropTypes.func.isRequired,
//   // setUpEditableForm: PropTypes.func.isRequired
// };

// PdfGenFormContainer.defaultProps = {
//   formView: null,
//   formEdit: null,
//   hasChanged: true
// };

export default PdfGenFormContainer;

// {
/* <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          <ServiceRegionRadioBtns
            title={"Service Region"}
            setName={"Service Region"}
            controlFunc={this.handleRadioBtns}
            type={"radio"}
            options={this.state.serviceRegion}
            selectedOptions={this.state.areaSelectedOption}
          />
          <CustomerInformation
            title={"Customer Information"}
            rows={10}
            resize={false}
            name={"customerInformation"}
            value={this.state.customerInformation}
            handleChange={this.handleTextArea}
            placeholder={"Enter Customer Information Here"}
          />
          <SowType
            title={"SOW Type"}
            setName={"SOW Type"}
            subtitle={"What type of SOW do you want to generate?"}
            type={"checkbox"}
            controlFunc={this.handleSOWTypeCheckbox}
            options={this.state.sowType}
            selectedOptions={this.state.sowTypeSelectedOption}
            //Props for extended components
            componentList={this.componentList}
            /* {...propsForProdSOWExtOptions} */
/* value={this.state.prodSowTestInformation} */
/* handleExtText={this.handleExtendedTextArea} */
/* Custom professional services */
/* value={this.state.customProfServicesInformation} */
/* handleCustProf={this.handleCustomProfTextArea} */
// }
//       />
//       <div>
//         <input
//           type="submit"
//           className="btn btn-primary float-right"
//           value="Submit"
//         />
//         <button
//           /* type="submit" */
//           className="btn btn-primary float-left"
//           onClick={this.handleClearForm}
//         >
//           Clear Form
//         </button>
//       </div>
//     </form>
//     <br />
//     <br />
//     <div>{product_families.map(this.renderProdFamilies)}</div>
//     <div>
//       <input
//         value={productFamilyNew.productFamily}
//         placeholder={"Add New Product Family"}
//         onChange={(e) =>
//           this.setState({
//             productFamilyNew: {
//               ...productFamilyNew,
//               product_family: e.target.value
//             }
//           })
//         }
//       />
//       <button onClick={this.addProductFamily}>Add Product Family</button>
//       <br />
//       <br />
//     </div>
//   </div> */
// );
