import React from "react";
import './theme_style.css'

export default function theme() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-1x7skt0">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <a
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-sizeLarge css-1x52uzk"
            tabindex="0"
            aria-label="back"
            href="/appearance"
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
          </a>
          <div class="MuiTypography-root MuiTypography-h6 css-1a3lqbo">
            Giao diện
          </div>
        </div>
      </header>
      <div className="MuiContainer-root MuiContainer-maxWidthSm css-14sonfj">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-3 css-18tn63a">
            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-s18byi">
              <a class="jss1411" href="/theme/61d7a0d08295e3002304afb2">
                <div class="jss140">
                  <div
                    class="jss1433"
                    // style='background-image: url("https://gcovipid.s3.ap-southeast-1.amazonaws.com/1641521308185-image?AWSAccessKeyId=AKIAZHG7SETL3RZHSOER&amp;Expires=1668574514&amp;Signature=5RpcCfA9pt87EHwO9THn6jpbF0I%3D"); background-color: rgb(255, 255, 255);'
                  >
                    <span class="MuiRadio-root MuiRadio-colorPrimary MuiButtonBase-root MuiRadio-root MuiRadio-colorPrimary PrivateSwitchBase-root jss1444 css-1a5icme2">
                    <input class="PrivateSwitchBase-input css-1m9pwf3" type="radio" value=""/>
                      <span class="css-hyxlzm">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q8lw68"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="RadioButtonUncheckedIcon"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1c4tzn"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="RadioButtonCheckedIcon"
                        >
                          <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                        </svg>
                      </span>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <p class="MuiTypography-root MuiTypography-body1 jss1422 css-9l3uo3">
              Lunar New 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
