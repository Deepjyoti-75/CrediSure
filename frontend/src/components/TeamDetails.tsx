import React from 'react';
import { ProfileCard } from './ProfileCard';
import { div } from 'framer-motion/client';

export function TeamDetails() {
  return (
    <div className='bg-black flex flex-wrap items-right justify-around p-5'>
      <h1 className='mt-[4rem] font-bold text-5xl'>Meet our Team</h1>
      <ProfileCard name="Nitish Kumar Sah" role="ML Engineer and Backend developer" linkedinUrl="https://www.linkedin.com/in/iamnitishsah/" linkedinUsername="Nitish Kumar" instagramUsername="nitishades" email="iamnitishsah12@gmail.com"/>
      <ProfileCard name="Deepjyoti Ray" role="Frontend Developer " linkedinUrl="https://www.linkedin.com/in/deepjyoti-ray-17ba43257" linkedinUsername="Deepjyoti Ray" instagramUsername="deepjyoti_2005" email="raydeepjyoti.dev@gmail.com"/>
      <ProfileCard name="Aditya Rout" role="Frontend Developer " linkedinUrl="https://www.linkedin.com/in/adityarout2005/" linkedinUsername="Aditya Rout" instagramUsername="aditya_rout" email="adityarout0280@gmail.com"/>
      <ProfileCard name="Ch. Gyaneswar Rao" role="UI/UX Designer" linkedinUrl="http://www.linkedin.com/in/gyaneswar-rao-chindhrada-879b61238" linkedinUsername="Gyaneswar Rao Chindhrada" instagramUsername="ch_gyaneswar" email="chgyaneswar1971@gmail.com"/>
    </div>
  );
};
