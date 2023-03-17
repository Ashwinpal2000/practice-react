import React from "react";

const CircleProgressBar = ({ percentage, circleWidth }) => {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    return (
        <div>
            <svg
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="10%" stopColor="#12c2e9" />
                        <stop offset="30%" stopColor="#cb6fc0" />
                        <stop offset="100%" stopColor="#d56b4b" />
                    </linearGradient>
                </defs>
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="1rem"
                    r={radius}
                    className="circle-background"
                />
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="1rem"
                    r={radius}
                    className="circle-progress"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                    }}
                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                    stroke="url(#gradient)"
                />
                <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className="circle-text">{percentage}</text>
            </svg>
        </div>
    );
};

export default CircleProgressBar;
