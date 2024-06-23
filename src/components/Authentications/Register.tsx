import './register.css';

function Register(){
    return(
        <><div className="main">
        <div className="container">
          <div className="row">
            <h2 className="text-center text-dark mt-5">Register Form</h2>
            <div className="main_row">
              <div className="card my-5">
                <form className="card-body cardbody-color p-lg-5">
                  <div className="row" style={{ marginBottom: '20px' }}>
                    <button className="back-btn">
                      <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.24264 11.8033L0.46967 7.03031C0.176777 6.73741 0.176777 6.26254 0.46967 5.96965L5.24264 1.19668C5.53553 0.903784 6.01041 0.903784 6.3033 1.19668C6.59619 1.48957 6.59619 1.96444 6.3033 2.25734L2.81066 5.74998H14C14.4142 5.74998 14.75 6.08576 14.75 6.49998C14.75 6.91419 14.4142 7.24998 14 7.24998H2.81066L6.3033 10.7426C6.59619 11.0355 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                          fill="#fff"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="City"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="country">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zipCode"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="nicNo">NIC NO</label>
                        <input
                          type="number"
                          className="form-control"
                          id="nicNo"
                          placeholder="NIC NO"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input
                          type="number"
                          className="form-control"
                          id="mobileNo"
                          placeholder="Mobile No"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAddress"
                      placeholder="Email Address"
                    />
                  </div>
  
                  <div className="row">
                    <div className="work-row">
                      <p>Are you currently working?</p>
  
                      <div>
                        <label htmlFor="html">Yes</label>
                        <input
                          type="radio"
                          id="html"
                          name="workingStatus"
                          value="Yes"
                        />
                      </div>
                      <div>
                        <label htmlFor="css">No</label>
                        <input
                          type="radio"
                          id="css"
                          name="workingStatus"
                          value="No"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="row">
                    <div className="btn_container">
                      <button className="next_btn">Next</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Register;