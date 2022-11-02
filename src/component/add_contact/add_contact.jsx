import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

export default function add_contact() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss245 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link
            to="/"
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
          <h6 class="MuiTypography-root MuiTypography-h6 jss246 css-1anx036">
            Thêm thông tin
          </h6>
          <span class="MuiBadge-root css-1rzb3uu">
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root jss250 css-1rtnrqa"
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
            class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root jss247 css-1ujsas3"
            tabIndex="0"
            type="button"
            aria-controls="simple-menu"
            aria-haspopup="true"
          >
            <div class="MuiAvatar-root MuiAvatar-rounded jss248 css-g518jw">
              <img
                src="https://gcovipid.s3.ap-southeast-1.amazonaws.com/1664962581167-image?AWSAccessKeyId=AKIAZHG7SETL3RZHSOER&amp;Expires=1666372528&amp;Signature=jS4t5mGtWOkWlSGySECylF0ovqw%3D"
                class="MuiAvatar-img css-1hy9t21"
              />
            </div>
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ExpandMoreOutlinedIcon"
            >
              <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
            </svg>
            <span class="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
      </header>

      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div>
          {/* Phonenumber */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PhoneIcon"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Số điện thoại
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm số điện thoại
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <NavLink to="/phonenumber">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="MailOutlineIcon"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Email
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm thư điện tử
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <NavLink to="/email">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* website  */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PublicIcon"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Website
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm URL website
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <Link to="/Website">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* address */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="MapIcon"
                      >
                        <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Địa chỉ
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm địa chỉ
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <Link to="/Address">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <svg
                          id="psychology_black_24dp"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g id="Group_9" data-name="Group 9">
                            <rect
                              id="Rectangle_13"
                              data-name="Rectangle 13"
                              width="24"
                              height="24"
                              fill="none"
                            ></rect>
                          </g>
                          <g id="Group_11" data-name="Group 11">
                            <g id="Group_10" data-name="Group 10">
                              <path
                                id="Path_11"
                                data-name="Path 11"
                                d="M15.82,7.22l-1,.4a3,3,0,0,0-.67-.39L14,6.17A.2.2,0,0,0,13.8,6H12.2a.186.186,0,0,0-.19.17l-.15,1.06a2.8,2.8,0,0,0-.67.39l-1-.4a.193.193,0,0,0-.24.09l-.8,1.38a.2.2,0,0,0,.05.26l.85.66A1.666,1.666,0,0,0,10,10a2.561,2.561,0,0,0,.03.39l-.84.66a.189.189,0,0,0-.05.25l.8,1.39a.206.206,0,0,0,.25.09l.99-.4a2.86,2.86,0,0,0,.68.39L12,13.83a.2.2,0,0,0,.2.17h1.6a.2.2,0,0,0,.2-.17l.15-1.06a2.8,2.8,0,0,0,.67-.39l.99.4a.183.183,0,0,0,.24-.09l.8-1.39a.187.187,0,0,0-.05-.25l-.83-.66A2.561,2.561,0,0,0,16,10a2.376,2.376,0,0,0-.03-.39l.85-.66a.2.2,0,0,0,.05-.26l-.8-1.38A.21.21,0,0,0,15.82,7.22ZM13,11.43A1.43,1.43,0,1,1,14.43,10,1.43,1.43,0,0,1,13,11.43Z"
                                fill="currentcolor"
                              ></path>
                              <path
                                id="Path_12"
                                data-name="Path 12"
                                d="M19.94,9.06a7.064,7.064,0,0,0-6.53-6.05C13.27,3,13.14,3,13,3A7,7,0,0,0,6.08,9L4.15,12.48A1,1,0,0,0,5,14H6v2a2.006,2.006,0,0,0,2,2H9v3h7V16.32A7.016,7.016,0,0,0,19.94,9.06Zm-5.05,5.57-.89.42V19H11V16H8V12H6.7L8.03,9.67a4.991,4.991,0,1,1,6.86,4.96Z"
                                fill="currentcolor"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Dịch vụ
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm dịch vụ bạn cung cấp
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <Link to="/service">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* internet */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21.262"
                          height="24.414"
                          viewBox="0 0 21.262 24.414"
                        >
                          <g
                            id="megaphone"
                            transform="translate(-30.849 -0.946)"
                          >
                            <g
                              id="Group_31"
                              data-name="Group 31"
                              transform="translate(30.849 0.946)"
                            >
                              <g
                                id="Group_30"
                                data-name="Group 30"
                                transform="translate(0)"
                              >
                                <path
                                  id="Path_23"
                                  data-name="Path 23"
                                  d="M51.46,28.153l-8.4-8.4a2.228,2.228,0,0,0-3.423,2.822l-.012.058a15.548,15.548,0,0,1-4.266,7.97L31.5,34.455a2.227,2.227,0,0,0,0,3.151l2.1,2.1a2.227,2.227,0,0,0,3.151,0l.525-.525,3.676,3.676a2.228,2.228,0,0,0,3.151-3.151l-1.576-1.576.525-.525a2.227,2.227,0,0,0,0-3.151L42.7,34.1a15.55,15.55,0,0,1,5.879-2.511l.059-.012A2.231,2.231,0,0,0,51.46,31.3h0A2.231,2.231,0,0,0,51.46,28.153ZM35.7,38.656a.742.742,0,0,1-1.05,0l-2.1-2.1a.742.742,0,0,1,0-1.05l3.676-3.676,3.151,3.151Zm7.353,2.1a.743.743,0,1,1-1.05,1.05L38.33,38.131l1.05-1.05ZM40.431,36.03c.223-.223.558-.565,1.085-1.016l.491.491a.742.742,0,0,1,0,1.05l-.525.525Zm.032-2.069-3.214-3.214a17.009,17.009,0,0,0,3.616-6.888l6.486,6.486A17.008,17.008,0,0,0,40.462,33.961Zm9.947-3.708a.742.742,0,0,1-1.05,0l-8.4-8.4a.743.743,0,0,1,1.05-1.05l8.4,8.4A.744.744,0,0,1,50.41,30.253Z"
                                  transform="translate(-30.849 -19.098)"
                                  fill="currentcolor"
                                ></path>
                              </g>
                            </g>
                            <g
                              id="Group_33"
                              data-name="Group 33"
                              transform="translate(34.436 16.086)"
                            >
                              <g
                                id="Group_32"
                                data-name="Group 32"
                                transform="translate(0)"
                              >
                                <path
                                  id="Path_24"
                                  data-name="Path 24"
                                  d="M105.584,324.98a.743.743,0,0,0-1.05,0l-1.05,1.05a.743.743,0,0,0,1.05,1.05l1.05-1.05A.743.743,0,0,0,105.584,324.98Z"
                                  transform="translate(-103.266 -324.762)"
                                  fill="currentcolor"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Mạng xã hội
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm địa chỉ mạng xã hội
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <Link to="/ineternet">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ngân hàng */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AccountBalanceIcon"
                      >
                        <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Tài khoản ngân hàng
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm số tài khoản ngân hàng
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <Link to="/bank">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mã số thuế */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ReceiptOutlinedIcon"
                      >
                        <path d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Mã số thuế
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm mã số thuế
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <Link to="/taxcode  ">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Thương mai điện tử */}
          <div className="inf_add">
            <div class="jss252">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss251 css-o0rlmm">
                  <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ShoppingBagOutlinedIcon"
                      >
                        <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                  <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                      <p class="MuiTypography-root MuiTypography-body2 jss253 css-68o8xu">
                        Thương mại điện tử
                      </p>
                      <div>
                        <h6 class="MuiTypography-root MuiTypography-subtitle2 jss254 css-c7dfze">
                          Thêm cửa hàng thương mại điện tử
                        </h6>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                      <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                        <Link to="/ecommerce">
                          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss251 css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="NavigateNextIcon"
                            >
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
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
