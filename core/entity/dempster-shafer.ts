export type Hypothesis = "Washing" | "Checking" | "Counting";

export interface Evidence {
  code: string;
  description: string;
}

export interface Rule {
  hypothesis: Hypothesis;
  evidence: string; // Mengacu pada code dari evidence
  value: number;
}

export const evidences: Evidence[] = [
  {
    code: "G01",
    description:
      "Muncul dorongan untuk melakukan suatu kegiatan berulang-ulang",
  },
  { code: "G02", description: "Terganggunya rutinitas normal" },
  { code: "G03", description: "Memburuknya hubungan sosial" },
  {
    code: "G04",
    description:
      "Munculnya dorongan, kekhawatiran, dan bayangan-bayangan yang terus mengganggu yang menyebabkan kegelisahan",
  },
  {
    code: "G05",
    description:
      "Kecemasan yang muncul berasal dari dalam diri, bukan pengaruh luar",
  },
  {
    code: "G06",
    description: "Tidak sedang berada di bawah pengaruh obat-obatan",
  },
  {
    code: "G07",
    description:
      "Berusaha menekan atau menghilangkan gangguan kecemasan dengan melakukan kegiatan berulang",
  },
  {
    code: "G08",
    description:
      "Perbuatan berulang yang dilakukan bukan untuk memperoleh kepuasan, tetapi hanya untuk mengurangi penderitaan akibat cemas",
  },
  {
    code: "G09",
    description:
      "Menghabiskan waktu lebih dari satu jam untuk melakukan hal yang berulang",
  },
  {
    code: "G10",
    description:
      "Berusaha menghindari tempat yang memicu munculnya obsesi (misal menghindari berjabat tangan atau ke toilet umum)",
  },
  {
    code: "G11",
    description:
      "Muncul dorongan agresif yang mengerikan (misal melukai anak-anak atau berteriak di tempat ibadah)",
  },
  {
    code: "G12",
    description:
      "Muncul kebutuhan untuk memastikan segala benda dalam kondisi khusus (misal susunan benda mesti simetris, berjumlah genap/ganjil)",
  },
  {
    code: "G13",
    description: "Meyakini bahwa dirinya terkontaminasi oleh orang lain",
  },
  { code: "G14", description: "Terus menerus mencuci tangan" },
  { code: "G15", description: "Terus menerus mengecek kompor atau tabung gas" },
  { code: "G16", description: "Terus menerus mengecek kunci pintu" },
  { code: "G17", description: "Mengecek suatu pekerjaan secara berulang" },
  {
    code: "G18",
    description:
      "Berpikir bahwa tangannya tetap kotor meski dicuci berkali-kali",
  },
  { code: "G19", description: "Ragu apakah pintu rumah ditinggal terbuka" },
  { code: "G20", description: "Ragu telah mematikan kompor" },
];

export const rules: Rule[] = [
  { hypothesis: "Washing", evidence: "G01", value: 0.8 },
  { hypothesis: "Checking", evidence: "G01", value: 0.8 },
  { hypothesis: "Counting", evidence: "G01", value: 0.8 },
  { hypothesis: "Washing", evidence: "G02", value: 0.8 },
  { hypothesis: "Checking", evidence: "G02", value: 0.8 },
  { hypothesis: "Counting", evidence: "G02", value: 0.8 },
  { hypothesis: "Washing", evidence: "G03", value: 0.7 },
  { hypothesis: "Checking", evidence: "G03", value: 0.7 },
  { hypothesis: "Counting", evidence: "G03", value: 0.7 },
  { hypothesis: "Washing", evidence: "G04", value: 0.8 },
  { hypothesis: "Checking", evidence: "G04", value: 0.8 },
  { hypothesis: "Counting", evidence: "G04", value: 0.8 },
  { hypothesis: "Washing", evidence: "G05", value: 0.8 },
  { hypothesis: "Checking", evidence: "G05", value: 0.8 },
  { hypothesis: "Counting", evidence: "G05", value: 0.8 },
  { hypothesis: "Washing", evidence: "G06", value: 0.7 },
  { hypothesis: "Checking", evidence: "G06", value: 0.6 },
  { hypothesis: "Counting", evidence: "G06", value: 0.7 },
  { hypothesis: "Washing", evidence: "G07", value: 0.8 },
  { hypothesis: "Checking", evidence: "G07", value: 0.8 },
  { hypothesis: "Counting", evidence: "G07", value: 0.8 },
  { hypothesis: "Washing", evidence: "G08", value: 0.7 },
  { hypothesis: "Checking", evidence: "G08", value: 0.7 },
  { hypothesis: "Counting", evidence: "G08", value: 0.7 },
  { hypothesis: "Washing", evidence: "G09", value: 0.8 },
  { hypothesis: "Checking", evidence: "G09", value: 0.7 },
  { hypothesis: "Counting", evidence: "G09", value: 0.6 },
  { hypothesis: "Washing", evidence: "G10", value: 0.8 },
  { hypothesis: "Checking", evidence: "G10", value: 0.6 },
  { hypothesis: "Counting", evidence: "G10", value: 0.6 },
  { hypothesis: "Washing", evidence: "G11", value: 0.4 },
  { hypothesis: "Checking", evidence: "G11", value: 0.3 },
  { hypothesis: "Counting", evidence: "G11", value: 0.2 },
  { hypothesis: "Washing", evidence: "G12", value: 0.3 },
  { hypothesis: "Checking", evidence: "G12", value: 0.6 },
  { hypothesis: "Counting", evidence: "G12", value: 0.8 },
  { hypothesis: "Washing", evidence: "G13", value: 0.8 },
  { hypothesis: "Checking", evidence: "G13", value: 0.5 },
  { hypothesis: "Counting", evidence: "G13", value: 0.4 },
  { hypothesis: "Washing", evidence: "G14", value: 0.8 },
  { hypothesis: "Checking", evidence: "G14", value: 0.3 },
  { hypothesis: "Counting", evidence: "G14", value: 0.2 },
  { hypothesis: "Washing", evidence: "G15", value: 0.2 },
  { hypothesis: "Checking", evidence: "G15", value: 0.8 },
  { hypothesis: "Counting", evidence: "G15", value: 0.3 },
  { hypothesis: "Washing", evidence: "G16", value: 0.3 },
  { hypothesis: "Checking", evidence: "G16", value: 0.8 },
  { hypothesis: "Counting", evidence: "G16", value: 0.4 },
  { hypothesis: "Washing", evidence: "G17", value: 0.4 },
  { hypothesis: "Checking", evidence: "G17", value: 0.8 },
  { hypothesis: "Counting", evidence: "G17", value: 0.4 },
  { hypothesis: "Washing", evidence: "G18", value: 0.8 },
  { hypothesis: "Checking", evidence: "G18", value: 0.3 },
  { hypothesis: "Counting", evidence: "G18", value: 0.3 },
  { hypothesis: "Washing", evidence: "G19", value: 0.2 },
  { hypothesis: "Checking", evidence: "G19", value: 0.8 },
  { hypothesis: "Counting", evidence: "G19", value: 0.4 },
  { hypothesis: "Washing", evidence: "G20", value: 0.2 },
  { hypothesis: "Checking", evidence: "G20", value: 0.8 },
  { hypothesis: "Counting", evidence: "G20", value: 0.2 },
];

export const knowledgeRelations: Record<
  string,
  ("Washing" | "Checking" | "Counting")[]
> = {
  G01: ["Washing", "Checking", "Counting"],
  G02: ["Washing", "Checking", "Counting"],
  G03: ["Washing", "Checking", "Counting"],
  G04: ["Washing", "Checking", "Counting"],
  G05: ["Washing", "Checking", "Counting"],
  G06: ["Washing", "Checking", "Counting"],
  G07: ["Washing", "Checking", "Counting"],
  G08: ["Washing", "Checking", "Counting"],
  G09: ["Washing", "Checking", "Counting"],
  G10: ["Washing", "Checking", "Counting"],
  G11: [],
  G12: ["Checking", "Counting"],
  G13: ["Washing", "Checking"],
  G14: ["Washing"],
  G15: ["Checking"],
  G16: ["Checking"],
  G17: ["Checking"],
  G18: ["Washing"],
  G19: ["Checking"],
  G20: ["Checking"],
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
