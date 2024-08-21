export type Symptom = {
  code: string;
  description: string;
  washingWeight: number;
  checkingWeight: number;
  countingWeight: number;
};

export type OCDRelation = {
  code: string;
  washing: boolean;
  checking: boolean;
  counting: boolean;
};

export type BeliefMass = {
  washing: number;
  checking: number;
  counting: number;
};

export type Mass = {
  belief: number;
  conflict: number;
};

export const OCDRelations: OCDRelation[] = [
  { code: "G01", washing: true, checking: true, counting: true },
  { code: "G02", washing: true, checking: true, counting: true },
  { code: "G03", washing: true, checking: true, counting: true },
  { code: "G04", washing: true, checking: true, counting: true },
  { code: "G05", washing: true, checking: true, counting: true },
  { code: "G06", washing: true, checking: true, counting: true },
  { code: "G07", washing: true, checking: true, counting: true },
  { code: "G08", washing: true, checking: true, counting: true },
  { code: "G09", washing: true, checking: true, counting: true },
  { code: "G10", washing: true, checking: true, counting: true },
  { code: "G11", washing: false, checking: false, counting: false },
  { code: "G12", washing: false, checking: true, counting: true },
  { code: "G13", washing: true, checking: true, counting: false },
  { code: "G14", washing: true, checking: false, counting: false },
  { code: "G15", washing: false, checking: true, counting: false },
  { code: "G16", washing: false, checking: true, counting: false },
  { code: "G17", washing: false, checking: true, counting: false },
  { code: "G18", washing: true, checking: false, counting: false },
  { code: "G19", washing: false, checking: true, counting: false },
  { code: "G20", washing: false, checking: true, counting: false },
];

export const symptoms: Symptom[] = [
  {
    code: "G01",
    description:
      "Muncul dorongan untuk melakukan suatu kegiatan berulang-ulang",
    washingWeight: 0.8,
    checkingWeight: 0.8,
    countingWeight: 0.8,
  },
  {
    code: "G02",
    description: "Terganggunya rutinitas normal",
    washingWeight: 0.8,
    checkingWeight: 0.8,
    countingWeight: 0.8,
  },
  {
    code: "G03",
    description: "Memburuknya hubungan sosial",
    washingWeight: 0.7,
    checkingWeight: 0.7,
    countingWeight: 0.7,
  },
  {
    code: "G04",
    description:
      "Munculnya dorongan, kekhawatiran, dan bayangan-bayangan yang terus mengganggu yang menyebabkan kegelisahan",
    washingWeight: 0.8,
    checkingWeight: 0.8,
    countingWeight: 0.8,
  },
  {
    code: "G05",
    description:
      "Kecemasan yang muncul berasal dari dalam diri, bukan pengaruh dari luar",
    washingWeight: 0.8,
    checkingWeight: 0.8,
    countingWeight: 0.8,
  },
  {
    code: "G06",
    description: "Tidak sedang berada di bawah pengaruh obat-obatan",
    washingWeight: 0.7,
    checkingWeight: 0.6,
    countingWeight: 0.7,
  },
  {
    code: "G07",
    description:
      "Berusaha menekan atau menghilangkan gangguan kecemasan dengan melakukan kegiatan berulang",
    washingWeight: 0.8,
    checkingWeight: 0.8,
    countingWeight: 0.8,
  },
  {
    code: "G08",
    description:
      "Perbuatan berulang yang dilakukan bukan untuk memperoleh kepuasan, tetapi hanya untuk mengurangi penderitaan akibat rasa cemas yang terus muncul",
    washingWeight: 0.7,
    checkingWeight: 0.7,
    countingWeight: 0.7,
  },
  {
    code: "G09",
    description:
      "Menghabiskan waktu lebih dari satu jam untuk melakukan hal yang berulang",
    washingWeight: 0.8,
    checkingWeight: 0.7,
    countingWeight: 0.6,
  },
  {
    code: "G10",
    description:
      "Berusaha menghindari tempat-tempat yang memicu munculnya obsesi",
    washingWeight: 0.8,
    checkingWeight: 0.6,
    countingWeight: 0.6,
  },
  {
    code: "G11",
    description: "Muncul dorongan agresif yang mengerikan",
    washingWeight: 0.4,
    checkingWeight: 0.3,
    countingWeight: 0.2,
  },
  {
    code: "G12",
    description:
      "Muncul kebutuhan untuk memastikan segala benda dalam kondisi khusus",
    washingWeight: 0.3,
    checkingWeight: 0.6,
    countingWeight: 0.8,
  },
  {
    code: "G13",
    description: "Meyakini bahwa dirinya terkontaminasi oleh orang lain",
    washingWeight: 0.8,
    checkingWeight: 0.5,
    countingWeight: 0.4,
  },
  {
    code: "G14",
    description: "Terus menerus mencuci tangan",
    washingWeight: 0.8,
    checkingWeight: 0.3,
    countingWeight: 0.2,
  },
  {
    code: "G15",
    description: "Terus-menerus mengecek kompor atau tabung gas",
    washingWeight: 0.2,
    checkingWeight: 0.8,
    countingWeight: 0.3,
  },
  {
    code: "G16",
    description: "Terus-menerus mengecek kunci pintu",
    washingWeight: 0.3,
    checkingWeight: 0.8,
    countingWeight: 0.4,
  },
  {
    code: "G17",
    description: "Mengecek suatu pekerjaan secara berulang",
    washingWeight: 0.4,
    checkingWeight: 0.8,
    countingWeight: 0.4,
  },
  {
    code: "G18",
    description:
      "Berpikir bahwa tangannya tetap kotor meski dicuci berkali-kali",
    washingWeight: 0.8,
    checkingWeight: 0.3,
    countingWeight: 0.3,
  },
  {
    code: "G19",
    description: "Ragu apakah pintu rumah ditinggalan terbuka",
    washingWeight: 0.2,
    checkingWeight: 0.8,
    countingWeight: 0.4,
  },
  {
    code: "G20",
    description: "Ragu telah mematikan kompor",
    washingWeight: 0.2,
    checkingWeight: 0.8,
    countingWeight: 0.2,
  },
];

export type OCDPredicate = "UNKNOWN" | "MILD" | "MODERATE" | "SEVERE";

export const OCDPredicatePossibilities: OCDPredicate[] = ["MODERATE", "SEVERE"];

export const PredicateAlias: Record<OCDPredicate, string> = {
  UNKNOWN: "Tidak diketahui",
  MILD: "Ringan",
  MODERATE: "Sedang",
  SEVERE: "Tinggi",
};

export type OCDQuestion = {
  question_serial: string;
  question: string;
  answers: OCDAnswer[];
};

export type OCDAnswer = {
  answer: string;
  point: number;
  imageUrl: string;
};

export const OCD_QUESTIONS: OCDQuestion[] = [
  {
    question_serial: "G01",
    question:
      "Apakah Anda merasa muncul dorongan untuk melakukan suatu kegiatan berulang-ulang?",
    answers: [
      {
        answer: "Ya, saya sering merasa perlu memeriksa ulang beberapa kali.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak merasa perlu untuk memeriksa ulang.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G02",
    question: "Apakah rutinitas normal Anda terganggu?",
    answers: [
      {
        answer: "Ya, rutinitas saya sangat terganggu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, rutinitas saya tidak terganggu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G03",
    question: "Apakah hubungan sosial Anda memburuk?",
    answers: [
      {
        answer: "Ya, hubungan sosial saya memburuk.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, hubungan sosial saya baik-baik saja.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G04",
    question:
      "Apakah Anda sering merasa cemas karena dorongan, kekhawatiran, atau bayangan-bayangan yang terus mengganggu?",
    answers: [
      {
        answer: "Ya, saya sering merasa cemas karena hal tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak merasa cemas karena hal tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G05",
    question:
      "Apakah kecemasan Anda muncul dari dalam diri, bukan karena pengaruh luar?",
    answers: [
      {
        answer: "Ya, kecemasan saya berasal dari dalam diri.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, kecemasan saya dipengaruhi oleh faktor luar.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G06",
    question: "Apakah Anda tidak sedang berada di bawah pengaruh obat-obatan?",
    answers: [
      {
        answer: "Ya, saya tidak sedang berada di bawah pengaruh obat-obatan.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya sedang berada di bawah pengaruh obat-obatan.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G07",
    question:
      "Apakah Anda berusaha menghilangkan kecemasan dengan melakukan kegiatan berulang?",
    answers: [
      {
        answer:
          "Ya, saya berusaha menghilangkan kecemasan dengan kegiatan berulang.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer:
          "Tidak, saya tidak melakukan kegiatan berulang untuk menghilangkan kecemasan.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G08",
    question:
      "Apakah kegiatan berulang yang Anda lakukan hanya untuk mengurangi penderitaan akibat cemas, bukan untuk kepuasan?",
    answers: [
      {
        answer: "Ya, saya melakukannya hanya untuk mengurangi kecemasan.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya melakukannya karena saya menikmatinya.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G09",
    question:
      "Apakah Anda menghabiskan waktu lebih dari satu jam untuk melakukan kegiatan berulang?",
    answers: [
      {
        answer:
          "Ya, saya menghabiskan waktu lebih dari satu jam untuk kegiatan tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak menghabiskan waktu sebanyak itu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G10",
    question:
      "Apakah Anda berusaha menghindari tempat yang memicu obsesi, seperti berjabat tangan atau menggunakan toilet umum?",
    answers: [
      {
        answer: "Ya, saya berusaha menghindari tempat-tempat tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak menghindari tempat-tempat tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G11",
    question:
      "Apakah Anda pernah merasa terdorong untuk melakukan tindakan agresif yang mengerikan, seperti melukai anak-anak atau berteriak di tempat ibadah?",
    answers: [
      {
        answer: "Ya, saya pernah merasakan dorongan tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak pernah merasakan dorongan tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G12",
    question:
      "Apakah Anda merasa perlu memastikan bahwa segala benda berada dalam kondisi khusus, seperti harus simetris atau berjumlah genap/ganjil?",
    answers: [
      {
        answer: "Ya, saya merasa perlu memastikan hal tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak merasa perlu untuk memastikan hal tersebut.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G13",
    question:
      "Apakah Anda merasa yakin bahwa diri Anda terkontaminasi oleh orang lain?",
    answers: [
      {
        answer: "Ya, saya merasa diri saya terkontaminasi.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak merasa terkontaminasi.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G14",
    question: "Apakah Anda terus menerus mencuci tangan?",
    answers: [
      {
        answer: "Ya, saya terus menerus mencuci tangan.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya mencuci tangan secukupnya.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G15",
    question: "Apakah Anda terus menerus mengecek kompor atau tabung gas?",
    answers: [
      {
        answer: "Ya, saya terus menerus mengeceknya.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak terus menerus mengeceknya.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G16",
    question: "Apakah Anda terus menerus mengecek kunci pintu?",
    answers: [
      {
        answer: "Ya, saya terus menerus mengecek kunci pintu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak terus menerus mengecek kunci pintu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G17",
    question: "Apakah Anda sering mengecek pekerjaan secara berulang?",
    answers: [
      {
        answer: "Ya, saya sering mengecek pekerjaan secara berulang.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak sering melakukannya.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G18",
    question:
      "Apakah Anda berpikir bahwa tangan Anda tetap kotor meski sudah dicuci berkali-kali?",
    answers: [
      {
        answer: "Ya, saya berpikir bahwa tangan saya masih kotor.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya merasa tangan saya sudah bersih.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G19",
    question: "Apakah Anda sering ragu apakah pintu rumah ditinggal terbuka?",
    answers: [
      {
        answer: "Ya, saya sering merasa ragu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya tidak merasa ragu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
  {
    question_serial: "G20",
    question: "Apakah Anda sering ragu telah mematikan kompor?",
    answers: [
      {
        answer: "Ya, saya sering merasa ragu.",
        imageUrl: "https://via.placeholder.com/150",
        point: 1,
      },
      {
        answer: "Tidak, saya yakin kompor sudah dimatikan.",
        imageUrl: "https://via.placeholder.com/150",
        point: 0,
      },
    ],
  },
];
