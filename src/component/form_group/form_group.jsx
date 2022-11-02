import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function form_group() {
  return (
    <div>
     <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss233 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to="/"
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss234 css-1anx036">
            Nhóm
          </h6>
          <span class="MuiBadge-root css-1rzb3uu">
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root jss218 css-1rtnrqa"
              tabIndex="0"
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
            tabIndex="0"
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
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss278 css-834p59">
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              class="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-filledPrimary css-1dhljxg"
              tabIndex="0"
              role="button"
            >
              <span class="MuiChip-label MuiChip-labelMedium css-9iedg7">
                Nhóm
              </span>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              class="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault css-genwvd"
              tabIndex="0"
              role="button"
            >
              <span class="MuiChip-label MuiChip-labelMedium css-9iedg7">
                Lời mời
              </span>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </div>
          </div>
        </div>
        <div><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-aoeo82"><p class="MuiTypography-root MuiTypography-body1 jss591 css-9l3uo3">Không có nhóm</p></div></div>
      </div>
    </div>
  );
}
