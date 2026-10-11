import type { Chapter } from "./types";
import { v } from "./types";

export const part2: Chapter[] = [
  {
    id: 5,
    title: "学校はうちから遠いですか",
    titleKo: "학교는 집에서 멉니까",
    grammar: "い형용사 ~です / ~くありません, い형용사의 명사 수식, 조사 が.",
    youtubeId: "aSit1ku5R9I",
    vocab: [
      v("u5-atsui", "暑い", "あつい", "atsui", "덥다", "hot (weather)"),
      v("u5-samui", "寒い", "さむい", "samui", "춥다", "cold", "Samurai are cold"),
      v("u5-takai", "高い", "たかい", "takai", "비싸다, 높다", "expensive / high"),
      v("u5-yasui", "安い", "やすい", "yasui", "싸다", "cheap", "Yass! So cheap!"),
      v("u5-ookii", "大きい", "おおきい", "ookii", "크다", "big"),
      v("u5-chiisai", "小さい", "ちいさい", "chiisai", "작다", "small", "치과의 사이가 작다"),
      v("u5-chikai", "近い", "ちかい", "chikai", "가깝다", "near", "Chika lives close to me"),
      v("u5-tooi", "遠い", "とおい", "tooi", "멀다", "far", "멀리 가려면 버스 타면 도(길)하다"),
      v("u5-atarashii", "新しい", "あたらしい", "atarashii", "새롭다", "new", "Tata Russian car is brand new"),
      v("u5-furui", "古い", "ふるい", "furui", "낡다, 오래되다", "old", "This fur coat is old"),
      v("u5-kawaii", "かわいい", "かわいい", "kawaii", "귀엽다", "cute"),
      v("u5-muzukashii", "難しい", "むずかしい", "muzukashii", "어렵다", "difficult"),
      v("u5-yasashii", "易しい", "やさしい", "yasashii", "쉽다, 친절하다", "easy / kind", "Ja sašijem – sewing is easy"),
      v("u5-warui", "悪い", "わるい", "warui", "나쁘다", "bad"),
      v("u5-ii", "いい / よい", "いい / よい", "ii / yoi", "좋다", "good"),
      v("u5-gakkou", "学校", "がっこう", "gakkou", "학교", "school", "Kako se ide u školu?"),
      v("u5-uchi", "うち / いえ", "うち / いえ", "uchi / ie", "집", "home", "Učim u kući"),
      v("u5-ooi", "多い", "おおい", "ooi", "많다", "many"),
      v("u5-sukunai", "少ない", "すくない", "sukunai", "적다", "few", "Suck few..."),
      v("u5-tomodachi", "友だち", "ともだち", "tomodachi", "친구", "friend"),
      v("u5-kankokugo", "韓国語", "かんこくご", "kankokugo", "한국어", "Korean language"),
      v("u5-benkyou", "勉強", "べんきょう", "benkyou", "공부", "study"),
      v("u5-oishii", "おいしい", "おいしい", "oishii", "맛있다", "delicious"),
      v("u5-omoshiroi", "おもしろい", "おもしろい", "omoshiroi", "재미있다", "interesting / fun", "어머 싫어, 너무 재밌어!"),
      v("u5-isogashii", "忙しい", "いそがしい", "isogashii", "바쁘다", "busy", "이 소가 바쁘다"),
      v("u5-sushi", "すし", "すし", "sushi", "초밥", "sushi"),
      v("u5-kanji", "漢字", "かんじ", "kanji", "한자", "kanji"),
      v("u5-shigoto", "仕事", "しごと", "shigoto", "일", "work"),
      v("u5-tenki", "天気", "てんき", "tenki", "날씨", "weather", "Thank you for father weather"),
      v("u5-kyou", "今日", "きょう", "kyou", "오늘", "today"),
    ],
    passageJp: `がっこうはうちからとおいですか。
はい、すこしとおいです。
きょうはてんきがいいですが、さむいです。
かんじのべんきょうはむずかしいです。でも、すしはおいしいです。`,
    passageKo: `학교는 집에서 멉니까?
네, 조금 멉니다.
오늘은 날씨가 좋지만 춥습니다.
한자 공부는 어렵습니다. 하지만 초밥은 맛있습니다.`,
    reading: [
      {
        id: "u5-r1",
        prompt: "학교는 집에서 가깝습니까, 멉니까?",
        choices: ["가깝다", "조금 멀다", "매우 가깝다", "글에 없다"],
        answerIndex: 1,
      },
      {
        id: "u5-r2",
        prompt: "오늘 날씨는 어떻습니까?",
        choices: ["나쁘고 덥다", "좋지만 춥다", "흐리고 바쁘다", "좋고 덥다"],
        answerIndex: 1,
      },
      {
        id: "u5-r3",
        prompt: "한자 공부는 어떻습니까?",
        choices: ["쉽다", "재미있다", "어렵다", "맛있다"],
        answerIndex: 2,
      },
      {
        id: "u5-r4",
        prompt: "초밥에 대한 말은 무엇입니까?",
        choices: ["비싸다", "맛있다", "낡았다", "멀다"],
        answerIndex: 1,
      },
      {
        id: "u5-r5",
        prompt: "이 글에서 조사 が가 붙은 말은 무엇입니까?",
        choices: ["がっこう", "てんき", "すし", "かんじ"],
        answerIndex: 1,
      },
    ],
    quiz: [
      {
        id: "u5-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u5-q1-1",
            prompt: "がっこうはうちからとおいですか。",
            accept: ["학교는 집에서 멉니까?", "학교는 집에서 먼가요?", "학교는 집으로부터 멉니까?"],
          },
          {
            id: "u5-q1-2",
            prompt: "かんこくごのべんきょうはむずかしくありませんか。",
            accept: [
              "한국어 공부는 어렵지 않습니까?",
              "한국어 공부는 어렵지 않은가요?",
              "한국어 공부는 어렵지 않아요?",
            ],
          },
          {
            id: "u5-q1-3",
            prompt: "きょうは、てんきがいいですが、さむいです。",
            accept: [
              "오늘은 날씨가 좋지만, 춥습니다.",
              "오늘은 날씨가 좋지만 춥습니다.",
              "오늘은 날씨가 좋으나 춥습니다.",
            ],
          },
        ],
      },
      {
        id: "u5-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u5-q2-1",
            prompt: "컴퓨터는 비싸다.",
            accept: ["パソコンは高いです", "パソコンはたかいです", "コンピュータは高いです"],
          },
          {
            id: "u5-q2-2",
            prompt: "한자는 쉽지 않습니다.",
            accept: [
              "漢字は易しくありません",
              "かんじはやさしくありません",
              "漢字はやさしくありません",
            ],
          },
          {
            id: "u5-q2-3",
            prompt: "내 핸드폰은 낡았지만, 좋습니다.",
            accept: [
              "私のケータイは古いですが、いいです",
              "わたしのケータイはふるいですが、いいです",
              "私の携帯は古いですが、いいです",
            ],
          },
        ],
      },
      {
        id: "u5-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u5-q3-1", prompt: "大きい (크다)", accept: ["大きい", "おおきい"] },
          { id: "u5-q3-2", prompt: "安い (싸다)", accept: ["安い", "やすい"] },
          { id: "u5-q3-3", prompt: "小さい (작다)", accept: ["小さい", "ちいさい"] },
          { id: "u5-q3-4", prompt: "かわいい (귀엽다)", accept: ["かわいい", "可愛い"] },
          { id: "u5-q3-5", prompt: "ともだち (친구)", accept: ["ともだち", "友だち", "友達"] },
          { id: "u5-q3-6", prompt: "べんきょう (공부)", accept: ["べんきょう", "勉強"] },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "この白いケータイは軽くていいですね",
    titleKo: "이 하얀 휴대폰은 가볍고 좋네요",
    grammar: "い형용사의 명사 수식, ~くて (~하고), ~はどうですか.",
    youtubeId: "4zbwvqVn0UY",
    vocab: [
      v("u6-mijikai", "短い", "みじかい", "mijikai", "짧다", "short", "The musical is short"),
      v("u6-hiroi", "広い", "ひろい", "hiroi", "넓다", "spacious", "Heroes have 넓은 어깨"),
      v("u6-semai", "狭い", "せまい", "semai", "좁다", "narrow", "Semi-sth is a smaller version"),
      v("u6-kowai", "怖い", "こわい", "kowai", "무섭다", "scary", "You're a psychopath, it's scary"),
      v("u6-urusai", "うるさい", "うるさい", "urusai", "시끄럽다", "noisy"),
      v("u6-omoi", "重い", "おもい", "omoi", "무겁다", "heavy", "어머니가 무거운 가방을 들다"),
      v("u6-hayai", "速い / 早い", "はやい", "hayai", "빠르다, 이르다", "fast / early", "Hai-yaah! Fast slap"),
      v("u6-karui", "軽い", "かるい", "karui", "가볍다", "light", "This car is light"),
      v("u6-tsuyoi", "強い", "つよい", "tsuyoi", "강하다, 세다", "strong"),
      v("u6-takai", "高い", "たかい", "takai", "높다", "high / tall"),
      v("u6-hikui", "低い", "ひくい", "hikui", "낮다", "low", "Hicks are short"),
      v("u6-akarui", "明るい", "あかるい", "akarui", "밝다", "bright", "A car is bright"),
      v("u6-kurai", "暗い", "くらい", "kurai", "어둡다", "dark", "Kraj je mračan"),
      v("u6-kuroi", "黒い", "くろい", "kuroi", "까맣다", "black"),
      v("u6-shiroi", "白い", "しろい", "shiroi", "하얗다", "white", "하얀 사람을 싫어해!"),
      v("u6-nagai", "長い", "ながい", "nagai", "길다", "long", "나가면 길이 길다"),
      v("u6-akai", "赤い", "あかい", "akai", "빨갛다", "red", "아까 엉덩이가 빨간 원숭이를 봤다"),
      v("u6-aoi", "青い", "あおい", "aoi", "파랗다", "blue"),
      v("u6-amai", "甘い", "あまい", "amai", "달다", "sweet", "아마 달아요"),
      v("u6-karai", "辛い", "からい", "karai", "맵다", "spicy"),
      v("u6-kono", "この", "この", "kono", "이", "this"),
      v("u6-sono", "その", "その", "sono", "그", "that"),
      v("u6-ano", "あの", "あの", "ano", "저", "that over there"),
      v("u6-dono", "どの", "どの", "dono", "어느", "which"),
      v("u6-demo", "でも", "でも", "demo", "하지만", "but"),
      v("u6-ryouri", "料理", "りょうり", "ryouri", "요리", "cooking / cuisine"),
      v("u6-keeki", "ケーキ", "ケーキ", "keeki", "케이크", "cake"),
      v("u6-mise", "店", "みせ", "mise", "가게", "shop", "The gake is full of 미세먼지"),
      v("u6-donna", "どんな", "どんな", "donna", "어떤", "what kind of"),
      v("u6-eiga", "映画", "えいが", "eiga", "영화", "movie"),
      v("u6-kuruma", "車", "くるま", "kuruma", "자동차", "car", "구름 자동차"),
      v("u6-sega", "背が高い", "せがたかい", "se ga takai", "키가 크다", "tall"),
      v("u6-hito", "人", "ひと", "hito", "사람", "person"),
      v("u6-juusu", "ジュース", "ジュース", "juusu", "주스", "juice"),
      v("u6-heya", "部屋", "へや", "heya", "방", "room"),
    ],
    passageJp: `このしろいケータイはかるくていいですね。
そのみせはどうですか。
ひろくてあかるいです。でも、すこしうるさいです。
このケーキはあまくておいしいです。`,
    passageKo: `이 하얀 휴대폰은 가볍고 좋네요.
그 가게는 어떻습니까?
넓고 밝습니다. 하지만 조금 시끄럽습니다.
이 케이크는 달고 맛있습니다.`,
    reading: [
      {
        id: "u6-r1",
        prompt: "하얀 휴대폰은 어떻습니까?",
        choices: ["무겁고 비싸다", "가볍고 좋다", "좁고 어둡다", "맵고 길다"],
        answerIndex: 1,
      },
      {
        id: "u6-r2",
        prompt: "가게는 어떻습니까?",
        choices: ["좁고 어둡다", "넓고 밝다", "작고 조용하다", "하얗고 달다"],
        answerIndex: 1,
      },
      {
        id: "u6-r3",
        prompt: "가게의 단점은 무엇입니까?",
        choices: ["비싸다", "조금 시끄럽다", "맵다", "멀다"],
        answerIndex: 1,
      },
      {
        id: "u6-r4",
        prompt: "케이크는 어떻습니까?",
        choices: ["쓰고 차갑다", "달고 맛있다", "짜고 무겁다", "빨갛고 작다"],
        answerIndex: 1,
      },
      {
        id: "u6-r5",
        prompt: "「でも」가 연결하는 내용은 무엇입니까?",
        choices: ["넓고 밝은 점과 시끄러운 점", "휴대폰과 케이크", "하얀색과 검은색", "사람과 가게"],
        answerIndex: 0,
      },
    ],
    quiz: [
      {
        id: "u6-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u6-q1-1",
            prompt: "そのみせはどうですか。",
            accept: ["그 가게는 어떻습니까?", "그 가게는 어때요?", "그 가게는 어떠한가요?"],
          },
          {
            id: "u6-q1-2",
            prompt: "たなかさんはどんなひとですか。",
            accept: ["다나카 씨는 어떤 사람입니까?", "다나카 씨는 어떤 사람인가요?", "다나카씨는 어떤 사람입니까?"],
          },
          {
            id: "u6-q1-3",
            prompt: "すずきさんのくるまはくろくて、おおきいです。",
            accept: [
              "스즈키 씨의 차는 까맣고 큽니다.",
              "스즈키 씨의 자동차는 검고 큽니다.",
              "스즈키씨의 차는 까맣고 큽니다.",
            ],
          },
        ],
      },
      {
        id: "u6-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u6-q2-1",
            prompt: "그 하얀 핸드폰은 야마다 씨의 것입니까?",
            accept: [
              "その白いケータイは山田さんのですか",
              "そのしろいケータイはやまださんのですか",
              "その白い携帯は山田さんのですか",
            ],
          },
          {
            id: "u6-q2-2",
            prompt: "이것은 한자가 많은 책입니다.",
            accept: ["これは漢字が多い本です", "これはかんじがおおいほんです", "これは漢字が多いほんです"],
          },
          {
            id: "u6-q2-3",
            prompt: "이 케이크는 달고 맛있습니다.",
            accept: [
              "このケーキは甘くておいしいです",
              "このケーキはあまくておいしいです",
              "このケーキは甘くて美味しいです",
            ],
          },
        ],
      },
      {
        id: "u6-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u6-q3-1", prompt: "明るい (밝다)", accept: ["明るい", "あかるい"] },
          { id: "u6-q3-2", prompt: "うるさい (시끄럽다)", accept: ["うるさい"] },
          { id: "u6-q3-3", prompt: "辛い (맵다)", accept: ["辛い", "からい"] },
          { id: "u6-q3-4", prompt: "広い (넓다)", accept: ["広い", "ひろい"] },
          { id: "u6-q3-5", prompt: "高い (높다)", accept: ["高い", "たかい"] },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "カラオケが好きですか",
    titleKo: "노래방을 좋아합니까",
    grammar: "な형용사 ~です / ~じゃありません, ~が上手だ.",
    youtubeId: "Z2q6IbSbcdQ",
    vocab: [
      v("u7-suki", "好きだ", "すきだ", "suki da", "좋아하다", "to like"),
      v("u7-kirai", "嫌いだ", "きらいだ", "kirai da", "싫어하다", "to dislike", "Amela hates Kira"),
      v("u7-jouzu", "上手だ", "じょうずだ", "jouzu da", "잘하다", "to be good at", "Joe's good at everything"),
      v("u7-heta", "下手だ", "へただ", "heta da", "잘 못하다", "to be poor at", "I'm not good at entai"),
      v("u7-benri", "便利だ", "べんりだ", "benri da", "편리하다", "convenient"),
      v("u7-fuben", "不便だ", "ふべんだ", "fuben da", "불편하다", "inconvenient"),
      v("u7-shizuka", "静かだ", "しずかだ", "shizuka da", "조용하다", "quiet", "She's a quiet girl"),
      v("u7-nigiyaka", "賑やかだ", "にぎやかだ", "nigiyaka da", "번화하다", "lively"),
      v("u7-shinsetsu", "親切だ", "しんせつだ", "shinsetsu da", "친절하다", "kind", "People with new sets of teeth smile and are friendly"),
      v("u7-majime", "真面目だ", "まじめだ", "majime da", "성실하다", "serious / diligent"),
      v("u7-genki", "元気だ", "げんきだ", "genki da", "건강하다", "healthy / energetic"),
      v("u7-joubu", "丈夫だ", "じょうぶだ", "joubu da", "튼튼하다", "sturdy", "Strong men are OK"),
      v("u7-kirei", "きれいだ", "きれいだ", "kirei da", "깨끗하다, 예쁘다", "clean / pretty"),
      v("u7-hansamu", "ハンサムだ", "ハンサムだ", "hansamu da", "잘생기다", "handsome"),
      v("u7-yuumei", "有名だ", "ゆうめいだ", "yuumei da", "유명하다", "famous"),
      v("u7-kantan", "簡単だ", "かんたんだ", "kantan da", "간단하다", "simple"),
      v("u7-hima", "暇だ", "ひまだ", "hima da", "한가하다", "free (not busy)", "한가하려면 힘을 내야 한다"),
      v("u7-rippa", "立派だ", "りっぱだ", "rippa da", "훌륭하다", "excellent", "She ripped an excellent fort"),
      v("u7-shinsen", "新鮮だ", "しんせんだ", "shinsen da", "신선하다", "fresh"),
      v("u7-taihen", "大変だ", "たいへんだ", "taihen da", "힘들다", "tough", "Thai hen, that hard ham is giving me a hard time"),
      v("u7-koko", "ここ", "ここ", "koko", "여기", "here"),
      v("u7-machi", "街", "まち", "machi", "거리", "town / street", "I walk on this road muchy"),
      v("u7-totemo", "とても", "とても", "totemo", "매우, 아주", "very"),
      v("u7-amari", "あまり", "あまり", "amari", "그다지 (부정)", "not very", "Amari is not that fun"),
      v("u7-nihongo", "日本語", "にほんご", "nihongo", "일본어", "Japanese language"),
      v("u7-piano", "ピアノ", "ピアノ", "piano", "피아노", "piano"),
      v("u7-karaoke", "カラオケ", "カラオケ", "karaoke", "노래방", "karaoke"),
      v("u7-uta", "歌", "うた", "uta", "노래", "song"),
      v("u7-kyou", "今日", "きょう", "kyou", "오늘", "today"),
      v("u7-hito", "人", "ひと", "hito", "사람", "person"),
      v("u7-eigo", "英語", "えいご", "eigo", "영어", "English"),
      v("u7-kuruma", "車", "くるま", "kuruma", "자동차", "car"),
      v("u7-sports", "スポーツ", "スポーツ", "supootsu", "스포츠", "sports"),
    ],
    passageJp: `カラオケがすきですか。
はい、うたがすきです。でも、わたしはうたがへたです。
にほんごはかんたんです。
ソウルはにぎやかですか。
はい、とてもにぎやかです。`,
    passageKo: `노래방을 좋아합니까?
네, 노래를 좋아합니다. 하지만 저는 노래를 잘 못합니다.
일본어는 간단합니다.
서울은 번화합니까?
네, 매우 번화합니다.`,
    reading: [
      {
        id: "u7-r1",
        prompt: "화자는 무엇을 좋아합니까?",
        choices: ["피아노", "노래", "자동차", "영어"],
        answerIndex: 1,
      },
      {
        id: "u7-r2",
        prompt: "화자는 노래를 잘합니까?",
        choices: ["잘한다", "잘 못한다", "아주 잘한다", "모른다"],
        answerIndex: 1,
      },
      {
        id: "u7-r3",
        prompt: "일본어는 어떻습니까?",
        choices: ["어렵다", "간단하다", "조용하다", "유명하다"],
        answerIndex: 1,
      },
      {
        id: "u7-r4",
        prompt: "서울은 어떻습니까?",
        choices: ["조용하다", "불편하다", "매우 번화하다", "한가하다"],
        answerIndex: 2,
      },
      {
        id: "u7-r5",
        prompt: "「でも」 뒤의 내용은 무엇입니까?",
        choices: ["노래를 잘 못한다", "서울이 번화하다", "일본어가 간단하다", "노래방을 싫어한다"],
        answerIndex: 0,
      },
    ],
    quiz: [
      {
        id: "u7-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u7-q1-1",
            prompt: "にほんごはかんたんです。",
            accept: ["일본어는 간단합니다.", "일본어는 쉽습니다.", "일본어는 간단해요."],
          },
          {
            id: "u7-q1-2",
            prompt: "私はからいりょうりがすきじゃありません。",
            accept: [
              "저는 매운 요리를 좋아하지 않습니다.",
              "나는 매운 요리를 좋아하지 않습니다.",
              "저는 매운 요리를 안 좋아합니다.",
            ],
          },
          {
            id: "u7-q1-3",
            prompt: "ソウルはにぎやかですか。",
            accept: ["서울은 번화합니까?", "서울은 번화한가요?", "서울은 북적입니까?"],
          },
        ],
      },
      {
        id: "u7-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u7-q2-1",
            prompt: "여기는 그다지 조용하지 않습니다.",
            accept: [
              "ここはあまり静かじゃありません",
              "ここはあまりしずかじゃありません",
              "ここはあまり静かではありません",
            ],
          },
          {
            id: "u7-q2-2",
            prompt: "그는 잘생겼습니까?",
            accept: ["彼はハンサムですか", "かれはハンサムですか"],
          },
          {
            id: "u7-q2-3",
            prompt: "나는 노래를 잘 못한다.",
            accept: ["私は歌が下手です", "わたしはうたがへたです", "僕は歌が下手です"],
          },
        ],
      },
      {
        id: "u7-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u7-q3-1", prompt: "にぎやかだ (번화하다)", accept: ["にぎやかだ", "賑やかだ"] },
          { id: "u7-q3-2", prompt: "丈夫だ (튼튼하다)", accept: ["丈夫だ", "じょうぶだ"] },
          { id: "u7-q3-3", prompt: "不便だ (불편하다)", accept: ["不便だ", "ふべんだ"] },
          { id: "u7-q3-4", prompt: "元気だ (건강하다)", accept: ["元気だ", "げんきだ"] },
          { id: "u7-q3-5", prompt: "유명하다", accept: ["有名だ", "ゆうめいだ"] },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "きれいなレストランですね",
    titleKo: "깨끗한 레스토랑이네요",
    grammar: "な형용사의 명사 수식 (~な), ~で (~하고), ~から (~이기 때문에).",
    youtubeId: "S_WZQHflaxM",
    vocab: [
      v("u8-daisuki", "大好きだ", "だいすきだ", "daisuki da", "아주 좋아하다", "to love"),
      v("u8-doushite", "どうして", "どうして", "doushite", "왜", "why"),
      v("u8-heta", "下手だ", "へただ", "heta da", "서투르다", "unskilled"),
      v("u8-tabemono", "食べ物", "たべもの", "tabemono", "음식", "food"),
      v("u8-resutoran", "レストラン", "レストラン", "resutoran", "레스토랑", "restaurant"),
      v("u8-wasabi", "わさび", "わさび", "wasabi", "고추냉이", "wasabi"),
      v("u8-heya", "部屋", "へや", "heya", "방", "room"),
      v("u8-chikatetsu", "地下鉄", "ちかてつ", "chikatetsu", "지하철", "subway"),
      v("u8-kouen", "公園", "こうえん", "kouen", "공원", "park"),
      v("u8-sashimi", "刺身", "さしみ", "sashimi", "회", "sashimi"),
      v("u8-shigoto", "仕事", "しごと", "shigoto", "일", "work"),
      v("u8-kodomo", "子ども", "こども", "kodomo", "아이", "child"),
      v("u8-ringo", "りんご", "りんご", "ringo", "사과", "apple"),
      v("u8-kurasu", "クラス", "クラス", "kurasu", "반", "class"),
      v("u8-dorama", "ドラマ", "ドラマ", "dorama", "드라마", "drama"),
      v("u8-sutoorii", "ストーリー", "ストーリー", "sutoorii", "이야기", "story"),
    ],
    passageJp: `きれいなレストランですね。
どうしてですか。
しんせんなさしみがおいしいからです。
やまださんはあかるくてしんせつだから、すきです。
このくるまは、りっぱで、じょうぶです。`,
    passageKo: `깨끗한 레스토랑이네요.
왜요?
신선한 회가 맛있기 때문입니다.
야마다 씨는 밝고 친절해서 좋아합니다.
이 차는 훌륭하고 튼튼합니다.`,
    reading: [
      {
        id: "u8-r1",
        prompt: "레스토랑은 어떻습니까?",
        choices: ["시끄럽다", "깨끗하다", "비싸다", "좁다"],
        answerIndex: 1,
      },
      {
        id: "u8-r2",
        prompt: "왜 그 레스토랑을 말합니까?",
        choices: ["신선한 회가 맛있어서", "사람이 적어서", "지하철 옆이라서", "사과가 있어서"],
        answerIndex: 0,
      },
      {
        id: "u8-r3",
        prompt: "야마다 씨를 좋아하는 이유는 무엇입니까?",
        choices: ["유명해서", "밝고 친절해서", "키가 커서", "요리를 못해서"],
        answerIndex: 1,
      },
      {
        id: "u8-r4",
        prompt: "차는 어떻습니까?",
        choices: ["낡고 작다", "훌륭하고 튼튼하다", "빠르고 맵다", "조용하고 비싸다"],
        answerIndex: 1,
      },
      {
        id: "u8-r5",
        prompt: "「だから」가 쓰인 문장의 결과는 무엇입니까?",
        choices: ["회가 신선하다", "야마다 씨를 좋아한다", "차가 튼튼하다", "레스토랑이 깨끗하다"],
        answerIndex: 1,
      },
    ],
    quiz: [
      {
        id: "u8-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u8-q1-1",
            prompt: "このくるまは、りっぱで、じょうぶです。",
            accept: ["이 자동차는 훌륭하고 튼튼합니다.", "이 차는 훌륭하고 튼튼합니다."],
          },
          {
            id: "u8-q1-2",
            prompt: "やまださんはあかるくてしんせつだから、すきです。",
            accept: [
              "야마다 씨는 밝고 친절해서 좋아합니다.",
              "야마다 씨는 밝고 친절하기 때문에 좋아합니다.",
              "야마다씨는 밝고 친절해서 좋아합니다.",
            ],
          },
          {
            id: "u8-q1-3",
            prompt: "これはしんせんなさしみです。",
            accept: ["이것은 신선한 회입니다.", "이것은 신선한 사시미입니다."],
          },
        ],
      },
      {
        id: "u8-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u8-q2-1",
            prompt: "그녀는 조용한 사람입니다.",
            accept: ["彼女は静かな人です", "かのじょはしずかなひとです", "彼女はしずかな人です"],
          },
          {
            id: "u8-q2-2",
            prompt: "유명한 백화점이기 때문에 사람이 많습니다.",
            accept: [
              "有名なデパートだから、人が多いです",
              "ゆうめいなデパートだから、ひとがおおいです",
              "有名なデパートだから人が多いです",
            ],
          },
          {
            id: "u8-q2-3",
            prompt: "서울 지하철은 편리하고 빠릅니다.",
            accept: [
              "ソウルの地下鉄は便利で速いです",
              "ソウルのちかてつはべんりではやいです",
              "ソウルの地下鉄は便利で早いです",
            ],
          },
        ],
      },
      {
        id: "u8-q3",
        title: "Q3",
        direction: "일본어로 쓰세요.",
        items: [
          { id: "u8-q3-1", prompt: "嫌いだ (싫어하다)", accept: ["嫌いだ", "きらいだ"] },
          { id: "u8-q3-2", prompt: "簡単だ (간단하다)", accept: ["簡単だ", "かんたんだ"] },
          { id: "u8-q3-3", prompt: "辛い (맵다)", accept: ["辛い", "からい"] },
          { id: "u8-q3-4", prompt: "こうえん (공원)", accept: ["こうえん", "公園"] },
          { id: "u8-q3-5", prompt: "くるま (자동차)", accept: ["くるま", "車"] },
        ],
      },
    ],
  },
];
