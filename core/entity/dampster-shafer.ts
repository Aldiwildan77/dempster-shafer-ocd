interface Symptom {
  code: string;
  description: string;
  washingWeight: number;
  checkingWeight: number;
  countingWeight: number;
}

interface OCDRelation {
  code: string;
  washing: boolean;
  checking: boolean;
  counting: boolean;
}

export const ocdRelations: OCDRelation[] = [
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
