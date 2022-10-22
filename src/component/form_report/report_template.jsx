import React from "react";
import { Link } from "react-router-dom";
import './report_css.css'


export default function report_template() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss233 css-qixh7c">
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss234 css-1anx036">
            Báo cáo
          </h6>
          <span class="MuiBadge-root css-1rzb3uu">
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root jss218 css-1rtnrqa"
              tabindex="0"
              type="button"
            >
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NotificationsIcon"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
              </svg>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            <span class="MuiBadge-anchorOriginTopRightCircular MuiBadge-overlapCircular MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-invisible css-zfikqn"></span>
          </span>
          <button
            class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root jss215 css-1ujsas3"
            tabindex="0"
            type="button"
            aria-controls="simple-menu"
            aria-haspopup="true"
          >
            <div class="MuiAvatar-root MuiAvatar-rounded jss216 css-g518jw">
              <img
                src="https://gcovipid.s3.ap-southeast-1.amazonaws.com/1664962581167-image?AWSAccessKeyId=AKIAZHG7SETL3RZHSOER&amp;Expires=1666318818&amp;Signature=CK9%2B%2B2O0%2B7bt8Iq%2BeCATf72PBvY%3D"
                class="MuiAvatar-img css-1hy9t21"
              />
            </div>
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ExpandMoreOutlinedIcon"
              // style="font-size: 18px; margin-left: 3px;"
            >
              <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
            </svg>
            <span class="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb">
          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
            <div class="MuiGrid-root MuiGrid-container css-1b1jvye">
              <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                <h6 class="MuiTypography-root MuiTypography-h6 css-1anx036">
                  Tháng này
                </h6>
              </div>
              <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                <div>
                  <button
                    class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root jss235 css-1ujsas3"
                    tabindex="0"
                    type="button"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                  >
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FilterListIcon"
                    >
                      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r">
                    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss236 jss241 css-aoeo82">
                      <div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault jss242 css-154ogbs">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss242 css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="VisibilityIcon"
                        >
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                        </svg>
                      </div>
                      <p class="MuiTypography-root MuiTypography-body1 jss238 css-9l3uo3">
                        0
                      </p>
                      <p class="MuiTypography-root MuiTypography-body1 jss237 css-9l3uo3">
                        lượt xem
                      </p>
                    </div>
                  </div>
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r">
                    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss236 jss243 css-aoeo82">
                      <div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault jss244 css-154ogbs">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss244 css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="PersonAddIcon"
                        >
                          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                      </div>
                      <p class="MuiTypography-root MuiTypography-body1 jss238 css-9l3uo3">
                        4
                      </p>
                      <p class="MuiTypography-root MuiTypography-body1 jss237 css-9l3uo3">
                        lưu liên lạc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                <h6 class="MuiTypography-root MuiTypography-h6 jss245 css-1anx036">
                  Chi tiết
                </h6>
              </div>
              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-67l5gl">
                  <div
                    class="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-1iji0d4"
                    tabindex="0"
                    role="button"
                    aria-expanded="false"
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div class="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-17o5nyn">
                      <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss247 css-3nargb">
                        <div
                          class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 css-o0rlmm"
                          // style="color: rgb(22, 95, 230);"
                        >
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="PhoneIcon"
                          >
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                          </svg>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                          <p class="MuiTypography-root MuiTypography-body1 jss250 css-9l3uo3">
                            Số cá nhân{" "}
                          </p>
                          <p class="MuiTypography-root MuiTypography-body1 jss249 css-9l3uo3">
                            0966625553
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ExpandMoreIcon"
                      >
                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
