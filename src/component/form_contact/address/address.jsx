import React, { useEffect, useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";



export default function Address() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState(useSelector((state) => state.user.address ));
  const saveAddress = () => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: { address: address },
    });
    navigate('/')
  };


  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss187 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to="/add_contact"
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeStart MuiIconButton-sizeMedium css-7vbamj"
            tabIndex="0"
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss188 css-1anx036">
            Thêm địa chỉ
          </h6>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div>
              <p
                class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
              >
                Địa chỉ của bạn là
              </p>
              <p
                class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
              >
                Địa chỉ của bạn sẽ được hiển thị trên trang cá nhân
              </p>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
            <div class="select">
                      <select name="format" id="format">
                        <option selected disabled>
                          <p>Chọn loại địa chỉ</p>
                        </option>
                        <option value="address_home">
                          <p>Địa chỉ nhà</p>
                        </option>
                        <option value="address_company">
                          <p>Địa chỉ làm việc</p>
                        </option>
                      </select>
                    </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div class="jss192" >
                  <div class="jss193">Địa chỉ</div>
                  <input name="content" class="jss194" value={address} onChange={(e) => {setAddress(e.target.value)}} />
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth css-ibaxil">
                <button
                  class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss195 css-1qelgoy"
                  tabIndex="0"
                  type="submit"
                  onClick={saveAddress}
                >
                  Lưu<span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
