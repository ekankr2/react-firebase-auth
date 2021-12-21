# Yagada

<p align="center">
<img width="35%" src="https://user-images.githubusercontent.com/83811729/146662400-e6330a50-63da-42bc-9302-06b48334b894.png" title="Main" alt="Main"/>
</p>

```
노동의 순간을 일기로 기록하다.
```



##  Demo Link

* **Yagada: [Demo Link][Demo]**

[//]: # (  [Demo]: https://esvfront.web.app/)


##  Languages and Tools:
<p align="center">
<img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="Javascript" height="40" style="vertical-align:top; margin:4px">

<img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="typescript" height="40" style="vertical-align:top; margin:4px">

<img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react" height="40" style="vertical-align:top; margin:4px"/>

<img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="firebase" height="40" style="vertical-align:top; margin:4px"/>


</p>

## 초기 기획

[기획서](https://blog.naver.com/ekankr2/222599146960/)

##  기능 소개



# Issues

* 공공 API CORS policy 오류
    * [원인 & 해결방법][해결법링크]
    * [proxy 서버 만들기][프록시링크]

[해결법링크]: https://blog.naver.com/ekankr2/222555509070
[프록시링크]: https://blog.naver.com/ekankr2/222555499566


* Axios(Ajax) returns nothing

    * 원인
        * Axios(Ajax) 요청은 promise 이다.
        * 브라우저는 연산이 쉬운 코드를 Stack 영역에서 먼저 실행하고,
        * 어려운 코드(Promise, Web API 등)는 Queue영역에 저장한 뒤
          Stack이<br> 비었을때 하나씩 가져와서 실행하게 된다.
    * 해결
        * result값을 변수에 저장하려면 뒤에 .then(promise)을 하나
          더 만든다.

    * 알게된 내용
        * 브라우저의 동작 원리

<pre>
<code>
// example code

 let temp = null;
 axios.get(`url`) 
    .then(result => {
        temp = result.data
        })
    return temp
    }
</code>
</pre>


