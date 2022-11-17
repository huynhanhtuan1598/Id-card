import React from "react";
import { Link } from "react-router-dom";
import "./style_taxcode.css";

export default function Taxcode() {
  return (
    <div>
      {/* <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss330 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link
            to="/add_contact"
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss331 css-1anx036">
            Thêm mã số thuế
          </h6>
        </div>
      </header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div>
              <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                Mã số thuế của tôi là
              </p>
              <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                Mã số thuế sẽ được hiển thị trên trang cá nhân
              </p>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
              >
                <div class="MuiGrid-root MuiGrid-container jss5 css-1b1jvye">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-kxu0dz">
                    <div class="jss6">Chọn loại mã số thuế</div>
                    <input class="jss7" name="name" readonly="" value="" />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item css-1wxaqej"
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
              >
                <div class="jss8" >
                  <div class="jss9">Mã số thuế</div>
                  <input name="content" class="jss10" />
                </div>
              </div>
              <button
                class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss1111 css-1qelgoy"
                tabIndex="0"
                type="submit"
              >
                Lưu<span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </form>
          </div>
        </div>
      </div> */}
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss61 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link
            to="/add_contact"
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
          </Link>
          <h6 class="MuiTypography-root MuiTypography-h6 jss62 css-1anx036">
            <b>Thêm mã số thuế</b>
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
                Mã số thuế của tôi là
              </p>
              <p
                class="MuiTypography-root MuiTypography-body1 css-9l3uo3"
                // style="font-size: 15px; color: rgb(120, 120, 120);"
              >
                Mã số thuế sẽ được hiển thị trên trang cá nhân
              </p>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autocomplete="off">
              {/* <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                // style="margin-bottom: 20px;"
              >
                <div class="MuiGrid-root MuiGrid-container jss63 css-1b1jvye">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-kxu0dz">
                    <div class="jss64">Chọn loại mã số thuế</div>
                    <input class="jss65" name="name" readonly="" value="" />
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
              </div> */}
              <div class="select">
                <select name="format" id="format">
                  <option selected disabled>
                    <p>Chọn loại mã số thuế</p>
                  </option>
                  <option value="taxcode_user">
                    <p>Mã số thuế cá nhân</p>
                  </option>
                  <option value="taxcode_company">
                    <p>Mã số thuế công ty</p>
                  </option>
                </select>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                // style="margin-bottom: 20px;"
              >
                <div class="jss66">
                  <div class="jss678">
                    <b>Mã số thuế</b>
                  </div>
                  <input name="content" class="jss68" />
                </div>
              </div>
              <button
                class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss69 css-1qelgoy"
                tabindex="0"
                type="submit"
              >
                Lưu<span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
