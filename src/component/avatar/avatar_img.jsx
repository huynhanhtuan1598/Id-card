import React from "react";
import './avatar_style.css'

export default function Avatar_img() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-5poeop">
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
            Hình nền
          </div>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-4vau63">
        <div
          aria-hidden="true"
          class="MuiBackdrop-root css-xuaqpw"
        >
          <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
            <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
              <span
                class="MuiCircularProgress-root MuiCircularProgress-indeterminate MuiCircularProgress-colorInherit css-8yzpf7"
                role="progressbar"
               
              >
                <svg
                  class="MuiCircularProgress-svg css-13o7eu2"
                  viewBox="22 22 44 44"
                >
                  <circle
                    class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate css-14891ef"
                    cx="44"
                    cy="44"
                    r="20.2"
                    fill="none"
                    stroke-width="3.6"
                  ></circle>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="jss1366">
          <div class="jss1377" >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AddIcon"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
            <input type="file" class="jss1388"/>
          </div>
          <div class="jss1399 MuiBox-root css-6g79e0"></div>
        </div>
      </div>
    </div>
  );
}
