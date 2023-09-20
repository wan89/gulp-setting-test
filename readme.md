## gulp init
  
##### gulp 글로벌 설치
```
npm i gulp -g
``` 

#### 종속 npm 모듈 설치
```
npm i
```

#### gulp 실행 (웹서버+자동빌드)

```
gulp
```

## gulp 사용법

1. gulp를 실행하면 로컬서버(3000번포트)가 실행되면서 src변경한파일을 dist로 빌드하여 반영된 내역이 새로고침되어 즉각 반영됩니다.
2. 세부적인 세팅내역은 gulpfile.js에서 변경해서 사용하세요. 해당 세팅은 아주 간단하게 작성되어 있습니다.
3. dist폴더의 빌드된 파일을 배포용으로 사용하시면 됩니다.

## Drectory 구조

gulpfile.js - gulp 환경 세팅 js파일입니다. 입맛대로 변경하세요

- src/

    - components/ - html-include 컴포넌트용 디렉토리입니다, 해당 내용은 dist폴더에 담기지 않습니다

    - scss/ - scss폴더입니다, 폴더안에 모든 scss는 dist에 styleAll.css로 minify+css컨버팅되어 한파일로 결합됩니다.

    - js/ - js폴더입니다. 폴더안의 모든 js파일은 dist에 scriptAll.js로 minify+Obfuscator컨버팅되어 한파일로 결합됩니다

    - index.html - dist에 담길 index.html 파일 입니다, 웹서버는 해당 src의 index파일이 아닌 dist로 빌드된 파일을 호출합니다,

- dist/  - 빌드시 해당 폴더로 빌드된 파일들이 담기며 로컬서버의 내용은 dist에 반영된 내역만 보입니다.