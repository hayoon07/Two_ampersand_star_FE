import React, { useState } from 'react';

function Signup() {
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    marketing: false
  });

  const handleAllCheck = () => {
    const newValue = !agreements.all;
    setAgreements({
      all: newValue,
      terms: newValue,
      privacy: newValue,
      marketing: newValue
    });
  };

  const handleSingleCheck = (key) => {
    const newAgreements = {
      ...agreements,
      [key]: !agreements[key]
    };
    
    const allChecked = Object.keys(newAgreements)
      .filter(k => k !== 'all')
      .every(k => newAgreements[k]);
    
    setAgreements({
      ...newAgreements,
      all: allChecked
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-white">
      <h1 className="mb-16 text-2xl font-medium">회원가입</h1>

      <div className="w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="이메일"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5]"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5]"
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5]"
        />
        <input
          type="text"
          placeholder="닉네임"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5]"
        />

        <div className="flex gap-4">
          <select className="flex-1 p-4 rounded-lg outline-none bg-[#F5F5F5] text-gray-500">
            <option>도시</option>
          </select>
          <select className="flex-1 p-4 rounded-lg outline-none bg-[#F5F5F5] text-gray-500">
            <option>시·군·구</option>
          </select>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between cursor-pointer" onClick={handleAllCheck}>
            <span className="text-[#A7ADB1] text-lg font-light">아래 약관을 모두 동의합니다.</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              agreements.all ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              {agreements.all && <span className="text-sm text-white">✓</span>}
            </div>
          </div>

          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleSingleCheck('terms')}>
            <span className="text-[#A7ADB1] font-light text-medium border-b border-gray-300 ">이용약관 동의 (필수)</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              agreements.terms ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              {agreements.terms && <span className="text-sm text-white">✓</span>}
            </div>
          </div>

          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleSingleCheck('privacy')}>
            <span className="text-[#A7ADB1] font-light text-medium border-b border-gray-300 ">개인정보 수집 이용 동의 (필수)</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              agreements.privacy ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              {agreements.privacy && <span className="text-sm text-white">✓</span>}
            </div>
          </div>

          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleSingleCheck('marketing')}>
            <span className="text-[#A7ADB1] font-light text-medium border-b border-gray-300 ">혜택 | 이벤트 광고 수신 (선택)</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              agreements.marketing ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              {agreements.marketing && <span className="text-sm text-white">✓</span>}
            </div>
          </div>
        </div>

        <button className="w-full p-4 bg-[#B4FFE3] text-[#12918E] rounded-lg text-lg font-medium mt-6">
          가입하기
        </button>
      </div>
    </div>
  );
}

export default Signup;