import React from "react";
import { Link } from "react-router-dom";
import "./style_contact.css";

export default function contact_user() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss135 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to="/"
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
            Số cá nhân
          </h6>
        </div>
      </header>
      <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                <div className="input_name">
                  <div className="name_input">Số cá nhân</div>
                  <input name="value" value="0966625553"></input>
                </div>
              </div>
              <button
                class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss36 css-1qelgoy"
                tabindex="0"
                type="submit"
              >
                {" "}
                Lưu thay đổi
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </form>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
          <hr class="MuiDivider-root MuiDivider-fullWidth css-39bbo6"/>
            <button
              class="MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-fullWidth MuiButtonBase-root  css-1wrck3k"
              tabindex="0"
              type="button"
            >
              Xoá<span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
