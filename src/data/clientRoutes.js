const clientRoutes = [
  {
    link: "/",
    title: "Who we are",
    isSub: false,
    bgImg: "home",
  },
  {
    link: "/our-purpose",
    title: "Our purpose",
    isSub: "Who we are",
    isLastSub: false,
    bgImg: "home",
  },
  {
    link: "/what-we-do",
    title: "What we do",
    isSub: "Who we are",
    isLastSub: true,
    bgImg: "home",
  },
  {
    link: "/comagain",
    title: "Comagain",
    isSub: false,
    bgImg: "comagain",
  },
  {
    link: "/payvery",
    title: "Payvery",
    isSub: false,
    bgImg: "payvery",
  },
  {
    link: "/request",
    title: "Request",
    isSub: false,
    bgImg: "request",
  },
  {
    link: "/qna",
    title: "404",
    isSub: false,
    bgImg: "404",
  },
  {
    link: "/contact",
    title: "Contact",
    isSub: false,
    bgImg: "contact",
  },
];

export default clientRoutes;
