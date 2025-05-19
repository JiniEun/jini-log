import Tag from "@components/tag/Tag";

const tags = [
  // 지속 가능한 개발과 성장에 관심이 많은
  "Always Learning",
  "지속 가능한 개발",
  "매일 조금씩 성장 중",
  "깊이 있는 성장을 추구하는",
  "비즈니스와 함께 성장하는",
  "완벽보다 지속 가능하게",
  "장기적 성장을 중요시하는",
  "변화는 언제나 웰컴",
  "도전은 습관",

  // 이슈, 버그 대응에 관심이 많고 유능한
  "Detail Matters",
  "이슈 해결에 진심인",
  "버그를 기회로 보는",
  "에러메시지로부터 배우는",
  "문제 해결에 집중하는",

  // 함께 하는 개발자
  "함께 성장하는 개발을 지향하는",
  "코드 리뷰는 서로를 위한 예의",
  "팀워크를 중요시하는",
  "협업으로 더 나은 코드를 만드는"
];

const selectedTags = ["매일 조금씩 성장 중", "이슈 해결에 진심인", "완벽보다 지속 가능하게"];

const HomeContent = () => {

  return (
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around p-8 gap-8">
        {/* 왼쪽 소개 텍스트 */}
        <div className="max-w-sm text-center lg:text-left mr-16">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight text-[#80C4E9]">
            사람을 위한 기술,<br/>
            의미 있는 결과물을 위해 <br/>
            매일 조금씩 성장하고 있습니다.
          </h1>
        </div>

        {/* 오른쪽 태그 영역 */}
        <div className="text-right w-full px-4">
          {tags.map((tag) => (
              <Tag key={tag} selected={selectedTags.includes(tag)}>{tag}</Tag>
          ))}
        </div>

      </div>
  );
};

export default HomeContent;
