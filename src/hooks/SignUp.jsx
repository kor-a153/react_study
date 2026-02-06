import React from 'react';
import { useForm } from 'react-hook-form';

// 회원가입
const SignUp = () => {
 const {
  register, handleSubmit, getValues,
  formState: { isSubmitting , errors }
 } = useForm({mode: "onchange"})

const signUp = async (datas) => {
  //fetch로 요청.
  console.log(datas)
}

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //이메일 정규식을 만드려면 ~ 이라는 뜻 \. 은 .을 문자열로 읽어라 라는 뜻.
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/; // {8,}은 8자리이상 입력을 해라.

  return (
    <div>
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <label>
            <span>이메일</span>
            <input type="text" name='memberEmail' id="memberEmail" //레지스터에 넣는 값이랑 맞춰주는게 좋다.
             {...register("memberEmail", { //기존에 있는 값을 다 가져와야 해서 스프레드.
                required: true,
                pattern: { // 이메일양식에 대한 코드
                  value: emailRegex
                }
             })}
            />
            {errors?.memberEmail?.type === "required"&& (
              <p>이메일을 입력하세요.</p>
            )} 
            {errors?.memberEmail?.type === "pattern"&& ( // 이메일양식에 대한 코드
              <p>이메일 양식에 맞게 입력하세요.</p>
            )} 
          </label>
        </div>
        {/* 비밀번호 */}
        <div>
          <label>
            <span>비밀번호</span>
            <input type="password" name='memberPassword' id="memberPassword"
             {...register("memberPassword", { //기존에 있는 값을 다 가져와야 해서 스프레드.
                required: true, //required true 이것만 적어주면 알아서 유효성 검사 해주는거임.
                parttern: {
                  value: passwordRegex
                }
             })}
            />
            {errors?.memberPassword?.type === "required"&& ( 
              <p>비밀번호를 입력하세요.</p>
            )} 
            {errors?.memberPassword?.type === "parttern"&& (
              <p>비밀번호 양식에 맞게 입력하세요. 숫자,문자,특수문자(!@#)포함8자리 이상</p>
            )} 
          </label>
        </div>
        <div>
          <label>
            <span>비밀번호확인</span>
            <input type="password" name='memberPasswordConfirm' id="memberPasswordConfirm"
             {...register("memberPasswordConfirm", { //기존에 있는 값을 다 가져와야 해서 스프레드.
                required: true //required true 이것만 적어주면 알아서 유효성 검사 해주는거임.
              ,validate: { 
                matchPassword: (memberPasswordConfirm) => { // 지금 비밀번호 입력한 값
                  const {memberPassword} = getValues(); //이전에 입력한 비밀번호 값
                  console.log(memberPassword,memberPasswordConfirm,memberPassword===memberPasswordConfirm)
                  return memberPassword===memberPasswordConfirm
                }
              }
             })}
            />
              {/* //에러가 패스워드 컨펌이라면, matchPassword를 보여줘라 (앞의값은 ture니까 뒤의값을 보여주게된다.) */}
            {errors?.memberPasswordConfirm?.type === "matchPassword"&& (
              <p>비밀번호가 일치하지 않습니다.</p>
            )} 
          </label>
        </div>
{/* 체크박스 */}
        <div>
          <p>취미</p>
          <label><span>축구</span><input {...register("hobbies")}type="checkboox" value="soccer" /></label>
          <label><span>농구</span><input {...register("hobbies")}type="checkboox" value="basketball" /></label>
          <label><span>야구</span><input {...register("hobbies")}type="checkboox" value="baseball" /></label>
        </div>

        <button disabled={isSubmitting}>회원가입</button> 
      </form>
    </div>
  );
};

export default SignUp;