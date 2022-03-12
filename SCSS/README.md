SCSS-Tutorial
===
SCSS
---
Q1: SCSS는 무엇인가?
A1: SASS와 같은 계열의 언어로 CSS를 보다 편리하게 작업할 수 있도록 한다.
   
Q2: SCSS는 별도의 Compiler를 필요로 하는가?
A2: Ruby Gem 또는 NPM 등을 이용한 별도의 Compiler(SCSS To CSS)가 필요하다.
   
Q3: SASS와는 어떤 점에서 다른가?
A3: SASS와 SCSS는 구조적 차이가 있으며 SCSS가 SASS보다 더 편리하다.

Nesting
---
해당 스타일 내부에 스타일에 정의함으로서 범위를 한정할 수 있다. (&는 자기자신)

```
#box1 {
    background-color:#ddd;

    @media screen and (max-width:100px){
        font-size: 1em;
    }
    &:hover{
        background-color: yellow;
    }
    a{
        color:yellow;
    }
    a:hover{
        color:red;
    }    
    & > a{
        color: blue;
    }
}
```
Mixin 
---
정형화된 속성을 설정하는 일종의 함수, @mixin (name)(parameter), 기본값 설정 가능
재사용성과 가독성을 향상함.
```
@mixin fontSizeBgColor($fontSize : 30px, $bgColor : #000){
    font-size: $fontSize;
    background-color: $bgColor;
}

#box{
    @include fontSizeBgColor(40px, #fff);
}
```
Extend
---
정형화된 형태를 가져오는 상속, @extend ~
```
%boxShape {
    border-radius:20px;
    border:3px solid red;
    box-shadow:0px 3px 11px 0px rgba(0,0,0,1);
}

#box{
    @extend %boxShape;
}
```