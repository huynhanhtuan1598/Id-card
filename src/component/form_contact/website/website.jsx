import React from "react";
import { Link } from "react-router-dom";

export default function website() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss170 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to ='/add_contact'
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss171 css-1anx036">
            Thêm website
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
                Địa chỉ website của bạn là
              </p>
              <p
                class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
              >
                Địa chỉ website của bạn sẽ được hiển thị trên trang cá nhân.
                Khách hàng có thể xem website của bạn.
              </p>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div class="jss172" >
                  <div class="jss173">Tên hiển thị</div>
                  <input name="shortName" class="jss174" />
                </div>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div class="jss172" >
                  <div class="jss173">Website</div>
                  <input name="content" class="jss174" />
                </div>
              </div>
              <p class="MuiTypography-root MuiTypography-body2 css-68o8xu">
                (*) Đường dẫn website phải có{" "}
                <div class="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-wk4je1">
                  <span class="MuiChip-label MuiChip-labelMedium css-9iedg7">
                    https://
                  </span>
                </div>{" "}
                hay{" "}
                <div class="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-wk4je1">
                  <span class="MuiChip-label MuiChip-labelMedium css-9iedg7">
                    http://
                  </span>
                </div>
              </p>
              <div class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth css-ibaxil">
                <button
                  class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss175 css-1qelgoy"
                  tabIndex="0"
                  type="submit"
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
