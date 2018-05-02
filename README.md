# ARM

> AnimeID Relational Mapper

ARM は、世界最大級のアニメデータベースサービスである MyAnimeList と Kitsu と AniList の AnimeID を紐付けるサービスです。
ウェブサイトだけでなく JSON API も提供しているため、それぞれのアニメデータベースサービスの強みを活かしたサービスをつくるときに役立ちます。

![demo](./resources/demo.gif)

## サポートしているサービスたち

- MyAnimeList
- Kitsu
- AniList

## インストール

```
$ git clone https://github.com/p-chan/arm.git
$ cd arm
$ npm install
$ npm start
```

## 開発者向けドキュメント

ARM は、開発者向けに JSON API を提供しています。

### エンドポイント

以下のエンドポイントに GET でリクエストします。

```
https://arm.now.sh/api/v1/search
```

### パラメーター

パラメーターは、以下の2つを指定します。

| Parameter | Value | Required |
|:---|:---|:---|
| type | `mal` or `kitsu` or `anilist` | `true` |
| id | number | `true` |


## 著者

[@p-chan](https://github.com/p-chan)

## ライセンス

[MIT](LICENSE)
