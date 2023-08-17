import Image from 'next/image';
import checkDisabled from '../public/check-disabled.svg';
import checkEnabled from '../public/check-enabled.svg';

export default function Home() {
  return (
    <div className="relative">
      <label
        htmlFor="pwd"
        className="absolute left-[12px] top-[-8px] z-[1] bg-[#181818] px-[4px] text-[12px] text-[#fff]"
      >
        Password
      </label>
      <input
        id="pwd"
        name="pwd"
        className="w-[335px] rounded-[8px] border-[3px] border-solid border-[#FFFFFF80] bg-transparent px-[12px] py-[16px] text-[16px] text-[#fff] placeholder:opacity-[.3] hover:border-[#ffffff] focus:border-[#00A3FF] focus-visible:outline-none"
        type="password"
        placeholder="Password"
      />

      <ul className="mt-[20px] w-[335px] rounded-[8px] bg-[#242424] px-[12px] py-[8px]">
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={checkEnabled}
          />
          Have at least one uppercase letter
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={checkDisabled}
          />
          Have at least one lowercase letter
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={checkDisabled}
          />
          Have at least one number
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={checkDisabled}
          />
          Have at least one special character (!@#$...etc)
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={checkDisabled}
          />
          Longer than 8 characters
        </li>
      </ul>
    </div>
  );
}
