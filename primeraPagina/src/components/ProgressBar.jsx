import React from 'react';

const ProgressBar = () => {
    return (
        <div style={{ margin: "20px" }}>
            <h5>Progreso</h5>
            <div className="progress" style={{ height: "20px" }}>
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    75%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
