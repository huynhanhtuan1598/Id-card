import React from "react";
import "../style.css";
export default function internet() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss241 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <a
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeStart MuiIconButton-sizeMedium css-7vbamj"
            tabindex="0"
            href="/add-contact"
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
          </a>
          <h6 class="MuiTypography-root MuiTypography-h6 jss242 css-1anx036">
            Thêm mạng xã hội
          </h6>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div>
              <p
                class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
                // style="font-size: 19px; margin-bottom: 5px;"
              >
                Thêm mạng xã hội
              </p>
              <p
                class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
                // style="font-size: 15px; color: rgb(120, 120, 120);"
              >
                Địa chỉ xã hội của bạn sẽ được hiển thị trên trang cá nhân.
                Khách hàng có thể xem xã hội của bạn.
              </p>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                // style="margin-bottom: 20px;"
              >
                <div class="MuiGrid-root MuiGrid-container jss243 css-1b1jvye">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-kxu0dz">
                    <div class="jss244">Chọn mạng xã hội</div>
                    <input class="jss246" name="name" readonly="" value="" />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item css-1wxaqej"
                    // style="margin-right: 10px;"
                  >
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ChevronRightIcon"
                    >
                      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                // style="margin-bottom: 20px;"
              >
                <div class="jss249" style="opacity: 1;">
                  <div class="jss250">Tên hiển thị</div>
                  <input name="shortName" class="jss251" />
                </div>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                // style="margin-bottom: 20px;"
              >
                <div class="jss249" style="opacity: 1;">
                  <div class="jss250">Địa chỉ mạng xã hội</div>
                  <input name="content" class="jss251" />
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth css-ibaxil">
                <button
                  class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss252 css-1qelgoy"
                  tabindex="0"
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
