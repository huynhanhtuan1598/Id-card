import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style_user.css";
import VCard from "../../component/vcardvist/vcard";
import VCardFileCreator from '../../component/vcardvist/vcradcreator/index';

export default function User_link() {
  const name = useSelector((state) => state.user.name);
  const phone = useSelector((state) => state.user.phone);
  const birthday = useSelector((state) => state.user.birthday);
  const company = useSelector((state) => state.user.company);
  const position = useSelector((state) => state.user.position);





  return (
    <div className="backgr_user">
      <div class="jss204">
        <a
          class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
          tabindex="0"
          href="/profile"
        >
          <div class="MuiAvatar-root MuiAvatar-circular jss205 css-3i9vrz">
            <img
              src="https://gcovipid.s3.ap-southeast-1.amazonaws.com/1664962581167-image?AWSAccessKeyId=AKIAZHG7SETL3RZHSOER&amp;Expires=1667357705&amp;Signature=ccJMK2LgE9KFpns9ZDpNvghBaUw%3D"
              class="MuiAvatar-img css-1hy9t21"
            />
          </div>
          <span class="MuiTouchRipple-root css-w0pj6f"></span>
        </a>
      </div>
      <div class="jss_200">
        <div className="wrap-template-render">
          <div class="jss209">
            {/* <img
              src="https://gcovipid.s3.ap-southeast-1.amazonaws.com/1626773406385-image?AWSAccessKeyId=AKIAZHG7SETL3RZHSOER&amp;Expires=1667357465&amp;Signature=ewIlROqHTTrYlYvmM7Ka9wborV8%3D"
              alt=""
              class="jss210"
            /> */}
          </div>
          <div class="jss206">
            <div>
              <div>
                <div class="space-top"></div>
              </div>
              <div>
                <div class="avatar">
                  <img
                    src="https://gcovipid.s3.ap-southeast-1.amazonaws.com/1664962581167-image?AWSAccessKeyId=AKIAZHG7SETL3RZHSOER&amp;Expires=1667357705&amp;Signature=ccJMK2LgE9KFpns9ZDpNvghBaUw%3D"
                    alt=""
                  />
                </div>
              </div>
              <div></div>
              <div>
                <div class="name">{name }</div>
              </div>
              <div></div>
              <div>
                <div class="career_position">CEO</div>
              </div>
              <div></div>
              <div>
                <div class="company">HN-TOP.VN</div>
              </div>
              <div></div>
              <div>
                <div class="list-contact">
                  <div>
                    <a
                      href="tel:0966625553"
                      class="jss217"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div class="jss218">
                        <div class="jss213">
                          <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 jss212 css-1doag2i">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="PhoneIcon"
                              >
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                              </svg>
                            </div>
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                              <div className="infuser">
                                <div class="jss2148">Số cá nhân</div>
                                <div class="jss2168">{phone}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:0966625553"
                      class="jss217"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div class="jss218">
                        <div class="jss213">
                          <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 jss212 css-1doag2i">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="AccountBalanceIcon"
                              >
                                <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"></path>
                              </svg>
                            </div>
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                              <div className="infuser">
                                <div class="jss2148">Tài khoản ngân hàng</div>
                                <div class="jss2168">0966625553</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:0966625553"
                      class="jss217"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div class="jss218">
                        <div class="jss213">
                          <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 jss212 css-1doag2i">
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="PhoneIcon"
                              >
                               <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                              </svg>
                            </div>
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                              <div className="infuser">
                                <div class="jss2148">Facebook</div>
                                <div class="jss2168">0966625553</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div>
                    <a
                      href="tel:0966625553"
                      class="jss217"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div class="jss218">
                        <div class="jss213">
                          <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-3nargb">
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 jss212 css-1doag2i">
                            <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="BusinessIcon"
                        >
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                        </svg>
                            </div>
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-9yaf8t">
                              <div className="infuser">
                                <div class="jss2148">Company</div>
                                <div class="jss2168">{company}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <button
              class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-primary jss219 css-1ifjro9"
              tabindex="0"
              type="button"
              aria-label="add"
              
            >
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonAddOutlinedIcon"
                
                
              >
                <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"></path>
              </svg>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            {/* <VCard employee="3"  /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
