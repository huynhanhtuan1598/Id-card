import React, { useState } from "react";
import "./style-login.css";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import userApi from "../../api/userApi";

export default function Form_login() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const login = async (username, password) => {
    try {
      const params = {
        jsonrpc: "2.0",
        params: {
          db: "VTA_19_10",
          login: username,
          password: password,
        },
      };
      const response = await userApi.login(params);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>Vui Lòng Điền {title}.</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column jss49 css-1wkwmmc">
        <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
          <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-1wkwmmc">
            <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column jss59 css-q5k7tr">
                <div className="MuiGrid-root MuiGrid-item jss60 css-1wxaqej">
                  <h3 className="MuiTypography-root MuiTypography-h3 jss63 css-18h9l83">
                    Đăng nhập
                  </h3>
                  <h6 className="MuiTypography-root MuiTypography-subtitle1 jss62 css-16rlg6l">
                    Nhập tài khoản và mật khẩu của bạn.
                  </h6>
                </div>
                <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                  <Formik
                    onSubmit={(values) => {
                      if (values.username === "") {
                        setTitle("Tên Đăng Nhập");
                        setShow(true);
                        return;
                      } else if (values.password === "") {
                        setTitle("Password");
                        setShow(true);
                        return;
                      }
                      login(values.username, values.password);
                    }}
                    enableReinitialize={true}
                    initialValues={{
                      username: "",
                      password: "",
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      resetForm,
                      values,
                      touched,
                      isValid,
                      errors,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column css-q5k7tr">
                          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <input
                              placeholder="Tên đăng nhập / Email"
                              name="username"
                              className="jss64"
                              value={values?.username}
                              onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.username}
                            </Form.Control.Feedback>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <div className="jss66">
                              <input
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                className="jss64"
                                value={values?.password}
                                onChange={handleChange}
                              />
                              <Form.Control.Feedback type="invalid" tooltip>
                                {errors.password}
                              </Form.Control.Feedback>
                              <div className="jss67">
                                <span className="jss68">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                            <Button
                              type="submit"
                              variant="primary"
                              style={{
                                width: "100%",
                                fontSize: "25px",
                                lineHeight: "130%",
                              }}
                            >
                              Đăng Nhập
                            </Button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
              <a className="jss50" href="/forgot">
                <b>Quên mật khẩu</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
