import React from "react";
import './style-footer.css'

export default function footer() {
  return (
    <div className="MuiBottomNavigation-root jss94 css-de1c49">
      <button className="MuiButtonBase-root MuiBottomNavigationAction-root jss95 css-fcyteq home"
        tabindex="0"
        type="button"
      >
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="DashboardIcon"
        >
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
        </svg>
        <span class="MuiBottomNavigationAction-label css-14bcf2k">
          Trang chủ
        </span>
        <span class="MuiTouchRipple-root css-w0pj6f"></span>
      </button>
      <button class="MuiButtonBase-root MuiBottomNavigationAction-root jss95 css-fcyteq report"
        tabindex="0"
        type="button"
        // style="margin-right: 7px; margin-left: 0px;"
      >
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="AssessmentIcon"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
        </svg>
        <span class="MuiBottomNavigationAction-label css-14bcf2k">Báo cáo</span>
        <span class="MuiTouchRipple-root css-w0pj6f"></span>
      </button>
      <a class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-primary jss96 css-1ifjro9"
        tabindex="0"
        href="/add-contact"
      >
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="AddIcon"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
        <span class="MuiTouchRipple-root css-w0pj6f"></span>
      </a>
      <button class="MuiButtonBase-root MuiBottomNavigationAction-root jss95 css-fcyteq group"
        tabindex="0"
        type="button"
        // style="margin-right: 0px; margin-left: 7px;"
      >
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PeopleAltIcon"
        >
          <path
            fill-rule="evenodd"
            d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
          ></path>
          <circle cx="9" cy="8" r="4" fill-rule="evenodd"></circle>
          <path
            fill-rule="evenodd"
            d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
          ></path>
        </svg>
        <span class="MuiBottomNavigationAction-label css-14bcf2k">Nhóm</span>
        <span class="MuiTouchRipple-root css-w0pj6f"></span>
      </button>
      <button class="MuiButtonBase-root MuiBottomNavigationAction-root jss95 css-fcyteq backgroup-template"
        tabindex="0"
        // type="button"
        // style="margin-right: 0px; margin-left: 0px;"
      >
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="StyleIcon"
        >
          <path d="m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"></path>
        </svg>
        <span class="MuiBottomNavigationAction-label css-14bcf2k">
          Giao diện
        </span>
        <span class="MuiTouchRipple-root css-w0pj6f"></span>
      </button>
    </div>
  );
}
