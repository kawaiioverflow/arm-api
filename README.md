# arm-api

> An API to relational mapping Anime ID's between MAL, Annict, AniList and Syobocal

## Usage

### Request

```
[GET] https://arm.kawaiioverflow.com/api/ids?service=[mal|annict|anilist|syobocal]&id=[number]
```

### Response

```json
{
  "mal_id": number,
  "annict_id": number,
  "syobocal_tid": number,
  "anilist_id": number
}
```

Notice: All properties are nullable.

## Author

[@p-chan](https://github.com/p-chan)

## License

[MIT](LICENSE)
