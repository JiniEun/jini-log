// payload/experience.ts
import {Experience} from "@/payload/types";

export const experiences: Experience[] = [
  {
    company: '롯데 e커머스(롯데ON)',
    companySummary: '롯데쇼핑 통합 e커머스 플랫폼',
    position: 'Product개발팀, 정직원',
    description: [
      'MSA 기반의 이커머스 플랫폼에서 상품 상세 도메인을 담당하고 있으며,\nJava, Spring, MyBatis, MySQL, Elasticsearch, Redis, GitLab, Grafana 등 다양한 기술을 활용해 안정적이고 확장 가능한 서비스를 개발하고 있습니다.',
      '상품 상세 영역은 사용자가 실제로 상품을 이해하고 구매로 이어지는 핵심 접점이기 때문에,\n정확한 정보 전달, 빠른 응답 속도, 유연한 확장성 등을 고려한 시스템 설계를 목표로 하고 있습니다.',
      '기획 단계부터 적극적으로 참여하여 도메인 요구사항을 반영하고,\n타 부서와의 원활한 협업을 통해 프로덕트 완성도를 높이고 있습니다.',
      '또한 개발 아티클 작성과 개발 세미나 코드 리뷰 문화를 통해 팀 전체의 기술 역량 향상과 건강한 개발 문화를 함께 만들어가고 있습니다.',
      '개발 세미나를 통해, 기술적인 내용과 개발 프로세스에 대한 깊은 이해를 나누고 동료들과 지식을 공유한 바 있습니다.'
    ],
    location: '서울',
    projects: [
      {
        title: '상품 이미지, 기술서 실시간 처리 서버 내재화',
        startDate: '2024.06',
        endDate: '2024.12',
        summary: '상품 상세 페이지의 이미지 및 기술서 정보를 실시간으로 처리하는 서버를 내재화하여, 외부 의존성을 줄이고 안정성을 높였습니다.',
        description: [
          'Node.js 기반 API 서버 개발',
          'MySQL, Redis를 이용한 데이터 처리',
        ],
        techStack: ['Node.js', 'MySQL', 'Redis']
      },
      {
        title: '상품상세 담당',
        startDate: '2023.07',
        endDate: '현재',
        description: [
          'Spring Boot 기반 상품상세 모듈 리팩토링 및 장애 대응',
          '토스 페이먼츠 연동 및 결제 실패 롤백 처리',
        ],
        techStack: ['Java', 'Spring Boot', 'Toss Payments']
      }
    ]
  }
];
