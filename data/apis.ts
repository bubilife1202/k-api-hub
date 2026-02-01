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
  {
    "id": "data-gg-go-kr-portal-data-dataset-searchdatasetpage-do",
    "category": "정부/공공기관",
    "name": "경기데이터드림",
    "description": "경기도가 보유한 공공데이터(교통, 복지, 관광, 경제, 교육, 주택 등) 통합 제공 포털",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.gg.go.kr/portal/data/dataset/searchDatasetPage.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr",
    "category": "정부/공공기관",
    "name": "공공데이터포털",
    "description": "정부 및 공공기관의 모든 데이터를 통합 제공하는 중앙 플랫폼 (10만개 이상 데이터셋)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/",
    "provider": "Gov"
  },
  {
    "id": "archives-go-kr-next-newsearch-openapi01-do",
    "category": "정부/공공기관",
    "name": "국가기록원 검색 API",
    "description": "나라기록물 검색서비스, RSS 형식 제공 (일 1000건 제한)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.archives.go.kr/next/newsearch/openAPI01.do",
    "provider": "Gov"
  },
  {
    "id": "index-go-kr-unity-openapi-openapiintro-do",
    "category": "정부/공공기관",
    "name": "국가지표통합 공유서비스",
    "description": "국가 통계포털 ‘지표누리’가 각종 공공 통계지표 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.index.go.kr/unity/openApi/openApiIntro.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-dataset-3050988-openapi-do",
    "category": "정부/공공기관",
    "name": "국토교통부 실거래가",
    "description": "아파트, 오피스텔, 단독다가구 등 실거래가 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/dataset/3050988/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15084084-openapi-do",
    "category": "정부/공공기관",
    "name": "기상청 단기예보",
    "description": "초단기실황, 초단기예보, 단기예보 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15084084/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-kma-go-kr-api-selectapilist-do",
    "category": "정부/공공기관",
    "name": "기상청 생활기상지수",
    "description": "자외선지수, 대기정체지수, 체감온도 등 생활기상정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.kma.go.kr/api/selectApiList.do?pgmNo=42",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15059468-openapi-do",
    "category": "정부/공공기관",
    "name": "기상청 중기예보",
    "description": "중기 기상예보 정보 조회 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15059468/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-mafra-go-kr-main-do",
    "category": "정부/공공기관",
    "name": "농림축산식품부",
    "description": "농촌, 농업, 축산, 유통소비 등 데이터 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.mafra.go.kr/main.do",
    "provider": "Gov"
  },
  {
    "id": "kdata-or-kr-mydata",
    "category": "정부/공공기관",
    "name": "마이데이터 통합지원 API",
    "description": "한국데이터산업진흥원 마이데이터 표준 API 서비스",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://www.kdata.or.kr/mydata",
    "provider": "Gov"
  },
  {
    "id": "culture-go-kr-data-openapi-openapiinfo-do",
    "category": "정부/공공기관",
    "name": "문화체육관광부 문화정보",
    "description": "공연, 전시, 문화재, 도서관 등 문화정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.culture.go.kr/data/openapi/openapiInfo.do",
    "provider": "Gov"
  },
  {
    "id": "mohw-go-kr-menu-es",
    "category": "정부/공공기관",
    "name": "보건복지부",
    "description": "보건복지부의 정책, 법령, 재정, 감사, 연구정보 등 제공",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://www.mohw.go.kr/menu.es?mid=a10104010100",
    "provider": "Gov"
  },
  {
    "id": "data-busan-go-kr-bdip-opendata-dataset-do",
    "category": "정부/공공기관",
    "name": "부산광역시 빅데이터",
    "description": "부산시 및 16개 구·군·공공기관의 공공데이터(교육, 공공행정, 문화, 식품, 안전, 교통 등) 통합 제공 포털",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.busan.go.kr/bdip/opendata/dataSet.do",
    "provider": "Gov"
  },
  {
    "id": "data-seoul-go-kr",
    "category": "정부/공공기관",
    "name": "서울시 열린데이터광장",
    "description": "서울시 모든 공공데이터 통합 플랫폼",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.seoul.go.kr/",
    "provider": "Gov"
  },
  {
    "id": "bigdata-sbiz-or-kr",
    "category": "정부/공공기관",
    "name": "소상공인 365 API",
    "description": "전국 상가업소 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://bigdata.sbiz.or.kr/#/apiMain/dataApi/intro",
    "provider": "Gov"
  },
  {
    "id": "open-assembly-go-kr-portal-openapi-main-do",
    "category": "정부/공공기관",
    "name": "열린국회정보 확장 API",
    "description": "국회의원 표결정보, 발의법률안, 의안 상세정보, 연구보고서",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://open.assembly.go.kr/portal/openapi/main.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-tcs-dss-selectdatasetlist-do",
    "category": "정부/공공기관",
    "name": "예금보험공사",
    "description": "금융기관 예금자보호 및 영업정지저축은행 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/tcs/dss/selectDataSetList.do?org=예금보험공사",
    "provider": "Gov"
  },
  {
    "id": "localdata-go-kr-main-do",
    "category": "정부/공공기관",
    "name": "지방행정 인허가 데이터 개방",
    "description": "전국 자치단체 인허가 데이터셋 (동물, 의료, 문화, 생활 등) 26.4.15부로 폐쇄 (공공데이터 포털에서 제공)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.localdata.go.kr/main.do",
    "provider": "Gov"
  },
  {
    "id": "gov-kr-openapi-info",
    "category": "정부/공공기관",
    "name": "정부24 공공서비스 API",
    "description": "정부 공공서비스 정보 오픈API, 실시간 행정정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.gov.kr/openapi/info",
    "provider": "Unknown"
  },
  {
    "id": "policy-nl-go-kr-pages-point-api-jsp",
    "category": "정부/공공기관",
    "name": "정책정보포털 POINT",
    "description": "최신정책동향, 온라인 정부간행물, 정책정보종합목록 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://policy.nl.go.kr/pages/point/api.jsp",
    "provider": "Gov"
  },
  {
    "id": "ecolife-me-go-kr-ecolife-infocenter-openapi",
    "category": "정부/공공기관",
    "name": "초록누리 Open API",
    "description": "환경부 환경정보 및 친환경 생활정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://ecolife.me.go.kr/ecolife/infoCenter/openApi",
    "provider": "Gov"
  },
  {
    "id": "plus-kipris-or-kr-portal-data-service-list-do",
    "category": "정부/공공기관",
    "name": "키프리스 플러스 API",
    "description": "특허·상표·디자인 등 지식재산권 정보 검색",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://plus.kipris.or.kr/portal/data/service/List.do?subTab=SC001&amp;entYn=N&amp;menuNo=200100",
    "provider": "Gov"
  },
  {
    "id": "kosis-kr-serviceinfo-openapiguide-do",
    "category": "정부/공공기관",
    "name": "통계청 KOSIS",
    "description": "국가통계포털의 134,586종 통계자료",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://kosis.kr/serviceInfo/openAPIGuide.do",
    "provider": "Unknown"
  },
  {
    "id": "api-visitkorea-or-kr",
    "category": "정부/공공기관",
    "name": "한국관광공사 TourAPI",
    "description": "관광지, 숙박, 음식점, 축제 등 관광정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://api.visitkorea.or.kr/",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15076872-openapi-do",
    "category": "정부/공공기관",
    "name": "한국도로공사 교통정보",
    "description": "실시간 고속도로 교통량 및 교통정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15076872/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "openapi-hrdkorea-or-kr-main",
    "category": "정부/공공기관",
    "name": "한국산업인력공단 HRD",
    "description": "국가자격, 과정평가형자격, 일학습병행자격 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://openapi.hrdkorea.or.kr/main",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15125762-openapi-do",
    "category": "정부/공공기관",
    "name": "한국철도공사 열차운행정보",
    "description": "KTX, 새마을호 등 열차 운행정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15125762/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15073861-openapi-do",
    "category": "정부/공공기관",
    "name": "한국환경공단 에어코리아",
    "description": "실시간 대기오염정보 및 미세먼지 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15073861/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15077871-openapi-do",
    "category": "정부/공공기관",
    "name": "행정안전부 행정표준코드",
    "description": "법정동코드, 행정구역코드 등 표준코드 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15077871/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "egis-me-go-kr-api-intro-do",
    "category": "정부/공공기관",
    "name": "환경공간정보서비스 지도 API",
    "description": "환경부 토지피복지도, 환경주제도, 생태자연도 공간정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://egis.me.go.kr/api/intro.do",
    "provider": "Gov"
  },
  {
    "id": "ntis-go-kr-rndopen-api-mng-apimain-do",
    "category": "정부/공공기관",
    "name": "NTIS 국가과학기술정보",
    "description": "국가R&D 과제정보, 성과정보 메타데이터 검색",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.ntis.go.kr/rndopen/api/mng/apiMain.do",
    "provider": "Gov"
  },
  {
    "id": "map-ngii-go-kr-mi-openkey-openkeyinfo-do",
    "category": "지도/위치",
    "name": "국토정보플랫폼",
    "description": "수치지도, 항공사진, 정사영상, DEM, 국가관심지점(POI)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://map.ngii.go.kr/mi/openKey/openKeyInfo.do",
    "provider": "Gov"
  },
  {
    "id": "ncloud-com-product-applicationservice-maps",
    "category": "지도/위치",
    "name": "네이버 지도",
    "description": "지도 API, Geocoding, Directions, 파노라마",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.ncloud.com/product/applicationService/maps",
    "provider": "Naver"
  },
  {
    "id": "vworld-kr-v4po-openapi-s001-do",
    "category": "지도/위치",
    "name": "브이월드",
    "description": "국토지리정보원의 3D 지도 및 공간정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.vworld.kr/v4po_openapi_s001.do",
    "provider": "Unknown"
  },
  {
    "id": "business-juso-go-kr",
    "category": "지도/위치",
    "name": "주소기반산업지원서비스",
    "description": "도로명주소 API / DB 제공 및 국가지점정보 등 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://business.juso.go.kr",
    "provider": "Gov"
  },
  {
    "id": "apis-map-kakao-com-web-guide",
    "category": "지도/위치",
    "name": "카카오맵",
    "description": "지도 표시, 장소 검색, 좌표 변환, 경로 탐색",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://apis.map.kakao.com/web/guide/",
    "provider": "Kakao"
  },
  {
    "id": "openapi-sk-com",
    "category": "지도/위치",
    "name": "T맵 API",
    "description": "SK텔레콤의 내비게이션 및 경로 탐색 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://openapi.sk.com/",
    "provider": "SK"
  },
  {
    "id": "openapi-kftc-or-kr-service-openbanking",
    "category": "금융/결제",
    "name": "금융결제원 오픈뱅킹",
    "description": "19개+ 은행 통합 계좌조회, 이체, 결제 서비스",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://openapi.kftc.or.kr/service/openBanking",
    "provider": "Gov"
  },
  {
    "id": "developers-pay-naver-com",
    "category": "금융/결제",
    "name": "네이버페이 API",
    "description": "네이버페이 결제, 정기결제, 자동결제 API",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.pay.naver.com/",
    "provider": "Naver"
  },
  {
    "id": "docs-bootpay-co-kr",
    "category": "금융/결제",
    "name": "부트페이 API",
    "description": "통합 PG 연동 서비스, 이니시스·KCP·다날 등 다중 PG사 지원",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://docs.bootpay.co.kr/",
    "provider": "Unknown"
  },
  {
    "id": "developer-samsung-com-pay",
    "category": "금융/결제",
    "name": "삼성페이 API",
    "description": "모바일 결제 및 디지털 지갑 서비스",
    "auth": "Partnership",
    "cors": "Unknown",
    "url": "https://developer.samsung.com/pay",
    "provider": "Samsung"
  },
  {
    "id": "openapi-shinhan-com",
    "category": "금융/결제",
    "name": "신한은행 Open API",
    "description": "신한금융그룹 통합 API 서비스",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://openapi.shinhan.com/",
    "provider": "Unknown"
  },
  {
    "id": "developer-wooribank-com-apiservice",
    "category": "금융/결제",
    "name": "우리은행 Open API",
    "description": "핀테크 개발자 원스탑 지원 서비스",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developer.wooribank.com/apiservice",
    "provider": "Unknown"
  },
  {
    "id": "developers-kakaopay-com",
    "category": "금융/결제",
    "name": "카카오페이",
    "description": "온라인 결제, 정기결제, 송금 등 종합 결제 솔루션",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.kakaopay.com/",
    "provider": "Kakao"
  },
  {
    "id": "docs-pay-toss-im-reference",
    "category": "금융/결제",
    "name": "토스페이 API",
    "description": "토스를 통한 결제 서비스 API (TLS 1.2+ 필수)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://docs-pay.toss.im/reference",
    "provider": "Unknown"
  },
  {
    "id": "docs-tosspayments-com-reference",
    "category": "금융/결제",
    "name": "토스페이먼츠",
    "description": "통합 결제 API (카드, 가상계좌, 간편결제)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://docs.tosspayments.com/reference",
    "provider": "Unknown"
  },
  {
    "id": "developers-payco-com-guide",
    "category": "금융/결제",
    "name": "페이코(PAYCO)",
    "description": "NHN 통합 ID 및 멤버십 연동 서비스",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.payco.com/guide",
    "provider": "Unknown"
  },
  {
    "id": "developer-payple-kr",
    "category": "금융/결제",
    "name": "페이플 API",
    "description": "간편결제, 정기결제, 링크결제 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developer.payple.kr/",
    "provider": "Unknown"
  },
  {
    "id": "hanafnapimarket-com",
    "category": "금융/결제",
    "name": "하나금융그룹 Open API",
    "description": "하나금융그룹 API 마켓플레이스",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://www.hanafnapimarket.com/",
    "provider": "Unknown"
  },
  {
    "id": "hyphen-im",
    "category": "금융/결제",
    "name": "하이픈 API 마켓플레이스",
    "description": "케이에스넷 자회사 데이터 API 마켓플레이스 (500개 이상 API)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://hyphen.im/",
    "provider": "Unknown"
  },
  {
    "id": "koreaexim-go-kr-ir-hphkir019m01",
    "category": "금융/결제",
    "name": "한국수출입은행 Open API",
    "description": "현재환율, 대출금리, 국제금리 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.koreaexim.go.kr/ir/HPHKIR019M01",
    "provider": "Gov"
  },
  {
    "id": "ecos-bok-or-kr-api",
    "category": "금융/결제",
    "name": "한국은행 Open API",
    "description": "경제통계정보 제공 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://ecos.bok.or.kr/api/",
    "provider": "Gov"
  },
  {
    "id": "apiportal-koreainvestment-com-intro",
    "category": "금융/결제",
    "name": "한국투자증권 KIS API",
    "description": "국내외 주식 시세 및 주문 API",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://apiportal.koreainvestment.com/intro",
    "provider": "Unknown"
  },
  {
    "id": "developer-codef-io",
    "category": "금융/결제",
    "name": "CODEF API",
    "description": "금융, 보험, 통신 데이터 통합 연동",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developer.codef.io/",
    "provider": "Unknown"
  },
  {
    "id": "apiportal-kbfg-com",
    "category": "금융/결제",
    "name": "KB API 포탈",
    "description": "KB금융그룹 종합 금융 API 서비스 (800+ API 제공)",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://apiportal.kbfg.com/",
    "provider": "Unknown"
  },
  {
    "id": "obizapi-kbstar-com-quics",
    "category": "금융/결제",
    "name": "KB국민은행 Open API",
    "description": "KB 종합 금융서비스 및 BaaS 플랫폼",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://obizapi.kbstar.com/quics?page=C108082",
    "provider": "Unknown"
  },
  {
    "id": "developers-nonghyup-com-center-ce-1020",
    "category": "금융/결제",
    "name": "NH농협은행 Open API",
    "description": "농협 금융 API 개발자센터",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.nonghyup.com/center/CE_1020",
    "provider": "Unknown"
  },
  {
    "id": "apilink-kt-co-kr",
    "category": "통신사",
    "name": "KT API Link",
    "description": "Geo Master, Cloud API, GiGA Genie AI",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://apilink.kt.co.kr/",
    "provider": "KT"
  },
  {
    "id": "data-go-kr-data-15058012-openapi-do",
    "category": "교통",
    "name": "경기도 버스정보",
    "description": "경기도 시내/시외버스 실시간 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15058012/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15040463-openapi-do",
    "category": "교통",
    "name": "국토교통부 교통소통정보",
    "description": "고속도로 및 국도 실시간 속도정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15040463/openapi.do?recommendDataYn=Y",
    "provider": "Gov"
  },
  {
    "id": "developers-kia-com",
    "category": "교통",
    "name": "기아자동차 Developers",
    "description": "KIA Connect 차량 데이터 및 운행정보",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.kia.com/",
    "provider": "Unknown"
  },
  {
    "id": "data-seoul-go-kr-datalist-oa-15493-a-1-datasetview-do",
    "category": "교통",
    "name": "따릉이(서울자전거)",
    "description": "서울시 공공자전거 실시간 대여정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.seoul.go.kr/dataList/OA-15493/A/1/datasetView.do",
    "provider": "Gov"
  },
  {
    "id": "data-kric-go-kr-rips-serviceinfo-openapi-introduce-do",
    "category": "교통",
    "name": "레일포털(KRIC)",
    "description": "철도산업정보센터 전국 철도 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.kric.go.kr/rips/serviceInfo/openapi/introduce.do",
    "provider": "Gov"
  },
  {
    "id": "topis-seoul-go-kr-refroom-openrefroom-4-do",
    "category": "교통",
    "name": "서울 TOPIS 교통정보",
    "description": "서울시 다양한 교통정보, 비영리 목적 활용",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://topis.seoul.go.kr/refRoom/openRefRoom_4.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15057802-openapi-do",
    "category": "교통",
    "name": "서울교통공사 역간거리",
    "description": "지하철 역간거리 및 소요시간 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15057802/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "api-bus-go-kr-contents-sub01-wisopenapi-html",
    "category": "교통",
    "name": "서울시 버스 도착정보",
    "description": "서울시 시내버스 실시간 도착정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "http://api.bus.go.kr/contents/sub01/wisOpenApi.html",
    "provider": "Gov"
  },
  {
    "id": "data-seoul-go-kr-datalist-oa-12764-a-1-datasetview-do",
    "category": "교통",
    "name": "서울시 지하철 실시간 도착정보",
    "description": "서울 지하철 2~8호선 실시간 도착정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.seoul.go.kr/dataList/OA-12764/A/1/datasetView.do",
    "provider": "Gov"
  },
  {
    "id": "kakaotbusinessapiinfo-oopy-io",
    "category": "교통",
    "name": "카카오T 비즈니스",
    "description": "업무용 카카오T 이용내역 연동 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://kakaotbusinessapiinfo.oopy.io/",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakaomobility-com-product-api",
    "category": "교통",
    "name": "카카오모빌리티 길찾기",
    "description": "모빌리티 서비스 개발용 기술제품",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakaomobility.com/product/api",
    "provider": "Kakao"
  },
  {
    "id": "developers-hyundai-com",
    "category": "교통",
    "name": "현대자동차 Developers",
    "description": "차량 제원, 운행정보, 주행거리, 차량상태, 운전습관",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.hyundai.com/",
    "provider": "Unknown"
  },
  {
    "id": "lab-odsay-com-guide-guide",
    "category": "교통",
    "name": "ODsay 대중교통 API",
    "description": "전국 대중교통, 고속버스, 항공편 통합 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://lab.odsay.com/guide/guide",
    "provider": "Unknown"
  },
  {
    "id": "apihub-kma-go-kr",
    "category": "날씨/환경",
    "name": "기상청 API허브",
    "description": "관측·예보·위성·레이더 등 12개 분야 기상데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://apihub.kma.go.kr/",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-dataset-15000099-openapi-do",
    "category": "날씨/환경",
    "name": "기상청 동네예보",
    "description": "읍면동 단위 동네예보 3시간 간격 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/dataset/15000099/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15028236-openapi-do",
    "category": "날씨/환경",
    "name": "대기질정보 서비스",
    "description": "연돌기준, 대기질분야 조사·예측 정보 및 공간정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15028236/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-11-html",
    "category": "날씨/환경",
    "name": "동식물상정보 서비스",
    "description": "동식물상 조사 정보 및 생태계 보전 관련 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_11.html",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-15-html",
    "category": "날씨/환경",
    "name": "사업구역정보 서비스",
    "description": "환경영향평가 사업구역 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_15.html",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-13-html",
    "category": "날씨/환경",
    "name": "소음진동정보 서비스",
    "description": "소음·진동 조사·예측 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_13.html",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-06-html",
    "category": "날씨/환경",
    "name": "수리수문정보 서비스",
    "description": "수리수문분야 조사·예측 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_06.html",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-05-html",
    "category": "날씨/환경",
    "name": "수질정보 서비스",
    "description": "수질조사 개요·조사·예측 정보 및 조사지점 공간정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_05.html",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15083164-filedata-do",
    "category": "날씨/환경",
    "name": "악취정보 서비스",
    "description": "악취분야 조사·예측 속성정보 및 조사지점 공간정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15083164/fileData.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15109350-openapi-do",
    "category": "날씨/환경",
    "name": "에어코리아 대기오염 예보정보",
    "description": "미세먼지, 초미세먼지, 오존 예보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15109350/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-02-html",
    "category": "날씨/환경",
    "name": "온실가스정보 서비스",
    "description": "환경영향평가 사업의 온실가스 조사·예측 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_02.html",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15028239-openapi-do",
    "category": "날씨/환경",
    "name": "위생공중보건정보 서비스",
    "description": "위생공중보건분야 조사 속성정보(스타이렌, 염화수소 등)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15028239/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-14-html",
    "category": "날씨/환경",
    "name": "인구주거정보 서비스",
    "description": "인구 및 주거 관련 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_14.html",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15013115-standard-do",
    "category": "날씨/환경",
    "name": "전국전기차충전소표준데이터",
    "description": "충전소 구분, 위치, 운영시간, 충전기 상태 등",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15013115/standard.do",
    "provider": "Gov"
  },
  {
    "id": "chargeinfo-ksga-org-front-cs-api-infomation",
    "category": "날씨/환경",
    "name": "전기차충전기정보",
    "description": "충전 사업자 충전소 위치 및 충전기 상태",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://chargeinfo.ksga.org/front/cs/api/infomation",
    "provider": "Unknown"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-10-html",
    "category": "날씨/환경",
    "name": "지형지질정보 서비스",
    "description": "개요·조사·광산·지질도·능선축·표고·경사 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_10.html",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-12-html",
    "category": "날씨/환경",
    "name": "친환경적자원순환정보 서비스",
    "description": "친환경적 자원순환 관련 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_12.html",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-09-html",
    "category": "날씨/환경",
    "name": "토양정보 서비스",
    "description": "토양 기본정보 및 조사 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_09.html",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-08-html",
    "category": "날씨/환경",
    "name": "토지이용정보 서비스",
    "description": "토지이용 현황 및 계획 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_08.html",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15076352-openapi-do",
    "category": "날씨/환경",
    "name": "한국환경공단 전기차충전소",
    "description": "전국 전기차 충전소 정보, 충전기 상태정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15076352/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "nesc-nier-go-kr-ko-html-svc-openapi-explain-do",
    "category": "날씨/환경",
    "name": "환경위성센터 API",
    "description": "환경위성(GEMS) Data, Image 자료 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://nesc.nier.go.kr/ko/html/svc/openapi/explain.do",
    "provider": "Gov"
  },
  {
    "id": "eiass-go-kr-openapiguide-kei-html-chapter04-07-html",
    "category": "날씨/환경",
    "name": "해양환경정보 서비스",
    "description": "해양환경분야 조사·예측 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.eiass.go.kr/openapiguide/kei_html/chapter04_07.html",
    "provider": "Gov"
  },
  {
    "id": "nhis-or-kr-nhis-together-wbhaec10800m01-do",
    "category": "의료/건강",
    "name": "국민건강보험공단",
    "description": "장기요양 시설 정보와 건강검진 기관 정보, 예약 및 검진 일정 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.nhis.or.kr/nhis/together/wbhaec10800m01.do",
    "provider": "Gov"
  },
  {
    "id": "opendata-hira-or-kr-op-opc-selectopenapiinfoview-do",
    "category": "의료/건강",
    "name": "보건의료빅데이터 확장 API",
    "description": "건강보험심사평가원 의료빅데이터 활용 Open API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://opendata.hira.or.kr/op/opc/selectOpenApiInfoView.do",
    "provider": "Gov"
  },
  {
    "id": "developer-samsung-com-health",
    "category": "의료/건강",
    "name": "삼성헬스 SDK",
    "description": "건강 데이터 읽기/쓰기 (심박수, 산소포화도, 혈당, 혈압 등)",
    "auth": "Partnership",
    "cors": "Unknown",
    "url": "https://developer.samsung.com/health",
    "provider": "Samsung"
  },
  {
    "id": "data-mfds-go-kr-opcaa01f01",
    "category": "의료/건강",
    "name": "식품의약품 데이터",
    "description": "식품·의약품·의료기기 등 국민 보건 및 안전 관련 분야의 다양한 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.mfds.go.kr/OPCAA01F01",
    "provider": "Gov"
  },
  {
    "id": "e-gen-or-kr-nemc-open-api-do",
    "category": "의료/건강",
    "name": "중앙응급의료센터",
    "description": "병의원/약국 위치, AED 설치정보 등",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.e-gen.or.kr/nemc/open_api.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15122275-openapi-do",
    "category": "교육",
    "name": "교육부 나이스 학교기본정보",
    "description": "전국 초중고 학교 기본정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15122275/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "opendict-korean-go-kr-service-openapiinfo",
    "category": "교육",
    "name": "국립국어원 우리말샘",
    "description": "표준국어대사전, 방언, 외래어 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://opendict.korean.go.kr/service/openApiInfo",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15037507-openapi-do",
    "category": "교육",
    "name": "대학알리미",
    "description": "대학 기본정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15037507/openapi.do#tab_layer_detail_function",
    "provider": "Gov"
  },
  {
    "id": "career-go-kr-cnet-front-openapi-openapiuseguidecenter-do",
    "category": "교육",
    "name": "커리어넷",
    "description": "진로교육 자료 및 직업정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.career.go.kr/cnet/front/openapi/openApiUseGuideCenter.do",
    "provider": "Gov"
  },
  {
    "id": "docs-class101-net",
    "category": "교육",
    "name": "클래스101 Business API",
    "description": "클래스 관리, 수강신청, 진도율 조회, SSO 연동",
    "auth": "Bearer Token",
    "cors": "Unknown",
    "url": "https://docs.class101.net/",
    "provider": "Unknown"
  },
  {
    "id": "schoolinfo-go-kr-ng-go-pnnggo-a01-l0-do",
    "category": "교육",
    "name": "학교알리미",
    "description": "전국 초중고 학교 기본정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.schoolinfo.go.kr/ng/go/pnnggo_a01_l0.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15071949-filedata-do",
    "category": "교육",
    "name": "한국교육학술정보원 RISS 종합목록",
    "description": "대학 도서관 통합 학술자료 목록",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15071949/fileData.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-3046254-openapi-do",
    "category": "교육",
    "name": "한국교육학술정보원 학술연구정보",
    "description": "KERIS 학술논문, 연구정보 검색 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/3046254/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15126469-openapi-do",
    "category": "부동산",
    "name": "아파트 매매 실거래가",
    "description": "국토교통부 아파트 매매 실거래 자료",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15126469/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15126474-openapi-do",
    "category": "부동산",
    "name": "아파트 전월세 실거래가",
    "description": "아파트 전세/월세 실거래 자료",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15126474/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "reb-or-kr-r-one-portal-openapi-openapiintropage-do",
    "category": "부동산",
    "name": "한국부동산원 부동산통계",
    "description": "부동산 시장동향 및 통계정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.reb.or.kr/r-one/portal/openapi/openApiIntroPage.do",
    "provider": "Gov"
  },
  {
    "id": "airbnb-com-help-article-3418",
    "category": "부동산",
    "name": "Airbnb API",
    "description": "숙소 관리, 예약 관리 (B2B 파트너십 필수)",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://www.airbnb.com/help/article/3418",
    "provider": "Unknown"
  },
  {
    "id": "emuseum-go-kr-openapi",
    "category": "문화/관광",
    "name": "국립중앙박물관 e뮤지엄",
    "description": "전국 박물관 소장품(유물) 정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.emuseum.go.kr/openApi",
    "provider": "Gov"
  },
  {
    "id": "data4library-kr-apiutilization",
    "category": "문화/관광",
    "name": "도서관 정보나루",
    "description": "전국 공공도서관에서 수집한 회원·장서·대출 데이터 등을 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data4library.kr/apiUtilization",
    "provider": "Unknown"
  },
  {
    "id": "culture-go-kr-data-main-main-do",
    "category": "문화/관광",
    "name": "문화공공데이터광장",
    "description": "박물관, 미술관, 공연, 문화재 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.culture.go.kr/data/main/main.do",
    "provider": "Gov"
  },
  {
    "id": "kcisa-kr-kr-contents-open-opendata-view-do",
    "category": "문화/관광",
    "name": "한국문화정보원",
    "description": "문화콘텐츠 오픈 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.kcisa.kr/kr/contents/open_openData/view.do",
    "provider": "Unknown"
  },
  {
    "id": "kopis-or-kr-por-cs-openapi-openapiinfo-do",
    "category": "문화/관광",
    "name": "KOPIS 공연예술통합전산망",
    "description": "공연정보, 공연장정보, 예매정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.kopis.or.kr/por/cs/openapi/openApiInfo.do",
    "provider": "Gov"
  },
  {
    "id": "bigkinds-or-kr",
    "category": "통계/데이터",
    "name": "빅카인즈(BIG KINDS)",
    "description": "한국언론진흥재단 뉴스 빅데이터 분석 (로그인 필요)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.bigkinds.or.kr/",
    "provider": "Gov"
  },
  {
    "id": "kosis-kr-openapi",
    "category": "통계/데이터",
    "name": "통계청 KOSIS 통계자료",
    "description": "국가통계 데이터 조회 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://kosis.kr/openapi/?sso=ok",
    "provider": "Unknown"
  },
  {
    "id": "developers-naver-com-docs-clova-api-cfr-api-guide-md",
    "category": "인공지능",
    "name": "네이버 CLOVA Face Recognition",
    "description": "얼굴 인식 및 감정 분석",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/clova/api/CFR/API_Guide.md",
    "provider": "Naver"
  },
  {
    "id": "ncloud-com-product-aiservice-clovaspeech",
    "category": "인공지능",
    "name": "네이버 CLOVA Speech",
    "description": "음성 인식 및 STT 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.ncloud.com/product/aiService/clovaSpeech",
    "provider": "Naver"
  },
  {
    "id": "api-ncloud-docs-com-docs-ai-naver-clovastudio-summary",
    "category": "인공지능",
    "name": "네이버 클라우드 CLOVA Studio",
    "description": "한국어 특화 생성형 AI 플랫폼",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://api.ncloud-docs.com/docs/ai-naver-clovastudio-summary",
    "provider": "Naver"
  },
  {
    "id": "developer-samsung-com-bixby",
    "category": "인공지능",
    "name": "삼성 빅스비 API",
    "description": "음성 인식 및 AI 어시스턴트 통합",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developer.samsung.com/bixby",
    "provider": "Samsung"
  },
  {
    "id": "samsungsds-com-us-ai-fabrix-fabrix-html",
    "category": "인공지능",
    "name": "삼성SDS FabriX",
    "description": "멀티 LLM 기업용 생성형 AI 플랫폼",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.samsungsds.com/us/ai-fabrix/fabrix.html",
    "provider": "Samsung"
  },
  {
    "id": "aihub-or-kr",
    "category": "인공지능",
    "name": "AI Hub",
    "description": "AI 학습용 데이터셋",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://aihub.or.kr",
    "provider": "Gov"
  },
  {
    "id": "epretx-etri-re-kr",
    "category": "인공지능",
    "name": "ETRI AI Open API",
    "description": "ETRI에서 개발된 최첨단 인공지능 기술 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://epretx.etri.re.kr/",
    "provider": "Unknown"
  },
  {
    "id": "github-com-skt-ai-a-x-4-0",
    "category": "인공지능",
    "name": "SKT A.X 4.0",
    "description": "한국어 특화 대규모 언어모델",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://github.com/SKT-AI/A.X-4.0",
    "provider": "SK"
  },
  {
    "id": "developers-upstage-ai",
    "category": "인공지능",
    "name": "Upstage Document AI",
    "description": "문서 파싱, 레이아웃 분석, 정보 추출",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.upstage.ai/",
    "provider": "Unknown"
  },
  {
    "id": "developers-naver-com-docs-serviceapi-search-shopping-shoppin",
    "category": "쇼핑/커머스",
    "name": "네이버 쇼핑 검색 API",
    "description": "네이버 쇼핑 상품 검색 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/serviceapi/search/shopping/shopping.md",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-serviceapi-datalab-shopping-shoppi",
    "category": "쇼핑/커머스",
    "name": "네이버 쇼핑인사이트 API",
    "description": "쇼핑 분야별 검색 트렌드 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/serviceapi/datalab/shopping/shopping.md",
    "provider": "Naver"
  },
  {
    "id": "apicenter-commerce-naver-com-ko-basic-commerce-api",
    "category": "쇼핑/커머스",
    "name": "네이버 커머스 API",
    "description": "스마트스토어 판매자 전용 상품/주문 관리",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://apicenter.commerce.naver.com/ko/basic/commerce-api",
    "provider": "Naver"
  },
  {
    "id": "developer-login-wonders-work",
    "category": "쇼핑/커머스",
    "name": "위메프 로그인",
    "description": "위메프 로그인 OAuth 2.0 (제휴사 전용)",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developer.login.wonders.work/",
    "provider": "Unknown"
  },
  {
    "id": "developers-coupangcorp-com-hc-ko",
    "category": "쇼핑/커머스",
    "name": "쿠팡 Open API",
    "description": "쿠팡 파트너스 및 셀러 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.coupangcorp.com/hc/ko",
    "provider": "Unknown"
  },
  {
    "id": "openapi-11st-co-kr",
    "category": "쇼핑/커머스",
    "name": "11번가 Open API",
    "description": "11번가 상품정보 및 주문관리 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://openapi.11st.co.kr/",
    "provider": "Unknown"
  },
  {
    "id": "etapi-gmarket-com-pages-api-ea-b0-80-ec-9d-b4-eb-93-9c",
    "category": "쇼핑/커머스",
    "name": "G마켓 Open API",
    "description": "G마켓 상품검색 및 카테고리 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://etapi.gmarket.com/pages/API-%EA%B0%80%EC%9D%B4%EB%93%9C",
    "provider": "Unknown"
  },
  {
    "id": "etapi-gmarket-com-category-ea-b3-b5-ec-a7-80",
    "category": "쇼핑/커머스",
    "name": "G마켓/옥션 ESM Trading API",
    "description": "이베이코리아 통합 판매자 도구",
    "auth": "JWT",
    "cors": "Unknown",
    "url": "https://etapi.gmarket.com/category/%EA%B3%B5%EC%A7%80",
    "provider": "Unknown"
  },
  {
    "id": "devcenter-nhn-commerce-com",
    "category": "쇼핑/커머스",
    "name": "NHN커머스 개발자센터",
    "description": "고도몰 API 연동 및 샘플 코드 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://devcenter.nhn-commerce.com/",
    "provider": "Unknown"
  },
  {
    "id": "apiservice-co-kr",
    "category": "배송/물류",
    "name": "실시간 택배조회 서비스",
    "description": "택배사별 실시간 배송정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "http://apiservice.co.kr/",
    "provider": "Unknown"
  },
  {
    "id": "developers-hanjin-com-guides",
    "category": "배송/물류",
    "name": "한진택배 배송조회",
    "description": "한진택배 배송추적 서비스",
    "auth": "None",
    "cors": "Unknown",
    "url": "https://developers.hanjin.com/guides",
    "provider": "Unknown"
  },
  {
    "id": "development-pro-tistory-com-entry-ed-83-9d-eb-b0-b0-ec-82-ac",
    "category": "배송/물류",
    "name": "CJ대한통운 택배조회",
    "description": "CJ대한통운 배송추적 API",
    "auth": "None",
    "cors": "Unknown",
    "url": "https://development-pro.tistory.com/entry/%ED%83%9D%EB%B0%B0%EC%82%AC%EC%A1%B0%ED%9A%8C%EA%B0%81-%ED%83%9D%EB%B0%B0%EC%82%AC-%EB%B0%8F-%EB%8C%80%ED%95%9C%ED%86%B5%EC%9A%B4-API-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4",
    "provider": "Unknown"
  },
  {
    "id": "tracker-delivery",
    "category": "배송/물류",
    "name": "Delivery Tracker API",
    "description": "오픈소스 배송조회 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://tracker.delivery/",
    "provider": "Unknown"
  },
  {
    "id": "tracking-sweettracker-co-kr",
    "category": "배송/물류",
    "name": "SweetTracker 스마트택배",
    "description": "24개 택배사 통합 배송조회 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://tracking.sweettracker.co.kr/",
    "provider": "Unknown"
  },
  {
    "id": "newtrack-co-kr-news-29",
    "category": "음식/음료",
    "name": "배달의민족 배달대행 API",
    "description": "배달대행 주문정보 연동 시스템 (파트너사 전용)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.newtrack.co.kr/news/29",
    "provider": "Unknown"
  },
  {
    "id": "various-foodsafetykorea-go-kr-nutrient-industry-openapi-info",
    "category": "음식/음료",
    "name": "식품영양성분 데이터베이스",
    "description": "가공식품·원재료·음식별 영양성분(칼로리, 영양소 등) 정보를 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://various.foodsafetykorea.go.kr/nutrient/industry/openApi/info.do",
    "provider": "Gov"
  },
  {
    "id": "grac-or-kr-openbook-openapi-aspx",
    "category": "게임/엔터테인먼트",
    "name": "게임물관리위원회",
    "description": "게임물 등급분류 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.grac.or.kr/OpenBook/OpenAPI.aspx",
    "provider": "Gov"
  },
  {
    "id": "openapi-nexon-com",
    "category": "게임/엔터테인먼트",
    "name": "넥슨 Open API",
    "description": "메이플스토리, 던파, FC온라인 등 13종 게임 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://openapi.nexon.com/",
    "provider": "Unknown"
  },
  {
    "id": "developers-plaync-com",
    "category": "게임/엔터테인먼트",
    "name": "엔씨소프트 PLAYNC",
    "description": "리니지2M 아이템 정보, 시세, 검색 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.plaync.com/",
    "provider": "Unknown"
  },
  {
    "id": "developers-hiveplatform-ai-ko-latest-api-hive-sdk-api",
    "category": "게임/엔터테인먼트",
    "name": "컴투스 HIVE 플랫폼",
    "description": "GBaaS 플랫폼 (연 1억명 접속)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.hiveplatform.ai/ko/latest/api/hive-sdk-api/?_gl=1*1aw8yqt*_ga*NTEzOTU0MjkyLjE3NTU2MDQ1OTM.*_ga_4J643QJWFZ*czE3NTU2MDQ1OTIkbzEkZzEkdDE3NTU2MDQ2MDQkajQ4JGwwJGgw",
    "provider": "Unknown"
  },
  {
    "id": "developer-pubg-com",
    "category": "게임/엔터테인먼트",
    "name": "크래프톤 배틀그라운드 API",
    "description": "배틀그라운드 게임 데이터, 플레이어 통계, 매치 분석",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developer.pubg.com/",
    "provider": "Unknown"
  },
  {
    "id": "documenter-getpostman-com-view-4028519-2s9y5yrhp4",
    "category": "게임/엔터테인먼트",
    "name": "펄어비스 Black Desert API",
    "description": "검은사막 게임 정보 및 캐릭터 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://documenter.getpostman.com/view/4028519/2s9Y5YRhp4",
    "provider": "Unknown"
  },
  {
    "id": "developers-neople-co-kr",
    "category": "게임/엔터테인먼트",
    "name": "Neople API",
    "description": "던전앤파이터 게임 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.neople.co.kr/",
    "provider": "Unknown"
  },
  {
    "id": "developer-riotgames-com-apis",
    "category": "게임/엔터테인먼트",
    "name": "Riot Games API",
    "description": "롤, 발로란트 등 라이엇 게임 데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developer.riotgames.com/apis",
    "provider": "Unknown"
  },
  {
    "id": "chzzk-gitbook-io-chzzk",
    "category": "미디어/콘텐츠",
    "name": "네이버 치지직 API",
    "description": "네이버 라이브 스트리밍 플랫폼",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://chzzk.gitbook.io/chzzk",
    "provider": "Naver"
  },
  {
    "id": "news-deepsearch-com",
    "category": "미디어/콘텐츠",
    "name": "딥서치 뉴스 API",
    "description": "국내 150개, 해외 50개 언론사의 뉴스를 수집",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://news.deepsearch.com",
    "provider": "Unknown"
  },
  {
    "id": "kmas-or-kr-guide-openapi",
    "category": "미디어/콘텐츠",
    "name": "만화규장각",
    "description": "최신의 만화/웹툰/작가 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.kmas.or.kr/guide/openapi",
    "provider": "Gov"
  },
  {
    "id": "kobis-or-kr-kobisopenapi-homepg-main-main-do",
    "category": "미디어/콘텐츠",
    "name": "영화진흥위원회 KOBIS",
    "description": "박스오피스, 영화정보, 영화사정보, 영화인정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do",
    "provider": "Gov"
  },
  {
    "id": "kmdb-or-kr-info-api-apidetail-3",
    "category": "미디어/콘텐츠",
    "name": "KMDb 시네마테크KOFA 상영일정",
    "description": "한국영상자료원 상암본원 시네마테크 상영일정 (2002년~현재)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.kmdb.or.kr/info/api/apiDetail/3",
    "provider": "Gov"
  },
  {
    "id": "kmdb-or-kr-info-api-apidetail-6",
    "category": "미디어/콘텐츠",
    "name": "KMDb 영화상세정보",
    "description": "한국영화 제명, 제작년도, 제작사, 크레딧, 줄거리, 장르, 키워드 등 상세정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.kmdb.or.kr/info/api/apiDetail/6",
    "provider": "Gov"
  },
  {
    "id": "developers-afreecatv-com",
    "category": "미디어/콘텐츠",
    "name": "SOOP",
    "description": "SOOP 방송 리스트, 카테고리 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.afreecatv.com/?szWork=openapi",
    "provider": "Unknown"
  },
  {
    "id": "message-gabia-com-api-documentation",
    "category": "소셜/커뮤니케이션",
    "name": "가비아 문자/알림톡 API",
    "description": "SMS, LMS, MMS, 카카오 알림톡 통합 (8개 언어 지원)",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://message.gabia.com/api/documentation/",
    "provider": "Unknown"
  },
  {
    "id": "developers-naver-com-docs-serviceapi-search-blog-blog-md",
    "category": "소셜/커뮤니케이션",
    "name": "네이버 블로그 API",
    "description": "네이버 블로그 포스팅 API",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/serviceapi/search/blog/blog.md",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-login-cafe-api-cafe-api-md",
    "category": "소셜/커뮤니케이션",
    "name": "네이버 카페 API",
    "description": "네이버 카페 글 작성 및 관리",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/login/cafe-api/cafe-api.md",
    "provider": "Naver"
  },
  {
    "id": "developers-line-biz",
    "category": "소셜/커뮤니케이션",
    "name": "라인 API",
    "description": "LINE Login, Messaging API, LINE Pay, LIFF, MINI App",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.line.biz/",
    "provider": "Unknown"
  },
  {
    "id": "sendbird-com-docs",
    "category": "소셜/커뮤니케이션",
    "name": "센드버드 채팅 플랫폼 API",
    "description": "실시간 채팅, 음성/영상 통화, AI 챗봇 기능",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://sendbird.com/docs",
    "provider": "Unknown"
  },
  {
    "id": "support-jandi-com",
    "category": "소셜/커뮤니케이션",
    "name": "잔디(JANDI) 웹훅",
    "description": "외부 서비스 실시간 연동 인커밍 웹훅",
    "auth": "webhook",
    "cors": "Unknown",
    "url": "https://support.jandi.com/",
    "provider": "Unknown"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaotalk-share-common",
    "category": "소셜/커뮤니케이션",
    "name": "카카오톡 공유하기",
    "description": "웹/앱에서 카카오톡으로 콘텐츠 공유",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaotalk-share/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaotalk-message-common",
    "category": "소셜/커뮤니케이션",
    "name": "카카오톡 메시지",
    "description": "카카오톡 텍스트/이미지 메시지 전송",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaotalk-message/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaotalk-channel-common",
    "category": "소셜/커뮤니케이션",
    "name": "카카오톡 채널",
    "description": "메시지 발송, 채널 관리",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaotalk-channel/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-hiworks-com",
    "category": "소셜/커뮤니케이션",
    "name": "하이웍스 API",
    "description": "전자결재, 푸시 알림 기업용 협업 도구",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.hiworks.com/",
    "provider": "Unknown"
  },
  {
    "id": "kepco-co-kr-home-disclosure-pbdata-pbdatasystem-conts-do",
    "category": "에너지",
    "name": "한국전력 전기요금",
    "description": "전기 사용량 및 요금 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.kepco.co.kr/home/disclosure/pbdata/pbdatasystem/conts.do",
    "provider": "Unknown"
  },
  {
    "id": "nl-go-kr-nl-contents-n31101030700-do",
    "category": "과학/연구",
    "name": "국립중앙도서관 OpenAPI",
    "description": "소장자료, 디지털컬렉션 검색",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.nl.go.kr/NL/contents/N31101030700.do",
    "provider": "Gov"
  },
  {
    "id": "archive-much-go-kr-cnts-cont01-page03-do",
    "category": "과학/연구",
    "name": "근현대사 아카이브",
    "description": "박물관 소장품, 역사문화경관, 기록영상 등 근현대사 자료",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://archive.much.go.kr/cnts/cont01/page03.do",
    "provider": "Gov"
  },
  {
    "id": "si-re-kr-content-do",
    "category": "과학/연구",
    "name": "서울연구원 OpenAPI",
    "description": "연구보고서, 정기간행물, 정책리포트 등 연구성과 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.si.re.kr/content.do?key=2411210021",
    "provider": "Unknown"
  },
  {
    "id": "scienceon-kisti-re-kr-apigateway-api-main-mainform-do",
    "category": "과학/연구",
    "name": "한국과학기술정보연구원 KISTI",
    "description": "과학기술 정보 및 연구데이터",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://scienceon.kisti.re.kr/apigateway/api/main/mainForm.do",
    "provider": "Unknown"
  },
  {
    "id": "api-dbpia-co-kr-openapi-index-do",
    "category": "과학/연구",
    "name": "DBpia API",
    "description": "학술논문 검색 (기관 라이선스)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://api.dbpia.co.kr/openApi/index.do",
    "provider": "Unknown"
  },
  {
    "id": "developers-worksmobile-com-kr",
    "category": "기업/비즈니스",
    "name": "네이버웍스 API",
    "description": "Bot 사용, 조직 및 그룹 관리, 파일 업로드/다운로드 외 다양한 기능과 리소스",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.worksmobile.com/kr",
    "provider": "Naver"
  },
  {
    "id": "bizno-net-openapi",
    "category": "기업/비즈니스",
    "name": "비즈노 API",
    "description": "사업자등록번호, 상호명으로 사업자정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://bizno.net/openapi",
    "provider": "Unknown"
  },
  {
    "id": "developer-samsung-com-knox",
    "category": "기업/비즈니스",
    "name": "삼성 녹스 API",
    "description": "기업용 모바일 보안 및 관리 솔루션",
    "auth": "Partnership",
    "cors": "Unknown",
    "url": "https://developer.samsung.com/knox",
    "provider": "Samsung"
  },
  {
    "id": "help-airbridge-io-ko-references-introduction",
    "category": "기업/비즈니스",
    "name": "에어브릿지 API",
    "description": "모바일 앱 마케팅 어트리뷰션 (다중 플랫폼 SDK)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://help.airbridge.io/ko/references/introduction",
    "provider": "Unknown"
  },
  {
    "id": "smes-go-kr-main-dbcnrs",
    "category": "기업/비즈니스",
    "name": "중소벤처기업부 기업정보",
    "description": "중소기업 지원정책 및 사업정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.smes.go.kr/main/dbCnrs",
    "provider": "Gov"
  },
  {
    "id": "codef-io",
    "category": "기업/비즈니스",
    "name": "CODEF 오픈API",
    "description": "금융, 보험, 통신, 공공기관 스크래핑 API",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://codef.io/",
    "provider": "Unknown"
  },
  {
    "id": "cloud-gabia-com",
    "category": "클라우드",
    "name": "가비아 g클라우드",
    "description": "CSAP 인증 중소기업 친화적 클라우드",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://cloud.gabia.com/",
    "provider": "Unknown"
  },
  {
    "id": "api-ncloud-docs-com-docs-common-ncpapi",
    "category": "클라우드",
    "name": "네이버 클라우드 플랫폼",
    "description": "종합 클라우드 서비스 (AI, Maps, SMS, Object Storage)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://api.ncloud-docs.com/docs/common-ncpapi",
    "provider": "Naver"
  },
  {
    "id": "cloud-kt-com",
    "category": "클라우드",
    "name": "KT Cloud API",
    "description": "공공/금융/제조업 특화 클라우드 (NPU 지원)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://cloud.kt.com/",
    "provider": "KT"
  },
  {
    "id": "docs-nodit-io",
    "category": "블록체인",
    "name": "두나무 노딧 API",
    "description": "블록체인 개발 플랫폼 및 인프라 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://docs.nodit.io/",
    "provider": "Unknown"
  },
  {
    "id": "docs-kaia-io",
    "category": "블록체인",
    "name": "카이아(KAIA) API",
    "description": "클레이튼+핀시아 통합 블록체인 (라인 메신저 연동)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://docs.kaia.io/",
    "provider": "Unknown"
  },
  {
    "id": "docs-klaytnapi-com",
    "category": "블록체인",
    "name": "클레이튼 KAS",
    "description": "노드 운영 없는 블록체인 개발 서비스",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://docs.klaytnapi.com/",
    "provider": "Unknown"
  },
  {
    "id": "developer-smartthings-com-docs-api-public",
    "category": "IoT/스마트홈",
    "name": "삼성 SmartThings API",
    "description": "스마트홈 기기 제어, 자동화(룰), 장소 관리, 사용자·기기 정보 조회",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developer.smartthings.com/docs/api/public",
    "provider": "Samsung"
  },
  {
    "id": "smartsolution-developer-lge-com-ko-apimanage-thinq-connect",
    "category": "IoT/스마트홈",
    "name": "LG ThinQ API",
    "description": "AI 가전 제어 및 상업용 설비 관리",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://smartsolution.developer.lge.com/ko/apiManage/thinq_connect?s=1755605653897",
    "provider": "LG"
  },
  {
    "id": "apidocs-bithumb-com",
    "category": "암호화폐",
    "name": "빗썸 프로 API",
    "description": "전문 거래자용 암호화폐 거래 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://apidocs.bithumb.com/",
    "provider": "Unknown"
  },
  {
    "id": "docs-upbit-com-kr",
    "category": "암호화폐",
    "name": "업비트 Open API",
    "description": "국내 최대 암호화폐 거래소 API (JWT 인증)",
    "auth": "JWT",
    "cors": "Unknown",
    "url": "https://docs.upbit.com/kr",
    "provider": "Unknown"
  },
  {
    "id": "docs-coinone-co-kr",
    "category": "암호화폐",
    "name": "코인원 Open API",
    "description": "가상자산 거래 및 시세정보 API",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://docs.coinone.co.kr/",
    "provider": "Unknown"
  },
  {
    "id": "open-law-go-kr-lso-openapi-guideresult-do",
    "category": "법률",
    "name": "국가법령정보 Open API",
    "description": "대한민국 현행 법령 목록과 조문 정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://open.law.go.kr/LSO/openApi/guideResult.do?htmlName=lsNwListGuide",
    "provider": "Gov"
  },
  {
    "id": "bigdata-policing-kr-page-openapi",
    "category": "보안",
    "name": "지란지교 악성행위 IP API",
    "description": "피싱/악성코드 IP 주소 정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.bigdata-policing.kr/page/openapi",
    "provider": "Unknown"
  },
  {
    "id": "data-go-kr-data-15094277-openapi-do",
    "category": "보안",
    "name": "WHOIS 도메인/IP 정보 API",
    "description": ".kr 도메인과 IP 주소 WHOIS 정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15094277/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "safemap-go-kr-opna-data-datalistrenew-do",
    "category": "공공안전",
    "name": "생활안전정보",
    "description": "범죄발생현황, 교통사고, 화재, 생활안전시설 위치정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://safemap.go.kr/opna/data/dataListRenew.do",
    "provider": "Gov"
  },
  {
    "id": "nfa-go-kr-nfa-releaseinformation-0011-0001",
    "category": "공공안전",
    "name": "소방청 공공데이터",
    "description": "화재정보, 구급출동, 소방시설 위치 등 소방안전정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.nfa.go.kr/nfa/releaseinformation/0011/0001/",
    "provider": "Gov"
  },
  {
    "id": "safe182-go-kr-home-api-guidemain-do",
    "category": "공공안전",
    "name": "안전드림 실종/안전 API",
    "description": "실종자 정보 및 생활안전 정보 제공 (경찰청)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.safe182.go.kr/home/api/guideMain.do",
    "provider": "Gov"
  },
  {
    "id": "safetydata-go-kr-disaster-data-list2",
    "category": "공공안전",
    "name": "재난안전데이터 공유플랫폼",
    "description": "재난 발생 현황, 피해 통계, 안전 관련 등 재난안전정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.safetydata.go.kr/disaster-data/list2",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15098526-openapi-do",
    "category": "항공",
    "name": "국내항공운항정보 API",
    "description": "국내선 항공편 운항 일정 조회 (국토부)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15098526/openapi.do?recommendDataYn=Y",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15095074-openapi-do",
    "category": "항공",
    "name": "인천공항 여객운항 현황 API",
    "description": "인천공항 항공편 출도착 현황 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15095074/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15000126-openapi-do",
    "category": "항공",
    "name": "항공기 운항정보 API",
    "description": "국내 공항 항공편 실시간 운항정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15000126/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-data-15126268-openapi-do",
    "category": "물류인프라",
    "name": "관세청 화물통관정보 API",
    "description": "수출입 화물 통관 진행 상황 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/15126268/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "logi-spot-com-eb-a1-9c-ec-a7-80-ec-8a-a4-ed-8c-9f-open-api-e",
    "category": "물류인프라",
    "name": "로지스팟 물류 Open API",
    "description": "통합 물류관리 API (운송배차, 차량정보, 정산)",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://logi-spot.com/%EB%A1%9C%EC%A7%80%EC%8A%A4%ED%8C%9F-open-api-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%ED%99%9C%EC%9A%A9-%EB%B0%A9%EB%B2%95/",
    "provider": "Unknown"
  },
  {
    "id": "data-go-kr-data-3048029-openapi-do",
    "category": "물류인프라",
    "name": "물류창고업 등록정보 API",
    "description": "전국 물류창고 업체 현황 정보 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/data/3048029/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "mtisopenapi-komsa-or-kr",
    "category": "물류인프라",
    "name": "KOMSA MTIS Open API",
    "description": "연안여객선 운항 일정·통계·제원 및 안전 정보 제공",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://mtisopenapi.komsa.or.kr/",
    "provider": "Gov"
  },
  {
    "id": "naas-go-kr-01-commu-commu-minwon-do",
    "category": "농업/수산",
    "name": "국립농업과학원 토양환경정보 Open API",
    "description": "지번 코드(PNU) 또는 법정동 코드를 통해 지역별 토양 화학성 등 상세 토양특성 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.naas.go.kr/01_commu/Commu_Minwon.do?menu_code=0&tg=5&mmode=21",
    "provider": "Gov"
  },
  {
    "id": "nifs-go-kr-openapi-actionopenapiinfolist-do",
    "category": "농업/수산",
    "name": "국립수산과학원",
    "description": "해양환경 및 수산정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.nifs.go.kr/openApi/actionOpenapiInfoList.do",
    "provider": "Gov"
  },
  {
    "id": "koreanfood-rda-go-kr-kfi-openapi-usenewguidance",
    "category": "농업/수산",
    "name": "농식품올바로",
    "description": "농산물성분, 농산물효능 등 다양한 농산물 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://koreanfood.rda.go.kr/kfi/openapi/useNewGuidance",
    "provider": "Gov"
  },
  {
    "id": "nongsaro-go-kr-portal-ps-psz-psza-contentmain-ps",
    "category": "농업/수산",
    "name": "농촌진흥청 농사로 Open API",
    "description": "작목별 농업기술, 주간농사정보, 병해충 방제정보 등 다양한 농업 기술정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.nongsaro.go.kr/portal/ps/psz/psza/contentMain.ps?menuId=PS00191",
    "provider": "Gov"
  },
  {
    "id": "opinet-co-kr-user-custapi-custapiinfo-do",
    "category": "생활경제",
    "name": "주유소 가격 정보",
    "description": "전국 주유소 휘발유/경유 가격",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.opinet.co.kr/user/custapi/custApiInfo.do",
    "provider": "Unknown"
  },
  {
    "id": "data-gg-go-kr-portal-data-service-selectservicepage-do",
    "category": "생활경제",
    "name": "지역화폐 가맹점 현황",
    "description": "경기도 각 시군의 지역화폐 가맹점 현황",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://data.gg.go.kr/portal/data/service/selectServicePage.do?infId=3NPA52LBMO36CQEQ1GMY28894927&infSeq=1",
    "provider": "Gov"
  },
  {
    "id": "data-go-kr-dataset-3043385-openapi-do",
    "category": "생활경제",
    "name": "한국소비자원 참가격",
    "description": "생필품 가격 정보 실시간 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.data.go.kr/dataset/3043385/openapi.do",
    "provider": "Gov"
  },
  {
    "id": "openfiscaldata-go-kr-op-ko-ds-uopkodsa06",
    "category": "정부/공공기관",
    "name": "열린재정 재정정보공개시스템",
    "description": "국가 및 지방재정 예산/결산, 보조금, 국고보조사업 정보",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://www.openfiscaldata.go.kr/op/ko/ds/UOPKODSA06",
    "provider": "Gov"
  },
  {
    "id": "developers-naver-com-docs-share-navershare",
    "category": "기업/비즈니스",
    "name": "공유하기",
    "description": "네이버 블로그, 카페 공유하기",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/share/navershare/",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-products-service-api-search-search-md",
    "category": "기업/비즈니스",
    "name": "네이버 검색",
    "description": "블로그, 이미지, 웹, 뉴스, 백과사전 등 검색",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/products/service-api/search/search.md",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-products-login-api",
    "category": "기업/비즈니스",
    "name": "네이버 로그인",
    "description": "네이버 아이디로 로그인 및 프로필 조회",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.naver.com/products/login/api/",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-login-calendar-api-calendar-api-md",
    "category": "기업/비즈니스",
    "name": "네이버 캘린더",
    "description": "사용자 캘린더 일정 추가",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/login/calendar-api/calendar-api.md",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-utils-shortenurl",
    "category": "기업/비즈니스",
    "name": "단축URL",
    "description": "URL을 me2.do 형태로 단축",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/utils/shortenurl/",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-serviceapi-datalab-search-search-m",
    "category": "기업/비즈니스",
    "name": "데이터랩 검색어트렌드",
    "description": "통합검색어 트렌드 조회",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/serviceapi/datalab/search/search.md",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-utils-scaptcha-overview",
    "category": "기업/비즈니스",
    "name": "음성 캡차",
    "description": "자동 입력 방지용 음성 보안",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/utils/scaptcha/overview/",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-utils-captcha-overview",
    "category": "기업/비즈니스",
    "name": "캡차 이미지",
    "description": "자동 입력 방지용 보안 이미지 생성",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/utils/captcha/overview/",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-docs-papago-readme-md",
    "category": "기업/비즈니스",
    "name": "파파고 번역",
    "description": "인공신경망 기반 기계 번역",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/docs/papago/README.md",
    "provider": "Naver"
  },
  {
    "id": "developers-naver-com-products-clova-face",
    "category": "기업/비즈니스",
    "name": "CLOVA 얼굴인식",
    "description": "얼굴윤곽/부위/표정/유명인 닮음도 분석",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.naver.com/products/clova/face/",
    "provider": "Naver"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-daum-search-common",
    "category": "기업/비즈니스",
    "name": "카카오 검색",
    "description": "웹, 이미지, 동영상, 블로그 검색",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/daum-search/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaologin-common",
    "category": "기업/비즈니스",
    "name": "카카오 로그인",
    "description": "카카오 계정으로 로그인 및 사용자 관리",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaologin/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaonavi-common",
    "category": "기업/비즈니스",
    "name": "카카오내비",
    "description": "카카오내비 길찾기 연동",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaonavi/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-message-common",
    "category": "기업/비즈니스",
    "name": "카카오링크",
    "description": "앱/웹에서 카카오톡으로 메시지 전송",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/message/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-local-common",
    "category": "기업/비즈니스",
    "name": "카카오맵",
    "description": "지도 표시, 장소 검색, 좌표 변환",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/local/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaomoment-reference",
    "category": "기업/비즈니스",
    "name": "카카오모먼트",
    "description": "모바일 광고 플랫폼",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaomoment/reference",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaotalk-message-rest-a",
    "category": "기업/비즈니스",
    "name": "카카오톡 메시지",
    "description": "나에게 보내기, 친구에게 보내기",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaotalk-message/rest-api",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-kakaotalk-social-common",
    "category": "기업/비즈니스",
    "name": "카카오톡 친구",
    "description": "카카오톡 친구 목록 및 소셜 기능",
    "auth": "OAuth",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/kakaotalk-social/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakaopay-com-docs-payment-online-common",
    "category": "기업/비즈니스",
    "name": "카카오페이",
    "description": "간편결제 및 정기결제",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "http://developers.kakaopay.com/docs/payment/online/common",
    "provider": "Kakao"
  },
  {
    "id": "developers-kakao-com-docs-latest-ko-push-common",
    "category": "기업/비즈니스",
    "name": "푸시 알림",
    "description": "앱 푸시 알림 발송",
    "auth": "ApiKey",
    "cors": "Unknown",
    "url": "https://developers.kakao.com/docs/latest/ko/push/common",
    "provider": "Kakao"
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
