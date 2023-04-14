let wrap = document.querySelector("#wrap");
let box = wrap.querySelector("div");

wrap.addEventListener("click", function() {
    // let isOn = wrap.classList.contains["on"];
    // wrap이라는 대상의 class를 조사해서
    // on이라는 class가 있는지 없는지 
    // 판별해서 변수로 담는다 (boolean)
    // console.log(isOn);

    /*
    if (isOn) {
        wrap.classList.remove("on");
    } else {
        wrap.classList.add("on");
    }
    */
    // 조건식을 바로 실행한다

    //(isOn) ? wrap.classList.remove("on") : wrap.classList.add("on");
    // 조건식의 결과를 변수로 담는다
    /*
    삼항연산자
    (조건식) ? [참] : [거짓];

    단항 a++
    이항 a + b
    */

});

wrap.addEventListener("click", function () {
    wrap.classList.toggle("on");
});

// toggle은 잘 쓰이지 않는다
// ↑활성화 클래스를 이용한 제어↑

// ↓활성화 클래스를 함수로 바꿔서 이용↓
let btns = document.querySelectorAll(".btns li");
let boxes = document.querySelectorAll("section article");

for (let i=0; i<btns.length; i++) {
    // 버튼 클릭 시
    btns[i].addEventListener("click", function() {

        /*
        on(활성화 class)의 index가 0에 있는데
        JS는 어느 index에 있는 지를 추적해야
        알 수 있지만 이를 만드는 코드가 복잡하다
        따라서 JS 코드를 적게 써야하기 때문에
        on class를 추적해서 on class만 제거하는
        것이 아니라 on class를 모든 곳에서 제거하고
        그 후에 필요한 곳에 on class를 부여하는
        방법을 사용한다
        */
        /*
        // on 활성화 class는 두 군데에 존재한다
        // 1. btns의 on class 제어
        for (let el of btns) {
            el.classList.remove("on");
        }
        btns[i].classList.add("on");
        */
        activation(btns, i);

        /*
        // 2. boxes의 on class 제어
        for (let el of boxes) {
            el.classList.remove("on");
        }
        boxes[i].classList.add("on");

        // 1번과 2번에 있는 el 변수는 서로 다르다 (지역 변수)
        // 단 i는 한 함수에 있으므로 같다
        */
        activation(boxes, i);
    });
}

/*
함수 패키징
1. 반복적으로, 중복적으로 사용되는 같은 기능을 하는 코드를
함수 안에 가져온다
function activation() {
    for (let el of btns) {
        el.classList.remove("on");
    }
    btns[i].classList.add("on");
}
2. 중복되는 코드 외에 변경이 되는 내용을 지우고 그 내용의
매개변수로 대체한다 -> 매개변수 자리에 같은 이름을 작성한다
2-1. 변경이 되는 내용을 지우고
function activation(*) {
    for (let el of *) {
        el.classList.remove("on");
    }
    *[i].classList.add("on");
}
매개변수로 대체한다 (btns -> list)
function activation(list) {
    for (let el of list) {
        el.classList.remove("on");
    }
    list[i].classList.add("on");
}
2-2. 외부에서 받아와야하는 내용을 매개변수로 만든다
함수 내부의 i는 내부에서 생성되는 내용이 아니라
외부에서 받아서 들어오는 내용이므로
매개변수로 만들어야 한다 (i -> index)
function activation(list, index) {
    for (let el of list) {
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}

매개변수와 인수는 무엇인가?
매개변수 - 함수의 () 안에 작성되는 변수
인수는 함수를 호출할 때 매개변수 자리에 넣어질 값

activation(boxes, i); 
*/
function activation(list, index) {
    for (let el of list) {
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}
/*
절차지향 - 코드 내용을 단계단계, 차근차근 표현하는 것
단점: 코드가 길고 필요 없는 내용이 많아서 생산성이 떨어진다

함수 패키징 - 자주 사용되거나, 같은 기능을 하는 내용을
함수로 패키징한다. 이 때 함수에 매개변수를 만들어서
틀을 만들어준다
장점: 코드가 짧아지고, 재활용을 하기 때문에 생산성이 높아진다
단점: 함수가 너무 많아져서 복잡해진다 (함수 안의 함수 등)
      -> 이 때문에 생산성이 더 떨어질 수 있다

객체지향 - class를 만들어서 생산 (front 영역), 난이도가 높다
*/