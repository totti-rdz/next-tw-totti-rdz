type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => (
  <div className="flex items-center gap-x-1 leading-none text-white text-base bg-[#10aadc] rounded-md px-4 py-3 mr-4 whitespace-nowrap border-[#facc15] border-2">
    {/* <span className="text-white text-lg font-bold leading-none">#</span> */}
    <span>{text}</span>
  </div>
);

export default Tag;
