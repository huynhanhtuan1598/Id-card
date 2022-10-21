import React from 'react';
import './style-login.css';

export default function form_login() {
  return (
    <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
    <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column jss49 css-1wkwmmc">
      <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-1wkwmmc">
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column jss59 css-q5k7tr">
              <div className="MuiGrid-root MuiGrid-item jss60 css-1wxaqej">
                <h3 class="MuiTypography-root MuiTypography-h3 jss63 css-18h9l83">
                  Đăng nhập
                </h3>
                <h6 class="MuiTypography-root MuiTypography-subtitle1 jss62 css-16rlg6l">
                  Nhập tài khoản và mật khẩu của bạn.
                </h6>
              </div>
              <di className="MuiGrid-root MuiGrid-item css-1wxaqej">
                <form autoComplete="off">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column css-q5k7tr">
                    <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <input
                        placeholder="Tên đăng nhập / Email"
                        name="username"
                        class="jss64"
                      />
                    </div>
                    <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <div class="jss66">
                        <input
                          type="password"
                          placeholder="Mật khẩu"
                          name="password"
                          class="jss64"
                        />
                        <div class="jss67">
                          <span class="jss68">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item css-1wxaqej"></div>
                    <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                      <button
                        class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss69 css-1qelgoy"
                        tabindex="0"
                        type="submit"
                      >
                        Đăng nhập
                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </di>
            </div>
          </div>
          <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
              <a class="jss50" href="/forgot"><b>Quên mật khẩu</b></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
