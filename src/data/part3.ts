import type { Chapter } from "./types";
import { v } from "./types";

export const part3: Chapter[] = [
  {
    id: 9,
    title: "東京とソウルとどちらが寒いですか",
    titleKo: "도쿄와 서울 중 어디가 더 춥습니까",
    grammar: "비교 (~と~とどちらが~ですか, ~より~の方が~です), 최상급 (~の中で~が一番~です).",
    youtubeId: "3CLq_6H-EEs",
    vocab: [
      v("u9-kisetsu", "季節", "きせつ", "kisetsu", "계절", "season"),
      v("u9-haru", "春", "はる", "haru", "봄", "spring", "봄에 하루마다 좋네요"),
      v("u9-natsu", "夏", "なつ", "natsu", "여름", "summer", "I eat nuts in summer"),
      v("u9-aki", "秋", "あき", "aki", "가을", "autumn"),
      v("u9-fuyu", "冬", "ふゆ", "fuyu", "겨울", "winter"),
      v("u9-kudamono", "果物", "くだもの", "kudamono", "과일", "fruit"),
      v("u9-budou", "ぶどう", "ぶどう", "budou", "포도", "grape"),
      v("u9-suika", "すいか", "すいか", "suika", "수박", "watermelon"),
      v("u9-meron", "メロン", "メロン", "meron", "멜론", "melon"),
      v("u9-banana", "バナナ", "バナナ", "banana", "바나나", "banana"),
      v("u9-orenji", "オレンジ", "オレンジ", "orenji", "오렌지", "orange"),
      v("u9-mikan", "みかん", "みかん", "mikan", "귤", "mandarin"),
      v("u9-ichigo", "いちご", "いちご", "ichigo", "딸기", "strawberry"),
      v("u9-ringo", "りんご", "りんご", "ringo", "사과", "apple"),
      v("u9-nashi", "なし", "なし", "nashi", "배", "pear", "Naši vole pear"),
      v("u9-momo", "もも", "もも", "momo", "복숭아", "peach", "Momo's butt is like a peach"),
      v("u9-norimono", "乗り物", "のりもの", "norimono", "탈것", "vehicle"),
      v("u9-basu", "バス", "バス", "basu", "버스", "bus"),
      v("u9-takushii", "タクシー", "タクシー", "takushii", "택시", "taxi"),
      v("u9-hikouki", "飛行機", "ひこうき", "hikouki", "비행기", "airplane", "Brdo koka na avionu"),
      v("u9-fune", "船", "ふね", "fune", "배", "ship", "Boat goes through tunnels"),
      v("u9-chikatetsu", "地下鉄", "ちかてつ", "chikatetsu", "지하철", "subway"),
      v("u9-osake", "お酒", "おさけ", "osake", "술", "alcohol"),
      v("u9-shouchuu", "焼酎", "しょうちゅう", "shouchuu", "소주", "shochu"),
      v("u9-biiru", "ビール", "ビール", "biiru", "맥주", "beer"),
      v("u9-wain", "ワイン", "ワイン", "wain", "와인", "wine"),
      v("u9-kakuteru", "カクテル", "カクテル", "kakuteru", "칵테일", "cocktail"),
      v("u9-uisukii", "ウィスキー", "ウィスキー", "uisukii", "위스키", "whiskey"),
      v("u9-suiei", "水泳", "すいえい", "suiei", "수영", "swimming", "Su-wimming"),
      v("u9-yamanobori", "山登り", "やまのぼり", "yamanobori", "등산", "mountain climbing"),
      v("u9-yakyuu", "野球", "やきゅう", "yakyuu", "야구", "baseball"),
      v("u9-sakkaa", "サッカー", "サッカー", "sakkaa", "축구", "soccer"),
      v("u9-tenisu", "テニス", "テニス", "tenisu", "테니스", "tennis"),
      v("u9-gorufu", "ゴルフ", "ゴルフ", "gorufu", "골프", "golf"),
      v("u9-sukii", "スキー", "スキー", "sukii", "스키", "ski"),
      v("u9-sunobo", "スノーボード", "スノーボード", "sunoboodo", "스노보드", "snowboard"),
      v("u9-bouringu", "ボウリング", "ボウリング", "bouringu", "볼링", "bowling"),
      v("u9-basuke", "バスケットボール", "バスケットボール", "basukettobooru", "농구", "basketball"),
      v("u9-dochira", "どちら", "どちら", "dochira", "어느 쪽", "which"),
      v("u9-hou", "方", "ほう", "hou", "~쪽", "side"),
      v("u9-naka", "~の中で", "~のなかで", "no naka de", "~중에서", "among"),
      v("u9-itsu", "いつ", "いつ", "itsu", "언제", "when", "When is it? It's tomorrow"),
      v("u9-ichiban", "一番", "いちばん", "ichiban", "가장, 제일", "the most"),
      v("u9-neko", "猫", "ねこ", "neko", "고양이", "cat"),
      v("u9-inu", "犬", "いぬ", "inu", "개", "dog"),
      v("u9-katakana", "カタカナ", "カタカナ", "katakana", "가타카나", "katakana"),
    ],
    passageJp: `とうきょうとソウルとどちらがさむいですか。
ソウルのほうがさむいです。
スポーツのなかでサッカーがいちばんすきです。
やきゅうよりサッカーのほうがじょうずです。
バスとちかてつとどちらがべんりですか。
ちかてつのほうがべんりです。`,
    passageKo: `도쿄와 서울 중 어디가 더 춥습니까?
서울 쪽이 더 춥습니다.
스포츠 중에서 축구를 가장 좋아합니다.
야구보다 축구를 더 잘합니다.
버스와 지하철 중 어느 쪽이 편리합니까?
지하철 쪽이 더 편리합니다.`,
    reading: [
      {
        id: "u9-r1",
        prompt: "도쿄와 서울 중 어디가 더 춥습니까?",
        choices: ["도쿄", "서울", "같다", "여름의 서울"],
        answerIndex: 1,
      },
      {
        id: "u9-r2",
        prompt: "스포츠 중에서 가장 좋아하는 것은 무엇입니까?",
        choices: ["야구", "스키", "축구", "수영"],
        answerIndex: 2,
      },
      {
        id: "u9-r3",
        prompt: "야구와 축구 중 더 잘하는 것은 무엇입니까?",
        choices: ["야구", "축구", "둘 다", "테니스"],
        answerIndex: 1,
      },
      {
        id: "u9-r4",
        prompt: "버스와 지하철 중 더 편리한 것은 무엇입니까?",
        choices: ["버스", "지하철", "택시", "비행기"],
        answerIndex: 1,
      },
      {
        id: "u9-r5",
        prompt: "「いちばん」이 수식하는 말은 무엇입니까?",
        choices: ["さむい", "すき", "べんり", "じょうず"],
        answerIndex: 1,
      },
    ],
    quiz: [
      {
        id: "u9-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u9-q1-1",
            prompt: "バスとちかてつとどちらがべんりですか。",
            accept: [
              "버스와 지하철 중 어느 쪽이 편리합니까?",
              "버스와 지하철 어느 쪽이 더 편리합니까?",
              "버스와 지하철 중 어느 것이 편리합니까?",
            ],
          },
          {
            id: "u9-q1-2",
            prompt: "やきゅうよりサッカーの方がじょうずです。",
            accept: [
              "야구보다 축구를 더 잘합니다.",
              "야구보다 축구 쪽이 더 잘합니다.",
              "야구보다 축구를 더 잘해요.",
            ],
          },
          {
            id: "u9-q1-3",
            prompt: "かんこくの中でどこが一番ゆうめいですか。",
            accept: [
              "한국 중에서 어디가 가장 유명합니까?",
              "한국에서 어디가 제일 유명합니까?",
              "한국 중에서 어디가 가장 유명해요?",
            ],
          },
        ],
      },
      {
        id: "u9-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u9-q2-1",
            prompt: "일본보다 미국 쪽이 한국에서 멉니까?",
            accept: [
              "日本よりアメリカの方が韓国から遠いですか",
              "にほんよりアメリカのほうがかんこくからとおいですか",
              "日本よりアメリカのほうが韓国から遠いですか",
            ],
          },
          {
            id: "u9-q2-2",
            prompt: "도쿄와 서울과 어느 쪽이 춥습니까?",
            accept: [
              "東京とソウルとどちらが寒いですか",
              "とうきょうとソウルとどちらがさむいですか",
              "東京とソウルとどちらがさむいですか",
            ],
          },
          {
            id: "u9-q2-3",
            prompt: "반 안에서 누가 가장 키가 큽니까?",
            accept: [
              "クラスの中で誰が一番背が高いですか",
              "クラスのなかでだれがいちばんせがたかいですか",
              "クラスの中でだれが一番背が高いですか",
            ],
          },
        ],
      },
      {
        id: "u9-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u9-q3-1", prompt: "季節 (계절)", accept: ["季節", "きせつ"] },
          { id: "u9-q3-2", prompt: "水泳 (수영)", accept: ["水泳", "すいえい"] },
          { id: "u9-q3-3", prompt: "スキー (스키)", accept: ["スキー"] },
          { id: "u9-q3-4", prompt: "サッカー (축구)", accept: ["サッカー"] },
          { id: "u9-q3-5", prompt: "一番 (가장/제일)", accept: ["一番", "いちばん"] },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "このかばんはいくらですか",
    titleKo: "이 가방은 얼마입니까",
    grammar: "9999까지의 수, 가격, 개수 세기 (つ), ~はいくらですか, ください.",
    youtubeId: "0_kkmfptv5M",
    vocab: [
      v("u10-ikutsu", "いくつ", "いくつ", "ikutsu", "몇 개", "how many"),
      v("u10-tenin", "店員", "てんいん", "tenin", "점원", "clerk"),
      v("u10-irasshai", "いらっしゃいませ", "いらっしゃいませ", "irasshaimase", "어서 오세요", "Welcome"),
      v("u10-onigiri", "おにぎり", "おにぎり", "onigiri", "주먹밥", "rice ball"),
      v("u10-raamen", "ラーメン", "ラーメン", "raamen", "라면", "ramen"),
      v("u10-ikura", "いくら", "いくら", "ikura", "얼마", "how much"),
      v("u10-udon", "うどん", "うどん", "udon", "우동", "udon"),
      v("u10-jaa", "じゃあ", "じゃあ", "jaa", "그러면", "well then"),
      v("u10-hot", "ホットコーヒー", "ホットコーヒー", "hotto koohii", "뜨거운 커피", "hot coffee"),
      v("u10-hitotsu", "一つ", "ひとつ", "hitotsu", "하나", "one"),
      v("u10-burger", "ハンバーガー", "ハンバーガー", "hanbaagaa", "햄버거", "hamburger"),
      v("u10-kudasai", "ください", "ください", "kudasai", "주세요", "please give me"),
      v("u10-sarada", "サラダ", "サラダ", "sarada", "샐러드", "salad"),
      v("u10-koora", "コーラ", "コーラ", "koora", "콜라", "cola"),
      v("u10-kyaku", "客", "きゃく", "kyaku", "손님", "customer"),
      v("u10-koohii", "コーヒー", "コーヒー", "koohii", "커피", "coffee"),
      v("u10-doonatsu", "ドーナツ", "ドーナツ", "doonatsu", "도넛", "doughnut"),
      v("u10-zutsu", "ずつ", "ずつ", "zutsu", "~씩", "each"),
      v("u10-aisutii", "アイスティー", "アイスティー", "aisutii", "아이스티", "iced tea"),
      v("u10-zenbu", "全部で", "ぜんぶで", "zenbu de", "전부 해서", "in total"),
      v("u10-korede", "これで", "これで", "kore de", "이것으로", "with this"),
      v("u10-onegai", "お願いします", "おねがいします", "onegaishimasu", "부탁합니다", "please"),
      v("u10-pen", "ボールペン", "ボールペン", "boorupen", "볼펜", "ballpoint pen"),
    ],
    passageJp: `てんいん：いらっしゃいませ。
きゃく：うどんとラーメンをひとつずつください。おにぎりもむっつください。
てんいん：かしこまりました。ぜんぶでせんえんです。
きゃく：このとけいはいくらですか。
てんいん：いちまんさんぜんえんです。`,
    passageKo: `점원: 어서 오세요.
손님: 우동과 라면을 하나씩 주세요. 주먹밥도 여섯 개 주세요.
점원: 알겠습니다. 전부 해서 1000엔입니다.
손님: 이 시계는 얼마입니까?
점원: 13,000엔입니다.`,
    reading: [
      {
        id: "u10-r1",
        prompt: "손님이 하나씩 주문한 것은 무엇입니까?",
        choices: ["주먹밥과 햄버거", "우동과 라면", "콜라와 커피", "샐러드와 도넛"],
        answerIndex: 1,
      },
      {
        id: "u10-r2",
        prompt: "주먹밥은 몇 개입니까?",
        choices: ["1개", "4개", "6개", "8개"],
        answerIndex: 2,
      },
      {
        id: "u10-r3",
        prompt: "음식값 합계는 얼마입니까?",
        choices: ["800엔", "1000엔", "8300엔", "13000엔"],
        answerIndex: 1,
      },
      {
        id: "u10-r4",
        prompt: "시계는 얼마입니까?",
        choices: ["1000엔", "3000엔", "8300엔", "13000엔"],
        answerIndex: 3,
      },
      {
        id: "u10-r5",
        prompt: "먼저 말한 사람은 누구입니까?",
        choices: ["손님", "점원", "선생님", "학생"],
        answerIndex: 1,
      },
    ],
    quiz: [
      {
        id: "u10-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u10-q1-1",
            prompt: "うどんとラーメンひとつずつください。",
            accept: [
              "우동과 라면을 하나씩 주세요.",
              "우동과 라면 하나씩 주세요.",
              "우동이랑 라면을 하나씩 주세요.",
            ],
          },
          {
            id: "u10-q1-2",
            prompt: "そのテレビはいくらですか。",
            accept: ["그 텔레비전은 얼마입니까?", "그 TV는 얼마입니까?", "그 텔레비전은 얼마예요?"],
          },
          {
            id: "u10-q1-3",
            prompt: "おにぎりむっつとハンバーガーよっつください。",
            accept: [
              "주먹밥 6개와 햄버거 4개 주세요.",
              "주먹밥 여섯 개와 햄버거 네 개 주세요.",
              "오니기리 6개와 햄버거 4개 주세요.",
            ],
          },
        ],
      },
      {
        id: "u10-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u10-q2-1",
            prompt: "콜라 2개 주세요.",
            accept: ["コーラを二つください", "コーラをふたつください", "コーラを2つください"],
          },
          {
            id: "u10-q2-2",
            prompt: "시계는 13,000엔입니다.",
            accept: [
              "時計は一万三千円です",
              "とけいはいちまんさんぜんえんです",
              "時計は13000円です",
            ],
          },
          {
            id: "u10-q2-3",
            prompt: "전부 해서 8,300엔입니다.",
            accept: [
              "全部で八千三百円です",
              "ぜんぶではっせんさんびゃくえんです",
              "全部で8300円です",
            ],
          },
        ],
      },
      {
        id: "u10-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u10-q3-1", prompt: "お願いします (부탁합니다)", accept: ["お願いします", "おねがいします"] },
          { id: "u10-q3-2", prompt: "コーラ (콜라)", accept: ["コーラ"] },
          { id: "u10-q3-3", prompt: "ホットコーヒー (따뜻한 커피)", accept: ["ホットコーヒー"] },
          { id: "u10-q3-4", prompt: "アイスティー (아이스티)", accept: ["アイスティー"] },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "この近くに銀行がありますか",
    titleKo: "이 근처에 은행이 있습니까",
    grammar: "위치 명사, ~に~があります / ~に~がいます.",
    youtubeId: "b6aMH7UCpOw",
    vocab: [
      v("u11-ue", "上", "うえ", "ue", "위", "above"),
      v("u11-shita", "下", "した", "shita", "아래", "below"),
      v("u11-mae", "前", "まえ", "mae", "앞", "front"),
      v("u11-ushiro", "後ろ", "うしろ", "ushiro", "뒤", "behind"),
      v("u11-migi", "右", "みぎ", "migi", "오른쪽", "right"),
      v("u11-hidari", "左", "ひだり", "hidari", "왼쪽", "left"),
      v("u11-naka", "中", "なか", "naka", "안", "inside"),
      v("u11-soto", "外", "そと", "soto", "밖", "outside"),
      v("u11-soba", "そば", "そば", "soba", "옆", "beside"),
      v("u11-tonari", "隣", "となり", "tonari", "옆", "next to"),
      v("u11-chikaku", "近く", "ちかく", "chikaku", "근처", "nearby"),
      v("u11-aida", "間", "あいだ", "aida", "사이", "between"),
      v("u11-ginkou", "銀行", "ぎんこう", "ginkou", "은행", "bank"),
      v("u11-tsuukou", "通行人", "つうこうにん", "tsuukounin", "통행인", "passerby"),
      v("u11-honya", "本屋", "ほんや", "honya", "서점", "bookstore"),
      v("u11-nikai", "二階", "にかい", "nikai", "2층", "second floor"),
      v("u11-asoko", "あそこ", "あそこ", "asoko", "저기", "over there"),
      v("u11-toire", "トイレ", "トイレ", "toire", "화장실", "restroom"),
      v("u11-tsukue", "机", "つくえ", "tsukue", "책상", "desk"),
      v("u11-hana", "花", "はな", "hana", "꽃", "flower"),
      v("u11-hondana", "本棚", "ほんだな", "hondana", "책장", "bookshelf"),
      v("u11-beddo", "ベッド", "ベッド", "beddo", "침대", "bed"),
      v("u11-konbini", "コンビニ", "コンビニ", "konbini", "편의점", "convenience store"),
      v("u11-koko", "ここ", "ここ", "koko", "여기", "here"),
      v("u11-soko", "そこ", "そこ", "soko", "거기", "there"),
      v("u11-doko", "どこ", "どこ", "doko", "어디", "where"),
      v("u11-kochira", "こちら", "こちら", "kochira", "이쪽", "this way"),
      v("u11-sochira", "そちら", "そちら", "sochira", "그쪽", "that way"),
      v("u11-achira", "あちら", "あちら", "achira", "저쪽", "over that way"),
      v("u11-dochira", "どちら", "どちら", "dochira", "어느 쪽", "which way"),
    ],
    passageJp: `このちかくにぎんこうがありますか。
はい、えきのまえにあります。
えきのなかにトイレがあります。
わたしのうしろにきむらさんがいます。
デパートのなかにはなやがありません。
カラオケはどこにありますか。
にかいにあります。`,
    passageKo: `이 근처에 은행이 있습니까?
네, 역 앞에 있습니다.
역 안에 화장실이 있습니다.
내 뒤에 기무라 씨가 있습니다.
백화점 안에 꽃집이 없습니다.
노래방은 어디에 있습니까?
2층에 있습니다.`,
    reading: [
      {
        id: "u11-r1",
        prompt: "은행은 어디에 있습니까?",
        choices: ["역 안", "역 앞", "2층", "침대 위"],
        answerIndex: 1,
      },
      {
        id: "u11-r2",
        prompt: "화장실은 어디에 있습니까?",
        choices: ["역 안", "역 뒤", "백화점 안", "근처"],
        answerIndex: 0,
      },
      {
        id: "u11-r3",
        prompt: "기무라 씨는 어디에 있습니까?",
        choices: ["앞", "뒤", "왼쪽", "밖"],
        answerIndex: 1,
      },
      {
        id: "u11-r4",
        prompt: "백화점 안에 없는 것은 무엇입니까?",
        choices: ["은행", "꽃집", "화장실", "책장"],
        answerIndex: 1,
      },
      {
        id: "u11-r5",
        prompt: "노래방은 어디에 있습니까?",
        choices: ["1층", "2층", "역 앞", "침대 아래"],
        answerIndex: 1,
      },
    ],
    quiz: [
      {
        id: "u11-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u11-q1-1",
            prompt: "駅の中にトイレがあります。",
            accept: ["역 안에 화장실이 있습니다.", "역 안에 화장실이 있어요."],
          },
          {
            id: "u11-q1-2",
            prompt: "私の後ろに木村さんがいます。",
            accept: [
              "내 뒤에 기무라 씨가 있습니다.",
              "제 뒤에 기무라 씨가 있습니다.",
              "내 뒤에 키무라 씨가 있습니다.",
            ],
          },
          {
            id: "u11-q1-3",
            prompt: "デパートの中にはなやがありません。",
            accept: [
              "백화점 안에 꽃집이 없습니다.",
              "백화점 안에 꽃집이 없어요.",
              "백화점 안에는 꽃집이 없습니다.",
            ],
          },
        ],
      },
      {
        id: "u11-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u11-q2-1",
            prompt: "침대 위에 강아지가 있습니다.",
            accept: ["ベッドの上に犬がいます", "ベッドのうえにいぬがいます", "ベッドの上にいぬがいます"],
          },
          {
            id: "u11-q2-2",
            prompt: "이 근처에 은행이 있습니까?",
            accept: [
              "この近くに銀行がありますか",
              "このちかくにぎんこうがありますか",
              "この近くにぎんこうがありますか",
            ],
          },
          {
            id: "u11-q2-3",
            prompt: "노래방은 어디에 있습니까?",
            accept: ["カラオケはどこにありますか", "カラオケはどこですか"],
          },
        ],
      },
      {
        id: "u11-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u11-q3-1", prompt: "机 (책상)", accept: ["机", "つくえ"] },
          { id: "u11-q3-2", prompt: "本屋 (서점)", accept: ["本屋", "ほんや"] },
          { id: "u11-q3-3", prompt: "左 (왼쪽)", accept: ["左", "ひだり"] },
          { id: "u11-q3-4", prompt: "友だち (친구)", accept: ["友だち", "ともだち", "友達"] },
          { id: "u11-q3-5", prompt: "二階 (2층)", accept: ["二階", "にかい", "2階"] },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "山田さんは何人家族ですか",
    titleKo: "야마다 씨는 몇 명 가족입니까",
    grammar: "가족 호칭(자신의 가족 / 남의 가족), 인원, 나이(~歳), ~はどんな方ですか.",
    youtubeId: "nl3QKmEefIc",
    vocab: [
      v("u12-sofu", "祖父 / おじいさん", "そふ / おじいさん", "sofu / ojiisan", "할아버지", "grandfather (my / someone else's)"),
      v("u12-sobo", "祖母 / おばあさん", "そぼ / おばあさん", "sobo / obaasan", "할머니", "grandmother (my / someone else's)"),
      v("u12-chichi", "父 / お父さん", "ちち / おとうさん", "chichi / otousan", "아버지", "father (my / someone else's)"),
      v("u12-haha", "母 / お母さん", "はは / おかあさん", "haha / okaasan", "어머니", "mother (my / someone else's)"),
      v("u12-ani", "兄 / お兄さん", "あに / おにいさん", "ani / oniisan", "형, 오빠", "older brother (my / someone else's)"),
      v("u12-ane", "姉 / お姉さん", "あね / おねえさん", "ane / oneesan", "누나, 언니", "older sister (my / someone else's)"),
      v("u12-otouto", "弟 / 弟さん", "おとうと / おとうとさん", "otouto / otoutosan", "남동생", "younger brother (my / someone else's)"),
      v("u12-imouto", "妹 / 妹さん", "いもうと / いもうとさん", "imouto / imoutosan", "여동생", "younger sister (my / someone else's)"),
      v("u12-otto", "夫・主人 / ご主人", "おっと・しゅじん / ごしゅじん", "otto / shujin / goshujin", "남편", "husband (my / someone else's)"),
      v("u12-tsuma", "妻・家内 / 奥さん", "つま・かない / おくさん", "tsuma / kanai / okusan", "아내", "wife (my / someone else's)"),
      v("u12-musuko", "息子 / 息子さん", "むすこ / むすこさん", "musuko / musukosan", "아들", "son (my / someone else's)"),
      v("u12-musume", "娘 / 娘さん", "むすめ / むすめさん", "musume / musumesan", "딸", "daughter (my / someone else's)"),
      v("u12-kazoku", "何人家族", "なんにんかぞく", "nannin kazoku", "몇 명 가족", "how many in the family"),
      v("u12-kata", "方", "かた", "kata", "분", "person (polite)"),
      v("u12-kyoudai", "兄弟", "きょうだい", "kyoudai", "형제", "siblings"),
      v("u12-sai", "歳", "さい", "sai", "~살", "years old"),
      v("u12-yasashii", "優しい", "やさしい", "yasashii", "상냥하다", "gentle"),
      v("u12-minna", "みんな", "みんな", "minna", "모두", "everyone"),
    ],
    passageJp: `やまださんはなんにんかぞくですか。
よにんかぞくです。ちちとははとあねとわたしです。
あねはなんさいですか。
にじゅうよんさいです。やさしいかたです。
はははりょうりがじょうずで、あかるいひとです。
つまとむすめがいます。`,
    passageKo: `야마다 씨는 몇 명 가족입니까?
네 명입니다. 아버지, 어머니, 누나, 그리고 저입니다.
누나는 몇 살입니까?
스물네 살입니다. 상냥한 분입니다.
어머니는 요리를 잘하시고 밝은 사람입니다.
아내와 딸이 있습니다.`,
    reading: [
      {
        id: "u12-r1",
        prompt: "야마다 씨 가족은 몇 명입니까?",
        choices: ["세 명", "네 명", "다섯 명", "여섯 명"],
        answerIndex: 1,
      },
      {
        id: "u12-r2",
        prompt: "가족 구성에 없는 사람은 누구입니까?",
        choices: ["아버지", "어머니", "남동생", "누나"],
        answerIndex: 2,
      },
      {
        id: "u12-r3",
        prompt: "누나는 몇 살입니까?",
        choices: ["20살", "24살", "28살", "글에 없다"],
        answerIndex: 1,
      },
      {
        id: "u12-r4",
        prompt: "어머니는 어떤 사람입니까?",
        choices: ["요리를 잘하고 밝다", "키가 크고 조용하다", "노래를 잘 못한다", "유명하다"],
        answerIndex: 0,
      },
      {
        id: "u12-r5",
        prompt: "글의 마지막 문장에 있는 가족은 누구입니까?",
        choices: ["할아버지와 할머니", "아내와 딸", "형과 남동생", "남편과 아들"],
        answerIndex: 1,
      },
    ],
    quiz: [
      {
        id: "u12-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u12-q1-1",
            prompt: "いもうとさんは、どんなかたですか。",
            accept: [
              "여동생은 어떤 분입니까?",
              "여동생분은 어떤 분입니까?",
              "여동생은 어떤 사람입니까?",
            ],
          },
          {
            id: "u12-q1-2",
            prompt: "はははりょうりがじょうずで、あかるいひとです。",
            accept: [
              "어머니는 요리를 잘하시고, 밝은 사람입니다.",
              "어머니는 요리를 잘하고 밝은 사람입니다.",
              "엄마는 요리를 잘하고 밝은 사람입니다.",
            ],
          },
          {
            id: "u12-q1-3",
            prompt: "つまとむすめがいます。",
            accept: ["아내와 딸이 있습니다.", "아내와 딸이 있어요."],
          },
        ],
      },
      {
        id: "u12-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u12-q2-1",
            prompt: "야마다 씨는 몇 명 가족입니까?",
            accept: [
              "山田さんは何人家族ですか",
              "やまださんはなんにんかぞくですか",
              "山田さんはなんにん家族ですか",
            ],
          },
          {
            id: "u12-q2-2",
            prompt: "언니(누나)는 몇 살입니까?",
            accept: [
              "お姉さんは何歳ですか",
              "おねえさんはなんさいですか",
              "姉は何歳ですか",
            ],
          },
          {
            id: "u12-q2-3",
            prompt: "아버지는 키가 크고 성실한 사람입니다.",
            accept: [
              "父は背が高くて真面目な人です",
              "ちちはせがたかくてまじめなひとです",
              "父は背がたかくて真面目な人です",
            ],
          },
        ],
      },
      {
        id: "u12-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u12-q3-1", prompt: "祖父 (할아버지)", accept: ["祖父", "そふ"] },
          { id: "u12-q3-2", prompt: "祖母 (할머니)", accept: ["祖母", "そぼ"] },
          { id: "u12-q3-3", prompt: "母 (어머니)", accept: ["母", "はは"] },
          { id: "u12-q3-4", prompt: "兄弟 (형제)", accept: ["兄弟", "きょうだい"] },
          { id: "u12-q3-5", prompt: "一人 (1명)", accept: ["一人", "ひとり", "1人"] },
        ],
      },
    ],
  },
];
