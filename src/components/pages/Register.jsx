import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <main className="auth-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="auth-shell">
              <div className="auth-panel auth-panel-visual">
                <span className="section-kicker">Join the club</span>
                <h1 className="auth-hero-title mt-3">Create your account</h1>
                <p className="auth-hero-copy mt-3">
                  Register to unlock faster checkout, exclusive deals, and order tracking from
                  your personal dashboard.
                </p>
                <div className="auth-points mt-4">
                  <div className="auth-point">
                    <strong>Exclusive offers</strong>
                    <span>Get access to member-only prices and launches.</span>
                  </div>
                  <div className="auth-point">
                    <strong>Saved preferences</strong>
                    <span>Store sizes, addresses, and payment options securely.</span>
                  </div>
                </div>
              </div>

              <div className="auth-panel">
                <form className="auth-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label auth-label" htmlFor="firstName">
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="form-control auth-input"
                        placeholder="John"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label auth-label" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="form-control auth-input"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="form-label auth-label" htmlFor="registerEmail">
                      Email address
                    </label>
                    <input
                      id="registerEmail"
                      type="email"
                      className="form-control auth-input"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="mt-3">
                    <label className="form-label auth-label" htmlFor="registerPassword">
                      Password
                    </label>
                    <input
                      id="registerPassword"
                      type="password"
                      className="form-control auth-input"
                      placeholder="Create a password"
                    />
                  </div>

                  <div className="mt-3">
                    <label className="form-label auth-label" htmlFor="confirmPassword">
                      Confirm password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="form-control auth-input"
                      placeholder="Repeat your password"
                    />
                  </div>

                  <button className="btn hero-primary-btn w-100 mt-4" type="submit">
                    Register
                  </button>
                </form>

                <p className="auth-switch mt-4 mb-0">
                  Already have an account? <Link to="/login">Login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register
