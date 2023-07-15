import React, { createRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Paragraph from "@/components/global/Paragraph";
import { fadeIn } from "@/libs/variants";
import Layout from "@/components/layout/clientLayout";
import clientRoutes from "@/data/clientRoutes";
import _ from 'lodash';
import { styled } from "styled-components";
import Slider from "react-slick";
import $ from 'jquery';
const logo_list = [
  '/logos/헥토파이낸셜.png',
  '/logos/에드원.png',
  '/logos/60계치킨.png',
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
border-radius:1rem;
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
        <img src={item.logo_img} style={{ height: '48px', width: 'auto', maxWidth: '50%', margin: '0 auto 2rem 0' }} />
        <div style={{ color: '#ababab' }}>{item.comment}</div>
        <div>{item.title}</div>
      </CardWrappers>
    </>
  )
}
const ImgSlideContainer = styled.div`
margin-top:5rem;
overflow: hidden;
background:#fff;
border-radius:1rem;
padding:1rem 0;
max-width:1500px;
width: calc(100% - 600px);
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
display:flex;
animation: scrollText 120s infinite linear;
@keyframes scrollText {
  from   { transform: translateX(0); }
  to { transform: translateX(-${props => props.scrollWidth});}
}
`
const SlideImg = styled.img`
height:48px;
width:auto;
`

const Contact = () => {

  const scrollContainerRef = useRef();
  const scrollContentRef = useRef([]);
  const [loading, setLoading] = useState(true);
  const [scrollWidth, setScrollWidth] = useState(undefined);
  const [scrollContainerWidth, setScrollContainerWidth] = useState(undefined);
  const card_data = [
    {
      logo_img: '/logos/헥토파이낸셜.png',
      title: '최재영 팀장',
      comment: '"항상 최선을 다해 주셔서 너무 감사드립니다"',
    },
    {
      logo_img: '/logos/에드원.png',
      title: '송기진 본부장',
      comment: '"업계 최고로 빠른 개발 속도, 대응 속도 항상 만족 스럽습니다"',
    },
    {
      logo_img: '/logos/60계치킨.png',
      title: '오준식 실장',
      comment: '"항상 겸손한 모습으로 최선을 다해 주셔서 감사드립니다."',
    },
  ]
  const item_list_setting = {
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 0.01,
    dots: false,
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [])
  useEffect(() => {
    if (scrollContentRef.current.length == logo_list.length) {
      let sum_result = _.sum(scrollContentRef.current.map(item => { return item?.offsetWidth }));
      sum_result += (scrollContentRef.current.length - 1) * 64;
      sum_result += scrollContainerRef.current?.offsetWidth * 2;
      setScrollContainerWidth(scrollContainerRef.current?.offsetWidth)
      setScrollWidth(sum_result)
    }
  }, [scrollContentRef.current.map(item => { return item?.offsetWidth }), scrollContainerRef.current?.offsetWidth])
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
      <div className="mt-[15px] lg:mt-[45px]">
        <Paragraph hasImg>
          <strong className="font-bold">퍼</strong>
          <strong className="font-bold">플</strong>
          <strong className="font-bold">베</strong>
          <strong className="font-bold">리</strong>
          <span>{"와 "}</span>
          <strong className="font-bold">함</strong>
          <strong className="font-bold">께</strong>
          <strong className="font-bold">하</strong>
          <strong className="font-bold">{"는\n"}</strong>
          <strong className="font-bold">감</strong>
          <strong className="font-bold">사</strong>
          <strong className="font-bold">{"한 "}</strong>
          <strong className="font-bold">분</strong>
          <strong className="font-bold">들</strong>
          <span>입</span>
          <span>니</span>
          <span>다</span>
          <span>.</span>
        </Paragraph>
      </div>
      {!loading &&
        <>

          {/* pl-[8%] lg:px-[165px] */}
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            animate={"show"}
            className="mt-10"
            style={{ width: '100%', height: 'auto' }}
          >
            <Row>
              {card_data.map((item, idx) => (
                <>
                  <Card item={item} />
                </>
              ))}
            </Row>
            <ImgSlideContainer>
              <ImgSlideContent style={{ opacity: `${scrollWidth > 0 ? '1' : '0'}` }} scrollContainerWidth={`${scrollContainerWidth}px`} scrollWidth={`${scrollWidth}px`} ref={scrollContainerRef}>
                {logo_list.map((item, idx) => (
                  <>
                    <SlideImg src={item} style={{ paddingRight: '4rem' }} ref={(el) => (scrollContentRef.current[idx] = el)} />
                  </>
                ))}
              </ImgSlideContent>
            </ImgSlideContainer>
          </motion.div>
        </>}

    </>
  );
};

export default Contact;
