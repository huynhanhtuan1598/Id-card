import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import "./style.css";

export default function Calendar1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const [birthday, setBirthday] = useState(
    useSelector((state) => state.user.birthday)
  );
  const saveBirthday = () => {
    console.log(dayjs(value).format('YYYY-MM-DD'))
    dispatch({
      type: "EDIT_BIRTHDAY",
      payload: { birthday: dayjs(value).format('YYYY-MM-DD') },
    });
    navigate("/");
  };

  
  return (
    <div>
      <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss173 css-qixh7c">
        <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link
            to="/"
            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeStart MuiIconButton-sizeMedium css-7vbamj"
            tabIndex="0"
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowBackIcon"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
            <span className="MuiTouchRipple-root css-w0pj6f"></span>
          </Link>
          <h6 className="MuiTypography-root MuiTypography-h6 jss174 css-1anx036">
            Ngày tháng
          </h6>
        </div>
      </header>
      <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9">
          <div className="MuiGrid-  root MuiGrid-item css-1wxaqej">
            <Calendar  onChange={onChange} value={value} formatLongDate ={(locale, date) => dayjs(date).format('YYYY-MM-DD')}/>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <form autoComplete="off">
              <button
                className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss175 css-1qelgoyed"
                tabIndex="0"
                type="button"
                onClick={saveBirthday}
              >
                {" "}
                Lưu thông tin
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
