import { motion } from 'framer-motion';

const LogoAnimated = () => {
  return (
    <div className="m-auto w-1/2 lg:w-1/2 xl:w-1/3">
      <svg
        // width="201mm"
        // height="99mm"
        version="1.1"
        viewBox="-5 -2 210 104"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          transform="translate(-2,-196)"
          fill="none"
          stroke="#fbfbfb"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="m3.7841 293.53v-91.913l36.398-2e-3 -0.0084 91.924z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m51.576 201.62 19.852 7e-3s22.812 2.4499 22.812 41.759c0 39.31-21.356 47.058-21.356 47.058s-5.9669 3.0146-12.448 3.0481c-6.4813 0.0334-8.8533 0.0334-8.8533 0.0334z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m110.32 293.49v-47.574l41.293 47.641z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m198.27 201.62v45.301l-40.883-45.336z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m143.42 201.62 54.84 66.549s4.5937 26.059-30.82 25.391l-57.037-66.216s-1.8513-20.195 16.622-25.818z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.g>
        <motion.g
          transform="translate(0,-198)"
          fill="none"
          // stroke="#fbfbfb"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#58DEFF"
          animate={{ stroke: ['#D94778', '#6D58D6', '#6BD0EA'] }}
          transition={{
            duration: 2,
            yoyo: Infinity,
          }}
        >
          <motion.path
            d="m3.7841 293.53v-91.913l36.398-2e-3 -0.0084 91.924z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m51.576 201.62 19.852 7e-3s22.812 2.4499 22.812 41.759c0 39.31-21.356 47.058-21.356 47.058s-5.9669 3.0146-12.448 3.0481c-6.4813 0.0334-8.8533 0.0334-8.8533 0.0334z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m110.32 293.49v-47.574l41.293 47.641z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m198.27 201.62v45.301l-40.883-45.336z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="m143.42 201.62 54.84 66.549s4.5937 26.059-30.82 25.391l-57.037-66.216s-1.8513-20.195 16.622-25.818z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};
export default LogoAnimated;
