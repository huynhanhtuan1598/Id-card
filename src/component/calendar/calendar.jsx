import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { NavLink, Link } from "react-router-dom";
import './style.css';

export default function Calendar1() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss173 css-qixh7c">
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss174 css-1anx036">
            Ngày tháng
          </h6>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div class="MuiGrid-  root MuiGrid-item css-1wxaqej">
            <Calendar onChange={onChange} value={value} />
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              <button
                class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss175 css-1qelgoyed"
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
