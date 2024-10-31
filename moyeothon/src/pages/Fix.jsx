import React from 'react';
import { useNavigate } from 'react-router-dom';

function Mypage() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md min-h-screen mx-auto bg-white">
      <div className="p-4">
        <div className="relative flex items-center justify-center mb-14">
          <button 
            onClick={() => navigate('/mypage')}
            className="text-4xl text-[#A1A6A9] absolute left-0 "
          >
            ←
          </button>
          <h1 className="text-xl font-medium">마이페이지</h1>
        </div>

        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="&&*(투엠퍼센트별)"
            className="w-full p-3 rounded-lg bg-[#F5F5F5]"
          />
          <input 
            type="password" 
            placeholder="**********"
            className="w-full p-3 bg-[#F5F5F5] rounded-lg"
          />
          <button className="w-full p-3 bg-[#B4FFE3] rounded-lg text-[#12918E] font-semibold text-lg">
            수정 완료 하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mypage;