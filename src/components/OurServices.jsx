import React from 'react';
import './OurServices.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaHandshake,
    FaChartLine,
    FaFileInvoiceDollar,
    FaCalculator,
    FaCheckCircle,
    FaArrowRight
} from 'react-icons/fa';

const workflowSteps = [
    {
        icon: <FaHandshake />,
        title: 'Initial Consultation',
        description: 'We discuss your financial goals, current accounting setup, and tax compliance needs.',
    },
    {
        icon: <FaChartLine />,
        title: 'Financial Analysis',
        description: 'Comprehensive review of financial statements and identification of optimization opportunities.',
    },
    {
        icon: <FaFileInvoiceDollar />,
        title: 'Strategy Development',
        description: 'Customized accounting frameworks and tax planning strategies tailored to your business.',
    },
    {
        icon: <FaCalculator />,
        title: 'Implementation',
        description: 'Handling accounting operations, financial reports, and tax filings with precision.',
    },
    {
        icon: <FaCheckCircle />,
        title: 'Ongoing Support',
        description: 'Continuous monitoring and proactive advice to ensure financial compliance.',
    },
];

const JpoOurWorkFlow = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const stepVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="jpo-workflow-section" ref={ref}>
            <div className="jpo-workflow-container">
                <motion.div
                    className="jpo-workflow-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="jpo-workflow-tag">

                        <span>OUR WORKFLOW</span>
                    </div>
                    <h2 className="jpo-workflow-title">
                        Our Financial Consulting Process
                    </h2>
                </motion.div>

                <div className="jpo-workflow-steps-container">
                    {/* Desktop connection line */}
                    {/* <div className="jpo-workflow-connection-line jpo-workflow-connection-line-desktop">
                        <motion.div
                            className="jpo-workflow-progress-line"
                            variants={lineVariants}
                            initial="hidden"
                            animate={controls}
                        />
                    </div> */}

                    {/* Mobile connection line */}
                    {/* <div className="jpo-workflow-connection-line jpo-workflow-connection-line-mobile">
                        <motion.div
                            className="jpo-workflow-progress-line"
                            variants={lineVariants}
                            initial="hidden"
                            animate={controls}
                        />
                    </div> */}

                    <div className="jpo-workflow-steps">
                        {workflowSteps.map((step, index) => (
                            <motion.div
                                className="jpo-workflow-step"
                                key={index}
                                custom={index}
                                initial="hidden"
                                animate={controls}
                                variants={stepVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="jpo-step-number">0{index + 1}</div>
                                <div className="jpo-step-icon-wrapper">
                                    <div className="jpo-step-icon">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="jpo-step-content">
                                    <h3 className="jpo-step-title">{step.title}</h3>
                                    <p className="jpo-step-description">{step.description}</p>
                                </div>

                                {/* Arrow connector */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="jpo-step-arrow">
                                        <FaArrowRight className="jpo-arrow-icon" />
                                    </div>
                                )}

                                {/* Dot connector for desktop */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="jpo-step-connector jpo-step-connector-desktop" />
                                )}

                                {/* Dot connector for mobile */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="jpo-step-connector jpo-step-connector-mobile" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JpoOurWorkFlow;