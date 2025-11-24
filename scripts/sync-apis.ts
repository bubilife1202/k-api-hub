
import fs from 'fs';
import path from 'path';

// Define the target URL and output path
const README_URL = 'https://raw.githubusercontent.com/yybmion/public-apis-4Kr/main/README.md';
const OUTPUT_PATH = path.join(process.cwd(), 'data', 'apis.ts');

// Define the Category Type (Union Type)
const CATEGORIES = [
  '정부/공공기관', '지도/위치', '금융/결제', '통신사', '교통',
  '날씨/환경', '의료/건강', '교육', '부동산', '문화/관광',
  '통계/데이터', '인공지능', '쇼핑/커머스', '배송/물류',
  '음식/음료', '게임/엔터테인먼트', '미디어/콘텐츠', '소셜/커뮤니케이션',
  '에너지', '과학/연구', '기업/비즈니스', '클라우드', '블록체인',
  'IoT/스마트홈', '메시징', '암호화폐', '법률', '보안',
  '공공안전', '항공', '물류인프라', '농업/수산', '생활경제'
] as const;

type Category = typeof CATEGORIES[number];

// Mapping from Upstream Headers to Our Categories
const CATEGORY_MAP: Record<string, Category> = {
  '정부 & 공공기관': '정부/공공기관',
  '지도 & 위치': '지도/위치',
  '금융 & 결제': '금융/결제',
  '통신사': '통신사',
  '교통': '교통',
  '날씨 & 환경': '날씨/환경',
  '의료 & 보건': '의료/건강',
  '교육': '교육',
  '부동산': '부동산',
  '문화 & 관광': '문화/관광',
  '통계 & 데이터': '통계/데이터',
  'AI & 머신러닝': '인공지능',
  '쇼핑 & 이커머스': '쇼핑/커머스',
  '배송 & 물류': '배송/물류',
  '음식 & 음료': '음식/음료',
  '게임 & 엔터테인먼트': '게임/엔터테인먼트',
  '미디어 & 콘텐츠': '미디어/콘텐츠',
  '소셜 & 커뮤니케이션': '소셜/커뮤니케이션',
  '에너지 & 전력': '에너지',
  '과학 & 연구': '과학/연구',
  '비즈니스 & 기업': '기업/비즈니스',
  '클라우드 서비스': '클라우드',
  '블록체인': '블록체인',
  'IoT & 스마트홈': 'IoT/스마트홈',
  '커뮤니케이션 & 메시징': '메시징',
  '암호화폐 거래소': '암호화폐',
  '법률': '법률',
  '보안': '보안',
  '공공안전': '공공안전',
  '항공': '항공',
  '물류 인프라 & 통관': '물류인프라',
  '농수산': '농업/수산',
  '생활경제': '생활경제',
  '재정 & 예산': '정부/공공기관',
  '네이버': '기업/비즈니스' as any,
  '카카오': '기업/비즈니스' as any,
};

interface ApiItem {
  id: string;
  category: Category;
  name: string;
  description: string;
  auth: 'ApiKey' | 'OAuth' | 'Open' | 'None' | 'JWT' | 'Partnership' | 'Bearer Token' | 'webhook';
  cors: 'Yes' | 'No' | 'Unknown';
  url: string;
  provider: string;
}

async function fetchReadme(): Promise<string> {
  const response = await fetch(README_URL);
  if (!response.ok) throw new Error(`Failed to fetch README: ${response.statusText}`);
  return await response.text();
}

// Improved ID generation using URL
function generateId(url: string, name: string): string {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace(/^www\./, '');
    const path = urlObj.pathname.replace(/\//g, '-');
    const id = `${domain}${path}`.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

    if (id.length < 3) throw new Error('ID too short');
    return id.substring(0, 60);
  } catch (e) {
    // Fallback to name-based ID if URL is invalid or generic
    return 'api-' + Math.random().toString(36).substring(2, 10);
  }
}

function inferProvider(name: string, url: string): string {
  const lowerName = name.toLowerCase();
  const lowerUrl = url.toLowerCase();

  if (lowerName.includes('네이버') || lowerUrl.includes('naver')) return 'Naver';
  if (lowerName.includes('카카오') || lowerUrl.includes('kakao')) return 'Kakao';
  if (lowerName.includes('구글') || lowerUrl.includes('google')) return 'Google';
  if (lowerName.includes('삼성') || lowerUrl.includes('samsung')) return 'Samsung';
  if (lowerName.includes('sk') || lowerUrl.includes('sk.com')) return 'SK';
  if (lowerName.includes('kt') || lowerUrl.includes('kt.com')) return 'KT';
  if (lowerName.includes('lg')) return 'LG';
  if (lowerUrl.includes('go.kr') || lowerUrl.includes('or.kr') || lowerUrl.includes('.seoul.kr')) return 'Gov';
  return 'Unknown';
}

function cleanText(text: string): string {
  return text.replace(/<br\s*\/?>/gi, ' ').replace(/`/g, '').trim();
}

async function main() {
  console.log('Fetching README...');
  const markdown = await fetchReadme();

  const lines = markdown.split('\n');
  const apis: ApiItem[] = [];
  let currentCategory: Category | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Header Detection
    if (trimmedLine.startsWith('### ')) {
      const headerTitle = trimmedLine.replace(/^###\s+/, '').trim();
      const cleanHeader = headerTitle.replace(/<img[^>]*>/g, '').trim();

      if (CATEGORY_MAP[cleanHeader]) {
        currentCategory = CATEGORY_MAP[cleanHeader];
      } else {
        // console.log(`Skipping header: ${cleanHeader}`);
        // If header is not in map, reset category to avoid misclassification
        currentCategory = null;
      }
      continue;
    }

    if (!currentCategory) continue;

    // Table Row Detection
    // Must start and end with |
    if (!trimmedLine.startsWith('|') || !trimmedLine.endsWith('|')) continue;

    // Ignore separator lines |---|---|---|
    if (trimmedLine.includes('---')) continue;

    // Split by |
    // Example: | [Name](Url) | Desc | Auth |
    // split('|') -> ["", " [Name](Url) ", " Desc ", " Auth ", ""]
    const columns = trimmedLine.split('|').map(c => c.trim());

    // Remove empty start/end
    if (columns.length < 5) continue; // We expect at least 3 content columns + 2 empty ends

    const apiCol = columns[1];
    const descCol = columns[2];
    const authCol = columns[3];

    // Parse Name/URL from "[Name](Url)"
    const linkMatch = apiCol.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (!linkMatch) continue;

    const name = cleanText(linkMatch[1]);
    const url = linkMatch[2].trim();
    const description = cleanText(descCol);
    let authRaw = cleanText(authCol);

    // Normalize Auth
    let auth: ApiItem['auth'] = 'ApiKey'; // Default
    const lowerAuth = authRaw.toLowerCase();

    if (lowerAuth.includes('oauth')) auth = 'OAuth';
    else if (lowerAuth.includes('jwt')) auth = 'JWT';
    else if (lowerAuth.includes('bearer')) auth = 'Bearer Token';
    else if (lowerAuth.includes('webhook')) auth = 'webhook';
    else if (lowerAuth.includes('partner')) auth = 'Partnership';
    else if (authRaw === '✕' || authRaw === 'X' || lowerAuth === 'none') auth = 'None';
    else if (lowerAuth.includes('apikey')) auth = 'ApiKey';
    else if (authRaw.length === 0) auth = 'None';

    const id = generateId(url, name);

    // Deduplication
    if (apis.some(a => a.id === id || a.url === url || (a.name === name && a.category === currentCategory))) {
      continue;
    }

    apis.push({
      id,
      category: currentCategory,
      name,
      description,
      auth,
      cors: 'Unknown',
      url,
      provider: inferProvider(name, url)
    });
  }

  console.log(`Parsed ${apis.length} APIs.`);

  const fileContent = `export interface ApiItem {
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

export const apis: ApiItem[] = ${JSON.stringify(apis, null, 2)};

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
`;

  fs.writeFileSync(OUTPUT_PATH, fileContent);
  console.log(`Successfully wrote to ${OUTPUT_PATH}`);
}

main().catch(console.error);
