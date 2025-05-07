interface TagProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export const Tag = ({ children, selected = false, onClick }: TagProps) => {
  return (
      <span
          onClick={onClick}
          className={`inline-block px-4 py-2 m-1 text-center
                text-base lg:text-lg rounded-full font-medium border 
                transition-transform duration-200 transform cursor-pointer
        ${
              selected
                  ? 'bg-[#80C4E9] border-[#80C4E9] text-white'
                  : 'bg-white border-[#80C4E9] text-[#80C4E9] hover:bg-[#80C4E9] hover:text-white'
          }
              hover:scale-105
      `}
      >
      {children}
    </span>
  );
};

export default Tag;