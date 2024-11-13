import Image from "next/image";

// Define the type for props
interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <div className={`w-[1240px] flex flex-col items-end justify-start gap-[26px] max-w-full text-right text-base text-shades-white font-manrope ${className}`}>
      <div className="self-stretch flex flex-row items-start justify-end gap-6 z-[2] mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Image
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] rounded overflow-hidden shrink-0 z-[1]"
            alt="Facebook Icon"
            src="/images/imgFacebook.svg"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Image
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 z-[1]"
            alt="LinkedIn Icon"
            src="/images/imgLinkedIn.svg"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Image
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 z-[1]"
            alt="YouTube Icon"
            src="/images/imgYouTube.svg"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Image
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 z-[1]"
            alt="Instagram Icon"
            src="/images/imgInstagram.svg"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="relative leading-[24px] inline-block max-w-full z-[2]">
        <span className="font-medium">{`© 2024 `}</span>
        <b>CodeVast</b>
        <span className="font-medium">. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
