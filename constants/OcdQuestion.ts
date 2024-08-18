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
    question:
      "Apakah Anda merasa perlu memeriksa ulang pintu atau jendela beberapa kali untuk memastikan sudah terkunci?",
    answers: [
      {
        answer: "Ya, saya sering merasa perlu memeriksa ulang beberapa kali.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        answer: "Tidak, saya tidak merasa perlu untuk memeriksa ulang.",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    question:
      "Apakah Anda merasa cemas jika tidak mencuci tangan setelah menyentuh sesuatu yang menurut Anda kotor?",
    answers: [
      {
        answer: "Ya, saya merasa sangat cemas dan perlu mencuci tangan.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        answer: "Tidak, saya tidak merasa perlu untuk mencuci tangan.",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    question:
      "Apakah Anda memiliki pemikiran yang mengganggu atau tidak diinginkan yang terus muncul dalam pikiran Anda?",
    answers: [
      {
        answer: "Ya, saya sering mengalami pemikiran seperti itu.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        answer: "Tidak, saya tidak memiliki pemikiran seperti itu.",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    question:
      "Apakah Anda merasa harus menyusun barang-barang dengan cara tertentu agar merasa nyaman?",
    answers: [
      {
        answer:
          "Ya, saya merasa perlu menyusun barang-barang dengan cara tertentu.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        answer: "Tidak, saya tidak merasa perlu menyusun barang-barang.",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  },
];
