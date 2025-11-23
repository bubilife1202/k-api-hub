export interface ApiItem {
  id: string;
  category: '금융' | '교통' | '지도' | '생활' | '인공지능' | '공공데이터' | '기타';
  name: string;
  description: string;
  auth: 'ApiKey' | 'OAuth' | 'Open' | 'None';
  cors: 'Yes' | 'No' | 'Unknown';
  url: string;
  provider: string;
}

export const apis: ApiItem[] = [
  // 지도 & 위치 서비스
  {
    id: 'kakao-map',
    category: '지도',
    name: 'Kakao 지도 API',
    description: '카카오맵 기반의 지도 서비스와 장소 검색, 길찾기 기능',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://apis.map.kakao.com',
    provider: 'Kakao'
  },
  {
    id: 'naver-map',
    category: '지도',
    name: 'Naver 지도 API',
    description: '네이버 지도 기반의 지도 표시 및 길찾기 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/applicationService/maps',
    provider: 'Naver'
  },
  {
    id: 'tmap',
    category: '지도',
    name: 'T맵 API',
    description: 'SK텔레콤의 내비게이션 및 경로 탐색 API',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://tmapapi.sktelecom.com',
    provider: 'SK'
  },
  {
    id: 'vworld',
    category: '지도',
    name: 'VWorld 공간정보 API',
    description: '국토교통부의 2D/3D 지도 및 공간정보 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.vworld.kr/dev',
    provider: 'Gov'
  },

  // 금융
  {
    id: 'toss-payments',
    category: '금융',
    name: 'Toss Payments API',
    description: '토스의 간편 결제 및 정산 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://docs.tosspayments.com',
    provider: 'Toss'
  },
  {
    id: 'portone',
    category: '금융',
    name: 'PortOne (아임포트)',
    description: '국내외 다양한 PG사 연동 통합 결제 솔루션',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://portone.io',
    provider: 'PortOne'
  },
  {
    id: 'kakao-pay',
    category: '금융',
    name: 'Kakao Pay API',
    description: '카카오페이 결제 및 송금 서비스',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.kakao.com/product/kakaoPay',
    provider: 'Kakao'
  },
  {
    id: 'naver-pay',
    category: '금융',
    name: 'Naver Pay API',
    description: '네이버페이 결제 시스템 연동',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developer.pay.naver.com',
    provider: 'Naver'
  },
  {
    id: 'bank-salad',
    category: '금융',
    name: '뱅크샐러드 오픈뱅킹',
    description: '금융 데이터 통합 조회 및 관리',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://banksalad.com/api',
    provider: 'BankSalad'
  },
  {
    id: 'kofia-fund',
    category: '금융',
    name: '한국펀드평가 API',
    description: '펀드 및 금융상품 정보 제공',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.kofia.or.kr',
    provider: 'KOFIA'
  },

  // 교통
  {
    id: 'seoul-bus',
    category: '교통',
    name: '서울시 버스 도착 정보',
    description: '실시간 서울시 버스 위치 및 도착 예정 시간',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'http://data.seoul.go.kr',
    provider: 'Gov'
  },
  {
    id: 'subway-info',
    category: '교통',
    name: '지하철 실시간 도착 정보',
    description: '전국 지하철 실시간 도착 및 운행 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'korea-train',
    category: '교통',
    name: 'KTX 열차 운행 정보',
    description: 'KTX, SRT 등 고속철도 시간표 및 예매 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'bus-route',
    category: '교통',
    name: '전국 버스 노선 정보',
    description: '전국 버스 노선 및 정류장 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'traffic-accident',
    category: '교통',
    name: '교통사고 정보',
    description: '도로 교통사고 발생 통계 및 위치 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },

  // 공공데이터
  {
    id: 'apart-trade',
    category: '공공데이터',
    name: '아파트 매매 실거래가',
    description: '전국 아파트 실거래가 정보 조회',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'air-quality',
    category: '공공데이터',
    name: '대기오염 정보',
    description: '미세먼지, 초미세먼지 등 실시간 대기질 측정 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'weather-forecast',
    category: '공공데이터',
    name: '기상청 날씨 예보',
    description: '단기/중기 날씨 예보 및 특보 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'pharmacy-info',
    category: '공공데이터',
    name: '약국 정보 조회',
    description: '전국 약국 위치 및 운영 시간 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'hospital-info',
    category: '공공데이터',
    name: '병원 정보 조회',
    description: '전국 병원 및 의료기관 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'covid19',
    category: '공공데이터',
    name: 'COVID-19 현황',
    description: '코로나19 확진자 및 백신 접종 통계',
    auth: 'Open',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'food-safety',
    category: '공공데이터',
    name: '식품안전나라',
    description: '식품 안전 정보 및 위해식품 조회',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.foodsafetykorea.go.kr',
    provider: 'Gov'
  },
  {
    id: 'job-opening',
    category: '공공데이터',
    name: '워크넷 채용 정보',
    description: '고용노동부 채용 공고 및 구인 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.work.go.kr',
    provider: 'Gov'
  },
  {
    id: 'culture-event',
    category: '공공데이터',
    name: '문화 행사 정보',
    description: '전국 문화/공연/전시 행사 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.culture.go.kr',
    provider: 'Gov'
  },
  {
    id: 'library',
    category: '공공데이터',
    name: '도서관 정보나루',
    description: '전국 도서관 소장 도서 및 대출 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data4library.kr',
    provider: 'Gov'
  },

  // 생활
  {
    id: 'kakao-talk',
    category: '생활',
    name: 'Kakao Talk API',
    description: '카카오톡 메시지 전송 및 채널 관리',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.kakao.com/product/message',
    provider: 'Kakao'
  },
  {
    id: 'kakao-login',
    category: '생활',
    name: 'Kakao Login',
    description: '카카오 소셜 로그인 및 사용자 정보 연동',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.kakao.com/product/kakaoLogin',
    provider: 'Kakao'
  },
  {
    id: 'naver-login',
    category: '생활',
    name: 'Naver Login',
    description: '네이버 아이디로 로그인 및 프로필 연동',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.naver.com/products/login',
    provider: 'Naver'
  },
  {
    id: 'daum-postcode',
    category: '생활',
    name: 'Daum 우편번호 서비스',
    description: '주소 검색 및 우편번호 찾기',
    auth: 'None',
    cors: 'Yes',
    url: 'https://postcode.map.daum.net',
    provider: 'Kakao'
  },
  {
    id: 'naver-search',
    category: '생활',
    name: 'Naver 검색 API',
    description: '네이버 통합검색, 블로그, 뉴스, 쇼핑 검색',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.naver.com/products/search',
    provider: 'Naver'
  },
  {
    id: 'kakao-search',
    category: '생활',
    name: 'Kakao 검색 API',
    description: '카카오 웹, 이미지, 동영상 검색',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.kakao.com/product/search',
    provider: 'Kakao'
  },
  {
    id: 'coupang-partners',
    category: '생활',
    name: 'Coupang Partners',
    description: '쿠팡 파트너스 상품 링크 생성 및 수익 조회',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://partners.coupang.com',
    provider: 'Coupang'
  },
  {
    id: 'weather-kr',
    category: '생활',
    name: '날씨 API (WeatherKR)',
    description: '한국 기상청 날씨 데이터 간편 조회',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.weatheri.co.kr',
    provider: 'Private'
  },
  {
    id: 'exchange-rate',
    category: '생활',
    name: '환율 정보',
    description: '실시간 환율 및 통화 변환',
    auth: 'Open',
    cors: 'Yes',
    url: 'https://quotation-api-cdn.dunamu.com',
    provider: 'Dunamu'
  },

  // 인공지능
  {
    id: 'clova-ocr',
    category: '인공지능',
    name: 'Clova OCR',
    description: '네이버 AI 기반 문자 인식 (신분증, 영수증 등)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/aiService/ocr',
    provider: 'Naver'
  },
  {
    id: 'clova-speech',
    category: '인공지능',
    name: 'Clova Speech',
    description: '음성 합성(TTS) 및 음성 인식(STT)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/aiService/clovaSpeech',
    provider: 'Naver'
  },
  {
    id: 'clova-chatbot',
    category: '인공지능',
    name: 'Clova Chatbot',
    description: 'AI 기반 챗봇 빌더 및 대화형 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/aiService/chatbot',
    provider: 'Naver'
  },
  {
    id: 'kakao-translate',
    category: '인공지능',
    name: 'Kakao 번역 API',
    description: '다국어 기계 번역 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.kakao.com/product/translation',
    provider: 'Kakao'
  },
  {
    id: 'papago',
    category: '인공지능',
    name: 'Papago 번역',
    description: '네이버 파파고 기계 번역 (한/영/중/일 등)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.naver.com/products/papago',
    provider: 'Naver'
  },
  {
    id: 'clova-face',
    category: '인공지능',
    name: 'Clova Face Recognition',
    description: '얼굴 인식 및 감정 분석',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/aiService/faceRecognition',
    provider: 'Naver'
  },
  {
    id: 'kakao-vision',
    category: '인공지능',
    name: 'Kakao Vision API',
    description: '이미지 인식, 태깅, 성인물 필터링',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.kakao.com/product/vision',
    provider: 'Kakao'
  },

  // 기타
  {
    id: 'nice-auth',
    category: '기타',
    name: 'NICE 본인인증',
    description: '휴대폰 및 신용카드 기반 본인 인증',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.niceid.co.kr',
    provider: 'NICE'
  },
  {
    id: 'pass-auth',
    category: '기타',
    name: 'PASS 인증',
    description: '통신사 통합 본인인증 서비스',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.sktelecom.com/pass',
    provider: 'SK'
  },
  {
    id: 'coolsms',
    category: '기타',
    name: 'CoolSMS',
    description: '문자(SMS/LMS) 및 알림톡 발송',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://coolsms.co.kr',
    provider: 'CoolSMS'
  },
  {
    id: 'aligo',
    category: '기타',
    name: 'Aligo SMS',
    description: 'SMS, 알림톡, 친구톡 발송 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://smartsms.aligo.in',
    provider: 'Aligo'
  },
  {
    id: 'bizm',
    category: '기타',
    name: 'BIZM 메시징',
    description: '카카오 비즈메시지 및 알림톡',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.bizm.co.kr',
    provider: 'BIZM'
  },
  {
    id: 'sens',
    category: '기타',
    name: 'Naver Cloud SENS',
    description: 'SMS, 알림톡, 푸시 알림 통합 발송',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/applicationService/sens',
    provider: 'Naver'
  },
  {
    id: 'korail',
    category: '기타',
    name: '코레일 승차권 조회',
    description: '기차 시간표 및 예매 정보',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.letskorail.com',
    provider: 'Korail'
  },
  {
    id: 'stock-kr',
    category: '금융',
    name: '한국 주식 시세',
    description: 'KOSPI/KOSDAQ 실시간 주가 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://finance.naver.com',
    provider: 'Naver'
  },
  {
    id: 'lottery',
    category: '기타',
    name: '로또 당첨 번호',
    description: '로또 6/45 당첨 번호 및 당첨금 조회',
    auth: 'Open',
    cors: 'Yes',
    url: 'https://www.dhlottery.co.kr',
    provider: 'Gov'
  },
  {
    id: 'movie-info',
    category: '생활',
    name: '영화 진흥 위원회',
    description: '영화 정보 및 박스오피스 순위',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kobis.or.kr',
    provider: 'Gov'
  },
  {
    id: 'book-info',
    category: '생활',
    name: '알라딘 도서 API',
    description: '도서 정보 검색 및 베스트셀러 조회',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.aladin.co.kr/ttb/wblog_api.aspx',
    provider: 'Aladin'
  },
  {
    id: 'park-info',
    category: '공공데이터',
    name: '국립공원 정보',
    description: '전국 국립공원 및 탐방로 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'tour-info',
    category: '생활',
    name: '한국관광공사 Tour API',
    description: '관광지, 축제, 숙박 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://api.visitkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'seoul-bike',
    category: '교통',
    name: '서울 따릉이 정보',
    description: '공공자전거 대여소 위치 및 재고',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'http://data.seoul.go.kr',
    provider: 'Gov'
  },
  {
    id: 'parking',
    category: '교통',
    name: '주차장 정보',
    description: '전국 공영 주차장 위치 및 요금',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  }
];

export const categories = [
  '전체',
  '금융',
  '교통',
  '지도',
  '생활',
  '인공지능',
  '공공데이터',
  '기타'
] as const;
