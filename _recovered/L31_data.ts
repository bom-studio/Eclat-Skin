export const NAV_LINKS = [
  { label: "트리트먼트", href: "#treatments" },
  { label: "베스트 프로그램", href: "#best" },
  { label: "고객 후기", href: "#reviews" },
  { label: "오시는 길", href: "#location" },
] as const;

export const FOOTER_LINKS = [
  { label: "트리트먼트", href: "#treatments" },
  { label: "베스트 프로그램", href: "#best" },
  { label: "Before & After", href: "#results" },
  { label: "고객 후기", href: "#reviews" },
  { label: "브랜드 스토리", href: "#why" },
  { label: "오시는 길", href: "#location" },
] as const;

export const TREATMENTS = [
  {
    id: "tone",
    title: "톤 & 브라이트",
    description: "울긋한 색소와 불균일한 톤을\n맑고 고운 광채로 정돈합니다.",
    icon: "sparkle" as const,
  },
  {
    id: "lift",
    title: "리프팅 케어",
    description: "탄력과 윤곽을 섬세하게 끌어올려\n또렷하고 세련된 라인을 만듭니다.",
    icon: "lift" as const,
  },
  {
    id: "moisture",
    title: "딥 하이드레이션",
    description: "건조하고 예민한 피부에\n깊은 수분과 편안함을 채워줍니다.",
    icon: "drop" as const,
  },
  {
    id: "acne",
    title: "아크네 솔루션",
    description: "트러블의 원인을 정밀하게 케어해\n깨끗하고 차분한 피부로 가꿉니다.",
    icon: "leaf" as const,
  },
  {
    id: "body",
    title: "바디 컨투어",
    description: "군살과 부기를 부드럽게 정돈해\n매끄럽고 탄탄한 실루엣을 완성합니다.",
    icon: "body" as const,
  },
] as const;

export const BEST_PROGRAM = {
  badge: "THIS MONTH'S BEST",
  title: "ÉCLAT Signature Glow",
  subtitle: "톤·탄력·수분을 한 번에 완성하는 시그니처 코스",
  description:
    "피부 진단부터 맞춤 시술까지, 단 한 번의 방문으로 빛나고 건강한 피부결을 경험하세요. 오픈 기념 특별가로 만나보실 수 있습니다.",
  originalPrice: "390,000",
  salePrice: "290,000",
  includes: [
    "1:1 피부 정밀 상담",
    "시그니처 레이저 토닝",
    "딥 하이드레이션 앰플",
    "리프팅 마사지 케어",
    "홈케어 키트 제공",
  ],
  image:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1400&q=85",
};

export const BEFORE_AFTER = [
  {
    id: 1,
    treatment: "톤 & 브라이트",
    duration: "4주 관리",
    concern: "기미 · 색소 불균형",
    before:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    treatment: "리프팅 케어",
    duration: "6주 관리",
    concern: "탄력 저하 · 윤곽 처짐",
    before:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    treatment: "딥 하이드레이션",
    duration: "3주 관리",
    concern: "건조 · 푸석한 피부결",
    before:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85",
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "김서연",
    age: "30대",
    program: "시그니처 글로우",
    date: "2026.05",
    rating: 5,
    text: "피부톤이 정말 맑아졌어요. 첫 상담부터 제 피부 상태를 정확히 짚어주셔서 신뢰가 갔습니다.",
    initial: "서",
  },
  {
    id: 2,
    name: "박지현",
    age: "40대",
    program: "리프팅 케어",
    date: "2026.04",
    rating: 5,
    text: "재방문 의사 100%입니다. 공간도 호텔 스파처럼 조용하고, 시술 후 윤곽이 자연스럽게 살아났어요.",
    initial: "지",
  },
  {
    id: 3,
    name: "이하늘",
    age: "20대",
    program: "딥 하이드레이션",
    date: "2026.06",
    rating: 5,
    text: "원장님 상담이 정말 꼼꼼했습니다. 예민한 피부인데도 자극 없이 촉촉하게 정돈됐어요.",
    initial: "하",
  },
  {
    id: 4,
    name: "정유나",
    age: "30대",
    program: "아크네 솔루션",
    date: "2026.03",
    rating: 5,
    text: "압출이 거의 아프지 않았어요. 트러블이 진정되면서 화장도 한결 잘 먹는 느낌입니다.",
    initial: "유",
  },
  {
    id: 5,
    name: "최민지",
    age: "20대",
    program: "톤 & 브라이트",
    date: "2026.05",
    rating: 5,
    text: "결혼식 전에 관리받았는데 만족합니다. 사진에서도 피부가 부드럽게 빛나서 기분이 좋았어요.",
    initial: "민",
  },
  {
    id: 6,
    name: "한소희",
    age: "40대",
    program: "시그니처 글로우",
    date: "2026.02",
    rating: 5,
    text: "과하지 않은 케어가 마음에 들어요. 시술 후에도 홈케어까지 세심하게 안내해주셨습니다.",
    initial: "소",
  },
  {
    id: 7,
    name: "윤채원",
    age: "30대",
    program: "리프팅 케어",
    date: "2026.06",
    rating: 5,
    text: "붓기가 빠지고 얼굴선이 정돈됐어요. 다음 예약까지 미리 잡아두고 싶을 정도로 만족스럽습니다.",
    initial: "채",
  },
  {
    id: 8,
    name: "오예린",
    age: "20대",
    program: "딥 하이드레이션",
    date: "2026.04",
    rating: 5,
    text: "건조해서 늘 당기던 피부가 편안해졌어요. 관리 후 다음 날까지 촉촉함이 유지됐습니다.",
    initial: "예",
  },
] as const;

export const DIFFERENCES = [
  {
    id: "consult",
    title: "1:1 맞춤 상담",
    description:
      "피부 타입과 라이프스타일을 세밀히 분석해 오직 당신만을 위한 케어 플랜을 설계합니다.",
    icon: "user" as const,
  },
  {
    id: "product",
    title: "프리미엄 제품",
    description:
      "검증된 고기능 앰플과 디바이스만을 사용해 안전하고 확실한 결과를 추구합니다.",
    icon: "gem" as const,
  },
  {
    id: "expert",
    title: "숙련된 관리사",
    description:
      "풍부한 경험을 갖춘 전문 관리사가 섬세한 손길로 피부를 케어합니다.",
    icon: "award" as const,
  },
  {
    id: "aftercare",
    title: "사후관리",
    description:
      "시술 후에도 홈케어 가이드와 정기 체크인으로 건강한 피부 유지를 돕습니다.",
    icon: "heart" as const,
  },
] as const;

export const STATS = [
  { id: "years", value: 12, suffix: "+", label: "Years Experience" },
  { id: "clients", value: 3500, suffix: "+", label: "Happy Clients" },
  { id: "return", value: 96, suffix: "%", label: "Returning Clients" },
  { id: "rating", value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
] as const;

export const DIRECTOR = {
  name: "김에끌",
  role: "대표 원장 · ÉCLAT SKIN STUDIO",
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85",
  intro:
    "피부의 균형을 존중하는 섬세한 케어로, 과하지 않은 아름다움을 완성합니다. 고객 한 분 한 분의 피부 결을 읽고, 가장 자연스러운 변화를 설계합니다.",
  philosophy:
    "결과보다 과정, 과시보다 균형. 피부가 편안해야 아름다움도 오래갑니다.",
  career: [
    "피부관리 경력 12년",
    "프리미엄 스킨케어 교육 수료",
    "문제성 피부 집중 케어 전문",
    "1:1 맞춤 상담 기반 프로그램 설계",
  ],
  specialties: [
    "문제성 피부 전문",
    "톤·색소 케어",
    "수분·장벽 강화",
    "탄력·윤곽 리프팅",
  ],
  credentials: [
    "피부 국가자격증",
    "에스테틱 전문 자격",
    "프리미엄 디바이스 시술 인증",
  ],
};

export const PRICING = [
  {
    id: "basic",
    name: "Basic Care",
    korean: "베이직 케어",
    price: "59,000",
    description: "클렌징부터 진정까지, 피부 컨디션을 가볍게 정돈하는 입문 케어",
    features: ["딥 클렌징", "진정 마스크", "기본 수분 케어"],
  },
  {
    id: "hydration",
    name: "Hydration Care",
    korean: "하이드레이션 케어",
    price: "79,000",
    description: "건조하고 예민한 피부에 깊은 수분과 편안함을 채워주는 코스",
    features: ["수분 앰플", "장벽 케어", "진정 마사지"],
  },
  {
    id: "signature",
    name: "Signature Glow",
    korean: "시그니처 글로우",
    price: "129,000",
    description: "톤과 광채를 살리는 ÉCLAT의 대표 시그니처 프로그램",
    features: ["톤 케어", "글로우 앰플", "맞춤 홈케어 가이드"],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium Program",
    korean: "프리미엄 프로그램",
    price: "199,000",
    description: "탄력과 윤곽까지 섬세하게 끌어올리는 집중 케어",
    features: ["리프팅 케어", "고농축 앰플", "사후 체크인"],
  },
  {
    id: "luxury",
    name: "Luxury Program",
    korean: "럭셔리 프로그램",
    price: "290,000",
    description: "진단부터 집중 시술까지, 가장 완성도 높은 풀 코스 케어",
    features: ["1:1 정밀 상담", "시그니처 풀코스", "홈케어 키트"],
  },
] as const;

export const FAQS = [
  {
    id: 1,
    question: "예약은 어떻게 하나요?",
    answer:
      "홈페이지의 ‘상담 예약하기’ 버튼 또는 카카오톡 상담으로 간편하게 예약하실 수 있습니다. 원하시는 일정과 피부 고민을 남겨주시면 빠르게 안내드립니다.",
  },
  {
    id: 2,
    question: "시술 시간은 얼마나 걸리나요?",
    answer:
      "프로그램에 따라 다르지만, 대부분 60~90분 정도 소요됩니다. 상담이 포함된 첫 방문의 경우 조금 더 여유 있게 진행됩니다.",
  },
  {
    id: 3,
    question: "당일 예약 가능한가요?",
    answer:
      "당일 예약은 잔여 타임이 있을 경우 가능합니다. 원하시는 시간에 맞춰 카카오톡 또는 전화로 문의해 주세요.",
  },
  {
    id: 4,
    question: "민감성 피부도 가능한가요?",
    answer:
      "네, 가능합니다. 피부 상태를 먼저 세밀히 진단한 뒤 자극을 최소화한 맞춤 케어로 진행합니다.",
  },
  {
    id: 5,
    question: "시술 후 주의사항은?",
    answer:
      "시술 당일은 강한 스크럽, 사우나, 음주, 과도한 자외선 노출을 피해주세요. 홈케어 방법은 시술 후  individually 안내드립니다.",
  },
  {
    id: 6,
    question: "취소 규정은 어떻게 되나요?",
    answer:
      "예약일 기준 24시간 전까지 변경·취소가 가능합니다. 당일 취소의 경우 다음 예약 안내가 제한될 수 있으니 양해 부탁드립니다.",
  },
  {
    id: 7,
    question: "남성분도 방문 가능한가요?",
    answer:
      "네, 성별과 관계없이 피부 고민에 맞춰 케어를 제공합니다. 상담을 통해 적합한 프로그램을 제안드립니다.",
  },
  {
    id: 8,
    question: "주차는 가능한가요?",
    answer:
      "건물 지하 주차장을 이용하실 수 있으며, 방문 고객께 2시간 무료 주차를 지원합니다.",
  },
] as const;

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    alt: "프리미엄 스킨케어 공간",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
    alt: "빛나는 피부 클로즈업",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85",
    alt: "에스테틱 케어 모먼트",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    alt: "호텔 스파 분위기 인테리어",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
    alt: "세럼 텍스처 디테일",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85",
    alt: "자연스러운 피부 광채",
  },
] as const;

export const STUDIO_INFO = {
  name: "ÉCLAT SKIN STUDIO",
  phone: "02-1234-5678",
  phoneHref: "tel:0212345678",
  kakaoHref: "https://open.kakao.com",
  instagramHref: "https://instagram.com",
  blogHref: "https://blog.naver.com",
  address: "서울특별시 강남구 도산대로 123, 3F",
  parking: "건물 지하 주차장 2시간 무료",
  hours: [
    { day: "월 – 금", time: "10:00 – 20:00" },
    { day: "토요일", time: "10:00 – 18:00" },
    { day: "일요일 · 공휴일", time: "휴무" },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=서울특별시%20강남구%20도산대로%20123&t=&z=15&ie=UTF8&iwloc=&output=embed",
  business: {
    company: "에끌라스킨스튜디오",
    owner: "김에끌",
    registration: "123-45-67890",
    address: "서울특별시 강남구 도산대로 123, 3F",
  },
};

export const HERO = {
  eyebrow: "YOUR RADIANCE, OUR PROMISE",
  title: "피부가 빛나는 순간,\n에끌라에서 시작됩니다",
  description:
    "과하지 않은 케어, 절제된 아름다움.\n당신만의 결을 존중하는 프리미엄 스킨 스튜디오입니다.",
  image: "/images/hero/hero-main.png",
  trusts: [
    { label: "안전한 케어", desc: "피부 상태 맞춤", icon: "shield" as const },
    { label: "전문 상담", desc: "1:1 맞춤 진단", icon: "stethoscope" as const },
    {
      label: "시그니처 시술",
      desc: "검증된 프로그램",
      icon: "sparkles" as const,
    },
    { label: "사후 케어", desc: "지속적 관리", icon: "heart" as const },
  ],
};

export const BOOKING_IMAGE =
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85";
