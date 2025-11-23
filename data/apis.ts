export interface ApiItem {
  id: string;
  category: '정부/공공기관' | '지도/위치' | '금융/결제' | '통신사' | '교통' |
            '날씨/환경' | '의료/건강' | '교육' | '부동산' | '문화/관광' |
            '통계/데이터' | '인공지능' | '쇼핑/커머스' | '배송/물류' |
            '음식/음료' | '게임/엔터테인먼트' | '미디어/콘텐츠' | '소셜/커뮤니케이션' |
            '에너지' | '과학/연구' | '기업/비즈니스' | '클라우드' | '블록체인' |
            'IoT/스마트홈' | '메시징' | '암호화폐' | '법률' | '보안' |
            '공공안전' | '항공' | '물류인프라' | '농업/수산' | '생활경제';
  name: string;
  description: string;
  auth: 'ApiKey' | 'OAuth' | 'Open' | 'None' | 'JWT' | 'Partnership' | 'Bearer Token' | 'webhook';
  cors: 'Yes' | 'No' | 'Unknown';
  url: string;
  provider: string;
}

export const apis: ApiItem[] = [
  // 정부/공공기관 (30개)
  {
    id: 'gov-data-portal',
    category: '정부/공공기관',
    name: '공공데이터포털',
    description: '정부 및 공공기관의 10만+ 데이터셋 통합 제공',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'gyeonggi-data',
    category: '정부/공공기관',
    name: '경기데이터드림',
    description: '경기도 공공데이터 포털',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://data.gg.go.kr',
    provider: 'Gov'
  },
  {
    id: 'busan-data',
    category: '정부/공공기관',
    name: '부산광역시 빅데이터',
    description: '부산시 공공데이터 통합',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://data.busan.go.kr',
    provider: 'Gov'
  },
  {
    id: 'seoul-data',
    category: '정부/공공기관',
    name: '서울시 열린데이터광장',
    description: '서울시 공공데이터 플랫폼',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://data.seoul.go.kr',
    provider: 'Gov'
  },
  {
    id: 'gov24',
    category: '정부/공공기관',
    name: '정부24 공공서비스 API',
    description: '실시간 행정정보 제공',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.gov.kr',
    provider: 'Gov'
  },
  {
    id: 'myhealthway',
    category: '정부/공공기관',
    name: '마이헬스웨이 API',
    description: '보건복지부 개인 의료정보 통합 플랫폼',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://www.myhealthway.go.kr',
    provider: 'Gov'
  },
  {
    id: 'open-assembly',
    category: '정부/공공기관',
    name: '열린국회정보 확장 API',
    description: '국회의원 표결정보, 발의법률안 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://open.assembly.go.kr',
    provider: 'Gov'
  },
  {
    id: 'mydata-support',
    category: '정부/공공기관',
    name: '마이데이터 통합지원 API',
    description: '표준 기반 마이데이터 API 서비스',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://www.kdata.or.kr',
    provider: 'Gov'
  },
  {
    id: 'egis',
    category: '정부/공공기관',
    name: '환경공간정보서비스',
    description: '토지피복지도, 환경주제도 공간정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://egis.me.go.kr',
    provider: 'Gov'
  },
  {
    id: 'greenconsumer',
    category: '정부/공공기관',
    name: '초록누리 Open API',
    description: '환경부 녹색생활 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.greenconsumer.or.kr',
    provider: 'Gov'
  },
  {
    id: 'admin-code',
    category: '정부/공공기관',
    name: '행정안전부 행정표준코드',
    description: '법정동코드, 행정구역코드 표준',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.code.go.kr',
    provider: 'Gov'
  },
  {
    id: 'realprice',
    category: '정부/공공기관',
    name: '국토교통부 실거래가',
    description: '아파트, 오피스텔 등 실거래가 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'hira-hospital',
    category: '정부/공공기관',
    name: '건강보험심사평가원 병원정보',
    description: '전국 의료기관 기본정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://opendata.hira.or.kr',
    provider: 'Gov'
  },
  {
    id: 'kma-short-forecast',
    category: '정부/공공기관',
    name: '기상청 단기예보',
    description: '초단기실황, 초단기예보, 단기예보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kma-mid-forecast',
    category: '정부/공공기관',
    name: '기상청 중기예보',
    description: '3~10일 중기예보 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kma-life-index',
    category: '정부/공공기관',
    name: '기상청 생활기상지수',
    description: '자외선지수, 대기확산지수',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'tour-api',
    category: '정부/공공기관',
    name: '한국관광공사 TourAPI',
    description: '관광지, 숙박, 음식점, 축제 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://api.visitkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'korail-train',
    category: '정부/공공기관',
    name: '한국철도공사 열차운행정보',
    description: 'KTX, 새마을호 등 열차 운행정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kosis',
    category: '정부/공공기관',
    name: '통계청 KOSIS',
    description: '134,586개 국가통계 데이터셋',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://kosis.kr',
    provider: 'Gov'
  },
  {
    id: 'airkorea',
    category: '정부/공공기관',
    name: '한국환경공단 에어코리아',
    description: '실시간 대기오염정보 및 미세먼지',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.airkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'culture-info',
    category: '정부/공공기관',
    name: '문화체육관광부 문화정보',
    description: '공연, 전시, 문화재, 도서관 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.culture.go.kr',
    provider: 'Gov'
  },
  {
    id: 'agrix',
    category: '정부/공공기관',
    name: '농림축산식품부 AgriX',
    description: '농업경영 및 스마트팜 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.agrix.go.kr',
    provider: 'Gov'
  },
  {
    id: 'ex-traffic',
    category: '정부/공공기관',
    name: '한국도로공사 교통정보',
    description: '실시간 고속도로 교통량 및 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'lh-housing',
    category: '정부/공공기관',
    name: '한국토지주택공사(LH)',
    description: '임대주택 및 분양 공고',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.lh.or.kr',
    provider: 'Gov'
  },
  {
    id: 'kdic',
    category: '정부/공공기관',
    name: '예금보험공사',
    description: '금융기관 예금자보호 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kdic.or.kr',
    provider: 'Gov'
  },
  {
    id: 'hrdkorea',
    category: '정부/공공기관',
    name: '한국산업인력공단 HRD',
    description: '국가자격, 과정평가형자격 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.hrdkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'archives',
    category: '정부/공공기관',
    name: '국가기록원 검색 API',
    description: '나라기록물 검색서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.archives.go.kr',
    provider: 'Gov'
  },
  {
    id: 'index-gov',
    category: '정부/공공기관',
    name: '국가지표통합 공유서비스',
    description: '국가지표 통계 웹/모바일 인터페이스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.index.go.kr',
    provider: 'Gov'
  },
  {
    id: 'ntis',
    category: '정부/공공기관',
    name: 'NTIS 국가과학기술정보',
    description: '국가R&D 과제정보, 성과정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ntis.go.kr',
    provider: 'Gov'
  },
  {
    id: 'point-policy',
    category: '정부/공공기관',
    name: '정책정보포털 POINT',
    description: '정책정보 검색 API',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.point.go.kr',
    provider: 'Gov'
  },

  // 지도/위치 (6개)
  {
    id: 'kakao-map',
    category: '지도/위치',
    name: '카카오맵',
    description: '지도 표시, 장소 검색, 좌표 변환, 경로 탐색',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://apis.map.kakao.com',
    provider: 'Kakao'
  },
  {
    id: 'naver-map',
    category: '지도/위치',
    name: '네이버 지도',
    description: '지도 API, Geocoding, Directions, 파노라마',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/applicationService/maps',
    provider: 'Naver'
  },
  {
    id: 'tmap',
    category: '지도/위치',
    name: 'T맵 API',
    description: 'SK텔레콤의 내비게이션 및 경로 탐색',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://openapi.sk.com',
    provider: 'SK'
  },
  {
    id: 'vworld',
    category: '지도/위치',
    name: '브이월드',
    description: '국토지리정보원의 3D 지도 및 공간정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.vworld.kr',
    provider: 'Gov'
  },
  {
    id: 'juso',
    category: '지도/위치',
    name: '주소기반산업지원서비스',
    description: '도로명주소 API / DB 제공',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.juso.go.kr',
    provider: 'Gov'
  },
  {
    id: 'ngii-map',
    category: '지도/위치',
    name: '국토정보플랫폼',
    description: '수치지도, 항공사진, 정사영상, DEM',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://map.ngii.go.kr',
    provider: 'Gov'
  },

  // 금융/결제 (24개)
  {
    id: 'openbanking',
    category: '금융/결제',
    name: '금융결제원 오픈뱅킹',
    description: '19개 은행 통합 계좌조회, 이체, 결제',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://openapi.kftc.or.kr',
    provider: 'KFTC'
  },
  {
    id: 'kb-open-api',
    category: '금융/결제',
    name: 'KB국민은행 Open API',
    description: 'KB 통합 금융서비스 플랫폼',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://obizapi.kbstar.com',
    provider: 'KB'
  },
  {
    id: 'kb-api-portal',
    category: '금융/결제',
    name: 'KB API 포탈',
    description: 'KB금융그룹 755개 API 제공',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://apiportal.kbfg.com',
    provider: 'KB'
  },
  {
    id: 'shinhan-open',
    category: '금융/결제',
    name: '신한은행 Open API',
    description: '신한금융그룹 통합 API',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://openapi.shinhan.com',
    provider: 'Shinhan'
  },
  {
    id: 'woori-open',
    category: '금융/결제',
    name: '우리은행 Open API',
    description: '우리은행 핀테크 개발자 지원',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developer.wooribank.com',
    provider: 'Woori'
  },
  {
    id: 'hana-open',
    category: '금융/결제',
    name: '하나금융그룹 Open API',
    description: '그룹 통합 API 마켓플레이스',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://hanafnapimarket.com',
    provider: 'Hana'
  },
  {
    id: 'nh-open',
    category: '금융/결제',
    name: 'NH농협은행 Open API',
    description: '농협 금융 API 개발자센터',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.nonghyup.com',
    provider: 'NH'
  },
  {
    id: 'kis-api',
    category: '금융/결제',
    name: '한국투자증권 KIS API',
    description: '국내외 주식 시세 및 주문',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://apiportal.koreainvestment.com',
    provider: 'KIS'
  },
  {
    id: 'bok-api',
    category: '금융/결제',
    name: '한국은행 Open API',
    description: '경제통계정보 제공',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://ecos.bok.or.kr',
    provider: 'BOK'
  },
  {
    id: 'koreaexim',
    category: '금융/결제',
    name: '한국수출입은행 Open API',
    description: '환율 및 금리정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.koreaexim.go.kr',
    provider: 'KOREAEXIM'
  },
  {
    id: 'toss-payments',
    category: '금융/결제',
    name: '토스페이먼츠',
    description: '통합 결제 API (카드, 가상계좌, 간편결제)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://docs.tosspayments.com',
    provider: 'Toss'
  },
  {
    id: 'toss-pay',
    category: '금융/결제',
    name: '토스페이 API',
    description: '토스 결제 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://toss.im',
    provider: 'Toss'
  },
  {
    id: 'naver-pay',
    category: '금융/결제',
    name: '네이버페이 API',
    description: '네이버페이 결제, 정기결제, 자동결제',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.pay.naver.com',
    provider: 'Naver'
  },
  {
    id: 'kakao-pay',
    category: '금융/결제',
    name: '카카오페이',
    description: '온라인 결제, 정기결제, 송금',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.kakaopay.com',
    provider: 'Kakao'
  },
  {
    id: 'samsung-pay',
    category: '금융/결제',
    name: '삼성페이 API',
    description: '모바일 결제 및 디지털 지갑',
    auth: 'Partnership',
    cors: 'Unknown',
    url: 'https://www.samsung.com/sec/apps/samsung-pay',
    provider: 'Samsung'
  },
  {
    id: 'payco',
    category: '금융/결제',
    name: '페이코(PAYCO)',
    description: 'NHN 통합 ID 및 멤버십 연동',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.payco.com',
    provider: 'NHN'
  },
  {
    id: 'upbit',
    category: '금융/결제',
    name: '업비트 Open API',
    description: '국내 최대 암호화폐 거래소',
    auth: 'JWT',
    cors: 'Yes',
    url: 'https://docs.upbit.com',
    provider: 'Upbit'
  },
  {
    id: 'bithumb',
    category: '금융/결제',
    name: '빗썸 Open API',
    description: '암호화폐 거래 API 2.0',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://apidocs.bithumb.com',
    provider: 'Bithumb'
  },
  {
    id: 'coinone',
    category: '금융/결제',
    name: '코인원 Open API',
    description: '가상자산 거래 및 시세 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://coinone.co.kr/developer',
    provider: 'Coinone'
  },
  {
    id: 'kiwoom',
    category: '금융/결제',
    name: '키움증권 Open API',
    description: 'OCX 기반 실시간 주식 데이터 및 주문',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.kiwoom.com',
    provider: 'Kiwoom'
  },
  {
    id: 'codef',
    category: '금융/결제',
    name: 'CODEF API',
    description: '금융, 보험, 통신 데이터 통합',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://codef.io',
    provider: 'CODEF'
  },
  {
    id: 'bootpay',
    category: '금융/결제',
    name: '부트페이 API',
    description: '여러 PG사 통합 결제 솔루션',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.bootpay.co.kr',
    provider: 'Bootpay'
  },
  {
    id: 'payple',
    category: '금융/결제',
    name: '페이플 API',
    description: 'SMS 인증방식 간편결제, 정기결제',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.payple.kr',
    provider: 'Payple'
  },
  {
    id: 'hyphen',
    category: '금융/결제',
    name: '하이픈 API 마켓플레이스',
    description: '500개 이상 데이터 API',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.hyphen.im',
    provider: 'Hyphen'
  },

  // 통신사 (3개)
  {
    id: 'skt-open',
    category: '통신사',
    name: 'SK텔레콤 Open API',
    description: 'T맵, NUGU, AI/IoT 플랫폼 46개',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://openapi.sk.com',
    provider: 'SK'
  },
  {
    id: 'kt-api-link',
    category: '통신사',
    name: 'KT API Link',
    description: 'Geo Master, Cloud, GiGA Genie AI',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://apilink.kt.co.kr',
    provider: 'KT'
  },
  {
    id: 'kt-cloud-ai',
    category: '통신사',
    name: 'KT Cloud AI API',
    description: '음성인식, TTS, 맞춤형 음성',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://github.com/gigagenie',
    provider: 'KT'
  },

  // 교통 (14개)
  {
    id: 'hyundai-dev',
    category: '교통',
    name: '현대자동차 Developers',
    description: '차량 제원, 운행정보, 주행거리',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.hyundai.com',
    provider: 'Hyundai'
  },
  {
    id: 'kia-dev',
    category: '교통',
    name: '기아자동차 Developers',
    description: 'KIA Connect 차량 데이터',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.kia.com',
    provider: 'KIA'
  },
  {
    id: 'topis',
    category: '교통',
    name: '서울 TOPIS 교통정보',
    description: '서울시 다양한 교통정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://topis.seoul.go.kr',
    provider: 'Gov'
  },
  {
    id: 'seoul-subway',
    category: '교통',
    name: '서울시 지하철 실시간 도착정보',
    description: '서울 지하철 2~8호선 실시간 도착',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://data.seoul.go.kr',
    provider: 'Gov'
  },
  {
    id: 'seoul-bus',
    category: '교통',
    name: '서울시 버스 도착정보',
    description: '서울시 버스 실시간 도착정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'subway-distance',
    category: '교통',
    name: '서울교통공사 역간거리',
    description: '지하철 역간거리 및 소요시간',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'gyeonggi-bus',
    category: '교통',
    name: '경기도 버스정보',
    description: '경기도 시내/시외버스 실시간 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'odsay',
    category: '교통',
    name: 'ODsay 대중교통 API',
    description: '전국 대중교통, 고속버스, 항공편 통합',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://lab.odsay.com',
    provider: 'ODsay'
  },
  {
    id: 'molit-traffic',
    category: '교통',
    name: '국토교통부 교통소통정보',
    description: '고속도로 및 국도 실시간 속도',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'ex-realtime-traffic',
    category: '교통',
    name: '한국도로공사 실시간 교통량',
    description: '고속도로 교통량 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kakao-mobility',
    category: '교통',
    name: '카카오모빌리티 길찾기',
    description: '모빌리티 서비스 개발 도구',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.kakaomobility.com',
    provider: 'Kakao'
  },
  {
    id: 'kakao-t-biz',
    category: '교통',
    name: '카카오T 비즈니스',
    description: '기업용 카카오T 이용내역 연동',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://kakaotbusinessapiinfo.oopy.io',
    provider: 'Kakao'
  },
  {
    id: 'kric',
    category: '교통',
    name: '레일포탈(KRIC)',
    description: '철도산업정보센터 전국 철도 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://data.kric.go.kr',
    provider: 'Gov'
  },
  {
    id: 'ddareungi',
    category: '교통',
    name: '따릉이(서울자전거)',
    description: '서울시 공공자전거 실시간 대여정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://data.seoul.go.kr',
    provider: 'Gov'
  },

  // 날씨/환경 (23개)
  {
    id: 'kma-local-forecast',
    category: '날씨/환경',
    name: '기상청 동네예보',
    description: '읍면동 단위 동네예보 3시간 간격',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kma-mid',
    category: '날씨/환경',
    name: '기상청 중기예보',
    description: '3~10일 중기예보 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'airkorea-realtime',
    category: '날씨/환경',
    name: '에어코리아 실시간 대기오염정보',
    description: '실시간 대기질 측정정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.airkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'airkorea-forecast',
    category: '날씨/환경',
    name: '에어코리아 대기오염 예보정보',
    description: 'PM2.5, PM10, 오존 예보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.airkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'ev-charger-keco',
    category: '날씨/환경',
    name: '한국환경공단 전기차충전소',
    description: '전국 전기차 충전소 정보, 충전기 상태',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'ev-charger-standard',
    category: '날씨/환경',
    name: '전국전기차충전소표준데이터',
    description: '충전소 구분 및 상태정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'ev-charger-info',
    category: '날씨/환경',
    name: '전기차충전기정보',
    description: '충전기 위치 및 상태 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.chargeinfo.ksga.org',
    provider: 'Gov'
  },
  {
    id: 'eiass-air',
    category: '날씨/환경',
    name: '대기질정보 서비스',
    description: '대기질분야 조사·예측 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-greenhouse',
    category: '날씨/환경',
    name: '온실가스정보 서비스',
    description: '온실가스 조사 및 예측 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-odor',
    category: '날씨/환경',
    name: '악취정보 서비스',
    description: '악취분야 조사·예측 속성정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-health',
    category: '날씨/환경',
    name: '위생공중보건정보 서비스',
    description: '공중보건 위생분야 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-water',
    category: '날씨/환경',
    name: '수질정보 서비스',
    description: '수질 조사 및 예측 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-hydro',
    category: '날씨/환경',
    name: '수리수문정보 서비스',
    description: '수문 및 수자원 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-marine',
    category: '날씨/환경',
    name: '해양환경정보 서비스',
    description: '해양환경 조사 및 예측',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-land',
    category: '날씨/환경',
    name: '토지이용정보 서비스',
    description: '토지이용 현황 및 계획',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-soil',
    category: '날씨/환경',
    name: '토양정보 서비스',
    description: '토양 기본 및 조사정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-geo',
    category: '날씨/환경',
    name: '지형지질정보 서비스',
    description: '능선축, 표고, 경사 및 지질 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-bio',
    category: '날씨/환경',
    name: '동식물상정보 서비스',
    description: '동식물 조사 및 생태계 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-recycle',
    category: '날씨/환경',
    name: '친환경적자원순환정보 서비스',
    description: '친환경 자원순환 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-noise',
    category: '날씨/환경',
    name: '소음진동정보 서비스',
    description: '소음 및 진동 조사 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-population',
    category: '날씨/환경',
    name: '인구주거정보 서비스',
    description: '인구 및 주거 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-project',
    category: '날씨/환경',
    name: '사업구역정보 서비스',
    description: '환경영향평가 사업구역 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },
  {
    id: 'eiass-eia',
    category: '날씨/환경',
    name: '환경영향평가정보 서비스',
    description: '환경영향평가 속성정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.eiass.go.kr',
    provider: 'Gov'
  },

  // 의료/건강 (7개)
  {
    id: 'samsung-health',
    category: '의료/건강',
    name: '삼성헬스 SDK',
    description: '건강 데이터 읽기/쓰기 (심박, 혈압, 혈당)',
    auth: 'Partnership',
    cors: 'Unknown',
    url: 'https://developer.samsung.com',
    provider: 'Samsung'
  },
  {
    id: 'hira-medical',
    category: '의료/건강',
    name: '건강보험심사평가원 의료기관정보',
    description: '전국 의료기관 상세정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://opendata.hira.or.kr',
    provider: 'Gov'
  },
  {
    id: 'mfds',
    category: '의료/건강',
    name: '식품의약품 데이터',
    description: '식품·의약품·의료기기 공공보건 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://data.mfds.go.kr',
    provider: 'Gov'
  },
  {
    id: 'nhis-checkup',
    category: '의료/건강',
    name: '국민건강보험공단 검진기관정보',
    description: '건강검진 및 암검진 기관정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kdca',
    category: '의료/건강',
    name: '질병관리청 감염병정보',
    description: '법정감염병 발생현황 및 통계',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://dportal.kdca.go.kr',
    provider: 'Gov'
  },
  {
    id: 'hira-bigdata',
    category: '의료/건강',
    name: '보건의료빅데이터 확장 API',
    description: '헬스케어 빅데이터 활용 API',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://opendata.hira.or.kr',
    provider: 'Gov'
  },
  {
    id: 'nemc',
    category: '의료/건강',
    name: '중앙응급의료센터',
    description: '병의원/약국 위치, AED 설치정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.e-gen.or.kr',
    provider: 'Gov'
  },

  // 교육 (8개)
  {
    id: 'neis',
    category: '교육',
    name: '교육부 나이스 학교기본정보',
    description: '전국 초중고 학교 기본정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'schoolinfo',
    category: '교육',
    name: '학교알리미',
    description: '전국 초중고 학교 상세정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://schoolinfo.go.kr',
    provider: 'Gov'
  },
  {
    id: 'uniinfo',
    category: '교육',
    name: '대학알리미',
    description: '대학 기본정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'career-net',
    category: '교육',
    name: '커리어넷',
    description: '진로교육 자료 및 직업정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.career.go.kr',
    provider: 'Gov'
  },
  {
    id: 'class101-api',
    category: '교육',
    name: '클래스101 Business API',
    description: '클래스 관리, 수강 등록, 진도 추적',
    auth: 'Bearer Token',
    cors: 'Yes',
    url: 'https://www.class101.net',
    provider: 'Class101'
  },
  {
    id: 'keris-research',
    category: '교육',
    name: '한국교육학술정보원 학술연구정보',
    description: 'KERIS 학술연구정보 검색',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'riss',
    category: '교육',
    name: '한국교육학술정보원 RISS 종합목록',
    description: '대학도서관 통합목록',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'korean-dict',
    category: '교육',
    name: '국립국어원 우리말샘',
    description: '표준국어대사전, 방언, 외래어 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://korean.go.kr',
    provider: 'Gov'
  },

  // 부동산 (4개)
  {
    id: 'airbnb',
    category: '부동산',
    name: 'Airbnb API',
    description: '숙소 및 예약 관리 (B2B 파트너십)',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://www.airbnb.com',
    provider: 'Airbnb'
  },
  {
    id: 'apart-sale',
    category: '부동산',
    name: '아파트 매매 실거래가',
    description: '아파트 매매 실거래 거래 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'apart-rent',
    category: '부동산',
    name: '아파트 전월세 실거래가',
    description: '아파트 전세/월세 실거래 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'reb',
    category: '부동산',
    name: '한국부동산원 부동산통계',
    description: '부동산 시장동향 및 통계정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.reb.or.kr',
    provider: 'Gov'
  },

  // 문화/관광 (5개)
  {
    id: 'tour-api-40',
    category: '문화/관광',
    name: '한국관광공사 TourAPI 4.0',
    description: '관광지, 숙박, 음식점, 축제 관광 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://api.visitkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'culture-data',
    category: '문화/관광',
    name: '문화공공데이터광장',
    description: '박물관, 미술관, 공연, 문화재 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.culture.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kopis',
    category: '문화/관광',
    name: 'KOPIS 공연예술통합전산망',
    description: '공연정보, 공연장정보, 예매정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://kopis.or.kr',
    provider: 'Gov'
  },
  {
    id: 'kcisa',
    category: '문화/관광',
    name: '한국문화정보원',
    description: '문화콘텐츠 오픈 API',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kcisa.kr',
    provider: 'Gov'
  },
  {
    id: 'library-naru',
    category: '문화/관광',
    name: '도서관 정보나루',
    description: '전국 공공도서관 회원·장서·대출 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data4library.kr',
    provider: 'Gov'
  },

  // 통계/데이터 (4개)
  {
    id: 'kosis-list',
    category: '통계/데이터',
    name: '통계청 KOSIS 통계목록',
    description: '국가통계 목록',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kosis-data',
    category: '통계/데이터',
    name: '통계청 KOSIS 통계자료',
    description: '국가통계 데이터 조회 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://kosis.kr',
    provider: 'Gov'
  },
  {
    id: 'bok-ecos',
    category: '통계/데이터',
    name: '한국은행 경제통계',
    description: '금리, 환율, 물가지수 경제 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://ecos.bok.or.kr',
    provider: 'Gov'
  },
  {
    id: 'bigkinds',
    category: '통계/데이터',
    name: '빅카인즈(BIG KINDS)',
    description: '한국언론진흥재단 뉴스 빅데이터 분석',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.bigkinds.or.kr',
    provider: 'Gov'
  },

  // 인공지능 (11개)
  {
    id: 'clova-studio',
    category: '인공지능',
    name: '네이버 클라우드 CLOVA Studio',
    description: '한국어 특화 생성형 AI 플랫폼',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com',
    provider: 'Naver'
  },
  {
    id: 'clova-face',
    category: '인공지능',
    name: '네이버 CLOVA Face Recognition',
    description: '얼굴 인식 및 감정 분석',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/aiService/faceRecognition',
    provider: 'Naver'
  },
  {
    id: 'clova-speech',
    category: '인공지능',
    name: '네이버 CLOVA Speech',
    description: '음성 인식 및 STT 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com/product/aiService/clovaSpeech',
    provider: 'Naver'
  },
  {
    id: 'upstage-solar',
    category: '인공지능',
    name: 'Upstage Solar LLM',
    description: '대화형 LLM, Document AI, OCR',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.upstage.ai',
    provider: 'Upstage'
  },
  {
    id: 'upstage-doc-ai',
    category: '인공지능',
    name: 'Upstage Document AI',
    description: '문서 파싱, 레이아웃 분석, 정보 추출',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.upstage.ai',
    provider: 'Upstage'
  },
  {
    id: 'fabrix',
    category: '인공지능',
    name: '삼성SDS FabriX',
    description: '멀티 LLM 기업용 생성형 AI',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.samsungsds.com',
    provider: 'Samsung'
  },
  {
    id: 'bixby-api',
    category: '인공지능',
    name: '삼성 빅스비 API',
    description: '음성 인식 및 AI 어시스턴트 연동',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.samsung.com',
    provider: 'Samsung'
  },
  {
    id: 'skt-ax',
    category: '인공지능',
    name: 'SKT A.X 4.0',
    description: '한국어 특화 대규모 언어모델',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://github.com/SKT-AI',
    provider: 'SK'
  },
  {
    id: 'etri-ai',
    category: '인공지능',
    name: 'ETRI AI Open API',
    description: '한국전자통신연구원 AI 서비스 플랫폼',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://aiopen.etri.re.kr',
    provider: 'Gov'
  },
  {
    id: 'kakao-kana',
    category: '인공지능',
    name: '카카오 카나나 AI API',
    description: '카카오 자체 개발 한국어 특화 생성형 AI',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kakaocorp.com',
    provider: 'Kakao'
  },
  {
    id: 'aihub',
    category: '인공지능',
    name: 'AI Hub',
    description: 'AI 학습용 데이터셋',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.aihub.or.kr',
    provider: 'Gov'
  },

  // 쇼핑/커머스 (9개)
  {
    id: 'coupang-open',
    category: '쇼핑/커머스',
    name: '쿠팡 Open API',
    description: '쿠팡 파트너스 및 셀러 API',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.coupang.com',
    provider: 'Coupang'
  },
  {
    id: '11st-open',
    category: '쇼핑/커머스',
    name: '11번가 Open API',
    description: '11번가 상품정보 및 주문관리',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://openapi.11st.co.kr',
    provider: '11st'
  },
  {
    id: 'gmarket-open',
    category: '쇼핑/커머스',
    name: 'G마켓 Open API',
    description: 'G마켓 상품 검색 및 카테고리 API',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.gmarket.com',
    provider: 'Gmarket'
  },
  {
    id: 'naver-shopping-search',
    category: '쇼핑/커머스',
    name: '네이버 쇼핑 검색 API',
    description: '네이버 쇼핑 상품 검색 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.naver.com',
    provider: 'Naver'
  },
  {
    id: 'naver-commerce',
    category: '쇼핑/커머스',
    name: '네이버 커머스 API',
    description: '스마트스토어 판매자 전용 상품/주문 관리',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://commerce.naver.com',
    provider: 'Naver'
  },
  {
    id: 'naver-shopping-insight',
    category: '쇼핑/커머스',
    name: '네이버 쇼핑인사이트 API',
    description: '쇼핑분야 검색 트렌드 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.naver.com',
    provider: 'Naver'
  },
  {
    id: 'wemakeprice-login',
    category: '쇼핑/커머스',
    name: '위메프 로그인',
    description: '위메프 OAuth 2.0 (파트너십 전용)',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://login.wonders.work',
    provider: 'Wemakeprice'
  },
  {
    id: 'ebay-korea',
    category: '쇼핑/커머스',
    name: 'G마켓/옥션 ESM Trading API',
    description: 'eBay Korea 판매자 통합 도구',
    auth: 'JWT',
    cors: 'Yes',
    url: 'https://www.gmarket.com',
    provider: 'Gmarket'
  },
  {
    id: 'nhn-commerce',
    category: '쇼핑/커머스',
    name: 'NHN커머스 개발자센터',
    description: '고도몰 API 연동 샘플',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.nhn-commerce.com',
    provider: 'NHN'
  },

  // 배송/물류 (5개)
  {
    id: 'sweet-tracker',
    category: '배송/물류',
    name: 'SweetTracker 스마트택배',
    description: '24개 택배사 통합 배송조회',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.sweettracker.co.kr',
    provider: 'SweetTracker'
  },
  {
    id: 'delivery-realtime',
    category: '배송/물류',
    name: '실시간 택배조회 서비스',
    description: '택배사별 실시간 배송 추적',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'delivery-tracker',
    category: '배송/물류',
    name: 'Delivery Tracker API',
    description: '오픈소스 배송 추적 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://github.com/shlee322/delivery-tracker',
    provider: 'OpenSource'
  },
  {
    id: 'cj-logistics',
    category: '배송/물류',
    name: 'CJ대한통운 택배조회',
    description: 'CJ Logistics 배송 추적 API',
    auth: 'None',
    cors: 'Yes',
    url: 'https://www.cjlogistics.com',
    provider: 'CJ'
  },
  {
    id: 'hanjin-logistics',
    category: '배송/물류',
    name: '한진택배 배송조회',
    description: '한진택배 배송 추적 서비스',
    auth: 'None',
    cors: 'Yes',
    url: 'https://www.hanjin.com',
    provider: 'Hanjin'
  },

  // 음식/음료 (2개)
  {
    id: 'baemin-api',
    category: '음식/음료',
    name: '배달의민족 배달대행 API',
    description: '배달대행 주문정보 연동 (파트너십 전용)',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.woowahan.com',
    provider: 'Baemin'
  },
  {
    id: 'food-nutrition',
    category: '음식/음료',
    name: '식품영양성분 데이터베이스',
    description: '가공식품·원재료·음식별 영양성분 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },

  // 게임/엔터테인먼트 (8개)
  {
    id: 'nexon-open',
    category: '게임/엔터테인먼트',
    name: '넥슨 Open API',
    description: '메이플스토리, 던파, FC온라인 등 13종 게임 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.nexon.com',
    provider: 'Nexon'
  },
  {
    id: 'plaync',
    category: '게임/엔터테인먼트',
    name: '엔씨소프트 PLAYNC',
    description: '리니지 2M 아이템 정보 및 시세 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.plaync.com',
    provider: 'NCsoft'
  },
  {
    id: 'neople',
    category: '게임/엔터테인먼트',
    name: 'Neople API',
    description: '던전앤파이터 게임 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.neople.co.kr',
    provider: 'Neople'
  },
  {
    id: 'black-desert',
    category: '게임/엔터테인먼트',
    name: '펄어비스 Black Desert API',
    description: '검은사막 게임 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.pearlabyss.com',
    provider: 'PearlAbyss'
  },
  {
    id: 'hive',
    category: '게임/엔터테인먼트',
    name: '컴투스 HIVE 플랫폼',
    description: 'GBaaS 플랫폼 (연간 1억+ 사용자)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.withhive.com',
    provider: 'Com2uS'
  },
  {
    id: 'pubg',
    category: '게임/엔터테인먼트',
    name: '크래프톤 배틀그라운드 API',
    description: '배틀그라운드 게임 데이터, 플레이어 통계',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.krafton.com',
    provider: 'Krafton'
  },
  {
    id: 'riot-games',
    category: '게임/엔터테인먼트',
    name: 'Riot Games API',
    description: '리그오브레전드, 발로란트 게임 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developer.riotgames.com',
    provider: 'Riot'
  },
  {
    id: 'grac',
    category: '게임/엔터테인먼트',
    name: '게임물관리위원회',
    description: '게임물 등급분류 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.grac.or.kr',
    provider: 'Gov'
  },

  // 미디어/콘텐츠 (5개)
  {
    id: 'soop',
    category: '미디어/콘텐츠',
    name: 'SOOP',
    description: 'SOOP 방송 리스트, 카테고리 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.sooplive.co.kr',
    provider: 'SOOP'
  },
  {
    id: 'chzzk',
    category: '미디어/콘텐츠',
    name: '네이버 치지직 API',
    description: '네이버 라이브 스트리밍 플랫폼',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://chzzk.naver.com',
    provider: 'Naver'
  },
  {
    id: 'kobis',
    category: '미디어/콘텐츠',
    name: '영화진흥위원회 KOBIS',
    description: '박스오피스, 영화정보, 영화사정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kobis.or.kr',
    provider: 'Gov'
  },
  {
    id: 'kmdb',
    category: '미디어/콘텐츠',
    name: 'KMDb 영화상세정보',
    description: '한국영화 제명, 제작년도, 제작사 상세 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kmdb.or.kr',
    provider: 'Gov'
  },
  {
    id: 'kofa',
    category: '미디어/콘텐츠',
    name: 'KMDb 시네마테크KOFA 상영일정',
    description: '한국영상자료원 시네마테크 상영일정 (2002~현재)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kmdb.or.kr',
    provider: 'Gov'
  },

  // 소셜/커뮤니케이션 (9개)
  {
    id: 'kakao-message',
    category: '소셜/커뮤니케이션',
    name: '카카오톡 메시지',
    description: '카카오톡 텍스트/이미지 메시지 전송',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.kakao.com/product/message',
    provider: 'Kakao'
  },
  {
    id: 'kakao-share',
    category: '소셜/커뮤니케이션',
    name: '카카오톡 공유하기',
    description: '웹/앱에서 카카오톡으로 콘텐츠 공유',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://developers.kakao.com',
    provider: 'Kakao'
  },
  {
    id: 'kakao-channel',
    category: '소셜/커뮤니케이션',
    name: '카카오톡 채널',
    description: '메시지 발송, 채널 관리',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.kakao.com',
    provider: 'Kakao'
  },
  {
    id: 'naver-cafe',
    category: '소셜/커뮤니케이션',
    name: '네이버 카페 API',
    description: '네이버 카페 글 작성 및 관리',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.naver.com',
    provider: 'Naver'
  },
  {
    id: 'naver-blog',
    category: '소셜/커뮤니케이션',
    name: '네이버 블로그 API',
    description: '네이버 블로그 포스팅 API',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.naver.com',
    provider: 'Naver'
  },
  {
    id: 'line-api',
    category: '소셜/커뮤니케이션',
    name: '라인 API',
    description: 'LINE Login, Messaging API, LINE Pay, LIFF',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://developers.line.biz',
    provider: 'Line'
  },
  {
    id: 'gabia-message',
    category: '소셜/커뮤니케이션',
    name: '가비아 문자/알림톡 API',
    description: 'SMS, LMS, MMS, 카카오 알림톡 (8개 언어)',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://www.gabia.com',
    provider: 'Gabia'
  },
  {
    id: 'hiworks',
    category: '소셜/커뮤니케이션',
    name: '하이웍스 API',
    description: '전자결재, 푸시 알림',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.hiworks.com',
    provider: 'Hiworks'
  },
  {
    id: 'jandi-webhook',
    category: '소셜/커뮤니케이션',
    name: '잔디(JANDI) 웹훅',
    description: '외부 서비스 실시간 연동 웹훅',
    auth: 'webhook',
    cors: 'Yes',
    url: 'https://www.jandi.com',
    provider: 'Jandi'
  },

  // 에너지 (2개)
  {
    id: 'ev-charger-energy',
    category: '에너지',
    name: '전기차 충전소 정보',
    description: '전국 전기차 충전소 위치 및 상태정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'kepco-bill',
    category: '에너지',
    name: '한국전력 전기요금',
    description: '전기 사용량 및 요금 정보',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.kepco.co.kr',
    provider: 'KEPCO'
  },

  // 과학/연구 (5개)
  {
    id: 'kisti',
    category: '과학/연구',
    name: '한국과학기술정보연구원 KISTI',
    description: '과학기술 정보 및 연구데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kisti.re.kr',
    provider: 'Gov'
  },
  {
    id: 'archives-research',
    category: '과학/연구',
    name: '국가기록원 기록정보',
    description: '국가기록 및 역사정보 검색',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.archives.go.kr',
    provider: 'Gov'
  },
  {
    id: 'dbpia',
    category: '과학/연구',
    name: 'DBpia API',
    description: '학술저널 검색 (기관 라이선스)',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://www.dbpia.co.kr',
    provider: 'DBpia'
  },
  {
    id: 'nl-library',
    category: '과학/연구',
    name: '국립중앙도서관 OpenAPI',
    description: '소장자료 및 디지털매체 검색',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.nl.go.kr',
    provider: 'Gov'
  },
  {
    id: 'si-research',
    category: '과학/연구',
    name: '서울연구원 OpenAPI',
    description: '연구보고서 및 정책 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.si.re.kr',
    provider: 'Gov'
  },

  // 기업/비즈니스 (6개)
  {
    id: 'hrd-business',
    category: '기업/비즈니스',
    name: '한국산업인력공단 HRD',
    description: '직업훈련, 자격증, 취업정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.hrdkorea.or.kr',
    provider: 'Gov'
  },
  {
    id: 'sme-info',
    category: '기업/비즈니스',
    name: '중소벤처기업부 기업정보',
    description: '중소기업 지원정책 및 사업정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.mss.go.kr',
    provider: 'Gov'
  },
  {
    id: 'codef-biz',
    category: '기업/비즈니스',
    name: 'CODEF 오픈API',
    description: '금융, 보험, 통신 스크래핑 API',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://codef.io',
    provider: 'CODEF'
  },
  {
    id: 'airbridge',
    category: '기업/비즈니스',
    name: '에어브릿지 API',
    description: '모바일 앱 마케팅 어트리뷰션',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.airbridge.io',
    provider: 'Airbridge'
  },
  {
    id: 'naver-works',
    category: '기업/비즈니스',
    name: '네이버웍스 경영지원 API',
    description: 'B2B 자동화, 결재 시스템',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://www.naver.com',
    provider: 'Naver'
  },
  {
    id: 'samsung-knox',
    category: '기업/비즈니스',
    name: '삼성 녹스 API',
    description: '기업용 모바일 보안 솔루션',
    auth: 'Partnership',
    cors: 'Unknown',
    url: 'https://www.samsungknox.com',
    provider: 'Samsung'
  },

  // 클라우드 (3개)
  {
    id: 'ncloud',
    category: '클라우드',
    name: '네이버 클라우드 플랫폼',
    description: '종합 클라우드 서비스 (AI, Maps, SMS)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.ncloud.com',
    provider: 'Naver'
  },
  {
    id: 'kt-cloud',
    category: '클라우드',
    name: 'KT Cloud API',
    description: '공공/금융/제조업 특화 클라우드 (NPU 지원)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://cloud.kt.com',
    provider: 'KT'
  },
  {
    id: 'gabia-cloud',
    category: '클라우드',
    name: '가비아 g클라우드',
    description: 'CSAP 인증 중소기업 클라우드 플랫폼',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.gabia.com',
    provider: 'Gabia'
  },

  // 블록체인 (3개)
  {
    id: 'klaytn-kas',
    category: '블록체인',
    name: '클레이튼 KAS',
    description: '노드 없는 블록체인 개발 서비스',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.klaytnapi.com',
    provider: 'Klaytn'
  },
  {
    id: 'kaia',
    category: '블록체인',
    name: '카이아(KAIA) API',
    description: '클레이튼+핀시아 통합 블록체인',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.kaia.io',
    provider: 'Kaia'
  },
  {
    id: 'nodit',
    category: '블록체인',
    name: '두나무 노딧 API',
    description: '블록체인 개발 플랫폼',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.nodit.io',
    provider: 'Dunamu'
  },

  // IoT/스마트홈 (2개)
  {
    id: 'smartthings',
    category: 'IoT/스마트홈',
    name: '삼성 SmartThings API',
    description: '글로벌 IoT 생태계 플랫폼',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://www.smartthings.com',
    provider: 'Samsung'
  },
  {
    id: 'lg-thinq',
    category: 'IoT/스마트홈',
    name: 'LG ThinQ API',
    description: '26종 AI 가전 제어 상용 장비',
    auth: 'OAuth',
    cors: 'Unknown',
    url: 'https://www.lgthinq.com',
    provider: 'LG'
  },

  // 메시징 (3개)
  {
    id: 'sendbird-chat',
    category: '메시징',
    name: '센드버드 채팅 플랫폼 API',
    description: '실시간 채팅, 음성/영상 통화, AI 챗봇',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://sendbird.com',
    provider: 'Sendbird'
  },
  {
    id: 'sendbird-calls',
    category: '메시징',
    name: '센드버드 통화 API',
    description: 'WebRTC 음성/영상 통화 솔루션',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://sendbird.com',
    provider: 'Sendbird'
  },
  {
    id: 'gabia-kakaotalk',
    category: '메시징',
    name: '가비아 알림톡 API',
    description: 'SMS, LMS, MMS, 카카오 알림톡',
    auth: 'OAuth',
    cors: 'Yes',
    url: 'https://www.gabia.com',
    provider: 'Gabia'
  },

  // 암호화폐 (1개)
  {
    id: 'bithumb-pro',
    category: '암호화폐',
    name: '빗썸 프로 API',
    description: '전문 거래자용 암호화폐 거래',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.bithumb.pro',
    provider: 'Bithumb'
  },

  // 법률 (2개)
  {
    id: 'law-info',
    category: '법률',
    name: '국가법령정보 Open API',
    description: '대한민국 현행 법령 목록과 조문 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.law.go.kr',
    provider: 'Gov'
  },
  {
    id: 'law-case',
    category: '법률',
    name: '국가법령정보 판례 API',
    description: '대한민국 법원 판례 전문 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.law.go.kr',
    provider: 'Gov'
  },

  // 보안 (2개)
  {
    id: 'whois-kr',
    category: '보안',
    name: 'WHOIS 도메인/IP 정보 API',
    description: '.kr 도메인 및 IP WHOIS 정보',
    auth: 'ApiKey',
    cors: 'Unknown',
    url: 'https://whois.kisa.or.kr',
    provider: 'Gov'
  },
  {
    id: 'jiransoft-ip',
    category: '보안',
    name: '지란지교 악성행위 IP API',
    description: '피싱/악성코드 IP 주소 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.jiransecurity.com',
    provider: 'Jiran'
  },

  // 공공안전 (4개)
  {
    id: 'safe-dream',
    category: '공공안전',
    name: '안전드림 실종/안전 API',
    description: '실종자 정보 및 생활안전 정보 (경찰청)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.safe182.go.kr',
    provider: 'Gov'
  },
  {
    id: 'nfds',
    category: '공공안전',
    name: '소방청 공공데이터',
    description: '화재정보, 구급출동, 소방시설 위치',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.nfds.go.kr',
    provider: 'Gov'
  },
  {
    id: 'life-safety',
    category: '공공안전',
    name: '생활안전정보',
    description: '범죄발생현황, 교통사고, 화재 안전 데이터',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'disaster-data',
    category: '공공안전',
    name: '재난안전데이터 공유플랫폼',
    description: '재난 발생 현황, 피해 통계',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },

  // 항공 (3개)
  {
    id: 'flight-info',
    category: '항공',
    name: '항공기 운항정보 API',
    description: '국내 공항 항공편 실시간 운항정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'domestic-flight',
    category: '항공',
    name: '국내항공운항정보 API',
    description: '국내선 항공편 운항 일정',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'incheon-airport',
    category: '항공',
    name: '인천공항 여객운항 현황 API',
    description: '인천공항 항공편 상태',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.airport.kr',
    provider: 'Gov'
  },

  // 물류인프라 (4개)
  {
    id: 'logispot',
    category: '물류인프라',
    name: '로지스팟 물류 Open API',
    description: '통합 물류관리 API (운송배차, 차량정보)',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.logispot.co.kr',
    provider: 'Logispot'
  },
  {
    id: 'warehouse-info',
    category: '물류인프라',
    name: '물류창고업 등록정보 API',
    description: '전국 물류창고 업체 현황 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'customs-cargo',
    category: '물류인프라',
    name: '관세청 화물통관정보 API',
    description: '수출입 화물 통관 상태',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://unipass.customs.go.kr',
    provider: 'Gov'
  },
  {
    id: 'komsa-ferry',
    category: '물류인프라',
    name: 'KOMSA MTIS Open API',
    description: '연안여객선 운항일정 및 안전정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.komsa.or.kr',
    provider: 'Gov'
  },

  // 농업/수산 (4개)
  {
    id: 'nongsaro',
    category: '농업/수산',
    name: '농촌진흥청 농사로 Open API',
    description: '작목별 농업기술, 주간농사정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.nongsaro.go.kr',
    provider: 'Gov'
  },
  {
    id: 'soil-info',
    category: '농업/수산',
    name: '국립농업과학원 토양환경정보 Open API',
    description: '지역별 토양 특성',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.rda.go.kr',
    provider: 'Gov'
  },
  {
    id: 'nifs',
    category: '농업/수산',
    name: '국립수산과학원',
    description: '해양환경 및 수산정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.nifs.go.kr',
    provider: 'Gov'
  },
  {
    id: 'agrifood',
    category: '농업/수산',
    name: '농식품올바로',
    description: '농산물성분, 농산물효능 정보',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },

  // 생활경제 (3개)
  {
    id: 'gas-price',
    category: '생활경제',
    name: '주유소 가격 정보',
    description: '전국 주유소 휘발유/경유 가격',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  },
  {
    id: 'fair-price',
    category: '생활경제',
    name: '한국소비자원 참가격',
    description: '생필품 가격 정보 실시간 조회',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.price.go.kr',
    provider: 'Gov'
  },
  {
    id: 'local-currency',
    category: '생활경제',
    name: '지역화폐 가맹점 현황',
    description: '경기도 지역화폐 가맹점',
    auth: 'ApiKey',
    cors: 'Yes',
    url: 'https://www.data.go.kr',
    provider: 'Gov'
  }
];

export const categories = [
  '전체',
  '정부/공공기관',
  '지도/위치',
  '금융/결제',
  '통신사',
  '교통',
  '날씨/환경',
  '의료/건강',
  '교육',
  '부동산',
  '문화/관광',
  '통계/데이터',
  '인공지능',
  '쇼핑/커머스',
  '배송/물류',
  '음식/음료',
  '게임/엔터테인먼트',
  '미디어/콘텐츠',
  '소셜/커뮤니케이션',
  '에너지',
  '과학/연구',
  '기업/비즈니스',
  '클라우드',
  '블록체인',
  'IoT/스마트홈',
  '메시징',
  '암호화폐',
  '법률',
  '보안',
  '공공안전',
  '항공',
  '물류인프라',
  '농업/수산',
  '생활경제'
] as const;
