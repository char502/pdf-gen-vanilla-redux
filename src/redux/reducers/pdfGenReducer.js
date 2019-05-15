// const pdfGeneratorMainDefaultState = {
//   id: 0
// };

const pdfGeneratorMainDefaultState = {
  serviceRegion: ["EMEA", "APAC", "NA & LATAM"],
  sowType: [
    "ProductSow",
    "Teradata Customer SOW",
    "Custom Professional Services SOW"
  ],
  sowTypeSelectedOption: [],
  customerInformation: "text from state",
  checkboxes: [],
  product_families: [],
  productFamilyNew: {
    product_family: ""
  },
  formSubmit: {
    id: null,
    areaSelectedOption: []
    // customerInformation: "",
    // sowTypeSelectedOption: [],
    // prodSowTestInformation: "",
    // customProfServicesInformation: "",
  }
};

// const formPayload = {
//   areaSelectedOption: this.state.areaSelectedOption,
//   customerInformation: this.state.customerInformation,
//   sowTypeSelectedOption: this.state.sowTypeSelectedOption,
//   prodSowTestInformation: this.state.prodSowTestInformation,
//   customProfServicesInformation: this.state.customProfServicesInformation
// };

export default (state = pdfGeneratorMainDefaultState, action) => {
  console.log("default", action);
  switch (action.type) {
    case "ADD_FORM":
      return {
        ...state,
        id: action.id
      };
    case "HANDLE_TEXT_AREA":
      // const custInfo = { ...state.customerInformation };
      return {
        ...state,
        customerInformation: action.text
      };
    default:
      return state;
  }
};
