# ARM

> AnimeID Relational Mapper

ARM は、世界最大級のアニメデータベースサービスである MyAnimeList と Kitsu と AniList の AnimeID を紐付けるサービスです。
このサービスは、ウェブサイトと JSON API を提供します。

![demo](./images/arm.gif)

## モチベーション

私はアニメが好きです。それに、アニメに関するウェブサービスが好きです。
すでに世の中には、素晴らしいアニメに関するウェブサービスがたくさんありますが、更に増えて欲しい、増やしていきたいと考えています。
アニメに関するウェブサービスをつくるとき、私は MyAnimeList や Kitsu や AniList といった大手のアニメデータベースサービスの情報を利用します。

アニメデータベースサービスには、それぞれ強みや特徴があります。

MyAnimeList は、そのユーザー数が故に評価の信憑性が高いです。
Kitsu は、ストリーミングサービスの情報が豊富です。
AniList は、アニメ画像系サービスとの連携がよくなされています。

私はこれらのサービスの力を借りてサービスをつくるわけですが、ひとつ困ったことがあります。
それぞれサービスが相互に紐付いていないので、全ての強みを活かしきれないのです。

そこで、私は ARM をつくりました。
これからは、MyAnimeList と Kitsu と AniList のサービスをすぐに紐付けることができます。

将来的に Annict への対応も予定しています。

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

## 著者

[@p-chan](https://github.com/p-chan)

## ライセンス

[MIT](LICENSE)
