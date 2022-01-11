var i = 1;

var testNum = {
  "1": {
    "title": "문제 1번",
    "description": "코로나 끝!<br>학과 MT가 잡혔다. 당신은? ",
    "type": "EI",
    "A": "당장 가야지!! 꿈에 그리던 대학 MT!",
    "B": "사람 많은 곳은 기빨려..그냥 쉬자."
  },
  "2": {
    "title": "문제 2번",
    "description": "아는 사람 아무도 없이<br>홀로 교양수업을 듣게된 첫날, 당신은?",
    "type": "EI",
    "A": "저 친구 마음에 드는데? 말걸어 봐야지",
    "B": "조용히 빈자리를 찾아 앉는다."
  },
  "3": {
    "title": "문제 3번",
    "description": "창밖에 날씨가 좋다.<br>자체휴강을 때린 당신은?",
    "type": "EI",
    "A": "친구한테 전화해서 드라이브가기",
    "B": "침대에서 광합성이 최고"
  },
  "4": {
    "title": "문제 4번",
    "description": "동기가 포스터를 보여주며<br>공모전에 같이 나가자고 한다. 당신은? ",
    "type": "SN",
    "A": "작년도 수상 사례를 찾아본다.",
    "B": "어떤 기획을 할지 아이디어를 생각해본다."
  },
  "5": {
    "title": "문제 5번",
    "description": "어벤져스 영화 \'스파이더맨\'을<br>보고 든 생각은?",
    "type": "SN",
    "A": "와 역시 마블이구나,, 액션씬 진짜 ㄷㄷ이다.",
    "B": "아니 스파이더맨 할라면 고소공포증 없어야되네..ㅠ"
  },
  "6": {
    "title": "문제 6번",
    "description": "왠지 기분이 좋아서 오랜만에<br>복권을 구입했다. 당신은?",
    "type": "SN",
    "A": "일단 주머니에 넣어두고 주말에 맞춰본다.",
    "B": "아 1등되면 어떡하지.. 자퇴해야되나.. 그래도 학교는 졸업해야되는데.."
  },
  "7": {
    "title": "문제 7번",
    "description": "별로 안친한 동기가<br>감기 걸렸다고 칭얼거린다면?",
    "type": "TF",
    "A": "아.. 병원은 갔어?",
    "B": "에고 어쩌다가ㅠㅠ 괜찮아?"
  },
  "8": {
    "title": "문제 8번",
    "description": "선배가 갑자기 부르더니 이렇게 말한다.<br>\"이렇게 행동하면 아무도 너 안좋아해\"",
    "type": "TF",
    "A": "네 (속마음 : 어쩌라고 ㅋㅋ)",
    "B": "네..? (속마음 : 나 뭐 잘못했나ㅠㅠ 뭐지..)"
  },
  "9": {
    "title": "문제 9번",
    "description": "오늘 면접 본 친구한테 전화가 왔다.<br>\"나 면접 망한 것 같아..\"",
    "type": "TF",
    "A": "왜? 준비는 잘하고 갔어? 질문 뭐였는데",
    "B": "에고 야 고생했어 ㅠㅠ 술이나 먹자"
  },
  "10": {
    "title": "문제 10번",
    "description": "이번주 주말까지 제출해야하는<br>과제가 있다. 당신은?",
    "type": "JP",
    "A": "스케줄을 체크하고 미리미리 과제를 끝낸다.",
    "B": "버틸 때까지 버티다가 하루 전에 후다닥 처리한다."
  },
  "11": {
    "title": "문제 11번",
    "description": "과제를 수행하는 중<br>좋은 아이디어가 나왔다. 당신은?",
    "type": "JP",
    "A": "계획 먼저 짜고 조사 해야지",
    "B": "조사부터 하고 계획해야지"
  },
  "12": {
    "title": "문제 12번",
    "description": "기분이 울적해서 바다가 보고싶어졌다.<br>당신은?",
    "type": "JP",
    "A": "캘린더를 확인하고 갈 수 있는 날짜를 확인한다.",
    "B": "바로 강릉 버스 표를 예매한다."
  }
};

var result = {
  "INTJ": {
    "mbti": "INTJ",
    "explain": "천상천하 유아독존 <br>용의주도한 전략가",
    "job_ex" : "너도_될수있어_일론머스크",
    "job" : "분석력과 통찰력이 뛰어나며 혼자있는 시간을 즐기는 당신은<br>컴퓨터, 과학분야, 연구, 철학 등과 잘 어울립니다.",
    "explain2": "외로움도 잘안타고 손해보지 않으려는 성격 때문에 쓸데없는 인간관계 안맺는다. '일만 잘하면되지' 라는 생각으로 이러한 성격에 만족하면서 살지만 가끔씩 활발하게 지내는 주위사람들을 보면 아주 가끔 '내가 비정상인가?'라는 생각이 들면서 깊은 사색에 빠지기도 한다. MBTI 성격 중 가장 독립적이고 단호하며 문제에 대하여 고집이 세다.",
    "img" : "intj.jpg"
  },
  "INTP": {
    "mbti": "INTP",
    "explain": "무념무상 냉혈인간 <br>논리적인 사색가",
    "job_ex" : "너도_될수있어_아인슈타인",
    "job" : "지적 호기심이 높은 당신은 순수과학이나 연구,<br>엔지니어링과 잘 어울립니다.",
    "explain2": "INTP 유형은 전체 인구 3%정도의 극소수의 유형 세상에 관심이 없으면서도 관심이 많고, 사람 중심의 가치보다 아이디어에 관심이 많아 개인적인 인간관계 보다는 아이디어를 토론하는 소수의 가까운 사람들을 주위에 두고 있다. 극한의 효율을 좋아하기 때문에 예상가능한 범위 내에서 일이 일어나는 것을 좋아한다.",
    "img" : "intp.jpg"
  },
  "ENTJ": {
    "mbti": "ENTJ",
    "explain": "워커홀릭 자존감 MAX <br>대담한 통솔자",
    "job_ex" : "너도_될수있어_스티브잡스",
    "job" : "강한 추진력을 가진 리더의 자질을 가지고 있는 당신은<br>경제, 경영 분석가나 관리자, 변호사와 잘 어울립니다.",
    "explain2": "남이 시켜서 하는게 아니라 일이 정말 좋아서 하는 유형이다. 그리고 이런 자신의 모습에 또 대견함을 느낀다. 설령 하기 싫은 일이라 할지라도 그 속에서 재미를 찾는다. 타인의성장에 성취감을 느끼고 개인의 성장이 자연스럽게 회사에 환원되기를 희망한다. 감투를 좋아하며 높은 자리에 앉고 싶어하며 그럴만한 능력도 있고 대부분이 그렇게 되게 이루는 편이다.",
    "img" : "entj.jpg"
  },
  "ENTP": {
    "mbti": "ENTP",
    "explain": "또라이라고? 고마워~ <br>논쟁을 즐기는 변론가",
    "job_ex" : "너도_될수있어_마크트웨인",
    "job" : "뛰어난 지적 탐구심을 가졌고, 독창적인 아이디어와<br>새로운 도전을 좋아하는 당신은<br>과학자 같은 분야부터 카피라이터 등의 직무와 잘 맞습니다.",
    "explain2": "\"착하다 = 호구같다\", \"또라이네 = 넌 참 특별해\" 로 해석되는 또라이다. 이해를 해야 공감하는 타입으로 논리적으로 납득이 안가면 절대 공감이 안된다. 무엇을 하든 평균이상으로 해내며 자존감이 높고 자신에 대한 확신이 있다. 타인의 생활에 관심이 적고, 내 생각과 주관을 가감없이 말하여 본의아니게 타인에게 상처를 줄때가 많다.",
    "img" : "entp.jpg"
  },
  "INFJ": {
    "mbti": "INFJ",
    "explain": "관찰하는게 취미이자 특기 <br>선의의 옹호자",
    "job_ex" : "너도_될수있어_마더테레사",
    "job" : "타인을 배려하고 이해하는 이타적인 성향의 당신은<br>뛰어난 관찰력과 직관을 살려 교육, 심리, 예술 분야와 잘 맞습니다.",
    "explain2": "모두를 혐오하지만 모두를 혐오하는 자신의 모습이 싫어 모두를 사랑하려고 하는 사람들. 다른 사람을 관찰하는게 취미이자 특기라서 남의 생각과 감정을 귀신같이 읽어내는 초월적 능력을 가졌다. 영혼없어 보인다는 말을 많이 듣고, 애매하게 외향적인척 하지만 스몰토크나 의미없는 대화에 쉽게 지친다.",
    "img" : "infj.jpg"
  },
  "INFP": {
    "mbti": "INFP",
    "explain": "세심함 끝판왕 <br>열정적인 중재자",
    "job_ex" : "너도_될수있어_아이유",
    "job" : "풍부한 상상력을 가지고 항상 새로운 아이디어를 만들어내고<br>독립심이 강한 당신은 상담을 통해<br>타인의 이야기를 듣거나 문학, 예술을 연구하는 일이 잘어울려요.",
    "explain2": "자신의 행동이 누군가에게 영향을 준다는 생각으로 어떤 행동을 하더라도 조심스럽게 진행한다. 지나치게 세심하고 디테일한 성격으로 주변 시선을 너무 의식하여 이런 부분이 스트레스로 자리잡기도 한다. 자신의 감정을 누구보다 잘 알고 있다. 감정적으로 가장 고통받기에 그것을 딛고 행복해질 가능성이 가장 높은 사람들이다.",
    "img" : "infp.jpg"
  },
  "ENFJ": {
    "mbti": "ENFJ",
    "explain": "박애주의자 <br>정의로운 사회운동가",
    "job_ex" : "너도_될수있어_오프라윈프리",
    "job" : "사교성이 강하고 공감능력이 뛰어난데다가 책임감과 계획성을<br>두루 갖춘 당신은 의사, 교사 또는 작가나 아트디렉터 등<br>창의적인 생각이 필요한 분야가 잘 어울립니다.",
    "explain2": "겉으로는 밝고 긍정적으로 보이지만 외로움도 잘 탄다. 주변에서는 친구 800명쯤 되는 인싸라고 부르지만 스스로 생각하는 친구는 5명 정도인 ENFJ. 매사에 적극적이며 책임감이 강해 누구보다 모임을 좋아하고 대화를 잘 이끌어 나간다. 기본적으로 사람을 좋아하며 마음이 약해 쉽게 동화되며, 동정심도 높다.",
    "img" : "enfj.jpg"
  },
  "ENFP": {
    "mbti": "ENFP",
    "explain": "대가리 꽃밭 <br>재기발랄한 활동가",
    "job_ex" : "너도_될수있어_백종원",
    "job" : "풍부한 상상력과 순발력을 바탕으로 다양한 분야에서 재능을<br>발휘할 수 있는 당신은 영업판매직이나 마케팅 또는<br>작가, 아트디렉터 등 창의적인 생각이 필요한 분야와 잘 어울립니다.",
    "explain2": "역동적이고 활달한 성격으로 처음 알게되는 사람들에게 호기심이 많다. 외면과 내면이 같아 가식, 위선이 없고, 주변을 행복하게 해주는 유형이다. 조증과 울증을 반복하며 회복탄력성이 좋다. 아이디어는 많으나 끝맺음 및 실행력이 부족하다. 하고 싶은게 많아 다양한 것을 시도하지만 싫증도 금방 난다.",
    "img" : "enfp.jpg"
  },
  "ISTJ": {
    "mbti": "ISTJ",
    "explain": "안경쓴 로봇 <br>청렴결백한 논리주의자",
    "job_ex" : "너도_될수있어_아마존주인_제프베조스",
    "job" : "다소 보수적인 성향을 갖고 있으면서 꼼꼼하고 책임감이 강한 당신은<br>회계나 행정 사무직부터 법조계에서 근무를 하는 것이 잘 어울립니다.",
    "explain2": "신중한 성향으로 모든일에 꼼꼼하다. 객관적, 논리적으로 주변을 살피며 허상을 꿈꾸지 않는다. 현실적으로 이루어질 수 있는 범위 내에서 계획을 세우며 시간낭비를 굉장히 싫어한다. 반복되는 실수를 용납할 수 없으며, 이들의 리액션은 \"아 진짜요?\" 혹은 \"아 정말요?\" 가 전부이다. 새로운 것을 싫어하기 때문에 예고없는 변화에 가장 스트레스를 받는다.",
    "img" : "istj.jpg"
  },
  "ISFJ": {
    "mbti": "ISFJ",
    "explain": "눈치가 있었는데 없었어요 <br>용감한 수호자",
    "job_ex" : "너도_될수있어_유재석",
    "job" : "항상 차분하고 헌신적이며 인내심이 강하고 이타심과 배려가 많은 당신은<br>교사나 상담사와 잘어울리며 나아가 간호사, 사회복지사 등의 직업과도 잘 어울립니다.",
    "explain2": "반복적이고 단조로운 업무에서 극한의 효율을 끌어내는 것을 즐기며 끊임없이 아이디어를 내고 사람들고 논의하는 상황을 싫어한다. 겉으로는 쿨한척, 신경안쓰는 척 하지만 속으로는 엄청 계산적이다. 대화할 때 흐름과 표정을 항상 체크하여 눈치가 빠르지만 종종 눈치없는 척을 하기도 합니다.",
    "img" : "isfj.jpg"
  },
  "ESTJ": {
    "mbti": "ESTJ",
    "explain": "뒷담 대신 앞담 <br>엄격한 관리자",
    "job_ex" : "너도_될수있어_헤르미온느",
    "job" : "누구보다 규칙을 중요하게 생각하고 체계적인 것을 좋아하는<br>당신은 인사나 행정부터 회사의 관리를 담당하기 좋습니다.",
    "explain2": "ESTJ가 가장 중요하게 생각하는 것은 현실감각이다. 때문에 회사에서 상급자와 교류하는 것은 자신의 성공을 앞당길 수 있고, 생활수준이 높은 사람과의 친분은 여러모로 본인에게 자극제가 된다고 생각한다. 뒷말을 안하는 대신에 앞에서 말을 하는 스타일로 조직생활에서 총대 매고 지르는 경우가 많다.",
    "img" : "estj.jpg"
  },
  "ESFJ": {
    "mbti": "ESFJ",
    "explain": "스몰토크 장인 <br>사교적인 외교관",
    "job_ex" : "너도_될수있어_황광희",
    "job" : "타인에 대한 관심이 많고 사람을 만나는 것을 좋아하는 당신은<br>교육 관련 분야에서 선생님이나 코치도 잘어울리며<br>사람을 많이 상대하는 관광, 호텔, 홍보와도 궁합이 좋습니다.",
    "explain2": "사교적으로 보여지지만 친구의 선이 명확해서 조금만 어색해도 같이 있기 힘들어한다. 친절하고 배려를 잘하여 어느 곳에서도 빠르게 적응하는 편이며 사람들 사이에서 중재자 역할을 잘 수행한다. 잡지식이 많아 어느 주제에서든 할얘기가 많고, 스몰토크를 좋아해서 누구한테나 쉽게 말을 걸 수있다.",
    "img" : "esfj.jpg"
  },
  "ISTP": {
    "mbti": "ISTP",
    "explain": "반항심 만렙 청개구리 <br>만능 재주꾼",
    "job_ex" : "너도_될수있어_연아킴",
    "job" : "논리, 분석, 적응은 이들에게 너무나 알맞는 단어입니다.<br>당신은 과학적인 분야는 물론 통계와 법률과도 아주 잘어울려요.",
    "explain2": "노력 대비 효율이 좋아 만능 재주꾼이라고 불린다. 냉철한 판단을 잘하며 마음에 없는 소리를 못하고 앞뒤가 똑같아 솔직담백한 매력을 지닌다. 반항심이 높아 하지 말라고 하는 것은 더 하고 싶어지는 청개구리같은 모습을 보이기도 한다. 감정 표현을 잘 못하고, 말하는 것을 별로 안좋아하지만 관심있는 분야에서는 말이 많아진다.",
    "img" : "istp.jpg"
  },
  "ISFP": {
    "mbti": "ISFP",
    "explain": "애매한데 애매하지 않은 <br>호기심 많은 예술가",
    "job_ex" : "너도_될수있어_레이디가가",
    "job" : "타고난 예술가라고 할 수 있는 당신은 뛰어난 호기심과<br>톡톡 튀는 상상력으로 순수예술 분야부터<br>디자이너, 사회사업에 적절합니다.",
    "explain2": "ISFP 유형은 애매함 자체다. 소심하면서도 활발하고, 일처리를 미루면서도 결국 완벽하게 해내는 스타일로 이들에게는 재충전 시간이 꼭 필요하다. 귀찮은 일을 굉장히 싫어하여 해야할 일이 없는 시간을 제일 좋아한다. 낯가림이 심해서 혼밥, 혼코노 등 혼자하는 걸 좋아한다.",
    "img" : "isfp.jpg"
  },
  "ESTP": {
    "mbti": "ESTP",
    "explain": "플러팅 장인 <br>모험을 즐기는 사업가",
    "job_ex" : "너도_될수있어_트럼프",
    "job" : "논리적으로 분석해 현실적인 문제해결 방안을 모색하는 당신은<br>경찰관이나 소방관, 교도관 등 공적인 업무부터<br>엔지니어와도 궁합이 좋습니다.",
    "explain2": "친절함과 띠꺼움이 공존하는 ESTP. 효율성을 따지기 때문에 생각이 복잡하지 않고 단순, 간결, 명료 그 자체이다. 좋아하는 사람 앞에서는 뚝딱거리지만 관심 없는 사람에게는 저절로 플러팅하는 스타일이다. 거짓말을 잘 못해 필터링없이 말하여 주변인들은 종종 상처받을 때가 많다.",
    "img" : "estp.jpg"
  },
  "ESFP": {
    "mbti": "ESFP",
    "explain": "리액션 장인 <br>자유로운 영혼의 연예인",
    "job_ex" : "너도_될수있어_태양을피하고싶은_비",
    "job" : "외향적이고 사람과의 상호작용을 통해 자신의 재능을 뽐내길<br>즐기는 당신은 타고난 연예인이라고 부를 수 있습니다!",
    "explain2": "어딜가나 밝고 리액션이 좋다는 말을 듣는다. 하이텐션에 노는것을 좋아하기 때문에 가벼운 이미지로 보일까 걱정도 하지만 속으로는 현실적인 고민도 많고 진지할 땐 진지한 스타일이다. 종종 타인을 기쁘게 하기 위해 이벤트를 준비하기도 한다. 이야기를 할때 요점만 전달하는 것이 어려워 부연설명을 덧붙일 때가 많다.",
    "img" : "esfp.jpg"
  }
};

//테스트 시작함수
var testStart = function(){
  document.querySelector('#main').style.display = "none";
  document.querySelector('#test').style.display = "block";
  next();
  dataLayer.push({
    'event':'start'
  });
}

document.querySelector('#start_btn').addEventListener('click', testStart);

//테스트 다시시작
var retry = function(){
  document.querySelector('#result').style.display = "none";
  document.querySelector('#main').style.display = "block";
  i = 1;
  EI.value=SN.value=TF.value=JP.value= 0;
  history.replaceState({}, null, location.pathname);
  next();
  dataLayer.push({
    'event': 'retry'
  });
}

document.querySelector('#retry_btn').addEventListener('click', retry);

//타입 선택을 위한 함수
document.querySelector('#A').addEventListener('click',function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = preValue+1;
  next();
  dataLayer.push({
  'event' : 'select_answer',
  'answer' : 'A'
});
})

document.querySelector('#B').addEventListener('click',function(){
  next();
  dataLayer.push({
   'event' : 'select_answer',
   'answer' : 'B'
 });
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
    document.querySelector('#job_ex').innerHTML = result[mbti]['job_ex'];
    document.querySelector('#job').innerHTML = result[mbti]['job'];
    document.querySelector('#explain2').innerHTML = result[mbti]['explain2'];
    document.querySelector('#result_img').setAttribute("src", 'img/' + result[mbti]['img']);
    history.replaceState({result: result}, '', '?result='+mbti); // MBTI 결과 쿼리 파라미터 삽입
    dataLayer.push({
      'event':'test_complete',
      'mbti' : mbti,
      'result_name':result[mbti]['explain']
    });
  }
  else{
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#progress').style.width = (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    dataLayer.push({
     'event':'view_question',
     'question_no': i
   });
    i++;
  }

}

// 쿼리 파라미터 값이 있을 경우 결과 페이지로 직접 이동
var shareParams = new URL(location.href).searchParams.get('result');
if (Object.keys(result).includes(shareParams) === true){
 document.querySelector('#main').style.display = "none";
 document.querySelector('#result').style.display = "block";
 var mbti = shareParams;
 document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
 document.querySelector('#explain').innerHTML = result[mbti]['explain'];
 document.querySelector('#explain2').innerHTML = result[mbti]['explain2'];
 document.querySelector('#job_ex').innerHTML = result[mbti]['job_ex'];
 document.querySelector('#job').innerHTML = result[mbti]['job'];
 document.querySelector("#result_img").setAttribute("src", 'img/' + result[mbti]['img']);
}

// 카카오 SDK 초기화
Kakao.init('a851de2dd7a5026fabcd97ef777fba49');
Kakao.isInitialized();

// 카톡 공유 실행 함수
var kakaoShare = function(){
  dataLayer.push({
      'event':'kakao_share'
    });
 var title = document.querySelector('#mymbti').textContent;
 var desc = document.querySelector('#explain').textContent;
 var imgUrl = document.querySelector('#result_img').src;
 var mbti = new URL(location.href).searchParams.get('result');

 Kakao.Link.sendDefault({
objectType: 'feed',
content: {
 title: title,
 description: desc,
 imageUrl:
   imgUrl,
 link: {
   mobileWebUrl: 'https://campuslife-mbti.com?result='+ mbti,
 },
},
buttons: [
 {
   title: '결과 확인',
   link: {
     mobileWebUrl: 'https://campuslife-mbti.com?result='+ mbti,
     webUrl: 'https://campuslife-mbti.com?result='+ mbti,
   },
 },
 {
   title: '테스트하기',
   link: {
     mobileWebUrl: 'https://campuslife-mbti.com',
     webUrl: 'https://campuslife-mbti.com',
   },
 },
]
});
}

document.querySelector('#share_btn').addEventListener('click', kakaoShare);

document.querySelector('#copy_btn').addEventListener('click', function(){
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("  "+ url + "  \n 복사 완료");
        return false;
      })
