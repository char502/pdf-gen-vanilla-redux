// const HANDLE_SOW_TYPE_CHECKBOX = HANDLE_SOW_TYPE_CHECKBOX;
const HANDLE_TEXT_AREA = "HANDLE_TEXT_AREA";

export const addForm = ({ id = 0 } = {}) => ({
  type: "ADD_FORM",
  id
});

// export const handleSOWTypeCheckbox = (e, sowTypeSelectedOption) => {
//   const newSelection = e.target.value;
//   let newSelectionArray;

//   if (sowTypeSelectedOption.indexOf(newSelection) > -1) {
//     newSelectionArray = sowTypeSelectedOption.filter(
//       (item) => item !== newSelection
//     );
//   } else {
//     newSelectionArray = [...sowTypeSelectedOption, newSelection];
//   }
//   return {
//     type: HANDLE_SOW_TYPE_CHECKBOX,
//     sowTypeSelectedOption: newSelectionArray
//   };
// };

export const handleTextArea = (text) => ({
  type: HANDLE_TEXT_AREA,
  text
});
