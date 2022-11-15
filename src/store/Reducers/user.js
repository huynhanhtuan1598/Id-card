const initialState = {
  id: 0,
  name: "Nguyễn Văn A",
  birthday: "2000-01-01",
  company: "Enmasys",
  position: "Nhân Viên",
  phone: "0933155412",
  email:"",
  address:"",
  service:"",
  internet:"",
  account_number:"",
  tax_code: "",
  e_commerce:""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_ID": {
      return {
        ...state,
        id: action.payload.id,
      };
    }
    case "EDIT_NAME": {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    case "EDIT_PHONE": {
      return {
        ...state,
        phone: action.payload.phone,
      };
    }
    case "EDIT_BIRTHDAY": {
      return {
        ...state,
        birthday: action.payload.birthday,
      };
    }
    case "EDIT_COMPANY": {
      return {
        ...state,
        company: action.payload.company,
      };
    }
    case "EDIT_POSITION": {
      return {
        ...state,
        position: action.payload.position,
      };
    }
    case "SET_ACCOUNT": {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        birthday: action.payload.birthday,
        company: action.payload.company,
        position: action.payload.position,
      };
    }
    default:
      return state;
  }
};
