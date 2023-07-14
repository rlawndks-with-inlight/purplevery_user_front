import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Paragraph from "@/components/global/Paragraph";
import { fadeIn } from "@/libs/variants";
import Layout from "@/components/layout/clientLayout";
import clientRoutes from "@/data/clientRoutes";
import _ from 'lodash';
import { styled } from "styled-components";
const logo_list = [
  '/logos/경기지방공사.png',
  '/logos/관세청.png',
  '/logos/교보생명.png',
  '/logos/교원구몬.png',
  '/logos/국군복지단.png',
  '/logos/국세청.png',
  '/logos/국토교통부.png',
  '/logos/나이스평가.png',
  '/logos/넥슨.png',
  '/logos/농협생명.png',
  '/logos/농협생명보험.png',
  '/logos/농협손해보험.png',
  '/logos/농협캐피탈.png',
  '/logos/다날.png',
  '/logos/대교.png',
  '/logos/대법원.png',
  '/logos/대한적십자.png',
  '/logos/라이나생명.png',
  '/logos/메리츠캐피탈.png',
  '/logos/모두투어.png',
  '/logos/반디앤루니스.png',
  '/logos/배달의민족.png',
  '/logos/신한생명.png',
  '/logos/씨제이오쇼핑.png',
  '/logos/아주카피탈.png',
  '/logos/아프리카.png',
  '/logos/에스케이브로드밴드.png',
  '/logos/에스케이텔레콤.png',
  '/logos/엘지유플러스.png',
  '/logos/여기어때.png',
  '/logos/웅진싱크빅.png',
  '/logos/제로페이.png',
  '/logos/조달청.png',
  '/logos/조선읿.png',
  '/logos/중소기업벤처진흥공단.png',
  '/logos/지에스샵.png',
  '/logos/카카오페이.ai',
  '/logos/카카오페이.png',
  '/logos/컬쳐랜드.png',
  '/logos/코레일.png',
  '/logos/코웨이.png',
  '/logos/특허청.png',
  '/logos/페이코.png',
  '/logos/하나투어.png',
  '/logos/한국전력\.png',
  '/logos/현대카드.png',
  '/logos/현대해상화재보험.png',
  '/logos/현대홈쇼핑.png',
  '/logos/ak몰.png',
  '/logos/kb캐피탈.png',
  '/logos/kcp.png',
  '/logos/kg모빌리언스.png',
  '/logos/kg이니시스.png',
  '/logos/kt.png',
  '/logos/ktskylife.png',
  '/logos/N페이.png',
  '/logos/ns홈쇼핑.png',
]
const Row = styled.div`
display:flex;
column-gap:16px;
width:100%;
max-width:1500px;
@media (max-width:2050px){
  width: calc(100% - 600px);
}
@media (max-width:1535px){
  width: calc(100% - 400px);
}
@media (max-width:1150px){
  width: calc(100% - 500px);
  flex-direction:column;
}
@media (max-width:1023px){
  width: 100%;
}
`
const CardWrappers = styled.div`
padding:2rem;
background:#fff;
row-gap: 1rem;
width:33%;
border-radius:2rem;
box-shadow: 0 4px 4px #00000058;
display:flex;
flex-direction:column;
color: #000;
@media (max-width:1150px){
  width:100%;
  margin-bottom:2rem;
}
`
const Card = (props) => {
  const { item } = props;
  return (
    <>
      <CardWrappers>
        <img src={item.logo_img} style={{ height: '48px', width: 'auto', maxWidth: '50%',margin:'0 auto 2rem 0' }} />
        <div style={{color:'#ababab'}}>{item.comment}</div>
        <div>{item.title}</div>
      </CardWrappers>
    </>
  )
}
const ImgSlideContainer = styled.div`
margin-top:2rem;
overflow: hidden;
width: calc(100% - 600px);
@media (max-width:2050px){
  width: calc(100% - 600px);
}
@media (max-width:1535px){
  width: calc(100% - 400px);
}
@media (max-width:1150px){
  width: calc(100% - 500px);
}
@media (max-width:1023px){
  width: 100%;
}
`
const ImgSlideContent = styled.div`
width:100%;
display:flex;
column-gap:5rem;
white-space: nowrap;
animation: scrollText 10s infinite linear;
@keyframes scrollText {
  from   { transform: translateX(0%); }
  to { transform: translateX(-50%); }
}
`
const SlideImg = styled.img`
height:48px;
width:auto;
`

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const card_data = [
    {
      logo_img: '/logos/경기지방공사.png',
      title: '홍길동 전무',
      comment: '정말 친절해요 !',
    },
    {
      logo_img: '/logos/관세청.png',
      title: '김이박 실장',
      comment: '정말 감사합니다 !',
    },
    {
      logo_img: '/logos/교보생명.png',
      title: '박효신 과장',
      comment: '도움이 많이 되었어요 !',
    },
  ]
  return (
    <>
      <Paragraph>
        {_.find(clientRoutes, { link: "/our-customer" }).title.split('').map((item, idx) => (
          <>
            <strong className="font-bold md:text-custom_md 2xl:text-custom_lg">
              {item}
            </strong>
          </>
        ))}
      </Paragraph>
      {/* pl-[8%] lg:px-[165px] */}
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        animate={"show"}
        className="mt-10"
        style={{ width: '100%',height:'auto' }}
      >
        <Row>
          {card_data.map((item, idx) => (
            <>
              <Card item={item} />
            </>
          ))}
        </Row>
        <ImgSlideContainer>
          <ImgSlideContent>
            {logo_list.map((item, idx) => (
              <>
                <SlideImg src={item} />
              </>
            ))}
          </ImgSlideContent>
        </ImgSlideContainer>
      </motion.div>
    </>
  );
};

export default Contact;
