type OcdQuestion = {
  question: string;
  answers: OcdAnswer[];
};
type OcdAnswer = {
  answer: string;
  imageUrl: string;
};

export const OCD_QUESTIONS: OcdQuestion[] = [
  {
    "question_serial": "G01",
    "question": "Apakah Anda merasa muncul dorongan untuk melakukan suatu kegiatan berulang-ulang?",
    "answers": [
      {
        "answer": "Ya, saya sering merasa perlu memeriksa ulang beberapa kali.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak merasa perlu untuk memeriksa ulang.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G02",
    "question": "Apakah rutinitas normal Anda terganggu?",
    "answers": [
      {
        "answer": "Ya, rutinitas saya sangat terganggu.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, rutinitas saya tidak terganggu.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G03",
    "question": "Apakah hubungan sosial Anda memburuk?",
    "answers": [
      {
        "answer": "Ya, hubungan sosial saya memburuk.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, hubungan sosial saya baik-baik saja.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G04",
    "question": "Apakah Anda sering merasa cemas karena dorongan, kekhawatiran, atau bayangan-bayangan yang terus mengganggu?",
    "answers": [
      {
        "answer": "Ya, saya sering merasa cemas karena hal tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak merasa cemas karena hal tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G05",
    "question": "Apakah kecemasan Anda muncul dari dalam diri, bukan karena pengaruh luar?",
    "answers": [
      {
        "answer": "Ya, kecemasan saya berasal dari dalam diri.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, kecemasan saya dipengaruhi oleh faktor luar.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G06",
    "question": "Apakah Anda tidak sedang berada di bawah pengaruh obat-obatan?",
    "answers": [
      {
        "answer": "Ya, saya tidak sedang berada di bawah pengaruh obat-obatan.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya sedang berada di bawah pengaruh obat-obatan.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G07",
    "question": "Apakah Anda berusaha menghilangkan kecemasan dengan melakukan kegiatan berulang?",
    "answers": [
      {
        "answer": "Ya, saya berusaha menghilangkan kecemasan dengan kegiatan berulang.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak melakukan kegiatan berulang untuk menghilangkan kecemasan.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G08",
    "question": "Apakah kegiatan berulang yang Anda lakukan hanya untuk mengurangi penderitaan akibat cemas, bukan untuk kepuasan?",
    "answers": [
      {
        "answer": "Ya, saya melakukannya hanya untuk mengurangi kecemasan.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya melakukannya karena saya menikmatinya.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G09",
    "question": "Apakah Anda menghabiskan waktu lebih dari satu jam untuk melakukan kegiatan berulang?",
    "answers": [
      {
        "answer": "Ya, saya menghabiskan waktu lebih dari satu jam untuk kegiatan tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak menghabiskan waktu sebanyak itu.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G10",
    "question": "Apakah Anda berusaha menghindari tempat yang memicu obsesi, seperti berjabat tangan atau menggunakan toilet umum?",
    "answers": [
      {
        "answer": "Ya, saya berusaha menghindari tempat-tempat tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak menghindari tempat-tempat tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G11",
    "question": "Apakah Anda pernah merasa terdorong untuk melakukan tindakan agresif yang mengerikan, seperti melukai anak-anak atau berteriak di tempat ibadah?",
    "answers": [
      {
        "answer": "Ya, saya pernah merasakan dorongan tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak pernah merasakan dorongan tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G12",
    "question": "Apakah Anda merasa perlu memastikan bahwa segala benda berada dalam kondisi khusus, seperti harus simetris atau berjumlah genap/ganjil?",
    "answers": [
      {
        "answer": "Ya, saya merasa perlu memastikan hal tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak merasa perlu untuk memastikan hal tersebut.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G13",
    "question": "Apakah Anda merasa yakin bahwa diri Anda terkontaminasi oleh orang lain?",
    "answers": [
      {
        "answer": "Ya, saya merasa diri saya terkontaminasi.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak merasa terkontaminasi.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G14",
    "question": "Apakah Anda terus menerus mencuci tangan?",
    "answers": [
      {
        "answer": "Ya, saya terus menerus mencuci tangan.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya mencuci tangan secukupnya.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G15",
    "question": "Apakah Anda terus menerus mengecek kompor atau tabung gas?",
    "answers": [
      {
        "answer": "Ya, saya terus menerus mengeceknya.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak terus menerus mengeceknya.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G16",
    "question": "Apakah Anda terus menerus mengecek kunci pintu?",
    "answers": [
      {
        "answer": "Ya, saya terus menerus mengecek kunci pintu.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak terus menerus mengecek kunci pintu.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G17",
    "question": "Apakah Anda sering mengecek pekerjaan secara berulang?",
    "answers": [
      {
        "answer": "Ya, saya sering mengecek pekerjaan secara berulang.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak sering melakukannya.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G18",
    "question": "Apakah Anda berpikir bahwa tangan Anda tetap kotor meski sudah dicuci berkali-kali?",
    "answers": [
      {
        "answer": "Ya, saya berpikir bahwa tangan saya masih kotor.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya merasa tangan saya sudah bersih.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G19",
    "question": "Apakah Anda sering ragu apakah pintu rumah ditinggal terbuka?",
    "answers": [
      {
        "answer": "Ya, saya sering merasa ragu.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya tidak merasa ragu.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "question_serial": "G20",
    "question": "Apakah Anda sering ragu telah mematikan kompor?",
    "answers": [
      {
        "answer": "Ya, saya sering merasa ragu.",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "answer": "Tidak, saya yakin kompor sudah dimatikan.",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  }
];
