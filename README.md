# Javascript DI Container
우아한 테크코스 프리코스 3주차 로또 미션에 객체지향적 설계를 적용하고, 의존성 컨테이너를 사용하여 리팩토링을 진행했습니다.
## 실행 방법
```cli
의존성 설치
npm run i

테스트
npm run test

실행
npm run start
```

## 브랜치
```cli
완성 버전 (객체지향설계 O, DI 컨테이너 사용 O, 테스트 O)
git checkout main

설정 값 상수 사용 버전 (객체지향설계 O, DI 컨테이너 사용 O)
git checkout constant_settings

컨테이너를 사용하지 않은 버전 (객체지향설계 O, DI 컨테이너 사용 X)
git checkout no-container

런타임 게임 설정 변경 기능을 추가한 버전 (객체지향설계 O, DI 컨테이너 사용 O, 전략 패턴 사용 O, 상태 패턴 사용 X)
git checkout gameconfig

```
## 설계 구조
<table><thead>
  <tr>
    <th>객체지향설계, DI 컨테이너 적용 전</th>
    <th>객체지향설계, DI 컨테이너 적용 후</th>
  </tr></thead>
<tbody>
  <tr>
    <td>
      
<img width="1055" height="931" alt="image" src="https://github.com/user-attachments/assets/6fe58c45-af5f-4c4f-8204-f6d549cf27d2" />
    </td>
    <td>
    
<img width="1098" height="843" alt="image" src="https://github.com/user-attachments/assets/d29c6736-4ae4-446c-9764-06e1c67f6dcb" />
    </td>
  </tr>
</tbody>
</table>



