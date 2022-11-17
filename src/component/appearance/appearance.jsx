import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function appearance() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-8ahe0u">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to='/'
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-sizeLarge css-1x52uzk"
            tabIndex="0"
            aria-label="back"
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowBackIosNewIcon"
            >
              <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
            </svg>
            <span class="MuiTouchRipple-root css-w0pj6f"></span>
          </Link>
          <div class="MuiTypography-root MuiTypography-h6 css-1a3lqbo">
            Giao diện
          </div>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiBox-root css-zflzca">
          <div class="MuiAvatar-root MuiAvatar-circular css-u23m3z">
          <img src="https://gcovipid.s3.ap-southeast-1.amazonaws.com/1664962581167-image?AWSAccessKeyId=AKIAZHG7SETL3RZHSOER&amp;Expires=1666372528&amp;Signature=jS4t5mGtWOkWlSGySECylF0ovqw%3D" class="MuiAvatar-img css-1hy9t21"/>
          </div>
          <h5 class="MuiTypography-root MuiTypography-h5 css-zq6grw">
            Hàn Tiến Nhật
          </h5>
        </div>
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-1x9nne5">
          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 css-1s50f5r">
            <Link to="/theme">
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButtonBase-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-7z3f7e"
              tabIndex="0"
              type="button"
            >
              <div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1spp1h3">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PaletteIcon"
                >
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z"></path>
                </svg>
              </div>
              <div class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                Giao diện mẫu
              </div>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            </Link>
           
          </div>
          {/* <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 css-1s50f5r">
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButtonBase-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-7z3f7e"
              tabIndex="0"
              type="button"
            >
              <div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2zz4tu">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="OpacityIcon"
                >
                  <path d="M17.66 8 12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path>
                </svg>
              </div>
              <div class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                Màu chữ
              </div>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
          </div> */}
            {/* <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 css-1s50f5r">
              <button
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButtonBase-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-7z3f7e"
                tabIndex="0"
                type="button"
              >
                <div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1uyy6xh">
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="FormatColorFillIcon"
                  >
                    <path d="M16.56 8.94 7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10 10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5zM2 20h20v4H2v-4z"></path>
                  </svg>
                </div>
                <div class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                  Màu nền
                </div>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </div> */}
          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 css-1s50f5r">
            <Link to="/Avatar_img">
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButtonBase-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-7z3f7e"
              tabIndex="0"
              type="button"
            >
              <div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-19rggn4">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="InsertPhotoIcon"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                </svg>
              </div>
              <div class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                Hình nền
              </div>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
