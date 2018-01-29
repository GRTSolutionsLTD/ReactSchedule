//redux reducer
function update(state, payload) { 
    return state.date !== payload.date || state.in !==payload.in ? state : payload;
  }
  const reducer = (state = { data: [], FilterList: [] }, action) => {
      switch (action.type) {
          
          case 'ADD_RECORD': {  
          return{ 
                  data: [...state.data, action.payload],
                  FilterList: [...state.FilterList, action.payload]
              };
            }
          
            case 'UPDATE_RECORD': {
              return {
                  data: [...state.data.map((state) => update(state, action.payload))],
                  FilterList: [...state.FilterList.map((state) => update(state, action.payload))]
              };
          }
                
          case 'LOAD_RECORD':
              return { data: action.data, FilterList: action.data };
  
          case 'DELETE_RECORD': {
              return {
                  ...state, data: state.data.filter(c => c.id !== action.recordId),
                  FilterList: state.FilterList.filter(c => c.id !== action.recordId)
              };
          }
  
          default:
              return state;
      }
  }
  export default reducer