import React from "react";
import Paragraph from "@/components/global/Paragraph";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <Layout>
      <Paragraph>
        <strong className="font-bold lg:text-[3.646vw]">C</strong>
        <strong className="font-bold lg:text-[3.646vw]">o</strong>
        <strong className="font-bold lg:text-[3.646vw]">n</strong>
        <strong className="font-bold lg:text-[3.646vw]">t</strong>
        <strong className="font-bold lg:text-[3.646vw]">a</strong>
        <strong className="font-bold lg:text-[3.646vw]">c</strong>
        <strong className="font-bold lg:text-[3.646vw]">t</strong>
      </Paragraph>

      <motion.div
        variants={fadeIn("up", 0.5, 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false }}
        className="mt-[30px] w-full rounded-lg bg-[#2c2c2c] py-[4.17vh] pl-[8%] sm:mt-[5.74vh] sm:aspect-[970/690] sm:pl-0 lg:w-[50.52vw]"
      >
        <h2 className="whitespace-pre-wrap text-[6.3vw] font-light sm:whitespace-nowrap sm:text-center sm:text-[3.5vw] lg:text-[1.5625vw]">
          <span className="font-bold">성공</span>
          {"으로 가는 과정을\n계획하는데 "}
          <span className="font-bold">함께</span>하겠습니다.
        </h2>
        <div className="contact_info_container">
          <div className="contact_info_row">
            <div className="space-y-3 sm:space-y-[2.78vh]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27.521 39.316"
                className="w-[20px] sm:w-[1.7201rem]"
              >
                <path
                  id="패스_300"
                  data-name="패스 300"
                  d="M18.761,10.846a4.915,4.915,0,1,1-4.915,4.915,4.915,4.915,0,0,1,4.915-4.915m0-8.846A13.761,13.761,0,0,1,32.521,15.761c0,10.321-13.761,25.556-13.761,25.556S5,26.081,5,15.761A13.761,13.761,0,0,1,18.761,2m0,3.932a9.829,9.829,0,0,0-9.829,9.829c0,1.966,0,5.9,9.829,19.088C28.59,21.658,28.59,17.727,28.59,15.761A9.829,9.829,0,0,0,18.761,5.932Z"
                  transform="translate(-5 -2)"
                  fill="#fff"
                />
              </svg>
              <p className="contact_info_text">
                {"대전광역시 서구 대덕대로 241번길 20,\n549-4호 (둔산동, 청남빌딩)"}
              </p>
            </div>
            <div className="space-y-3 sm:space-y-[2.78vh]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.022"
                height="37.269"
                viewBox="0 0 22.022 37.269"
                className="w-[18px] sm:w-[1.3764rem]"
              >
                <path
                  id="패스_298"
                  data-name="패스 298"
                  d="M22.787,1H9.235A4.235,4.235,0,0,0,5,5.235v28.8a4.235,4.235,0,0,0,4.235,4.235H22.787a4.235,4.235,0,0,0,4.235-4.235V5.235A4.235,4.235,0,0,0,22.787,1ZM16.011,36.575a2.541,2.541,0,1,1,2.541-2.541A2.538,2.538,0,0,1,16.011,36.575ZM23.634,29.8H8.388V6.082H23.634Z"
                  transform="translate(-5 -1)"
                  fill="#fff"
                />
              </svg>
              <p className="contact_info_text">044 868 9419</p>
            </div>
          </div>
          <div className="contact_info_row">
            <div className="space-y-3 sm:space-y-[2.78vh]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36.516 29.213"
                className="w-[29px] sm:w-[2.2822rem]"
              >
                <path
                  id="패스_299"
                  data-name="패스 299"
                  d="M34.865,4H5.652A3.647,3.647,0,0,0,2.018,7.652L2,29.561a3.662,3.662,0,0,0,3.652,3.652H34.865a3.662,3.662,0,0,0,3.652-3.652V7.652A3.662,3.662,0,0,0,34.865,4ZM33.039,29.561H7.477a1.831,1.831,0,0,1-1.826-1.826V11.3l12.671,7.924a3.616,3.616,0,0,0,3.871,0L34.865,11.3V27.736A1.831,1.831,0,0,1,33.039,29.561ZM20.258,16.781,5.652,7.652H34.865Z"
                  transform="translate(-2 -4)"
                  fill="#fff"
                />
              </svg>
              <p className="contact_info_text">purplevery222@gmail.com</p>
            </div>
            <div className="space-y-3 md:space-y-[2.78vh]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                className="md:[2.1875rem] w-[26.5px]"
              >
                <path
                  id="패스_375"
                  data-name="패스 375"
                  d="M12.208,2A4.375,4.375,0,0,0,7.833,6.375v7.292A5.833,5.833,0,0,0,2,19.5V32.625A4.375,4.375,0,0,0,6.375,37h17.5a7.26,7.26,0,0,1-1.313-2.917H6.375a1.458,1.458,0,0,1-1.458-1.458V19.5a2.917,2.917,0,0,1,2.917-2.917H22.563a7.211,7.211,0,0,1,1.313-2.917H10.75V6.375a1.458,1.458,0,0,1,1.458-1.458H26.792A1.458,1.458,0,0,1,28.25,6.375V10.9a7.3,7.3,0,0,1,1.458-.146h1.458V6.375A4.375,4.375,0,0,0,26.792,2Zm17.5,11.667a4.375,4.375,0,0,0-4.375,4.375V32.625A4.375,4.375,0,0,0,29.708,37h2.917A4.375,4.375,0,0,0,37,32.625V18.042a4.375,4.375,0,0,0-4.375-4.375ZM28.25,18.042a1.458,1.458,0,0,1,1.458-1.458h2.917a1.458,1.458,0,0,1,1.458,1.458V32.625a1.458,1.458,0,0,1-1.458,1.458H29.708a1.458,1.458,0,0,1-1.458-1.458Zm-17.5,2.917A1.458,1.458,0,1,1,9.292,19.5,1.458,1.458,0,0,1,10.75,20.958ZM9.292,28.25a1.458,1.458,0,1,0-1.458-1.458A1.458,1.458,0,0,0,9.292,28.25Zm7.292-7.292A1.458,1.458,0,1,1,15.125,19.5,1.458,1.458,0,0,1,16.583,20.958ZM15.125,28.25a1.458,1.458,0,1,0-1.458-1.458A1.458,1.458,0,0,0,15.125,28.25Z"
                  transform="translate(-2 -2)"
                  fill="#fff"
                />
              </svg>
              <p className="contact_info_text">0504 144 8970</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
