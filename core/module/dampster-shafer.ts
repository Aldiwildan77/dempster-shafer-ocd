import { UserAnswer } from "../entity/answers";
import {
  BeliefMass,
  Mass,
  OCDPredicate,
  OCDRelations,
  symptoms,
} from "../entity/dempster-shafer";

// TODO: fix the logic dempster-shafer
export const combineMass = (m1: Mass, m2: Mass): Mass => {
  const m3: Mass = {
    belief: 0,
    conflict: 0,
  };

  // Check if m1 and m2 are defined
  if (m1 && m2) {
    // Kombinasi belief dari m1 dan m2
    m3.belief = m1.belief * m2.belief;
    m3.conflict = m1.conflict * m2.conflict;

    // Menghitung total konflik
    const normalizationFactor = 1 - m1.conflict - m2.conflict;
    if (normalizationFactor > 0) {
      m3.belief /= normalizationFactor;
      m3.conflict /= normalizationFactor;
    } else {
      m3.belief = 0;
      m3.conflict = 1;
    }
  }

  return m3;
};

export const combineAllMasses = (masses: {
  [key: string]: Mass;
}): { [key: string]: Mass } => {
  const keys = Object.keys(masses);
  let result: { [key: string]: Mass } = {};

  // Mulai dengan hasil pertama
  if (keys.length > 0) {
    result[keys[0]] = masses[keys[0]];
  }

  // Kombinasikan dengan setiap mass berikutnya
  for (let i = 1; i < keys.length; i++) {
    const key = keys[i];
    const currentMass = masses[key];
    result = {
      ...result,
      [key]: combineMass(result[key], currentMass),
    };
  }

  return result;
};

export const calculateFinalBeliefMass = (
  beliefMass: BeliefMass
): BeliefMass => {
  // Convert to Mass
  const massArray: { [key: string]: Mass } = {
    washing: {
      belief: beliefMass.washing,
      conflict: 1 - beliefMass.washing,
    },
    checking: {
      belief: beliefMass.checking,
      conflict: 1 - beliefMass.checking,
    },
    counting: {
      belief: beliefMass.counting,
      conflict: 1 - beliefMass.counting,
    },
  };

  // Kombinasikan semua mass
  const finalMass = combineAllMasses(massArray);

  // Convert to BeliefMass
  return {
    washing: finalMass.washing.belief,
    checking: finalMass.checking.belief,
    counting: finalMass.counting.belief,
  };
};

export const calculateBeliefMass = (answers: UserAnswer[]): BeliefMass => {
  let mass: BeliefMass = {
    washing: 0,
    checking: 0,
    counting: 0,
  };

  answers.forEach((answer) => {
    if (answer.point === 0) return;

    const symptom = symptoms.find((s) => s.code === answer.serial);
    const relation = OCDRelations.find((r) => r.code === answer.serial);

    const isRelationExist = symptom && relation;
    if (!isRelationExist) return;

    if (relation.washing) mass.washing += symptom.washingWeight;
    if (relation.checking) mass.checking += symptom.checkingWeight;
    if (relation.counting) mass.counting += symptom.countingWeight;
  });

  return mass;
};

export const PredicateThreshold: Record<number, OCDPredicate> = {
  0: "UNKNOWN",
  0.3: "MILD",
  0.6: "MODERATE",
  0.8: "SEVERE",
};

export const getScore = (mass: BeliefMass): number => {
  const score = Math.max(mass.washing, mass.checking, mass.counting);
  return isNaN(score) ? 0 : score;
};

export const getPredicate = (mass: BeliefMass): OCDPredicate => {
  const maxMass = getScore(mass);

  let result: OCDPredicate = "UNKNOWN";

  const sortedThresholds = Object.entries(PredicateThreshold).sort(
    ([a], [b]) => Number(b) - Number(a)
  );

  for (const [threshold, predicate] of sortedThresholds) {
    if (maxMass > Number(threshold)) {
      result = predicate;
      break;
    }
  }

  return result;
};
