const initialState = {
    id: 0,
    name: "Nguyễn Văn A",
    birthday: "2000-01-01",
    company: "Enmasys",
    position: "Nhân Viên"
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_ID':{
            return {
                ...state,
                id: action.payload.id
            }
        }
        case 'EDIT_NAME': {
            return {
                ...state,
                name: action.payload.name,
            }
        }
        case 'EDIT_BIRTHDAY': {
            return {
                ...state,
                birthday: action.payload.birthday,
            }
        }
        case 'EDIT_COMPANY': {
            return {
                ...state,
                company: action.payload.company,
            }
        }
        case 'EDIT_POSITION': {
            return {
                ...state,
                position: action.payload.position,
            }
        }
        default:
            return state;
    }
};