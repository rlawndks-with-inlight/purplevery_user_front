import React from "react";
import { motion } from "framer-motion";
const Graph = () => {
  return (
    <div className="relative z-10 max-w-[305px] md:max-w-[525px] 2xl:max-w-[675px]">
      {/* 화살표 */}
      <svg
        version="1.1"
        id="레이어_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 842 723"
        className="absolute bottom-[8%] left-[20%] z-[-1] aspect-[522.65/455.91] max-w-[245px] md:max-w-[465px] 2xl:max-w-[615px]"
      >
        <g>
          <g>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "circIn",
                delay: 0.5,
              }}
              fill="none"
              stroke="#E9E351"
              strokeWidth={10}
              strokeMiterlimit={10}
              strokeDasharray="0 1"
              d="M25.5,714.3c0,0,667.9-15.4,782.1-646.5"
            />
            <g>
              <motion.polygon
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 0.5,
                }}
                fill="#E9E351"
                points="839.6,101.2 805.4,79.9 766.4,89.8 816.5,8.7"
              />
            </g>
          </g>
        </g>
      </svg>
      {/* 그래프 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 667.058 518.329"
        className="z-10 aspect-[667.058/518.329]"
      >
        <g
          id="그룹_16"
          data-name="그룹 16"
          transform="translate(1013.143 -90.267)"
        >
          <g
            id="그룹_11"
            data-name="그룹 11"
            transform="translate(-577.29 582.648)"
          >
            <g id="그룹_10" data-name="그룹 10" transform="translate(0)">
              <path
                id="패스_174"
                data-name="패스 174"
                d="M5106.6,995.694v5.9a6.309,6.309,0,0,1-.658,3.351,2.044,2.044,0,0,1-1.78.978h-.515a.935.935,0,0,1-1.057-1.058V983.09h12.508q.769,0,.77,1.026,0,2.278-1.411,2.278H5106.6v6.125h7.761q.768,0,.769,1.058,0,2.118-1.41,2.117Z"
                transform="translate(-5102.585 -981.679)"
                fill="#d70016"
              />
              <path
                id="패스_175"
                data-name="패스 175"
                d="M5141.888,1007.337a12.223,12.223,0,0,1-3.495,1.042,26.325,26.325,0,0,1-3.561.241,15.473,15.473,0,0,1-2.79-.241,6.277,6.277,0,0,1-2.309-.882,4.39,4.39,0,0,1-1.573-1.652,5.5,5.5,0,0,1-.578-2.678V990.34h3.817v12.571a2.006,2.006,0,0,0,.352,1.219,2.325,2.325,0,0,0,.9.738,3.347,3.347,0,0,0,1.14.385,7.987,7.987,0,0,0,1.2.1,9.316,9.316,0,0,0,1.7-.144,10.859,10.859,0,0,0,1.443-.37v-14.5h3.752Z"
                transform="translate(-5111.549 -984.279)"
                fill="#d70016"
              />
              <path
                id="패스_176"
                data-name="패스 176"
                d="M5166.944,991.108c-.172.407-.342.808-.513,1.2s-.342.8-.513,1.2a3.882,3.882,0,0,0-1.267-.336,11.352,11.352,0,0,0-1.459-.112,5.619,5.619,0,0,0-4.393,1.539,6.265,6.265,0,0,0-1.379,4.329,6.96,6.96,0,0,0,.5,2.822,5.023,5.023,0,0,0,1.266,1.8,4.2,4.2,0,0,0,1.635.946,5.757,5.757,0,0,0,1.668.273,4.8,4.8,0,0,0,1.137-.144c.4-.1.775-.2,1.139-.3.343-.107.646-.209.914-.305a2.009,2.009,0,0,1,.562-.144.759.759,0,0,1,.384.144,2.743,2.743,0,0,1,.449.369,2.22,2.22,0,0,1,.37.593,1.809,1.809,0,0,1,.144.722,1.3,1.3,0,0,1-.625,1.042,5.276,5.276,0,0,1-1.492.754,10.7,10.7,0,0,1-1.858.481,10.186,10.186,0,0,1-1.636.16,8.589,8.589,0,0,1-3.688-.738,7.151,7.151,0,0,1-2.6-2.02,7.959,7.959,0,0,1-1.555-2.918,12.154,12.154,0,0,1-.5-3.5,10.585,10.585,0,0,1,.595-3.608,8.608,8.608,0,0,1,1.683-2.87,7.448,7.448,0,0,1,2.581-1.908,8.2,8.2,0,0,1,3.417-.69,12.039,12.039,0,0,1,2.742.289A7.847,7.847,0,0,1,5166.944,991.108Z"
                transform="translate(-5120.891 -984.117)"
                fill="#d70016"
              />
              <path
                id="패스_177"
                data-name="패스 177"
                d="M5179.135,980.99h3.688v19.98q0,4.041-2.118,4.04h-.545a.906.906,0,0,1-1.025-1.026Zm11.673,23.893q-1.956-2.566-3.9-5.084t-3.9-5.083q1.7-1.956,3.368-3.913t3.367-3.913h4.329q-1.8,1.924-3.559,3.832t-3.561,3.865l3.641,4.474q1.811,2.23,3.639,4.442a1.915,1.915,0,0,1,.256.513,1.494,1.494,0,0,1,.1.416c0,.3-.268.45-.8.45Z"
                transform="translate(-5130.035 -980.926)"
                fill="#d70016"
              />
              <path
                id="패스_178"
                data-name="패스 178"
                d="M5231.309,994.932a1.97,1.97,0,0,0-.176-.786,2.019,2.019,0,0,0-.626-.753,3.811,3.811,0,0,0-1.233-.53,8.2,8.2,0,0,0-2.038-.208,13.237,13.237,0,0,0-2.565.24,10.687,10.687,0,0,0-2.181.658q-.256-.642-.5-1.267t-.5-1.267a14.019,14.019,0,0,1,3.03-1.01,16.082,16.082,0,0,1,3.448-.369,11.256,11.256,0,0,1,3.08.369,5.158,5.158,0,0,1,2.115,1.138,4.474,4.474,0,0,1,1.219,1.972,10.079,10.079,0,0,1,.417,2.87v11.931h-6.734a16.118,16.118,0,0,1-3.5-.321,5.737,5.737,0,0,1-2.275-.994,3.9,3.9,0,0,1-1.316-1.748,7.7,7.7,0,0,1-.448-2.614,5.515,5.515,0,0,1,.962-3.415,6.191,6.191,0,0,1,2.5-1.941,12.473,12.473,0,0,1,3.462-.849q1.924-.209,3.849-.273Zm0,3.431a26.645,26.645,0,0,0-2.935.208,8.654,8.654,0,0,0-2.292.594,3.761,3.761,0,0,0-1.54,1.106,2.721,2.721,0,0,0-.545,1.747,4.128,4.128,0,0,0,.191,1.332,1.866,1.866,0,0,0,.674.913,2.8,2.8,0,0,0,1.234.561,9.191,9.191,0,0,0,1.974.177h3.238Z"
                transform="translate(-5144.88 -984.028)"
                fill="#d70016"
              />
              <path
                id="패스_179"
                data-name="패스 179"
                d="M5251.7,1004.079q0,4.233-2.212,4.234h-.545a.922.922,0,0,1-1.059-1.027v-16.26a17.586,17.586,0,0,1,3.367-.913,20.663,20.663,0,0,1,3.334-.273q1.027,0,1.99.08t1.828.176q-.226.8-.417,1.6c-.127.534-.268,1.08-.417,1.635a9.238,9.238,0,0,0-1.331-.3,8.938,8.938,0,0,0-1.364-.112,11.822,11.822,0,0,0-1.779.144,8.183,8.183,0,0,0-1.4.3Z"
                transform="translate(-5154.686 -984.099)"
                fill="#d70016"
              />
              <path
                id="패스_180"
                data-name="패스 180"
                d="M5274.754,1008.17a7.157,7.157,0,0,1-3.176-.674,6.7,6.7,0,0,1-2.341-1.892,8.186,8.186,0,0,1-1.459-2.871,14.035,14.035,0,0,1,0-7.408,8.53,8.53,0,0,1,1.459-2.9,6.86,6.86,0,0,1,2.341-1.861,7.158,7.158,0,0,1,3.176-.673,7.336,7.336,0,0,1,3.159.657,6.642,6.642,0,0,1,2.356,1.844,8.751,8.751,0,0,1,1.476,2.9,13.835,13.835,0,0,1,0,7.473,8.369,8.369,0,0,1-1.476,2.87,6.471,6.471,0,0,1-2.356,1.877A7.315,7.315,0,0,1,5274.754,1008.17Zm.032-3.176a3.168,3.168,0,0,0,1.941-.561,4.052,4.052,0,0,0,1.2-1.459,6.773,6.773,0,0,0,.575-1.924,13.5,13.5,0,0,0,.161-2.052,15.549,15.549,0,0,0-.144-2.069,7.26,7.26,0,0,0-.561-2,4.364,4.364,0,0,0-1.2-1.492,3.051,3.051,0,0,0-1.941-.593,3.263,3.263,0,0,0-2.067.593,3.755,3.755,0,0,0-1.14,1.492,6.559,6.559,0,0,0-.528,2.021,20.133,20.133,0,0,0-.112,2.053,12.611,12.611,0,0,0,.16,1.908,7.183,7.183,0,0,0,.578,1.941,4.093,4.093,0,0,0,1.171,1.539A2.933,2.933,0,0,0,5274.786,1004.995Z"
                transform="translate(-5161.643 -984.117)"
                fill="#d70016"
              />
              <path
                id="패스_181"
                data-name="패스 181"
                d="M5309.535,1007.337a12.2,12.2,0,0,1-3.5,1.042,26.3,26.3,0,0,1-3.561.241,15.486,15.486,0,0,1-2.789-.241,6.3,6.3,0,0,1-2.309-.882,4.393,4.393,0,0,1-1.571-1.652,5.478,5.478,0,0,1-.578-2.678V990.34h3.816v12.571a2.007,2.007,0,0,0,.354,1.219,2.305,2.305,0,0,0,.9.738,3.342,3.342,0,0,0,1.137.385,8.017,8.017,0,0,0,1.2.1,9.323,9.323,0,0,0,1.7-.144,10.767,10.767,0,0,0,1.442-.37v-14.5h3.752Z"
                transform="translate(-5171.665 -984.279)"
                fill="#d70016"
              />
              <path
                id="패스_182"
                data-name="패스 182"
                d="M5326.3,1004.025q0,4.3-2.116,4.3h-.547a.921.921,0,0,1-1.057-1.026V990.972a10.725,10.725,0,0,1,3.559-1.026q1.827-.192,3.656-.257a24.873,24.873,0,0,1,2.9.337,6.686,6.686,0,0,1,2.325.849,4.314,4.314,0,0,1,1.523,1.684,6.054,6.054,0,0,1,.561,2.806v8.916a6.588,6.588,0,0,1-.544,3.031,1.708,1.708,0,0,1-1.571,1.011h-.578a.922.922,0,0,1-1.058-1.026V995.174a1.9,1.9,0,0,0-.4-1.251,3,3,0,0,0-.979-.769,5.14,5.14,0,0,0-1.25-.369,11.734,11.734,0,0,0-1.219-.145,9.425,9.425,0,0,0-1.668.209c-.535.118-1.047.24-1.539.368Z"
                transform="translate(-5181.473 -984.045)"
                fill="#d70016"
              />
              <path
                id="패스_183"
                data-name="패스 183"
                d="M5356.17,986.823a12.437,12.437,0,0,1,1.876.144q.945.144,1.877.3,0-1.508.014-3.175t.017-3.207h3.752v20.717q0,3.176-3.174,3.176h-3.047a9.6,9.6,0,0,1-4.169-.8,7.421,7.421,0,0,1-2.693-2.117,8.058,8.058,0,0,1-1.46-3.015,14.2,14.2,0,0,1-.434-3.528,14.715,14.715,0,0,1,.338-3.192,7.139,7.139,0,0,1,1.2-2.71,5.9,5.9,0,0,1,2.261-1.892A8.211,8.211,0,0,1,5356.17,986.823Zm2.245,14.656q1.541,0,1.539-.962V990.126q-.9-.16-1.62-.256a10.194,10.194,0,0,0-1.362-.1,4.405,4.405,0,0,0-2.213.5,3.937,3.937,0,0,0-1.379,1.3,5.252,5.252,0,0,0-.751,1.877,10.5,10.5,0,0,0-.21,2.1q.033,1.122.144,2.2a4.776,4.776,0,0,0,.594,1.909,3.427,3.427,0,0,0,1.443,1.331,5.96,5.96,0,0,0,2.693.5Z"
                transform="translate(-5190.849 -980.89)"
                fill="#d70016"
              />
            </g>
          </g>
          <g
            id="그룹_12"
            data-name="그룹 12"
            transform="translate(-1013.143 131.78)"
          >
            <path
              id="패스_184"
              data-name="패스 184"
              d="M4427.078,292.969v5.9a6.3,6.3,0,0,1-.657,3.351,2.041,2.041,0,0,1-1.779.978h-.514a.935.935,0,0,1-1.059-1.058V280.365h12.508q.769,0,.77,1.026,0,2.278-1.41,2.278h-7.858v6.125h7.762q.769,0,.769,1.058,0,2.118-1.41,2.117Z"
              transform="translate(-4423.069 -278.826)"
              fill="#21876f"
            />
            <path
              id="패스_185"
              data-name="패스 185"
              d="M4450.8,282.744a2.225,2.225,0,0,1-2.276-2.374,2.419,2.419,0,0,1,.641-1.715,2.133,2.133,0,0,1,1.635-.69,1.752,1.752,0,0,1,.818.209,2.957,2.957,0,0,1,.721.529,3.279,3.279,0,0,1,.53.786,2.027,2.027,0,0,1,.208.882,2.169,2.169,0,0,1-.674,1.7A2.582,2.582,0,0,1,4450.8,282.744Zm1.894,15.554q0,4.04-2.214,4.04h-.544a.907.907,0,0,1-1.026-1.026V284.7h3.785Z"
              transform="translate(-4432.196 -277.965)"
              fill="#21876f"
            />
            <path
              id="패스_186"
              data-name="패스 186"
              d="M4464.59,301.3q0,4.3-2.117,4.3h-.544a.923.923,0,0,1-1.06-1.026V288.248a10.772,10.772,0,0,1,3.561-1.026q1.827-.191,3.655-.257a24.943,24.943,0,0,1,2.9.337,6.71,6.71,0,0,1,2.325.85,4.317,4.317,0,0,1,1.523,1.684,6.074,6.074,0,0,1,.562,2.806v8.916a6.573,6.573,0,0,1-.546,3.031,1.711,1.711,0,0,1-1.572,1.011h-.577a.922.922,0,0,1-1.058-1.026V292.45a1.891,1.891,0,0,0-.4-1.251,3.031,3.031,0,0,0-.978-.77,5.174,5.174,0,0,0-1.25-.368,11.747,11.747,0,0,0-1.219-.145,9.419,9.419,0,0,0-1.668.209q-.8.176-1.539.368Z"
              transform="translate(-4436.624 -281.192)"
              fill="#21876f"
            />
            <path
              id="패스_187"
              data-name="패스 187"
              d="M4494.459,284.1a12.331,12.331,0,0,1,1.876.144q.946.144,1.877.3,0-1.507.016-3.174t.016-3.207H4502v20.717q0,3.176-3.176,3.176h-3.047a9.606,9.606,0,0,1-4.169-.8,7.433,7.433,0,0,1-2.693-2.117,8.082,8.082,0,0,1-1.46-3.014,14.314,14.314,0,0,1-.431-3.528,14.751,14.751,0,0,1,.335-3.192,7.193,7.193,0,0,1,1.2-2.71,5.891,5.891,0,0,1,2.261-1.891A8.208,8.208,0,0,1,4494.459,284.1Zm2.245,14.656q1.54,0,1.541-.962V287.4q-.9-.16-1.62-.256a10.244,10.244,0,0,0-1.363-.1,4.4,4.4,0,0,0-2.213.5,3.921,3.921,0,0,0-1.378,1.3,5.289,5.289,0,0,0-.754,1.876,10.717,10.717,0,0,0-.208,2.1q.03,1.123.144,2.2a4.735,4.735,0,0,0,.592,1.909,3.421,3.421,0,0,0,1.443,1.33,5.953,5.953,0,0,0,2.7.5Z"
              transform="translate(-4446.001 -278.037)"
              fill="#21876f"
            />
            <path
              id="패스_188"
              data-name="패스 188"
              d="M4537.041,305.446a7.151,7.151,0,0,1-3.176-.674,6.68,6.68,0,0,1-2.341-1.892,8.129,8.129,0,0,1-1.458-2.871,14.008,14.008,0,0,1,0-7.408,8.485,8.485,0,0,1,1.458-2.9,6.864,6.864,0,0,1,2.341-1.86,7.16,7.16,0,0,1,3.176-.673,7.338,7.338,0,0,1,3.158.657,6.647,6.647,0,0,1,2.357,1.844,8.741,8.741,0,0,1,1.475,2.9,13.845,13.845,0,0,1,0,7.473,8.367,8.367,0,0,1-1.475,2.87,6.485,6.485,0,0,1-2.357,1.877A7.328,7.328,0,0,1,4537.041,305.446Zm.032-3.176a3.16,3.16,0,0,0,1.939-.561,4.029,4.029,0,0,0,1.2-1.459,6.759,6.759,0,0,0,.577-1.924,13.82,13.82,0,0,0,.16-2.053,15.713,15.713,0,0,0-.144-2.068,7.288,7.288,0,0,0-.561-2,4.389,4.389,0,0,0-1.2-1.492,3.051,3.051,0,0,0-1.941-.593,3.256,3.256,0,0,0-2.068.593,3.757,3.757,0,0,0-1.14,1.492,6.569,6.569,0,0,0-.529,2.02,20.107,20.107,0,0,0-.111,2.052,12.427,12.427,0,0,0,.161,1.908,7.112,7.112,0,0,0,.578,1.94,4.08,4.08,0,0,0,1.17,1.54A2.938,2.938,0,0,0,4537.073,302.271Z"
              transform="translate(-4461.258 -281.264)"
              fill="#21876f"
            />
            <path
              id="패스_189"
              data-name="패스 189"
              d="M4571.82,304.613a12.2,12.2,0,0,1-3.494,1.042,26.334,26.334,0,0,1-3.561.241,15.5,15.5,0,0,1-2.791-.241,6.278,6.278,0,0,1-2.309-.882,4.411,4.411,0,0,1-1.572-1.651,5.485,5.485,0,0,1-.577-2.679V287.615h3.816v12.572a2,2,0,0,0,.353,1.219,2.317,2.317,0,0,0,.9.738,3.336,3.336,0,0,0,1.137.384,7.938,7.938,0,0,0,1.2.1,9.3,9.3,0,0,0,1.7-.144,10.818,10.818,0,0,0,1.443-.369v-14.5h3.752Z"
              transform="translate(-4471.28 -281.425)"
              fill="#21876f"
            />
            <path
              id="패스_190"
              data-name="패스 190"
              d="M4591.377,280.465v5h3.655q.771,0,.771,1.026,0,2.053-1.476,2.053h-2.95v9.461a1.52,1.52,0,0,0,.465,1.283,2.66,2.66,0,0,0,.979.481,7.667,7.667,0,0,0,.962.08c.363.012.759.016,1.186.016q.705-.031.8,1.412a1.629,1.629,0,0,1-.161,1.026,1.269,1.269,0,0,1-.673.512q-.289.065-.737.145c-.3.053-.61.1-.931.144-.342.021-.688.037-1.042.047a6.17,6.17,0,0,1-1.01-.047,3.89,3.89,0,0,1-1.717-.594,3.729,3.729,0,0,1-1.105-1.138,4.919,4.919,0,0,1-.609-1.539,8.375,8.375,0,0,1-.193-1.829v-9.461h-3.174v-3.078h3.174v-4.042Z"
              transform="translate(-4480.927 -278.861)"
              fill="#21876f"
            />
            <path
              id="패스_191"
              data-name="패스 191"
              d="M4610.487,298.778a2.552,2.552,0,0,1,1.78.8,2.668,2.668,0,0,1,.689,1.893,2.775,2.775,0,0,1-.722,1.924,2.266,2.266,0,0,1-1.748.8,2.167,2.167,0,0,1-1.011-.241,2.531,2.531,0,0,1-.786-.626,2.9,2.9,0,0,1-.5-.866,2.86,2.86,0,0,1-.175-.994,2.822,2.822,0,0,1,.736-1.893,2.621,2.621,0,0,1,.77-.577A2.14,2.14,0,0,1,4610.487,298.778Zm-1.6-2.245-.32-17.318h3.912l-.32,15.715V294.9q-.352,1.635-1.443,1.635Z"
              transform="translate(-4489.389 -278.413)"
              fill="#21876f"
            />
          </g>
          <g
            id="그룹_14"
            data-name="그룹 14"
            transform="translate(-905.261 534.024)"
          >
            <path
              id="패스_192"
              data-name="패스 192"
              d="M4600.46,905.083a8.657,8.657,0,0,1,3.7.789,7.564,7.564,0,0,1,2.924,2.483,12.636,12.636,0,0,1,1.906,4.33,25.908,25.908,0,0,1,.674,6.331,24.534,24.534,0,0,1-.713,6.331,12.673,12.673,0,0,1-1.943,4.29,7.6,7.6,0,0,1-2.907,2.482,8.768,8.768,0,0,1-7.273,0,7.6,7.6,0,0,1-2.906-2.482,12.636,12.636,0,0,1-1.943-4.29,24.45,24.45,0,0,1-.712-6.331,25.252,25.252,0,0,1,.692-6.331,12.91,12.91,0,0,1,1.925-4.33,7.291,7.291,0,0,1,2.886-2.483A8.646,8.646,0,0,1,4600.46,905.083Zm0,23.553a3.332,3.332,0,0,0,3.291-2.29,21.034,21.034,0,0,0,.943-7.408,39.98,39.98,0,0,0-.25-4.965,11.138,11.138,0,0,0-.75-3.04,3.264,3.264,0,0,0-1.347-1.5,4.018,4.018,0,0,0-1.887-.423,4.072,4.072,0,0,0-1.847.4,2.953,2.953,0,0,0-1.309,1.482,10.5,10.5,0,0,0-.809,3.059,37.714,37.714,0,0,0-.27,4.984,20.667,20.667,0,0,0,.963,7.388A3.341,3.341,0,0,0,4600.46,928.636Z"
              transform="translate(-4591.262 -905.083)"
              fill="#fff"
            />
          </g>
          <g
            id="그룹_15"
            data-name="그룹 15"
            transform="translate(-923.041 90.267)"
          >
            <path
              id="패스_193"
              data-name="패스 193"
              d="M4563.543,217.029a15.691,15.691,0,0,0,3.6-1.308,14.589,14.589,0,0,0,3.138-2.117h3.271v26.978h-5.119v-21.32a9.1,9.1,0,0,1-1.982.923,12.787,12.787,0,0,1-2.1.539Z"
              transform="translate(-4563.543 -213.373)"
              fill="#fff"
            />
            <path
              id="패스_194"
              data-name="패스 194"
              d="M4600.46,213.244a8.649,8.649,0,0,1,3.7.79,7.557,7.557,0,0,1,2.924,2.482,12.636,12.636,0,0,1,1.906,4.33,25.907,25.907,0,0,1,.674,6.331,24.533,24.533,0,0,1-.713,6.331A12.673,12.673,0,0,1,4607,237.8a7.61,7.61,0,0,1-2.907,2.483,8.775,8.775,0,0,1-7.273,0,7.6,7.6,0,0,1-2.906-2.483,12.636,12.636,0,0,1-1.943-4.29,24.45,24.45,0,0,1-.712-6.331,25.252,25.252,0,0,1,.692-6.331,12.91,12.91,0,0,1,1.925-4.33,7.285,7.285,0,0,1,2.886-2.482A8.639,8.639,0,0,1,4600.46,213.244Zm0,23.553a3.332,3.332,0,0,0,3.291-2.29,21.038,21.038,0,0,0,.943-7.408,39.985,39.985,0,0,0-.25-4.965,11.138,11.138,0,0,0-.75-3.04,3.265,3.265,0,0,0-1.347-1.5,4.018,4.018,0,0,0-1.887-.423,4.071,4.071,0,0,0-1.847.4,2.956,2.956,0,0,0-1.309,1.482,10.5,10.5,0,0,0-.809,3.059,37.72,37.72,0,0,0-.27,4.984,20.667,20.667,0,0,0,.963,7.388A3.341,3.341,0,0,0,4600.46,236.8Z"
              transform="translate(-4573.482 -213.244)"
              fill="#fff"
            />
          </g>
          <path
            id="패스_195"
            data-name="패스 195"
            d="M5403.826,981.747a15.682,15.682,0,0,0,3.6-1.309,14.586,14.586,0,0,0,3.137-2.117h3.271V1005.3h-5.12V983.98a9.081,9.081,0,0,1-1.981.923,12.884,12.884,0,0,1-2.1.539Z"
            transform="translate(-5787.894 -397.321)"
            fill="#fff"
          />
          <path
            id="패스_196"
            data-name="패스 196"
            d="M5440.742,977.962a8.653,8.653,0,0,1,3.7.789,7.571,7.571,0,0,1,2.925,2.483,12.636,12.636,0,0,1,1.905,4.329,25.856,25.856,0,0,1,.675,6.331,24.534,24.534,0,0,1-.714,6.331,12.69,12.69,0,0,1-1.942,4.29,7.6,7.6,0,0,1-2.907,2.482,8.77,8.77,0,0,1-7.273,0,7.589,7.589,0,0,1-2.9-2.482,12.615,12.615,0,0,1-1.943-4.29,24.448,24.448,0,0,1-.714-6.331,25.13,25.13,0,0,1,.694-6.331,12.872,12.872,0,0,1,1.924-4.329,7.288,7.288,0,0,1,2.887-2.483A8.644,8.644,0,0,1,5440.742,977.962Zm0,23.554a3.335,3.335,0,0,0,3.292-2.291,21.039,21.039,0,0,0,.942-7.408,40.087,40.087,0,0,0-.25-4.965,11.171,11.171,0,0,0-.751-3.04,3.258,3.258,0,0,0-1.347-1.5,4.018,4.018,0,0,0-1.887-.423,4.077,4.077,0,0,0-1.847.4,2.962,2.962,0,0,0-1.309,1.482,10.5,10.5,0,0,0-.809,3.06,37.734,37.734,0,0,0-.269,4.984,20.672,20.672,0,0,0,.962,7.388A3.341,3.341,0,0,0,5440.742,1001.516Z"
            transform="translate(-5797.833 -397.192)"
            fill="#fff"
          />
          <path
            id="패스_197"
            data-name="패스 197"
            d="M4664.021,941.239"
            transform="translate(-5522.613 -384.024)"
            fill="none"
            stroke="#e7b300"
            strokeMiterlimit="10"
            strokeWidth="5"
          />
          <path
            id="패스_198"
            data-name="패스 198"
            d="M5276.53,307.336"
            transform="translate(-5742.249 -156.717)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="10"
          />
          <path
            id="패스_199"
            data-name="패스 199"
            d="M4649.4,215.3V684.053h521.883"
            transform="translate(-5517.372 -123.713)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default Graph;
