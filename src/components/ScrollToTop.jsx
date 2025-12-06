import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

const Page = ({ children }) => {
    // Reset scroll position before page renders
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default Page;