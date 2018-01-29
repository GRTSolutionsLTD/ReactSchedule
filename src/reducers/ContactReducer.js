function update(state, payload) {
   
    console.log(state, payload)
 // return state.date !== payload.date ? state : payload;
  return state.date !== payload.date || state.in !==payload.in ? state : payload;
}
const reducer = (state = { data: [], FilterList: [] }, action) => {
    switch (action.type) {
        

        case 'CHECK_CONTACT': {
            return { ...state, FilterList: state.FilterList.filter(c => c.date == action.payload)};      

        }
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
        
        
        case 'LOAD_CONTACT':
            return { data: action.data, FilterList: action.data };

        case 'DELETE_CONTACT': {
            return {
                ...state, data: state.data.filter(c => c.id !== action.contactId),
                FilterList: state.FilterList.filter(c => c.id !== action.contactId)
            };
        }

        case 'ADD_CONTACT': {
            return {
                data: [...state.data, action.payload],
                FilterList: [...state.FilterList, action.payload]
            };
        }

        case 'UPDATE_CONTACT': {
            return {
                data: [...state.data.map((state) => update(state, action.payload))],
                FilterList: [...state.FilterList.map((state) => update(state, action.payload))]
            };
        
        }

       case 'SEARCH_CONTACT': {
            var lower = action.payload.toLowerCase();
            var uper = action.payload.toUpperCase();
            return { ...state, FilterList: state.FilterList.filter(c => c.name.toLowerCase().substr(0, action.payload.length) == action.payload.toLowerCase())};
            
        }

        case 'REFRESH_CONTACT': {
            return { ...state, FilterList: state.data }
        }
        default:
            return state;
    }
}
export default reducer