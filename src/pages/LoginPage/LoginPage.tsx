import React from 'react';
import './LoginPage.scss';
import logo from '../../assets/animalia_logo_v2_small.png';

const LoginPage = () => {
  return (
    <div className="mainDiv">
      <div className="loginDiv">
        <div className="formDiv">
          <div className="logoDiv">
            <img src={logo} alt="logo" />
          </div>
          <div className="formContainer d-flex justify-content-center align-item-center col-12">
            <div className="col-10 m-auto ">
              <form action="" className="formEl">
                <div className="mb-3 col-8 d-flex justify-content-center align-item-center">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 col-8 d-flex justify-content-center align-item-center">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btnLogin">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
