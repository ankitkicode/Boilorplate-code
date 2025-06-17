import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light w-100">
      <div className="card text-center shadow p-4" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <div className="mb-3">
            <i className="bi bi-exclamation-triangle-fill text-danger" style={{ fontSize: '2rem' }}></i>
          </div>
          <h5 className="card-title">Unauthorized Access</h5>
          <p className="card-text">You do not have permission to view this page.</p>
          <button className="btn btn-primary w-100" onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
