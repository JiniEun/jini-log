// components/CodeBlock.tsx
import CodeBlock from "@components/codeBlock/CodeBlock";

const codeSample = `
function welcome() {
  console.log("Welcome to Jini-log 🚀");
}

welcome();

// Life.log("Curious about the world. Learning every day.");
// Life.log("Building things that matter.");
// Life.log("Better version of me.");
`;

const CodeGround = () => {
  return (
      <div className={"m-8"}>
        <CodeBlock code={codeSample} filename="welcome.js"/>
      </div>
  );
};

export default CodeGround;
