import rectangle1 from "./rectangle-1.png";

interface Props {
  className?: string;
}

const Desktop = ({ className }: Props) => {
  return (
    <div
      className={`relative top-1.5 left-0 w-[1440px] h-[1024px] flex flex-col bg-white ${className}`}
    >
      <img
        className="w-[1440px] h-[602px] object-cover"
        alt="Rectangle"
        src={rectangle1}
      />

      <div className="ml-[46px] w-64 h-[77px] mt-[35px] text-[64px] font-inter text-black tracking-[0] leading-[normal]">
        タイトル
      </div>

      <div className="ml-36 w-[1151px] h-24 mt-[67px] text-[40px] font-inter text-black tracking-[0] leading-[normal]">
        本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
      </div>
    </div>
  );
};

export default Desktop;