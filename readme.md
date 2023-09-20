## gulp 사용법(init)
  
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



## Drectory

gulpfile.js - gulp 환경 세팅 js파일입니다. 입맛대로 변경하세요

- src

- components/ - html-include 컴포넌트용 디렉토리입니다, 해당 내용은 dist폴더에 담기지 않습니다

- scss/ - scss폴더입니다, 폴더안에 모든 scss는 dist에 styleAll.css로 minify+css컨버팅되어 한파일로 결합됩니다.

- js/ - js폴더입니다. 폴더안의 모든 js파일은 dist에 scriptAll.js로 minify+Obfuscator컨버팅되어 한파일로 결합됩니다

- index.html - dist에 담길 index.html 파일 입니다, 웹서버는 해당 src의 index파일이 아닌 dist로 빌드된 파일을 호출합니다,