import { useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import clientRoutes from "@/data/clientRoutes";
import { IsOpenContext } from "@/context/IsOpenContext";
import cls from "@/libs/cls";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(IsOpenContext);
  return (
    <>
      <header
        className={`opacityOnly1 z-30 flex h-header_h w-full items-center justify-between border-b border-b-prime_shadow px-5 lg:sticky lg:inset-0 lg:px-20 2xl:px-x_margin ${
          isOpen && "fixed border-none bg-black"
        }`}
      >
        <svg
          onClick={() => router.push("/")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 189.929 49.203"
          className="w-[100px] cursor-pointer lg:w-[150px] 2xl:w-[189.929px]"
        >
          <g
            id="그룹_112"
            data-name="그룹 112"
            transform="translate(-436.349 -4663.777)"
          >
            <g
              id="그룹_110"
              data-name="그룹 110"
              transform="translate(483.213 4679.337)"
            >
              <g
                id="그룹_107"
                data-name="그룹 107"
                transform="translate(0.259 0)"
              >
                <g id="그룹_106" data-name="그룹 106">
                  <path
                    id="패스_301"
                    data-name="패스 301"
                    d="M655.994,4736.3h4.078c5.8,0,7.932,3.384,7.932,7.059,0,3.652-2.218,7.058-7.6,7.058h-1.345v4.37h-3.07Zm4.549,11.136c2.913,0,4.459-1.658,4.459-4.078,0-2.51-1.591-4.056-4.459-4.056h-1.479v8.134Z"
                    transform="translate(-655.994 -4736.304)"
                    fill="#fff"
                  />
                  <path
                    id="패스_302"
                    data-name="패스 302"
                    d="M722.631,4747.814v-11.405h3.07v11.5c0,2.353.941,4.258,3.5,4.258,2.577,0,3.518-1.9,3.518-4.258v-11.5h3.07v11.405c0,4.325-2.375,7.327-6.588,7.327S722.631,4752.117,722.631,4747.814Z"
                    transform="translate(-708.335 -4736.387)"
                    fill="#fff"
                  />
                  <path
                    id="패스_303"
                    data-name="패스 303"
                    d="M807.185,4754.768l-2.151-4.5a12.333,12.333,0,0,1-1.9.157H801.74v4.37h-3.07V4736.3h4.078c5.8,0,7.932,3.384,7.932,7.059a6.708,6.708,0,0,1-2.913,5.848l3.092,5.557Zm-3.966-7.328c2.913,0,4.459-1.658,4.459-4.078,0-2.51-1.591-4.056-4.459-4.056H801.74v8.134Z"
                    transform="translate(-768.06 -4736.304)"
                    fill="#fff"
                  />
                  <path
                    id="패스_304"
                    data-name="패스 304"
                    d="M867.189,4736.3h4.078c5.8,0,7.932,3.384,7.932,7.059,0,3.652-2.218,7.058-7.6,7.058h-1.344v4.37h-3.07Zm4.549,11.136c2.913,0,4.459-1.658,4.459-4.078,0-2.51-1.591-4.056-4.459-4.056h-1.479v8.134Z"
                    transform="translate(-821.879 -4736.304)"
                    fill="#fff"
                  />
                  <path
                    id="패스_305"
                    data-name="패스 305"
                    d="M934.558,4736.3h3.07v15.528h6.162v2.936h-9.232Z"
                    transform="translate(-874.795 -4736.304)"
                    fill="#fff"
                  />
                  <path
                    id="패스_306"
                    data-name="패스 306"
                    d="M987.721,4736.409h10.106v2.913h-7.036v4.729h6.453v2.711h-6.453v5.153h7.036v2.936H987.721Z"
                    transform="translate(-916.553 -4736.387)"
                    fill="#fff"
                  />
                  <path
                    id="패스_307"
                    data-name="패스 307"
                    d="M1040.154,4736.409h3.271l5,14,4.84-14h3.249l-6.431,18.441h-3.339Z"
                    transform="translate(-957.737 -4736.387)"
                    fill="#fff"
                  />
                  <path
                    id="패스_308"
                    data-name="패스 308"
                    d="M1124.862,4736.409h10.106v2.913h-7.036v4.729h6.453v2.711h-6.453v5.153h7.036v2.936h-10.106Z"
                    transform="translate(-1024.271 -4736.387)"
                    fill="#fff"
                  />
                  <path
                    id="패스_309"
                    data-name="패스 309"
                    d="M1193.016,4754.768l-2.151-4.5a12.331,12.331,0,0,1-1.9.157h-1.389v4.37h-3.07V4736.3h4.078c5.8,0,7.932,3.384,7.932,7.059a6.708,6.708,0,0,1-2.913,5.848l3.092,5.557Zm-3.966-7.328c2.913,0,4.459-1.658,4.459-4.078,0-2.51-1.591-4.056-4.459-4.056h-1.479v8.134Z"
                    transform="translate(-1071.115 -4736.304)"
                    fill="#fff"
                  />
                  <path
                    id="패스_310"
                    data-name="패스 310"
                    d="M1249.147,4749.719l-6.677-13.31h3.339l4.885,10.218,4.818-10.218h3.316l-6.61,13.31v5.131h-3.07Z"
                    transform="translate(-1116.648 -4736.387)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="그룹_109"
                data-name="그룹 109"
                transform="translate(0 23.698)"
              >
                <g id="그룹_108" data-name="그룹 108">
                  <path
                    id="패스_311"
                    data-name="패스 311"
                    d="M659.107,4847.722h-1.795v4.982h-.733v-4.982h-1.791v-.6h4.318Z"
                    transform="translate(-654.789 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_312"
                    data-name="패스 312"
                    d="M684.787,4849.812a3.46,3.46,0,0,1-.276,1.433,2.092,2.092,0,0,1-.783.934,2.159,2.159,0,0,1-3.143-.926,3.313,3.313,0,0,1-.29-1.39v-.4a3.413,3.413,0,0,1,.28-1.423,2.072,2.072,0,0,1,1.964-1.273,2.163,2.163,0,0,1,1.183.324,2.088,2.088,0,0,1,.788.939,3.476,3.476,0,0,1,.276,1.433Zm-.733-.361a2.5,2.5,0,0,0-.4-1.524,1.317,1.317,0,0,0-1.116-.532,1.3,1.3,0,0,0-1.1.532,2.451,2.451,0,0,0-.412,1.475v.411a2.506,2.506,0,0,0,.4,1.513,1.418,1.418,0,0,0,2.219.031,2.491,2.491,0,0,0,.4-1.49Z"
                    transform="translate(-674.824 -4846.762)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_313"
                    data-name="패스 313"
                    d="M721.7,4849.934a3.453,3.453,0,0,1-1.379-.669,1.279,1.279,0,0,1-.431-.979,1.352,1.352,0,0,1,.527-1.092,2.1,2.1,0,0,1,1.371-.431,2.293,2.293,0,0,1,1.026.222,1.689,1.689,0,0,1,.7.614,1.569,1.569,0,0,1,.248.855h-.74a1.021,1.021,0,0,0-.322-.8,1.312,1.312,0,0,0-.909-.291,1.342,1.342,0,0,0-.85.24.8.8,0,0,0-.3.667.722.722,0,0,0,.289.579,2.843,2.843,0,0,0,.986.432,4.6,4.6,0,0,1,1.089.433,1.649,1.649,0,0,1,.583.55,1.4,1.4,0,0,1,.19.74,1.306,1.306,0,0,1-.53,1.087,2.259,2.259,0,0,1-1.415.408,2.627,2.627,0,0,1-1.074-.221,1.806,1.806,0,0,1-.769-.6,1.474,1.474,0,0,1-.27-.871h.74a.963.963,0,0,0,.374.8,1.576,1.576,0,0,0,1,.293,1.447,1.447,0,0,0,.894-.238.772.772,0,0,0,.31-.648.759.759,0,0,0-.287-.635A3.337,3.337,0,0,0,721.7,4849.934Z"
                    transform="translate(-705.782 -4846.762)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_314"
                    data-name="패스 314"
                    d="M749.53,4849.812a3.46,3.46,0,0,1-.276,1.433,2.092,2.092,0,0,1-.782.934,2.159,2.159,0,0,1-3.143-.926,3.31,3.31,0,0,1-.289-1.39v-.4a3.413,3.413,0,0,1,.28-1.423,2.072,2.072,0,0,1,1.964-1.273,2.162,2.162,0,0,1,1.183.324,2.087,2.087,0,0,1,.788.939,3.476,3.476,0,0,1,.276,1.433Zm-.733-.361a2.5,2.5,0,0,0-.4-1.524,1.317,1.317,0,0,0-1.116-.532,1.3,1.3,0,0,0-1.1.532,2.449,2.449,0,0,0-.412,1.475v.411a2.507,2.507,0,0,0,.4,1.513,1.418,1.418,0,0,0,2.219.031,2.491,2.491,0,0,0,.4-1.49Z"
                    transform="translate(-725.677 -4846.762)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_315"
                    data-name="패스 315"
                    d="M774.791,4852.1h2.646v.6h-3.386v-5.584h.74Z"
                    transform="translate(-748.465 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_316"
                    data-name="패스 316"
                    d="M793.421,4851.726l1.6-4.606h.805l-2.071,5.584H793.1l-2.067-5.584h.8Z"
                    transform="translate(-761.802 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_317"
                    data-name="패스 317"
                    d="M822.932,4850.123h-2.42v1.979h2.811v.6h-3.548v-5.584h3.509v.6h-2.773v1.8h2.42Z"
                    transform="translate(-784.379 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_318"
                    data-name="패스 318"
                    d="M857.54,4850.445h-1.311v2.259h-.74v-5.584h1.849a2.19,2.19,0,0,1,1.452.429,1.547,1.547,0,0,1,.508,1.25,1.506,1.506,0,0,1-.282.909,1.682,1.682,0,0,1-.784.579l1.312,2.37v.046h-.79Zm-1.311-.6h1.131a1.278,1.278,0,0,0,.873-.285.962.962,0,0,0,.324-.761,1.013,1.013,0,0,0-.309-.8,1.311,1.311,0,0,0-.892-.281h-1.128Z"
                    transform="translate(-812.43 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_319"
                    data-name="패스 319"
                    d="M884.135,4850.123h-2.42v1.979h2.811v.6h-3.548v-5.584h3.509v.6h-2.773v1.8h2.42Z"
                    transform="translate(-832.452 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_320"
                    data-name="패스 320"
                    d="M905.82,4851.243h-2.34l-.525,1.461H902.2l2.132-5.584h.644l2.136,5.584h-.755Zm-2.117-.6h1.9l-.951-2.612Z"
                    transform="translate(-849.117 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_321"
                    data-name="패스 321"
                    d="M932.27,4852.1h2.646v.6H931.53v-5.584h.74Z"
                    transform="translate(-872.158 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_322"
                    data-name="패스 322"
                    d="M953.67,4861.321H951.8v-.579h1.872Z"
                    transform="translate(-888.078 -4857.743)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_323"
                    data-name="패스 323"
                    d="M966.876,4850.944l.107.736.157-.664,1.1-3.9h.622l1.078,3.9.153.675.119-.751.867-3.82h.74l-1.354,5.584H969.8l-1.151-4.069-.088-.426-.088.426-1.193,4.069h-.671l-1.35-5.584h.736Z"
                    transform="translate(-898.65 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_324"
                    data-name="패스 324"
                    d="M1006.179,4849.812a3.457,3.457,0,0,1-.276,1.433,2.092,2.092,0,0,1-.782.934,2.159,2.159,0,0,1-3.143-.926,3.31,3.31,0,0,1-.29-1.39v-.4a3.413,3.413,0,0,1,.28-1.423,2.072,2.072,0,0,1,1.964-1.273,2.163,2.163,0,0,1,1.183.324,2.088,2.088,0,0,1,.788.939,3.473,3.473,0,0,1,.276,1.433Zm-.733-.361a2.5,2.5,0,0,0-.4-1.524,1.316,1.316,0,0,0-1.116-.532,1.3,1.3,0,0,0-1.1.532,2.449,2.449,0,0,0-.412,1.475v.411a2.505,2.505,0,0,0,.4,1.513,1.418,1.418,0,0,0,2.219.031,2.494,2.494,0,0,0,.4-1.49Z"
                    transform="translate(-927.265 -4846.762)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_325"
                    data-name="패스 325"
                    d="M1032.734,4850.445h-1.312v2.259h-.74v-5.584h1.849a2.189,2.189,0,0,1,1.452.429,1.546,1.546,0,0,1,.508,1.25,1.506,1.506,0,0,1-.282.909,1.683,1.683,0,0,1-.785.579l1.312,2.37v.046h-.79Zm-1.312-.6h1.131a1.277,1.277,0,0,0,.873-.285.961.961,0,0,0,.324-.761,1.013,1.013,0,0,0-.309-.8,1.311,1.311,0,0,0-.892-.281h-1.128Z"
                    transform="translate(-950.038 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_326"
                    data-name="패스 326"
                    d="M1056.912,4852.1h2.646v.6h-3.387v-5.584h.74Z"
                    transform="translate(-970.06 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_327"
                    data-name="패스 327"
                    d="M1078.8,4852.7v-5.584h1.576a2.538,2.538,0,0,1,1.289.322,2.18,2.18,0,0,1,.865.917,2.982,2.982,0,0,1,.308,1.365v.357a2.993,2.993,0,0,1-.3,1.384,2.142,2.142,0,0,1-.871.913,2.69,2.69,0,0,1-1.318.326Zm.737-4.982v4.38h.774a1.686,1.686,0,0,0,1.325-.53,2.188,2.188,0,0,0,.474-1.509v-.326a2.223,2.223,0,0,0-.447-1.48,1.593,1.593,0,0,0-1.267-.536Z"
                    transform="translate(-987.835 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_328"
                    data-name="패스 328"
                    d="M1118.47,4850.518v2.186h-.737v-5.584h2.06a2.069,2.069,0,0,1,1.436.468,1.587,1.587,0,0,1,.52,1.239,1.566,1.566,0,0,1-.508,1.252,2.164,2.164,0,0,1-1.456.439Zm0-.6h1.323a1.321,1.321,0,0,0,.9-.279,1.017,1.017,0,0,0,.315-.8,1.052,1.052,0,0,0-.315-.8,1.239,1.239,0,0,0-.863-.312h-1.365Z"
                    transform="translate(-1018.413 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_329"
                    data-name="패스 329"
                    d="M1145.793,4850.445h-1.312v2.259h-.74v-5.584h1.849a2.19,2.19,0,0,1,1.452.429,1.547,1.547,0,0,1,.508,1.25,1.506,1.506,0,0,1-.282.909,1.683,1.683,0,0,1-.784.579l1.312,2.37v.046H1147Zm-1.312-.6h1.131a1.278,1.278,0,0,0,.873-.285.961.961,0,0,0,.324-.761,1.013,1.013,0,0,0-.308-.8,1.311,1.311,0,0,0-.892-.281h-1.128Z"
                    transform="translate(-1038.842 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_330"
                    data-name="패스 330"
                    d="M1172.811,4849.812a3.457,3.457,0,0,1-.276,1.433,2.092,2.092,0,0,1-.782.934,2.159,2.159,0,0,1-3.143-.926,3.31,3.31,0,0,1-.289-1.39v-.4a3.409,3.409,0,0,1,.28-1.423,2.071,2.071,0,0,1,1.964-1.273,2.162,2.162,0,0,1,1.183.324,2.087,2.087,0,0,1,.788.939,3.473,3.473,0,0,1,.276,1.433Zm-.733-.361a2.5,2.5,0,0,0-.4-1.524,1.316,1.316,0,0,0-1.116-.532,1.3,1.3,0,0,0-1.1.532,2.449,2.449,0,0,0-.412,1.475v.411a2.505,2.505,0,0,0,.4,1.513,1.418,1.418,0,0,0,2.219.031,2.491,2.491,0,0,0,.4-1.49Z"
                    transform="translate(-1058.147 -4846.762)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_331"
                    data-name="패스 331"
                    d="M1197.332,4852.7v-5.584h1.825a2.117,2.117,0,0,1,1.367.376,1.354,1.354,0,0,1,.458,1.112,1.135,1.135,0,0,1-.222.692,1.447,1.447,0,0,1-.606.466,1.293,1.293,0,0,1,.715.481,1.38,1.38,0,0,1,.263.845,1.492,1.492,0,0,1-.487,1.181,2.013,2.013,0,0,1-1.377.43Zm.736-3.2h1.112a1.167,1.167,0,0,0,.773-.242.813.813,0,0,0,.29-.658.8.8,0,0,0-.268-.67,1.319,1.319,0,0,0-.817-.21h-1.089Zm0,.591v2.01h1.216a1.17,1.17,0,0,0,.811-.267.935.935,0,0,0,.3-.734q0-1.009-1.1-1.009Z"
                    transform="translate(-1080.935 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_332"
                    data-name="패스 332"
                    d="M1223.794,4852.1h2.646v.6h-3.386v-5.584h.74Z"
                    transform="translate(-1101.139 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_333"
                    data-name="패스 333"
                    d="M1248.84,4850.123h-2.42v1.979h2.811v.6h-3.548v-5.584h3.509v.6h-2.773v1.8h2.42Z"
                    transform="translate(-1118.914 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_334"
                    data-name="패스 334"
                    d="M1270.373,4847.12l1.825,4.556,1.826-4.556h.955v5.584h-.736v-2.175l.069-2.347-1.833,4.521h-.564l-1.829-4.51.073,2.335v2.175h-.736v-5.584Z"
                    transform="translate(-1137.559 -4847.043)"
                    fill="#f1f2f2"
                  />
                  <path
                    id="패스_335"
                    data-name="패스 335"
                    d="M1304.712,4849.934a3.453,3.453,0,0,1-1.379-.669,1.278,1.278,0,0,1-.431-.979,1.353,1.353,0,0,1,.527-1.092,2.1,2.1,0,0,1,1.371-.431,2.292,2.292,0,0,1,1.026.222,1.688,1.688,0,0,1,.7.614,1.568,1.568,0,0,1,.247.855h-.74a1.021,1.021,0,0,0-.322-.8,1.312,1.312,0,0,0-.909-.291,1.341,1.341,0,0,0-.85.24.8.8,0,0,0-.3.667.722.722,0,0,0,.29.579,2.842,2.842,0,0,0,.986.432,4.6,4.6,0,0,1,1.089.433,1.649,1.649,0,0,1,.583.55,1.4,1.4,0,0,1,.19.74,1.306,1.306,0,0,1-.529,1.087,2.258,2.258,0,0,1-1.415.408,2.627,2.627,0,0,1-1.074-.221,1.805,1.805,0,0,1-.769-.6,1.473,1.473,0,0,1-.27-.871h.74a.963.963,0,0,0,.374.8,1.577,1.577,0,0,0,1,.293,1.447,1.447,0,0,0,.894-.238.772.772,0,0,0,.31-.648.758.758,0,0,0-.288-.635A3.332,3.332,0,0,0,1304.712,4849.934Z"
                    transform="translate(-1163.717 -4846.762)"
                    fill="#f1f2f2"
                  />
                </g>
              </g>
            </g>
            <g
              id="그룹_111"
              data-name="그룹 111"
              transform="translate(436.349 4663.777)"
            >
              <circle
                id="타원_17"
                data-name="타원 17"
                cx="10.949"
                cy="10.949"
                r="10.949"
                transform="translate(8.349 27.306)"
                fill="#3d0299"
              />
              <path
                id="패스_336"
                data-name="패스 336"
                d="M534.445,4817.222c-.488.488-.065,1.7.946,2.713s2.225,1.434,2.713.945.064-1.7-.946-2.712S534.934,4816.734,534.445,4817.222Z"
                transform="translate(-513.241 -4784.143)"
                fill="#3d0299"
                fillRule="evenodd"
              />
              <path
                id="패스_337"
                data-name="패스 337"
                d="M576.461,4743.382c.488-.488.064-1.7-.946-2.713s-2.225-1.434-2.712-.945-.065,1.7.945,2.713S575.972,4743.871,576.461,4743.382Z"
                transform="translate(-543.368 -4723.271)"
                fill="#3d0299"
                fillRule="evenodd"
              />
              <path
                id="패스_338"
                data-name="패스 338"
                d="M494.219,4739.724c-.488.488-.064,1.7.946,2.713s2.225,1.434,2.712.945.065-1.7-.945-2.713S494.707,4739.235,494.219,4739.724Z"
                transform="translate(-481.644 -4723.271)"
                fill="#3d0299"
                fillRule="evenodd"
              />
              <path
                id="패스_339"
                data-name="패스 339"
                d="M463.615,4675.208a18.636,18.636,0,0,0,.94-7.133,3.5,3.5,0,0,0-.537-1.618,5.861,5.861,0,0,0-3.506-2.4,5.78,5.78,0,0,0-4.934,1.314,3.495,3.495,0,0,0-6.084.389l-.108.262,0,0a1.935,1.935,0,0,0-.26.722,17.54,17.54,0,0,0-.822,3.658,3.482,3.482,0,0,0-.961,2.006,9.55,9.55,0,0,0,.106,2.8h-.165a10.931,10.931,0,0,0-1.237,21.792,10.586,10.586,0,0,0-1.08,2.9,11.207,11.207,0,0,0-.163,3.75h3.542a7.629,7.629,0,0,1,.04-3.026,7.4,7.4,0,0,1,5.156-5.511c4.568-.988,3.98-4.777,3.537-6.315-.08-.208-.151-.418-.213-.633,0-.009-.011-.03-.011-.03l0,0a7.437,7.437,0,1,1,9.561,5.032c-.021.007-.042.01-.064.017-.552.153-4.663,1.478-3.6,6.861h0a7.529,7.529,0,0,1,.2,3.6h3.535a10.956,10.956,0,0,0-.33-4.394,2.772,2.772,0,0,1,.178-2.009,1.731,1.731,0,0,1,.952-.7l.1-.029.137-.04.025-.008a10.928,10.928,0,0,0-3.932-21.263Zm-16.335,18.361a7.436,7.436,0,1,1,7.436-7.436A7.437,7.437,0,0,1,447.281,4693.569Zm3.528-20.735a5.378,5.378,0,0,0,1.768,2.713c-2.176-3.594.069-8.275.069-8.275s-.509,1.326,3.119,5.041-.282,8.293-.282,8.293C450.213,4677.675,450.808,4672.834,450.808,4672.834Zm8.773,3.145a11.711,11.711,0,0,1-3.636,4.6l-.108.081c4.038-5.091,1.819-12.478,1.819-12.478,2.206-1.748,3.414.15,3.414.15A16.129,16.129,0,0,1,459.581,4675.979Z"
                transform="translate(-436.349 -4663.777)"
                fill="#3d0299"
                fillRule="evenodd"
              />
              <path
                id="패스_340"
                data-name="패스 340"
                d="M460.076,4733.321a7.436,7.436,0,1,0,7.436,7.436A7.437,7.437,0,0,0,460.076,4733.321Zm5.3,5.191c-.488.489-1.7.065-2.712-.945s-1.434-2.225-.946-2.713,1.7-.064,2.713.945S465.866,4738.024,465.377,4738.512Z"
                transform="translate(-449.144 -4718.401)"
                fill="#7e26ef"
              />
              <path
                id="패스_341"
                data-name="패스 341"
                d="M506.386,4733.393a7.417,7.417,0,0,0-6.1,9.363l0,0s.009.021.011.03c.062.215.132.426.213.633.419,1.456.967,4.926-2.846,6.132a7.421,7.421,0,0,0-3.666,1.874l-.022.021-.115.111a7.3,7.3,0,0,0-2.045,3.688c-.02.093-.037.186-.053.278l-.007.042c-.006.034-.012.069-.017.1a7.51,7.51,0,0,0-.089.907c0,.015,0,.029,0,.044,0,.035,0,.07,0,.105s0,.075,0,.111c0,.005,0,.01,0,.016s0,.016,0,.023a7.464,7.464,0,0,0,.132,1.4h0a7.437,7.437,0,0,0,14.6,0h.006c.047-.259.081-.516.1-.771,0-.055.009-.11.012-.166v-.01c.01-.157.015-.314.015-.474a7.433,7.433,0,0,0-.345-2.245c-1.016-5.333,3.065-6.648,3.615-6.8.022-.007.043-.01.064-.017a7.434,7.434,0,0,0-3.458-14.395Zm-5.406,18.087c.488-.488,1.7-.064,2.713.946s1.434,2.225.946,2.713-1.7.065-2.713-.945S500.493,4751.969,500.981,4751.48Zm11.888-12.968c-.489.489-1.7.065-2.713-.945s-1.434-2.225-.945-2.713,1.7-.064,2.712.945S513.356,4738.024,512.869,4738.512Z"
                transform="translate(-479.776 -4718.401)"
                fill="#7e26ef"
              />
              <path
                id="패스_342"
                data-name="패스 342"
                d="M508.628,4685.11c-3.628-3.714-3.119-5.041-3.119-5.041s-2.245,4.681-.069,8.275a5.378,5.378,0,0,1-1.768-2.713s-.595,4.841,4.674,7.772C508.346,4693.4,512.255,4688.824,508.628,4685.11Z"
                transform="translate(-489.213 -4676.574)"
                fill="#7c9d46"
              />
              <path
                id="패스_343"
                data-name="패스 343"
                d="M529.007,4681.609s2.219,7.387-1.819,12.479l.108-.081a11.708,11.708,0,0,0,3.636-4.6,16.128,16.128,0,0,0,1.489-7.645S531.213,4679.862,529.007,4681.609Z"
                transform="translate(-507.699 -4677.203)"
                fill="#7c9d46"
              />
            </g>
          </g>
        </svg>
        {/* <div className="flex space-x-3">
          <div className="group flex cursor-pointer items-center gap-[4.5px] hover:text-primary">
            <span>LOGIN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.585 19.87"
              className="aspect-square h-[20px] w-[20px]"
            >
              <path
                id="패스_376"
                data-name="패스 376"
                d="M24.365,11.523V9.56a3.815,3.815,0,0,0-3.815-3.8h0A3.815,3.815,0,0,0,16.73,9.57v3.06a1.6,1.6,0,0,0,1.6,1.6h4.59a1.153,1.153,0,0,1,1.153,1.153v5.61a3.376,3.376,0,0,1-3.386,3.381H18.54a1.8,1.8,0,0,1-1.811-1.785V19.117c0-2.423-3.152-2.907-3.152-6.059V7.438H9.253A3.473,3.473,0,0,0,5.78,10.916h0a1.775,1.775,0,0,0,1.775,1.775h1.4v8a3.677,3.677,0,0,0,3.677,3.677h5.9m-9.552-8.65H6.346m6.3,8.65H7.193M13.578,7.438V5.5M10.385,7.438V5.5"
                transform="translate(-5.28 -5)"
                fill="rgba(0,0,0,0)"
                // stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="stroke-white group-hover:stroke-primary"
              />
            </svg>
          </div>
          <div
            className="cursor-pointer rounded-xl bg-prime_shadow p-2 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <FiX className="h-5 w-5 text-white" />
            ) : (
              <FiMenu className="h-5 w-5 text-white" />
            )}
          </div>
        </div> */}
      </header>
      {isOpen && (
        <ul className="fixed left-0 top-[80px] z-50 flex h-full w-screen flex-col divide-y-2 divide-prime_shadow overflow-hidden bg-black px-4">
          {clientRoutes.map((route, idx) => (
            <li
              key={idx}
              className={cls(
                "text-md w-full cursor-pointer font-bold text-[#b3b3b3]",
                route.isSub ? "px-4 py-3 text-sm" : "py-4",
                router.pathname === route.link
                  ? route.link === "/comagain"
                    ? "text-prime_yellow"
                    : route.link === "/payvery"
                    ? "text-prime_blue"
                    : "text-primary"
                  : "hover:text-white"
              )}
              onClick={() => {
                setIsOpen(false);
                router.push(route.link);
              }}
            >
              {route.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
