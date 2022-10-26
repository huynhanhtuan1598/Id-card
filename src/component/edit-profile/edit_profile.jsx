import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";



export default function Edit_profile() {
  const userSlice = createSlice({
    name: "user",
    initialState: "",
    reducers: {
      saveUser: (state, action) => action.payload
    }
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(userSlice.actions.saveUser(name));
    console.log(e.target.value)
    navigate("/");
  };

  const handleChangeName = (text) => {
    setName(text);
  };

  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss135 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link
            to="/"
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeStart MuiIconButton-sizeMedium css-7vbamj"
            tabindex="0"
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowBackIcon"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
            <span class="MuiTouchRipple-root css-w0pj6f"></span>
          </Link>
          <h6 class="MuiTypography-root MuiTypography-h6 jss136 css-1anx036">
            Họ tên
          </h6>
        </div>
      </header>
      <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <h6 class="MuiTypography-root MuiTypography-h6 css-1anx036">
              Chỉnh sửa họ tên
            </h6>
            <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
              Họ tên của bạn được dùng để hiện thị trên trang cá nhân. Khách
              hàng thấy được, nhận biết và thêm vào danh bạ.
            </p>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off" onSubmit={handleSubmitForm}>
              <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                <div className="input_name">
                  <div className="name_input">Họ tên</div>
                  {/* <input id="value_name"  name="value" ></input> */}
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => handleChangeName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                </div>
              </div>
              <button
                class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss36 css-1qelgoy"
                tabindex="0"
                type="submit"
                disabled={!name}
              > 
                Lưu thông tin
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
