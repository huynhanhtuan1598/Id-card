import React, { useState } from "react";
import "./style-login.css";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import userApi from "../../api/userApi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form_login() {
 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const Get_token = async (user_name, password) => {
    try {
      const response = await userApi.get_token(user_name, password);
      return response.data.access_token;
    } catch (error) {}
  };

  const get_info_user = async (id_user, username, password) => {
    try {
      const token = await Get_token(username, password);
      const response = await userApi.get_info_user_by_id(id_user, token);
      if (response.status === 200) {
        dispatch({
          type: "SET_ACCOUNT",
          payload: {
            id: id_user,
            name: response.data.name,
            birthday: response.data.day_of_birth,
            company: response.data.company_id.name,
            position: response.data.position,
          },
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const login = async (username, password) => {
  //   try {
  //     const params = {
  //       jsonrpc: "2.0",
  //       params: {
  //         db: "Odoo14_Ecom_Com_DB2",
  //         login: username,
  //         password: password,
  //       },
  //     };
  //     // const response = await userApi.login(params);
  //     // // console.log(response);
  //     // if (response.status === 200) {
  //     //   console.log(response)
  //     //   get_info_user(response.data.result.uid, username, password);
  //     // }
     
  //     axios.post("https://ecom.bnidx.net/web/session/authenticate", { params })
  //       .then((res) => {
  //         console.log(res);
  //         // console.log(res.data);
  //         get_info_user(res.data.result.uid, username, password);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

    const login = async (username, password) => {
   
    const params = JSON.stringify({
      jsonrpc: "2.0",
      params: {
        db: "Odoo14_Ecom_Com_DB2",
        login: username,
        password: password,
      },
    });
    var data = JSON.stringify({
      "jsonrpc": "2.0",
      "params": {
        "db": "Odoo14_Ecom_Com_DB2",
        "login": "phunguyenerp@gmail.com",
        "password": "123"
      }
    });
    // let usestr = JSON.stringify(data);
    var config = {
      method: 'post',
      url: 'https://ecom.bnidx.net/web/session/authenticate',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response.data.uid));

    })
    
    
    .catch(function (error) {
      console.log(error);
    }); 
  };

//   let userObj = {
//   name: "Sammy",
//   email: "sammy@example.com",
//   plan: "Pro"
// };

// function replacer(key, value) {
//   console.log(typeof value);
//   if (key === 'email') {
//     return undefined;
//   }
//   return value;
// }

// let userStrReplacer = JSON.stringify(userObj, replacer);

// console.log(userStrReplacer);


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
                            {/* <Link to="/"> */}
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
                            {/* </Link> */}
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
              <a
                className="jss50"
                href="https://ecom.bnidx.net/web/reset_password"
              >
                <b>Quên mật khẩu</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
