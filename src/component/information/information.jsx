import React, { useEffect, useState } from "react";
import "./infor.css";
import user from "../../asset/img/user.jfif";
import { NavLink, Link } from "react-router-dom";
import QR from "../../asset/img/qr.png";
import {useSelector } from "react-redux";

export default function Information() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };


  return (
    <div className="jss74">
      <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 MuiGrid-direction-xs-column jss72 css-18xbx79">
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div className="MuiBox-root css-dfpqc0">
              <div className="MuiAvatar-root MuiAvatar-circular jss85 css-3i9vrz">
                {/* <img src={user} class="MuiAvatar-img css-1hy9t21" /> */}
                {avatar && <img src={avatar.preview} alt="" width="100%"  class="MuiAvatar-img css-1hy9t21"/>}
              </div>

              <div class="MuiBox-root css-tcfod9">
                <label for="Penimg" className="label-pen">
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="EditIcon"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                  </svg>
                </label>
              </div>

              <input
                className="input-pen"
                id="Penimg"
                type="file"
                onChange={handleAvatar}
              />
              {/* <div class="MuiBox-root css-tcfod9">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="EditIcon"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                </svg>
              </div> */}
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item jss73 css-1wxaqej">
            <div className="css-ikzlcq">
              <h6 class="MuiTypography-root MuiTypography-subtitle2 css-c7dfze">
                Giới thiệu
              </h6>
              <div className="jss88">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
                    <div className="MuiGrid-root MuiGrid-container css-1cn3yto">
                      <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="AccountCircleIcon"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                    <div className="MuiGrid-root MuiGrid-container css-v3z1wi">
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                        <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                          Họ tên
                        </p>
                        <div>
                          <h6 class="MuiTypography-root MuiTypography-subtitle1 jss91 css-16rlg6l">
                            {user}
                          </h6>
                        </div>
                      </div>
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                        <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                          <Link strict to="/edit_profile">
                            <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
              <span>
                <div class="jss88">
                  <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
                      <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                        <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CalendarMonthOutlinedIcon"
                          >
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
                          </svg>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                      <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                          <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                            Ngày sinh
                          </p>
                          <div>
                            <h6 class="MuiTypography-root MuiTypography-subtitle2 jss90 css-c7dfze">
                              Chọn ngày sinh
                            </h6>
                          </div>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                          <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                            <Link to="/Calendar1">
                              <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                                <svg
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
              </span>
              <div class="jss88">
                <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
                    <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                      <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="BusinessIcon"
                        >
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                        </svg>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                    <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                        <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                          Công ty
                        </p>
                        <div>
                          <h6 class="MuiTypography-root MuiTypography-subtitle1 jss91 css-16rlg6l">
                            HN-TOP.VN
                          </h6>
                        </div>
                      </div>
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                        <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                          <Link to="/company">
                            <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
              <div class="jss88">
                <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
                    <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                      <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="TrackChangesSharpIcon"
                        >
                          <path d="m19.07 4.93-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path>
                        </svg>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                    <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                        <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                          Chức vụ
                        </p>
                        <div>
                          <h6 class="MuiTypography-root MuiTypography-subtitle1 jss91 css-16rlg6l">
                            CEO
                          </h6>
                        </div>
                      </div>
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                        <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                          <Link to="/career">
                            <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
          <div class="MuiGrid-root MuiGrid-item jss73 css-1wxaqej">
            <div class="css-ikzlcq">
              <h6 class="MuiTypography-root MuiTypography-subtitle2 css-c7dfze">
                Cài đặt
              </h6>
              <div class="jss88">
                <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
                    <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                      <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="LinkIcon"
                        >
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                        </svg>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                    <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                        <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                          Tên người dùng
                        </p>
                        <div>
                          <h6 class="MuiTypography-root MuiTypography-subtitle1 jss91 css-16rlg6l">
                            hantiennhat
                          </h6>
                        </div>
                      </div>
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                        <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                          <Link to="/hash_url">
                            <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
              <div class="jss88">
                <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
                    <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                      <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="TranslateIcon"
                        >
                          <path d="m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"></path>
                        </svg>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                    <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                        <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                          Ngôn ngữ
                        </p>
                        <div>
                          <h6 class="MuiTypography-root MuiTypography-subtitle1 jss91 css-16rlg6l">
                            Việt Nam
                          </h6>
                        </div>
                      </div>
                      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                        <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                          <Link to="/from_lang">
                            <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
          <div className="MuiGrid-root MuiGrid-item jss73 css-1wxaqej">
            <div>
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column css-q5k7tr">
                <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                  <h6 class="MuiTypography-root MuiTypography-subtitle2 css-c7dfze">
                    Thông tin liên hệ
                  </h6>
                </div>
              </div>
              <div>
                <div
                  data-rbd-droppable-id="droppable"
                  data-rbd-droppable-context-id="0"
                >
                  <div
                    data-rbd-draggable-context-id="0"
                    data-rbd-draggable-id="633d50e50c0dbe270558e4f2"
                    tabindex="0"
                    role="button"
                    aria-describedby="rbd-hidden-text-0-hidden-text-0"
                    data-rbd-drag-handle-draggable-id="633d50e50c0dbe270558e4f2"
                    data-rbd-drag-handle-context-id="0"
                    draggable="false"
                  >
                    <div>
                      <div class="jss88">
                        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
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
                                <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                                  Số cá nhân{" "}
                                </p>
                                <div>
                                  <h6 class="MuiTypography-root MuiTypography-subtitle1 jss91 css-16rlg6l">
                                    0966625553
                                  </h6>
                                </div>
                              </div>
                              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                                <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                                  <Link to="/contact_user">
                                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                                      <svg
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
            </div>
            <div>
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column css-q5k7tr">
                <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                  <h6 class="MuiTypography-root MuiTypography-subtitle2 css-c7dfze">
                    Mã QR
                  </h6>
                </div>
              </div>
              <div>
                <div
                  data-rbd-droppable-id="droppable"
                  data-rbd-droppable-context-id="0"
                >
                  <div
                    data-rbd-draggable-context-id="0"
                    data-rbd-draggable-id="633d50e50c0dbe270558e4f2"
                    tabindex="0"
                    role="button"
                    aria-describedby="rbd-hidden-text-0-hidden-text-0"
                    data-rbd-drag-handle-draggable-id="633d50e50c0dbe270558e4f2"
                    data-rbd-drag-handle-context-id="0"
                    draggable="false"
                  >
                    <div>
                      <div class="jss88">
                        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 jss87 css-o0rlmm">
                            <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
                              <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                                <img src={QR} alt="Mã QR" className="edit_qr" />
                                {/* <svg
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="PhoneIcon"
                                >
                                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                                </svg>{" "} */}
                              </div>
                            </div>
                          </div>
                          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 css-1v3pb4k">
                            <div class="MuiGrid-root MuiGrid-container css-v3z1wi">
                              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                                <p class="MuiTypography-root MuiTypography-body2 jss89 css-68o8xu">
                                  Mã QR
                                </p>
                                <div>
                                  <h6 class="MuiTypography-root MuiTypography-subtitle1 jss91 css-16rlg6l"></h6>
                                </div>
                              </div>
                              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-1doag2i">
                                <div class="MuiGrid-root MuiGrid-container css-1c87emg">
                                  <Link to="/qr_code">
                                    <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
                                      <svg
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss87 css-vubbuv"
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
            </div>
            <div className="jss79">
              <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
              <div className="MuiGrid-root MuiGrid-container css-1c87emg">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-12 css-we0np1">
                  <p class="MuiTypography-root MuiTypography-body2 css-68o8xu">
                    Đóng góp quý báu của bạn sẽ giúp VIPID hoàn thiện hơn trong
                    tương lai.
                  </p>
                </div>
                <div className="MuiGrid-root css-rfnosa">
                  <button
                    class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButtonBase-root  css-110xwq5"
                    tabindex="0"
                    type="button"
                  >
                    Góp ý<span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
