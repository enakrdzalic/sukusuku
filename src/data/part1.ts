import type { Chapter } from "./types";
import { v } from "./types";

export const part1: Chapter[] = [
  {
    id: 1,
    title: "はじめまして",
    titleKo: "첫인사",
    grammar:
      "기본 인사와 자기소개, 정중 종결(~습니다/입니다), 조사 は(은/는).",
    youtubeId: "ncJU0OK9xTA",
    vocab: [
      v("u1-hajimemashite", "はじめまして", "はじめまして", "hajimemashite", "처음 뵙겠습니다", "Nice to meet you"),
      v("u1-yoroshiku", "どうぞよろしくお願いします", "どうぞよろしくおねがいします", "douzo yoroshiku onegaishimasu", "아무쪼록 잘 부탁합니다", "Please treat me kindly"),
      v("u1-kochirakoso", "こちらこそ", "こちらこそ", "kochirakoso", "저야말로", "Likewise / the pleasure is mine"),
      v("u1-ohayou", "おはようございます", "おはようございます", "ohayou gozaimasu", "안녕하세요 (아침)", "Good morning"),
      v("u1-konnichiwa", "こんにちは", "こんにちは", "konnichiwa", "안녕하세요 (낮)", "Hello / good afternoon"),
      v("u1-konbanwa", "こんばんは", "こんばんは", "konbanwa", "안녕하세요 (저녁)", "Good evening"),
      v("u1-sayounara", "さようなら", "さようなら", "sayounara", "안녕히 가세요 / 안녕히 계세요", "Goodbye"),
      v("u1-arigatou", "ありがとうございます", "ありがとうございます", "arigatou gozaimasu", "감사합니다", "Thank you"),
      v("u1-douitashi", "どういたしまして", "どういたしまして", "dou itashimashite", "천만에요", "You're welcome"),
      v("u1-sumimasen", "すみません", "すみません", "sumimasen", "죄송합니다 / 저기요", "Excuse me / I'm sorry"),
      v("u1-tadaima", "ただいま", "ただいま", "tadaima", "다녀왔습니다", "I'm home"),
      v("u1-okaeri", "お帰りなさい", "おかえりなさい", "okaerinasai", "어서 돌아오세요", "Welcome home"),
      v("u1-ogenki", "お元気ですか", "おげんきですか", "ogenki desu ka", "잘 지내세요?", "How are you?"),
      v("u1-okage", "はい、おかげさまで", "はい、おかげさまで", "hai, okagesama de", "예, 덕분에요", "Yes, thanks to you"),
      v("u1-itadakimasu", "いただきます", "いただきます", "itadakimasu", "잘 먹겠습니다", "Thank you for the meal (before eating)"),
      v("u1-gochisou", "ごちそうさまでした", "ごちそうさまでした", "gochisousama deshita", "잘 먹었습니다", "Thank you for the meal (after eating)"),
      v("u1-ittekimasu", "いってきます", "いってきます", "ittekimasu", "다녀오겠습니다", "I'm off / I'll go and come back"),
      v("u1-itterasshai", "いってらっしゃい", "いってらっしゃい", "itterasshai", "잘 다녀오세요", "Take care / see you later"),
    ],
    passageJp: `ゆみ：おはようございます。はじめまして。ゆみです。どうぞよろしくおねがいします。
たなか：おはようございます。こちらこそ、よろしくおねがいします。
ゆみ：いってきます。
たなか：いってらっしゃい。
ゆみ：ただいま。
たなか：お帰りなさい。お元気ですか。
ゆみ：はい、おかげさまで。`,
    passageKo: `유미: 좋은 아침입니다. 처음 뵙겠습니다. 유미입니다. 잘 부탁드립니다.
다나카: 좋은 아침입니다. 저야말로 잘 부탁드립니다.
유미: 다녀오겠습니다.
다나카: 잘 다녀오세요.
유미: 다녀왔습니다.
다나카: 어서 오세요. 잘 지내셨어요?
유미: 예, 덕분에요.`,
    reading: [
      {
        id: "u1-r1",
        prompt: "유미가 자신을 소개하며 한 말은 무엇입니까?",
        choices: ["はじめまして", "さようなら", "いただきます", "すみません"],
        answerIndex: 0,
      },
      {
        id: "u1-r2",
        prompt: "다나카의 답에 들어 있는 표현은 무엇입니까?",
        choices: ["どういたしまして", "こちらこそ", "ごちそうさま", "ただいま"],
        answerIndex: 1,
      },
      {
        id: "u1-r3",
        prompt: "유미가 외출할 때 한 말은 무엇입니까?",
        choices: ["いってらっしゃい", "いってきます", "おかえりなさい", "こんにちは"],
        answerIndex: 1,
      },
      {
        id: "u1-r4",
        prompt: "집에 돌아온 유미의 말은 무엇입니까?",
        choices: ["こんばんは", "ありがとう", "ただいま", "さようなら"],
        answerIndex: 2,
      },
      {
        id: "u1-r5",
        prompt: "「はい、おかげさまで」는 무엇에 대한 대답입니까?",
        choices: ["잘 지내냐는 질문", "이름을 묻는 질문", "시간을 묻는 질문", "가격을 묻는 질문"],
        answerIndex: 0,
      },
    ],
    quiz: [
      {
        id: "u1-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u1-q1-1",
            prompt: "はじめまして。どうぞよろしくおねがいします。",
            accept: [
              "처음 뵙겠습니다. 잘 부탁드립니다.",
              "처음 뵙겠습니다. 아무쪼록 잘 부탁합니다.",
              "처음 뵙겠습니다 잘 부탁드립니다",
            ],
          },
          {
            id: "u1-q1-2",
            prompt: "いいえ、どういたしまして。",
            accept: ["아니오, 천만에요.", "아니요, 천만에요.", "아니오 천만에요"],
          },
          {
            id: "u1-q1-3",
            prompt: "どうもありがとうございます。",
            accept: ["정말 감사합니다.", "대단히 감사합니다.", "매우 감사합니다."],
          },
          {
            id: "u1-q1-4",
            prompt: "はい、おかげさまで。",
            accept: ["예, 덕분에요.", "네, 덕분입니다.", "예 덕분에"],
          },
        ],
      },
      {
        id: "u1-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u1-q2-1",
            prompt: "안녕히 가세요 / 안녕히 계세요.",
            accept: ["さようなら", "さよなら"],
          },
          {
            id: "u1-q2-2",
            prompt: "다녀오겠습니다.",
            accept: ["いってきます", "行ってきます"],
          },
          {
            id: "u1-q2-3",
            prompt: "잘 다녀오세요.",
            accept: ["いってらっしゃい", "行ってらっしゃい"],
          },
          {
            id: "u1-q2-4",
            prompt: "다녀왔습니다.",
            accept: ["ただいま"],
          },
          {
            id: "u1-q2-5",
            prompt: "어서 돌아오세요.",
            accept: ["お帰りなさい", "おかえりなさい"],
          },
          {
            id: "u1-q2-6",
            prompt: "잘 먹겠습니다.",
            accept: ["いただきます", "頂きます"],
          },
          {
            id: "u1-q2-7",
            prompt: "잘 먹었습니다.",
            accept: ["ごちそうさまでした", "御馳走様でした"],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "私は大学生です",
    titleKo: "저는 대학생입니다",
    grammar: "~は~です (A는 B입니다), ~は~ですか, いいえ ~じゃありません, 직업과 국적.",
    youtubeId: "lZQlUxXK7Ig",
    vocab: [
      v("u2-watashi", "私", "わたし", "watashi", "저, 나", "I"),
      v("u2-anata", "あなた", "あなた", "anata", "당신, 너", "you"),
      v("u2-kare", "彼", "かれ", "kare", "그", "he", "그 카레는 맛있어"),
      v("u2-kanojo", "彼女", "かのじょ", "kanojo", "그녀", "she"),
      v("u2-dare", "誰", "だれ", "dare", "누구", "who", "Who dares me to...?"),
      v("u2-donata", "どなた", "どなた", "donata", "어느 분", "who (polite)", "Who wants a donut?"),
      v("u2-kaishain", "会社員", "かいしゃいん", "kaishain", "회사원", "office worker"),
      v("u2-sensei", "先生", "せんせい", "sensei", "선생님", "teacher"),
      v("u2-ginkouin", "銀行員", "ぎんこういん", "ginkouin", "은행원", "bank clerk", "Get dat coin, banker!"),
      v("u2-gakusei", "学生", "がくせい", "gakusei", "학생", "student"),
      v("u2-daigakusei", "大学生", "だいがくせい", "daigakusei", "대학생", "university student"),
      v("u2-koukousei", "高校生", "こうこうせい", "koukousei", "고등학생", "high school student"),
      v("u2-isha", "医者", "いしゃ", "isha", "의사", "doctor"),
      v("u2-kashu", "歌手", "かしゅ", "kashu", "가수", "singer"),
      v("u2-kangoshi", "看護師", "かんごし", "kangoshi", "간호사", "nurse"),
      v("u2-koumuin", "公務員", "こうむいん", "koumuin", "공무원", "public servant"),
      v("u2-kyouju", "教授", "きょうじゅ", "kyouju", "교수", "professor"),
      v("u2-shufu", "主婦", "しゅふ", "shufu", "주부", "homemaker"),
      v("u2-designer", "デザイナー", "デザイナー", "dezainaa", "디자이너", "designer"),
      v("u2-engineer", "エンジニア", "エンジニア", "enjinia", "엔지니어", "engineer"),
      v("u2-kankokujin", "韓国人", "かんこくじん", "kankokujin", "한국인", "Korean person"),
      v("u2-nihonjin", "日本人", "にほんじん", "nihonjin", "일본인", "Japanese person"),
      v("u2-chuugokujin", "中国人", "ちゅうごくじん", "chuugokujin", "중국인", "Chinese person"),
      v("u2-taijin", "タイ人", "タイじん", "taijin", "태국인", "Thai person"),
      v("u2-furansujin", "フランス人", "フランスじん", "furansujin", "프랑스인", "French person"),
      v("u2-doitsujin", "ドイツ人", "ドイツじん", "doitsujin", "독일인", "German person"),
      v("u2-amerikajin", "アメリカ人", "アメリカじん", "amerikajin", "미국인", "American person"),
      v("u2-igirisujin", "イギリス人", "イギリスじん", "igirisujin", "영국인", "British person"),
      v("u2-roshiajin", "ロシア人", "ロシアじん", "roshiajin", "러시아인", "Russian person"),
    ],
    passageJp: `わたしはだいがくせいです。かんこくじんです。
かれはぎんこういんですか。
いいえ、かいしゃいんです。
かのじょはせんせいです。にほんじんです。`,
    passageKo: `저는 대학생입니다. 한국인입니다.
그는 은행원입니까?
아니오, 회사원입니다.
그녀는 선생님입니다. 일본인입니다.`,
    reading: [
      {
        id: "u2-r1",
        prompt: "화자의 신분은 무엇입니까?",
        choices: ["회사원", "대학생", "선생님", "은행원"],
        answerIndex: 1,
      },
      {
        id: "u2-r2",
        prompt: "화자의 국적은 무엇입니까?",
        choices: ["일본인", "중국인", "한국인", "미국인"],
        answerIndex: 2,
      },
      {
        id: "u2-r3",
        prompt: "그는 은행원입니까?",
        choices: ["예, 은행원입니다", "아니오, 회사원입니다", "선생님입니다", "교수입니다"],
        answerIndex: 1,
      },
      {
        id: "u2-r4",
        prompt: "그녀의 직업은 무엇입니까?",
        choices: ["가수", "의사", "선생님", "간호사"],
        answerIndex: 2,
      },
      {
        id: "u2-r5",
        prompt: "그녀는 어느 나라 사람입니까?",
        choices: ["한국", "독일", "일본", "프랑스"],
        answerIndex: 2,
      },
    ],
    quiz: [
      {
        id: "u2-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u2-q1-1",
            prompt: "かれはぎんこういんですか。",
            accept: ["그는 은행원입니까?", "그는 은행원인가요?", "그는 은행원입니까"],
          },
          {
            id: "u2-q1-2",
            prompt: "なかむらさんもかいしゃいんですか。",
            accept: [
              "나카무라 씨도 회사원입니까?",
              "나카무라 씨도 회사원인가요?",
              "나카무라씨도 회사원입니까?",
            ],
          },
          {
            id: "u2-q1-3",
            prompt: "かのじょはドイツじんですか。",
            accept: ["그녀는 독일인입니까?", "그녀는 독일 사람입니까?", "그녀는 독일인인가요?"],
          },
        ],
      },
      {
        id: "u2-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u2-q2-1",
            prompt: "야마다 씨는 선생님입니다.",
            accept: ["山田さんは先生です", "やまださんはせんせいです", "山田さんはせんせいです"],
          },
          {
            id: "u2-q2-2",
            prompt: "그는 은행원입니까?",
            accept: ["彼は銀行員ですか", "かれはぎんこういんですか", "彼はぎんこういんですか"],
          },
          {
            id: "u2-q2-3",
            prompt: "아니오, 다나카가 아닙니다. 기무라입니다.",
            accept: [
              "いいえ、田中じゃありません。木村です",
              "いいえ、たなかじゃありません。きむらです",
              "いいえ、田中ではありません。木村です",
            ],
          },
        ],
      },
      {
        id: "u2-q3",
        title: "Q3",
        direction: "히라가나로 쓰고, 뜻을 확인하세요.",
        items: [
          { id: "u2-q3-1", prompt: "わたし (나/저)", accept: ["わたし", "私"] },
          { id: "u2-q3-2", prompt: "だれ (누구)", accept: ["だれ", "誰"] },
          { id: "u2-q3-3", prompt: "にほんじん (일본인)", accept: ["にほんじん", "日本人"] },
          { id: "u2-q3-4", prompt: "がくせい (학생)", accept: ["がくせい", "学生"] },
          { id: "u2-q3-5", prompt: "かしゅ (가수)", accept: ["かしゅ", "歌手"] },
          { id: "u2-q3-6", prompt: "せんせい (선생님)", accept: ["せんせい", "先生"] },
          { id: "u2-q3-7", prompt: "かんこくじん (한국인)", accept: ["かんこくじん", "韓国人"] },
          { id: "u2-q3-8", prompt: "なん (무엇)", accept: ["なん", "なに", "何"] },
          { id: "u2-q3-9", prompt: "あなた (당신/너)", accept: ["あなた"] },
          { id: "u2-q3-10", prompt: "かいしゃいん (회사원)", accept: ["かいしゃいん", "会社員"] },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "これは日本のパソコンです",
    titleKo: "이것은 일본 컴퓨터입니다",
    grammar: "지시어 これ/それ/あれ, ~は何ですか, 조사 の(의), 소유.",
    youtubeId: "pDk-nk03sFk",
    vocab: [
      v("u3-kore", "これ", "これ", "kore", "이것", "this"),
      v("u3-sore", "それ", "それ", "sore", "그것", "that"),
      v("u3-are", "あれ", "あれ", "are", "저것", "that over there"),
      v("u3-pasokon", "パソコン", "パソコン", "pasokon", "컴퓨터", "computer"),
      v("u3-jisho", "辞書", "じしょ", "jisho", "사전", "dictionary"),
      v("u3-kamera", "カメラ", "カメラ", "kamera", "카메라", "camera"),
      v("u3-zasshi", "雑誌", "ざっし", "zasshi", "잡지", "magazine"),
      v("u3-kutsu", "靴", "くつ", "kutsu", "구두, 신발", "shoes"),
      v("u3-boushi", "ぼうし", "ぼうし", "boushi", "모자", "hat"),
      v("u3-megane", "めがね", "めがね", "megane", "안경", "glasses"),
      v("u3-nooto", "ノート", "ノート", "nooto", "노트", "notebook"),
      v("u3-dore", "どれ", "どれ", "dore", "어느 것", "which one"),
      v("u3-isu", "いす", "いす", "isu", "의자", "chair", "Is this seat taken?"),
      v("u3-saifu", "さいふ", "さいふ", "saifu", "지갑", "wallet"),
      v("u3-denwa", "でんわ", "でんわ", "denwa", "전화", "telephone"),
      v("u3-eigo", "えいご", "えいご", "eigo", "영어", "English"),
      v("u3-hon", "ほん", "ほん", "hon", "책", "book"),
      v("u3-tsukue", "つくえ", "つくえ", "tsukue", "책상", "desk"),
      v("u3-keetai", "ケータイ", "ケータイ", "keetai", "휴대폰", "mobile phone"),
      v("u3-souru", "ソウル", "ソウル", "souru", "서울", "Seoul"),
      v("u3-daigaku", "だいがく", "だいがく", "daigaku", "대학", "university"),
      v("u3-kaban", "かばん", "かばん", "kaban", "가방", "bag"),
      v("u3-nihon", "にほん", "にほん", "nihon", "일본", "Japan"),
      v("u3-kankoku", "かんこく", "かんこく", "kankoku", "한국", "Korea"),
      v("u3-shinbun", "しんぶん", "しんぶん", "shinbun", "신문", "newspaper", "Shin = New news"),
      v("u3-enpitsu", "えんぴつ", "えんぴつ", "enpitsu", "연필", "pencil"),
      v("u3-tokei", "とけい", "とけい", "tokei", "시계", "watch / clock", "Kei = Timekeeping"),
      v("u3-kasa", "かさ", "かさ", "kasa", "우산", "umbrella", "Mi casa needs an umbrella"),
    ],
    passageJp: `これはわたしのパソコンです。にほんのパソコンです。
それはせんせいのカメラです。
あれはだれのさいふですか。
なかむらさんのです。わたしのじゃありません。`,
    passageKo: `이것은 제 컴퓨터입니다. 일본 컴퓨터입니다.
그것은 선생님의 카메라입니다.
저것은 누구의 지갑입니까?
나카무라 씨 것입니다. 제 것이 아닙니다.`,
    reading: [
      {
        id: "u3-r1",
        prompt: "이것은 누구의 컴퓨터입니까?",
        choices: ["선생님", "나카무라 씨", "화자", "다나카 씨"],
        answerIndex: 2,
      },
      {
        id: "u3-r2",
        prompt: "컴퓨터는 어느 나라 것입니까?",
        choices: ["한국", "일본", "미국", "중국"],
        answerIndex: 1,
      },
      {
        id: "u3-r3",
        prompt: "선생님의 물건은 무엇입니까?",
        choices: ["지갑", "컴퓨터", "카메라", "사전"],
        answerIndex: 2,
      },
      {
        id: "u3-r4",
        prompt: "저 지갑은 누구의 것입니까?",
        choices: ["화자", "선생님", "나카무라 씨", "학생"],
        answerIndex: 2,
      },
      {
        id: "u3-r5",
        prompt: "지갑은 화자의 것입니까?",
        choices: ["예", "아니오", "선생님의 컴퓨터입니다", "글에 없습니다"],
        answerIndex: 1,
      },
    ],
    quiz: [
      {
        id: "u3-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u3-q1-1",
            prompt: "これはせんせいのカメラです。",
            accept: ["이것은 선생님의 카메라입니다.", "이것은 선생님 카메라입니다."],
          },
          {
            id: "u3-q1-2",
            prompt: "あれはわたしのじゃありません。",
            accept: [
              "저것은 제 것이 아닙니다.",
              "저것은 내 것이 아닙니다.",
              "저것은 저의 것이 아닙니다.",
            ],
          },
          {
            id: "u3-q1-3",
            prompt: "それはたなかさんのケータイじゃありません。なかむらさんのです。",
            accept: [
              "그것은 다나카 씨의 휴대폰이 아닙니다. 나카무라 씨 것입니다.",
              "그것은 다나카 씨의 휴대전화가 아닙니다. 나카무라 씨의 것입니다.",
              "그것은 다나카씨의 휴대폰이 아닙니다. 나카무라씨의 것입니다.",
            ],
          },
        ],
      },
      {
        id: "u3-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u3-q2-1",
            prompt: "그것은 스즈키 씨의 연필입니까?",
            accept: [
              "それは鈴木さんの鉛筆ですか",
              "それはすずきさんのえんぴつですか",
              "それは鈴木さんのえんぴつですか",
            ],
          },
          {
            id: "u3-q2-2",
            prompt: "저것은 무엇입니까?",
            accept: ["あれは何ですか", "あれはなんですか"],
          },
          {
            id: "u3-q2-3",
            prompt: "이것은 한국어 사전입니다.",
            accept: [
              "これは韓国語の辞書です",
              "これはかんこくごのじしょです",
              "これは韓国語のじしょです",
            ],
          },
        ],
      },
      {
        id: "u3-q3",
        title: "Q3",
        direction: "히라가나로 쓰세요.",
        items: [
          { id: "u3-q3-1", prompt: "ほん (책)", accept: ["ほん", "本"] },
          { id: "u3-q3-2", prompt: "かばん (가방)", accept: ["かばん", "鞄"] },
          { id: "u3-q3-3", prompt: "とけい (시계)", accept: ["とけい", "時計"] },
          { id: "u3-q3-4", prompt: "つくえ (책상)", accept: ["つくえ", "机"] },
          { id: "u3-q3-5", prompt: "ぼうし (모자)", accept: ["ぼうし", "帽子"] },
          { id: "u3-q3-6", prompt: "めがね (안경)", accept: ["めがね", "眼鏡"] },
          { id: "u3-q3-7", prompt: "さいふ (지갑)", accept: ["さいふ", "財布"] },
          { id: "u3-q3-8", prompt: "しんぶん (신문)", accept: ["しんぶん", "新聞"] },
          { id: "u3-q3-9", prompt: "えんぴつ (연필)", accept: ["えんぴつ", "鉛筆"] },
          { id: "u3-q3-10", prompt: "いす (의자)", accept: ["いす", "椅子"] },
          { id: "u3-q3-11", prompt: "くつ (구두)", accept: ["くつ", "靴"] },
          { id: "u3-q3-12", prompt: "でんわ (전화)", accept: ["でんわ", "電話"] },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "図書館は何時から何時までですか",
    titleKo: "도서관은 몇 시부터 몇 시까지입니까",
    grammar: "숫자, 시각과 분, ~から~まで (에서/부터 ~까지).",
    youtubeId: "kIruZyO6t3o",
    vocab: [
      v("u4-ima", "今", "いま", "ima", "지금", "now"),
      v("u4-nanji", "何時", "なんじ", "nanji", "몇 시", "what time"),
      v("u4-nanpun", "何分", "なんぷん", "nanpun", "몇 분", "what minute"),
      v("u4-depato", "デパート", "デパート", "depaato", "백화점", "department store"),
      v("u4-jugyou", "授業", "じゅぎょう", "jugyou", "수업", "class", "이 수업은 최고야!"),
      v("u4-eki", "駅", "えき", "eki", "역", "station"),
      v("u4-han", "半", "はん", "han", "반 (30분)", "half past"),
      v("u4-jikan", "時間", "じかん", "jikan", "시간", "time / hour"),
      v("u4-toshokan", "図書館", "としょかん", "toshokan", "도서관", "library"),
      v("u4-hiruyasumi", "昼休み", "ひるやすみ", "hiruyasumi", "점심시간", "lunch break", "Here, Yasmin, it's lunch time"),
      v("u4-gozen", "午前", "ごぜん", "gozen", "오전", "a.m.", "오전에 일어날 때 고생이 많다"),
      v("u4-gogo", "午後", "ごご", "gogo", "오후", "p.m."),
      v("u4-koko", "ここ", "ここ", "koko", "여기", "here"),
      v("u4-arubaito", "アルバイト", "アルバイト", "arubaito", "아르바이트", "part-time job"),
      v("u4-tesuto", "テスト", "テスト", "tesuto", "시험", "test"),
    ],
    passageJp: `としょかんはくじからごじまでです。
アルバイトはしちじはんからです。
いまなんじですか。
ごぜんじゅうじです。じゅぎょうはごごさんじまでです。`,
    passageKo: `도서관은 9시부터 5시까지입니다.
아르바이트는 7시 반부터입니다.
지금 몇 시입니까?
오전 10시입니다. 수업은 오후 3시까지입니다.`,
    reading: [
      {
        id: "u4-r1",
        prompt: "도서관은 몇 시부터입니까?",
        choices: ["7시", "9시", "10시", "3시"],
        answerIndex: 1,
      },
      {
        id: "u4-r2",
        prompt: "도서관은 몇 시까지입니까?",
        choices: ["5시", "7시 반", "10시", "3시"],
        answerIndex: 0,
      },
      {
        id: "u4-r3",
        prompt: "아르바이트는 언제부터입니까?",
        choices: ["오전 10시", "7시 반", "오후 3시", "9시"],
        answerIndex: 1,
      },
      {
        id: "u4-r4",
        prompt: "지금은 몇 시입니까?",
        choices: ["오전 9시", "오전 10시", "오후 3시", "5시"],
        answerIndex: 1,
      },
      {
        id: "u4-r5",
        prompt: "수업은 언제까지입니까?",
        choices: ["오전 10시", "7시 반", "오후 3시", "5시"],
        answerIndex: 2,
      },
    ],
    quiz: [
      {
        id: "u4-q1",
        title: "Q1",
        direction: "한국어로 번역하세요.",
        items: [
          {
            id: "u4-q1-1",
            prompt: "アルバイトはしちじさんじゅうぶんからです。",
            accept: [
              "아르바이트는 7시 30분부터입니다.",
              "아르바이트는 일곱 시 삼십 분부터입니다.",
              "알바는 7시 30분부터입니다.",
            ],
          },
          {
            id: "u4-q1-2",
            prompt: "授業はごじまでです。",
            accept: ["수업은 5시까지입니다.", "수업은 다섯 시까지입니다."],
          },
          {
            id: "u4-q1-3",
            prompt: "とうきょうからソウルまでです。",
            accept: ["도쿄에서 서울까지입니다.", "도쿄부터 서울까지입니다."],
          },
        ],
      },
      {
        id: "u4-q2",
        title: "Q2",
        direction: "일본어로 번역하세요.",
        items: [
          {
            id: "u4-q2-1",
            prompt: "회사는 몇 시부터 몇 시까지입니까?",
            accept: [
              "会社は何時から何時までですか",
              "かいしゃはなんじからなんじまでですか",
              "会社はなんじからなんじまでですか",
            ],
          },
          {
            id: "u4-q2-2",
            prompt: "시험은 9시부터입니다.",
            accept: ["テストは九時からです", "テストはくじからです", "試験は九時からです", "テストは9時からです"],
          },
          {
            id: "u4-q2-3",
            prompt: "은행은 4시 반까지입니다.",
            accept: ["銀行は四時半までです", "ぎんこうはよじはんまでです", "銀行は4時半までです"],
          },
        ],
      },
      {
        id: "u4-q3",
        title: "Q3",
        direction: "한자 또는 가나로 쓰세요.",
        items: [
          { id: "u4-q3-1", prompt: "会社 (회사)", accept: ["会社", "かいしゃ"] },
          { id: "u4-q3-2", prompt: "銀行 (은행)", accept: ["銀行", "ぎんこう"] },
          { id: "u4-q3-3", prompt: "何時 (몇 시)", accept: ["何時", "なんじ"] },
          { id: "u4-q3-4", prompt: "午前 (오전)", accept: ["午前", "ごぜん"] },
          { id: "u4-q3-5", prompt: "昼休み (점심시간)", accept: ["昼休み", "ひるやすみ"] },
          { id: "u4-q3-6", prompt: "テスト (시험)", accept: ["テスト", "試験", "しけん"] },
        ],
      },
    ],
  },
];
