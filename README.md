12.28
- 조사 후, '뭔가 잘못되었다는 게 확신이 듬.'
- 이전 backup 버전으로 리셋함. 내일 재시도 후, 안되면 GraphQL 도입을 고려해보기.
- 현 시점에서 드는 가장 강한 추측: 어딘가에서 발생하는 typo.
- 결론: typo 맞음. 심지어 api 주소 백틱 부분이었음. 이는 평소 안하던 실수임. 아무래도 다음에는 체크리스트를 돌리면 좋을 듯.

* Examples
- /anime/1/characters_staff - Returns the list of characters and staff
- /anime/1/episodes - Defaults to the 1st page
- /anime/1/episodes/1 - Same as above
- /anime/1/episodes/2 - Returns 2nd page if there's any

Search:
In many cases, if you want to filter results by a condition, you can provide an empty query (q=) with the order_by and sort parameters:

source: https://jikan.docs.apiary.io/#reference/0/anime

- 체크리스트:
1. 오타가 났는가? (camel-case, back tick``, if 에러 says 'not defined'.)
2. 혹시 파일 경로가 잘못 입력되었나?
3. 잠시 10분 휴식 후, 다시 에러메세지 부터 살펴볼 것.