// payload/experience.ts
import {Experience} from "@/payload/types";

export const experiences: Experience[] = [
  {
    company: '롯데 e커머스(롯데ON)',
    companySummary: '롯데쇼핑 통합 e커머스 플랫폼',
    position: 'Product개발팀, 정직원',
    duration: '2022.12 - 재직중',
    description: [
      'MSA 기반의 이커머스 플랫폼에서 상품 상세 도메인을 담당하고 있으며,\nJava, Spring, MyBatis, MySQL, Elasticsearch, Redis, GitLab, Grafana 등 다양한 기술을 활용해 안정적이고 확장 가능한 서비스를 개발하고 있습니다.',
      '상품 상세 영역은 사용자가 실제로 상품을 이해하고 구매로 이어지는 핵심 접점이기 때문에,\n정확한 정보 전달, 빠른 응답 속도, 유연한 확장성 등을 고려한 시스템 설계를 목표로 하고 있습니다.',
      '기획 단계부터 적극적으로 참여하여 도메인 요구사항을 반영하고,\n타 부서와의 원활한 협업을 통해 프로덕트 완성도를 높이고 있습니다.',
      '개발 세미나, 코드 리뷰 문화를 통해, 기술적인 내용과 개발 프로세스에 대한 깊은 이해를 나누고 팀 전체의 기술 역량 향상과 건강한 개발 문화를 함께 만들어가고 있습니다.'
    ],
    location: '서울',
    projects: [
      {
        title: '상품 이미지, 기술서 실시간 처리 서버 내재화',
        startDate: '2024.06',
        endDate: '2024.12',
        summary: '상품 상세 페이지의 이미지 및 기술서 정보를 실시간으로 처리하는 서버를 내재화하여, 외부 의존성을 줄이고 안정성을 높였습니다.',
        description: [
          '외부 이미지 처리 솔루션을 대체하기 위해 서버리스 기반 실시간 이미지 변환 서버 구축',
          'TypeScript + AWS Lambda + S3 + CloudFront 기반 구조 설계 및 운영',
          '비용 약 60% 절감, 구조 최적화로 리소스 사용량 70% 감소',
          '장애 대응을 위한 로깅 및 모니터링 체계 수립 → 운영 이슈 거의 없음'
        ],
        techStack: ['Node.js', 'Typescript', 'AWS Lambda', 'S3', 'CloudFront']
      },
      {
        title: '버티컬 UI/서버 개선 및 신규 서비스 대응과 운영 관리',
        startDate: '2023',
        endDate: '2024',
        summary: '버티컬 UI 및 서버 개선을 통해 신규 서비스에 대한 대응력을 높이고, 사용자 경험을 향상시켰습니다.',
        description: [
          '상품 상세 상단 UI 개편 및 버티컬 헤더 구조 설계',
          '신규 버티컬(온앤더뷰티 / 온앤더패션) 연동 작업 및 서버 API 개선',
          '온앤더뷰티 유입수: 주간 평균 대비 약 36% 증가 (8,938 vs 6,552)',
          '온앤더패션 유입수: 패션위크 제외 시 주간 평균 대비 약 54% 증가 (15,004 vs 9,721)',
          '헤더 로고 클릭수와 유입수 증감 간 추세 유사 → UI 개선의 영향 추정 가능'
        ],
        techStack: ['Java', 'Spring Boot', 'Mysql', 'AWS DynamoDB', 'Redis', 'Vue.js']
      },
      {
        title: 'API 모니터링 고도화를 위한 AOP 기반 로깅 개선',
        startDate: '2024.02',
        endDate: '2024.03',
        summary: 'AOP 기반 로깅 구조를 설계·구현하여, 운영 가시성을 높이고, 개발 효율성 향상에 기여했습니다.',
        description: [
          'AOP 기반 로깅 구조를 설계·구현하여, @Deprecated API 호출 기록을 자동 수집하도록 개선',
          '기존에 관리되지 않던 API 사용 현황을 파악하고, 불필요 API 정리 기반 마련',
          '와탭 기반 통계와 함께 운영 가시성을 높이고, 개발 효율성 향상에 기여',
          '어노테이션 기반 설계로 향후 다양한 조건의 API 모니터링 확장 가능성 확보'
        ],
        techStack: ['Java', 'Spring Boot']
      },
      {
        title: '리뷰/QnA 안정화 및 검색 성능 개선',
        startDate: '2023.02',
        endDate: '2023.07',
        summary: '리뷰 및 QnA 도메인 안정화 및 성능 개선을 통해 사용자 경험을 향상시켰습니다.',
        description: [
          'Elasticsearch 지연 현상 모니터링 및 로직 개선',
          '→ 쿼리 개선 및 서비스 단 파티셔닝 적용 및 tyk 캐싱 처리 분석 및 반영',
          'heic 확장자 이미지 미노출 문제 해결 및 기등록 데이터 일괄 배치 처리',
          '스크린샷 등록 제어 기능 도입 → "상품과 무관한 사진" 신고 건 66% 감소'
        ],
        techStack: ['Java', 'Spring Boot', 'Elasticsearch', 'Vue.js']
      }
    ]
  }
];
