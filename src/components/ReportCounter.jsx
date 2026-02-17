// components/ReportCounter.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './ReportCounter.css';

const ReportCounter = () => {
    const stats = [
        { value: 10, label: 'Years of Experience' },
        { value: 500, label: 'Clients Served' },
        { value: 1000, label: 'Projects Completed' },
        { value: 2, label: 'Countries of Operation' }
    ];

    const { ref, inView } = useInView({
        triggerOnce: false, // Only trigger once
        threshold: 0.3,     // 30% of the element visible
    });

    return (
        <div className="report-counter-section" ref={ref}>
            <div className="report-counter-container">
                {stats.map((item, index) => (
                    <div key={index} className="report-counter-item">
                        <h2>
                            {inView ? <CountUp end={item.value} duration={3} separator="," /> : '0'}
                        </h2>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReportCounter;
