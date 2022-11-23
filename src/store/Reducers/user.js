const initialState = {
  id: 0,
  name: "Nguyễn Văn A",
  birthday: "2000-01-01",
  company: "Enmasys",
  position: "Nhân Viên",
  phone: "0933155412",
  email:"test@gmail.com",
  address:"thủ đức",
  service:"test",
  internet:"google.com",
  account_number:"753-951-852",
  tax_code: "741852963741",
  e_commerce:"shopee.com",
  website: "https://vipid.app/login"
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":{
      return{
        ...state,
        email: action.payload.email,
      }
    }
    case "UPDATE_WEBSITE":{
      return{
        ...state,
        website: action.payload.website,
      }
    }
    case "UPDATE_ADDRESS":{
      return{
        ...state,
        address: action.payload.address,
      }
    }
    case "UPDATE_SERVICE":{
      return {
        ...state,
        service: action.payload.service,
      }
    }
    case "UPDATE_INTERNET":{
      return {
        ...state,
        internet: action.payload.internet,
      }
    }
    case "UPDATE_TAXCODE":{
      return {
        ...state,
        tax_code: action.payload.tax_code,
      }
    }
    case "UPDATE_ECOMMERCE":{
      return {
        ...state,
        e_commerce: action.payload.e_commerce,
      }
    }

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
    case "UPDATE_BANK": {
      return{
        ...state, 
        account_number: action.payload.account_number 
      };
    }
    default:
      return state;
  }
};
