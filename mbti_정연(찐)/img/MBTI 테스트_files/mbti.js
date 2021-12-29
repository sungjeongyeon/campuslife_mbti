var i = 1;

var testNum = {
  "1": {
    "title": "문제 1번",
    "description": "문제 내용입니다.",
    "type": "EI",
    "A": "E",
    "B": "I"
  },
  "2": {
    "title": "문제 2번",
    "description": "문제 내용입니다.",
    "type": "EI",
    "A": "E",
    "B": "I"
  },
  "3": {
    "title": "문제 3번",
    "description": "문제 내용입니다.",
    "type": "EI",
    "A": "E",
    "B": "I"
  },
  "4": {
    "title": "문제 4번",
    "description": "문제 내용입니다.",
    "type": "SN",
    "A": "S",
    "B": "N"
  },
  "5": {
    "title": "문제 5번",
    "description": "문제 내용입니다.",
    "type": "SN",
    "A": "S",
    "B": "N"
  },
  "6": {
    "title": "문제 6번",
    "description": "문제 내용입니다.",
    "type": "SN",
    "A": "S",
    "B": "N"
  },
  "7": {
    "title": "문제 7번",
    "description": "문제 내용입니다.",
    "type": "TF",
    "A": "T",
    "B": "F"
  },
  "8": {
    "title": "문제 8번",
    "description": "문제 내용입니다.",
    "type": "TF",
    "A": "T",
    "B": "F"
  },
  "9": {
    "title": "문제 9번",
    "description": "문제 내용입니다.",
    "type": "TF",
    "A": "T",
    "B": "F"
  },
  "10": {
    "title": "문제 10번",
    "description": "문제 내용입니다.",
    "type": "JP",
    "A": "J",
    "B": "P"
  },
  "11": {
    "title": "문제 11번",
    "description": "문제 내용입니다.",
    "type": "JP",
    "A": "J",
    "B": "P"
  },
  "12": {
    "title": "문제 12번",
    "description": "문제 내용입니다.",
    "type": "JP",
    "A": "J",
    "B": "P"
  }
};

var result = {
  "INTJ": {
    "mbti": "INTJ",
    "explain": "용의주도한 전략가"
  },
  "INTP": {
    "mbti": "INTP",
    "explain": "논리적인 사색가"
  },
  "ENTJ": {
    "mbti": "ENTJ",
    "explain": "대담한 통솔자"
  },
  "ENTP": {
    "mbti": "ENTP",
    "explain": "뜨거운 논쟁을 즐기는 변론가"
  },
  "INFJ": {
    "mbti": "INFJ",
    "explain": "선의의 옹호자"
  },
  "INFP": {
    "mbti": "INFP",
    "explain": "열정적인 중재자"
  },
  "ENFJ": {
    "mbti": "ENFJ",
    "explain": "정의로운 사회운동가"
  },
  "ENFP": {
    "mbti": "ENFP",
    "explain": "재기발랄한 활동가"
  },
  "ISTJ": {
    "mbti": "ISTJ",
    "explain": "청렴결백한 논리주의자"
  },
  "ISFJ": {
    "mbti": "ISFJ",
    "explain": "용감한 수호자"
  },
  "ESTJ": {
    "mbti": "ESTJ",
    "explain": "엄격한 관리자"
  },
  "ESFJ": {
    "mbti": "ESFJ",
    "explain": "사교적인 외교관"
  },
  "ISTP": {
    "mbti": "ISTP",
    "explain": "만능 재주꾼"
  },
  "ISFP": {
    "mbti": "ISFP",
    "explain": "호기심 많은 예술가"
  },
  "ESTP": {
    "mbti": "ESTP",
    "explain": "모험을 즐기는 사업가"
  },
  "ESFP": {
    "mbti": "ESFP",
    "explain": "자유로운 영혼의 연예인"
  }
};

//테스트 시작함수
var testStart = function(){
  document.querySelector('#main').style.display = "none";
  document.querySelector('#test').style.display = "block";
  next();
}

document.querySelector('#start_btn').addEventListener('click', testStart);

//테스트 다시시작
var retry = function(){
  document.querySelector('#result').style.display = "none";
  document.querySelector('#test').style.display = "block";
  i = 1;
  EI.value=SN.value=TF.value=JP.value= 0;
  next();
}

document.querySelector('#retry_btn').addEventListener('click', retry);

//타입 선택을 위한 함수
document.querySelector('#A').addEventListener('click',function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = preValue+1;
  next();
})

document.querySelector('#B').addEventListener('click',function(){
  next();
})

//문제 넘기기 + 결과 도출 함수
var next = function(){
  if(i==13){
    document.querySelector('#test').style.display = "none";
    document.querySelector('#result').style.display = "block";
    var mbti = '';
    if(document.querySelector('#EI').value < 2){
      mbti += 'I';
    }else{
      mbti += 'E';
    }
    if(document.querySelector('#SN').value < 2){
      mbti += 'N';
    }else{
      mbti += 'S';
    }
    if(document.querySelector('#TF').value < 2){
      mbti += 'F';
    }else{
      mbti += 'T';
    }
    if(document.querySelector('#JP').value < 2){
      mbti += 'P';
    }else{
      mbti += 'J';
    }
    console.log(mbti);
    document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
  }
  else{
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#progress').style.width = (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    i++;
  }

}
