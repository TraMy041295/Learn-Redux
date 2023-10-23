// const initState = {
//     count1: 0,
//     count2: 0

// }


// const countReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "count1/increment":
//             return {
//                 ...state,
//                 count1: state.count1 + parseInt(action.payload)
//             }
//         case "count1/decrement":
//             return {
//                 ...state,
//                 count1: state.count1 - parseInt(action.payload)
//             }
//         case "count2/increment":
//             return {
//                 ...state,
//                 count2: state.count2 + parseInt(action.payload)
//             }
//         case "count2/decrement":
//             return {
//                 ...state,
//                 count2: state.count2 - parseInt(action.payload)
//             }
//         default:
//             return state
//     }
// }

// export default countReducer