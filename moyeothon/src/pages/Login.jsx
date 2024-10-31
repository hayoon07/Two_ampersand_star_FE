import React from 'react';

function Login() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-white">
      <h1 className="mb-16 text-2xl font-medium font-family: Pretendard">로그인</h1>

      {/* 프로필 이미지 */}
      <div className="w-24 h-24 rounded-full bg-[#48CBC8] mb-8"></div>

      {/* 로그인 폼 */}
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="이메일"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5] font-family: Pretendard"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-4 rounded-lg outline-none bg-[#F5F5F5] font-family: Pretendard"
        />
               <button className="w-full p-4 bg-[#B4FFE3] text-[#12918E] rounded-lg text-lg font-medium font-family: Pretendard">
          로그인
        </button>
      </div>

      {/* 회원가입 링크 */}
      <div className="mt-4 text-center">
        <span className="text-[#A7ADB1] font-family: Pretendard">계정이 없으신가요? </span>
        <a href="." className="text-[#4ED9D4] font-family: Pretendard">
          회원가입하기
        </a>
      </div>
    </div>
  );
}

export default Login;