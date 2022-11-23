import React, { useEffect, useState }  from "react";
import { Link,  useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";


export default function Ecommerce() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [e_commerce, setEcommerce] = useState(useSelector((state) => state.user.e_commerce ));
  const saveE_commerce = () => {
    dispatch({
      type: "UPDATE_ECOMMERCE",
      payload: { e_commerce: e_commerce},
    });
    navigate('/')
  };



  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss310 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to='/add_contact'
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
          <h6 class="MuiTypographyx-root MuiTypography-h6 jss311 css-1anx036">
            Thêm cửa hàng thương mại điện tử
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
                Địa chỉ cửa hàng thương mại điện tử của tôi là
              </p>
              <p
                class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
              >
                Cửa hàng thương mại điện tử sẽ được hiện thị trên trang cá nhân
              </p>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              {/* <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div class="MuiGrid-root MuiGrid-container jss27 css-1b1jvye">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-kxu0dz">
                    <div class="jss28">Chọn sàn thương mại điện tử</div>
                    <input class="jss29" name="name" readonly="" value="" />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item css-1wxaqej"
                  >
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ChevronRightIcon"
                    >
                      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                  </div>
                </div>
              </div> */}
               <div class="select">
                <select name="format" id="format">
                  <option selected disabled>
                    <p>Chọn sàn thương mại điện tử</p>
                  </option>
                  <option value="shopee">
                    <p>Shopee</p>
                  </option>
                  <option value="tiki">
                    <p>Tiki</p>
                  </option>
                  <option value="lazada">
                    <p>Lazada</p>
                  </option>
                </select>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div class="jss30" >
                  <div class="jss31">Tên cửa hàng</div>
                  <input name="shortName" class="jss32" />
                </div>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div class="jss30" >
                  <div class="jss31">
                    Địa chỉ cửa hàng thương mại điện tử của tôi là
                  </div>
                  <input name="content" class="jss32"  value={e_commerce} onChange={(e) => {setEcommerce(e.target.value)}}/>
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth css-ibaxil">
                <button
                  class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss33 css-1qelgoy"
                  tabIndex="0"
                  type="submit"
                  onClick={saveE_commerce }
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
