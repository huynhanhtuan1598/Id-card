import React from "react";
import { Link } from "react-router-dom";
import './language.css'

export default function from_lang() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss173 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to="/"
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeStart MuiIconButton-sizeMedium css-7vbamj"
            tabindex="0"
            href="/profile"
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
          Ngôn ngữ
          </h6>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div class="MuiGrid-  root MuiGrid-item css-1wxaqej">
            <h6 class="MuiTypography-root MuiTypography-h6 css-1anx036">
            Bạn nói những ngôn ngữ nào?
            </h6>
            <p
              class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
              // style="color: rgb(120, 120, 120); margin-top: 10px;"
            >
              Ngôn ngữ bạn chọn được dùng để hiện thị nội dung của VIPID
            </p>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-zz6l4n">
              <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                  Tiếng Việt
                </p>
              </div>
              <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                <div class="jss214">
                  <span class="jss216">vi</span>
                  <span class="jss216">en</span>
                  <div
                    class="jss215"
                    // style="transform: translateX(30px);"
                  ></div>
                </div>
              </div>
              <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                  English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
