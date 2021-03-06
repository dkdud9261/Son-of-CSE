# Son-of-CSE
# [경북대학교 SW해커톤] 컴학의 자식들
## 작품명 : 컴잇(컴퓨터학부를 잇다) 

### 팀원 
>- 황아영 컴퓨터학부(심컴) 2019112953 (팀장)
>- 박재완 컴퓨터학부(심컴) 2018116373
>- 박정민 컴퓨터학부(심컴) 2019112264
>- 최윤석 컴퓨터학부(심컴) 2018115201

### 주제
>COVID-19로 인해 가장 큰 변화는 "학우들 간의 교류와 친목 도모의 어려움"이라고 생각한다. COVID-19의 여파로 학교에서의 시간이 최소화되고, 행사나 모임 또한 힘들어져 특히 신입생이나 복학생은 새로운 친구를 사귀기가 쉽지 않으며, 많은 학우들이 이를 아쉬워 하는 모습을 볼 수 있다. 따라서 이러한 어려움을 개선하여 우리 학부 학우들이 서로 접할 수 있는 기회를 부여해 컴퓨터학부를 하나로 잇고자 "컴잇(컴퓨터학부를 잇다)"를 개발하였다.

### 프로젝트 소개
#### 앱 APK 경로 : https://github.com/dkdud9261/Son-of-CSE/tree/main/SonofCSE/release
#### 사용자 앱에서 연결되는 웹 주소 : https://pure-harbor-83558.herokuapp.com/
#### 관리자 전용 웹 주소 : https://pure-harbor-83558.herokuapp.com/admin
#### 시연 영상 유튜브 링크 : https://youtu.be/seI1G99t-HQ
>- 사용자 앱 "컴잇(컴퓨터학부를 잇다)"과 관리자 전용 페이지로 구성하였다. 사용자 앱의 기능은 아래와 같으며, 관리자는 관리자 전용 페이지를 통해 학생증 인증을 승인하고 사용자 데이터베이스를 관리할 수 있다.
>- 사용자 프로필에 관심사를 등록하도록 하여, 서로 관심사가 비슷한 학우들끼리의 교류에 도움이 되도록 하였다.
>- 해당 프로젝트는 앱 형태로 개발하는 것이 실용적일 것이라고 생각했으나, 팀이 전반적으로 앱보다는 웹 개발에 능숙하여 앱에서 웹을 연결시키는 형식으로 개발함으로써 실용성은 유지하고자 하였다.
>- 웹에서 ejs로 프론트엔드를, node.js와 express로 백엔드를 개발했고, 데이터베이스는 mongoDB를, heroku를 이용하여 배포하였다.

>#### 사용자 앱 기능
>>1. 앱 첫 실행 후, '카카오계정으로 로그인'을 통해 회원가입, 로그인한다. 모바일 학생증 캡쳐 화면을 첨부하여 관리자로부터 승인을 받은 후 앱을 사용할 수 있다.
>>2. 앱이 실행되면 지도가 표시되며, 우측 하단 메뉴를 통해 내 프로필, 채팅 목록, 지도 화면으로 이동할 수 있다.
>>3. 지도에는 현재 내 위치와 앱을 사용하는 우리 학부 학생들의 위치가 표시된다.
>>4. 지도에 표시된 마커를 터치하면 해당 학우의 프로필을 보고 채팅을 할 수 있다.
>>5. 채팅 목록 화면에서 현재 진행 중인 채팅의 목록을 확인하고, 채팅방으로 들어갈 수 있다.
>>6. 내 프로필에서 관심사를 수정할 수 있다.

### 프로그램 실행 
>- 앱 실행 : apk
>- 웹 실행
>>1. 모듈 설치 : npm install express socket.io mongoose ejs
>>2. 서버 작동 : npm start
>* 데이터베이스 url과 API key 등은 github에 게시할 수 없으며, 현재 API가 서버 구동 용도로 사용 중이기 때문에 로컬에서 실행하고자 하는 경우 우리에게 연락이 필요하다.

### 개선할 점 및 발전 방향
>- 팀 전반적으로 데이터베이스 강의를 듣거나 관련 프로젝트의 경험이 많지 않아 구동에 어려움이 있었다. 그로 인해 사용자의 아이디, 닉네임, 프로필 사진 url, 현재 위치의 좌표는 데이터베이스에 저장하는데 성공하였지만, 실시간 위치를 주기적으로 갱신하는 기능을 구현하지 못하였고, 중복 사용자 삭제 등이 미흡하였다.
>- 채팅 기능에서, 한 채팅방에 여러 사람이 입장하여 채팅을 주고 받을 수 있도록 구현할 수 있었지만, 현재는 사용자 마다 각각의 채팅방을 개설하여 1대 1로 채팅을 주고 받지는 못하도록 되어 있어 개선이 필요하다.
>- 본 앱은 컴퓨터학부 학생들만 사용하도록 개발되었기 때문에 모든 사용자의 위치와 프로필을 공개하고, 카카오톡 프로필에 설정해놓은 이름과 사진을 그대로 사용하도록 하였다. 하지만 더 나아가 사용자의 범위를 확대하거나 프라이버시 관련 이슈가 있을 경우 위치를 숨기거나 프로필을 수정하는 기능을 첨가할 수 있다.
>- 사용자 앱에 신고 기능을 추가하여 적절하지 못한 앱 사용자를 신고하여 관리자가 앱 사용을 중지할 수 있도록 기능을 추가할 수 있다. 이 외에도 관리자 페이지를 적극 활용하여 더욱 효율적인 앱 구동을 위해 발전할 수 있다.
>- 앱에서 웹을 연결시키는 방식으로 구현하였기 때문에, pc 등에서 웹으로도 프로그램을 사용할 수 있다. 현재는 모바일에 최적화된 UI의 웹으로 구현하였지만 더 발전시켜 앱뿐 아니라 웹으로서의 이용가치도 다분하다.

### 기대효과
>- 본 아이디어만으로 많은 학우들 간의 교류를 활발하게 하는 데에는 한계가 있겠지만, 공통 관심사를 기반으로 서로 간 관계 맺음의 시작 단계에 기여할 것이라 확신한다. 본 앱을 통한 만남이 학우 간의 관계를 발전시키고, 공통된 건강한 관심사로 선후배가 하나된 학부의 분위기를 창출할 것이다. 결과적으로 우리 학부 학생들은 소통 역량을 발전시켜 인성이 뛰어난 참 첨성인으로 거듭날 수 있다.
>- COVID-19와 그로 인한 방역 수칙들로 새로운 친구 사귀기를 힘들어하던 새내기 후배들이 많이 사용하고 즐거운 대학생활 하기를 바란다!

