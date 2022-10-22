import React from "react";
import { Link } from "react-router-dom";
import  './style_company.css';

export default function company() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss173 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to ="/"
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss174 css-1anx036">
            Công ty
          </h6>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div class="MuiGrid-  root MuiGrid-item css-1wxaqej">
            <h6 class="MuiTypography-root MuiTypography-h6 css-1anx036">
              Chỉnh sửa tên công ty
            </h6>
            <p
              class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
              // style="color: rgb(120, 120, 120); margin-top: 10px;"
            >
              Tên công ty của bạn được dùng để hiện thị trên trang cá nhân
            </p>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div  className="css_input">
                  <div className="css_cty">
                    <b>Công ty</b>
                  </div>
                  <input name="value" value="HN-TOP.VN"/>
                  </div>
              </div>
              <button
                class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss175 css-1qelgoy"
                tabindex="0"
                type="submit"
              >
                {" "}
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
