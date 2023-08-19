'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import checkDisabled from '../public/check-disabled.svg';
import checkEnabled from '../public/check-enabled.svg';

const uppercaseRegExp = /(?=.*?[A-Z])/;
const lowercaseRegExp = /(?=.*?[a-z])/;
const digitsRegExp = /(?=.*?[0-9])/;
const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
const minLengthRegExp = /.{8,}/;

const schema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .required()
    .matches(minLengthRegExp, 'Longer than 8 characters')
    .matches(uppercaseRegExp, 'Have at least one uppercase letter')
    .matches(lowercaseRegExp, 'Have at least one lowercase letter')
    .matches(digitsRegExp, 'Have at least one number')
    .matches(
      specialCharRegExp,
      'Have at least one special character (!@#$...etc)',
    ),
});

type Inputs = {
  password: string;
};

export default function Home() {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: { password: '' },
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const matches = (errors.password?.types?.matches as string[]) || [];

  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="absolute left-[12px] top-[-8px] z-[1] bg-[#181818] px-[4px] text-[12px] text-[#fff]"
      >
        Password
      </label>
      <input
        {...register('password')}
        id="password"
        name="password"
        className="w-[335px] rounded-[8px] border-[3px] border-solid border-[#FFFFFF80] bg-transparent px-[12px] py-[16px] text-[16px] text-[#fff] placeholder:opacity-[.3] hover:border-[#ffffff] focus:border-[#00A3FF] focus-visible:outline-none"
        type="password"
        placeholder="Password"
      />

      <ul className="mt-[20px] w-[335px] rounded-[8px] bg-[#242424] px-[12px] py-[8px]">
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={
              !matches.includes('Have at least one uppercase letter')
                ? checkEnabled
                : checkDisabled
            }
          />
          Have at least one uppercase letter
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={
              !matches.includes('Have at least one lowercase letter')
                ? checkEnabled
                : checkDisabled
            }
          />
          Have at least one lowercase letter
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={
              !matches.includes('Have at least one number')
                ? checkEnabled
                : checkDisabled
            }
          />
          Have at least one number
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={
              !matches.includes(
                'Have at least one special character (!@#$...etc)',
              )
                ? checkEnabled
                : checkDisabled
            }
          />
          Have at least one special character (!@#$...etc)
        </li>
        <li className="flex py-[9.5px]">
          <Image
            className="mr-[12px]"
            alt="check icon enabled"
            src={
              !matches.includes('Longer than 8 characters')
                ? checkEnabled
                : checkDisabled
            }
          />
          Longer than 8 characters
        </li>
      </ul>
    </div>
  );
}
