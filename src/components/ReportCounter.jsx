// components/ReportCounter.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './ReportCounter.css';

const ReportCounter = () => {
    const stats = [
        { value: 40000, label: 'Winning Award' },
        { value: 18000, label: 'Client Review' },
        { value: 10000, label: 'Completed Projects' },
        { value: 20000, label: 'Years Experience' }
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
