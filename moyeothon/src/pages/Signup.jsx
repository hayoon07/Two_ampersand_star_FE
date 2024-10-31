import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    marketing: false
  });

  const [cityOpen, setCityOpen] = useState(false);
  const [districtOpen, setDistrictOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("도시");
  const [selectedDistrict, setSelectedDistrict] = useState("시·군·구");
  
  const cities = ["서울", "부산", "대구", "인천", "광주", "대전", "울산"];
  const districtsByCity = {
    "서울": ["강남구", "서초구", "송파구", "강동구", "마포구", "용산구", "성동구", "광진구"],
    "부산": ["해운대구", "수영구", "부산진구", "동래구", "남구"],
    "대구": ["중구", "동구", "서구", "남구", "북구"],
    // ... 다른 도시들의 시군구 데이터
  };

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

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedDistrict("시·군·구");
    setCityOpen(false);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setDistrictOpen(false);
  };

  const handleSignup = () => {
    navigate('/mypage');
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-white">
      <h1 className="mb-16 text-2xl font-medium font-family: Pretendard">회원가입</h1>

      <div className="w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="이메일"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5] font-family: Pretendard text-lg"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5] font-family: Pretendard text-lg"
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5] font-family: Pretendard text-lg"
        />
        <input
          type="text"
          placeholder="닉네임"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5] font-family: Pretendard text-lg"
        />

        <div className="flex gap-4">
          <div className="relative flex-1">
            <div 
              onClick={() => setCityOpen(!cityOpen)}
              className="w-full p-4 rounded-lg bg-[#F8F8F8] font-family: Pretendard text-lg cursor-pointer flex justify-between items-center"
            >
              <span className="text-[#A7ADB1]">{selectedCity}</span>
              <IoIosArrowDown 
                className={`transition-transform ${cityOpen ? 'rotate-180' : ''}`} 
                size={28} 
                color="#D1D5D7"
              />
            </div>
            
            {cityOpen && (
              <div className="absolute z-10 w-full mt-2 overflow-y-auto bg-white rounded-lg shadow-lg max-h-48">
                {cities.map((city, index) => (
                  <div 
                    key={index}
                    className="p-4 hover:bg-gray-100 cursor-pointer text-[#666666]"
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative flex-1">
            <div 
              onClick={() => setDistrictOpen(!districtOpen)}
              className="w-full p-4 rounded-lg bg-[#F8F8F8] font-family: Pretendard text-lg cursor-pointer flex justify-between items-center"
            >
              <span className="text-[#A7ADB1]">{selectedDistrict}</span>
              <IoIosArrowDown 
                className={`transition-transform ${districtOpen ? 'rotate-180' : ''}`} 
                size={28} 
                color="#D1D5D7"
              />
            </div>
            
            {districtOpen && (
              <div className="absolute z-10 w-full mt-2 overflow-y-auto bg-white rounded-lg shadow-lg max-h-48">
                {districtsByCity[selectedCity]?.map((district, index) => (
                  <div 
                    key={index}
                    className="p-4 hover:bg-gray-100 cursor-pointer text-[#666666]"
                    onClick={() => handleDistrictSelect(district)}
                  >
                    {district}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between mt-6 mb-4 cursor-pointer" onClick={handleAllCheck}>
            <span className={`text-xl ${
              agreements.all ? 'text-[#48CBC8]' : 'text-[#A7ADB1]'
            }`}>아래 약관을 모두 동의합니다.</span>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
              agreements.all ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              <span className={`text-base font-bold ${agreements.all ? 'text-white' : 'text-gray-300'}`}>✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleSingleCheck('terms')}>
            <span className="text-[#A7ADB1] font-light text-medium border-b border-gray-300">이용약관 동의 (필수)</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              agreements.terms ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              <span className={`text-sm font-bold ${agreements.terms ? 'text-white' : 'text-gray-300'}`}>✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleSingleCheck('privacy')}>
            <span className="text-[#A7ADB1] font-light text-medium border-b border-gray-300">개인정보 수집 이용 동의 (필수)</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              agreements.privacy ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              <span className={`font-family: Pretendard text-sm font-bold ${agreements.privacy ? 'text-white' : 'text-gray-300'}`}>✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleSingleCheck('marketing')}>
            <span className="text-[#A7ADB1] font-family: Pretendard font-light text-medium border-b border-gray-300">혜택 | 이벤트 광고 수신 (선택)</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              agreements.marketing ? 'bg-[#48CBC8]' : 'border-2 border-gray-300'
            }`}>
              <span className={`font-family: Pretendard text-sm font-bold ${agreements.marketing ? 'text-white' : 'text-gray-300'}`}>✓</span>
            </div>
          </div>
        </div>

        <button 
          onClick={handleSignup}
          className="w-full p-4 bg-[#B4FFE3] text-[#12918E] rounded-lg text-lg font-medium font-family: Pretendard mt-6"
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default Signup;