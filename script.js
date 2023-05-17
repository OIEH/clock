const timeDiv = document.getElementById("time");
const dateDiv = document.getElementById("date");
function getTime() {
    let now =new Date(); //Date 는 날짜랑 시간 포함됨
    let hour = padZero(now.getHours());
    let minute=padZero(now.getMinutes());
    let second=padZero(now.getSeconds());
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
    //setInterval(getTime,1000); 아래 셋인터벌 지우고 하기 새로고침방지 2번
    timeDiv.textContent= `${hour}시 ${minute}분 ${second}초`;
    dateDiv.textContent= `${year}년 ${month}월 ${date}일`;
}
setInterval(getTime,1000);
getTime();//새로고침 방지 1번
function padZero(data){//10 이하 늘리기
    return data<10 ? `0${data}`:data;
}