import {
  Hypothesis,
  knowledgeRelations,
  Rule,
  rules,
} from "../entity/dempster-shafer";

type CombinedHypothesis = Record<string, number>;

type CombinedEvidenceHypothesis = Record<string, CombinedHypothesis>;

type CombinedResult = {
  max: number;
  hypothesis: Hypothesis | string | null;
};

export function isEvidenceShouldCalculate(
  selectedCode: string,
  hypothesis: Hypothesis
): boolean {
  return knowledgeRelations[selectedCode].includes(hypothesis);
}

export function selectEvidenceByRules(selectedCodes: string[]): Rule[] {
  return rules.filter((rule) => selectedCodes.includes(rule.evidence));
}

export function getCalculableHypothesisOfRules(rules: Rule[]): Rule[] {
  return rules.filter((rule) =>
    isEvidenceShouldCalculate(rule.evidence, rule.hypothesis)
  );
}

// select the max value of the evidence from the hypothesis
export function combineHypothesis(
  selectedEvidence: string[],
  selectedRules: Rule[]
): CombinedEvidenceHypothesis {
  const combinedEvidenceHypothesisResult: CombinedEvidenceHypothesis = {};

  selectedEvidence.forEach((evidence) => {
    console.log("evidence", evidence);
    const rules = selectedRules.filter((rule) => rule.evidence === evidence);
    console.log("rules", rules);

    if (rules.length === 0) {
      return;
    }

    const hypothesisMap = rules.map((rule) => {
      return {
        hypothesis: rule.hypothesis,
        value: rule.value,
      };
    });

    const maxHypothesis = hypothesisMap.reduce((prev, current) =>
      prev.value > current.value ? prev : current
    );

    const combinedHypothesisKey = hypothesisMap
      .map((hypothesis) => hypothesis.hypothesis)
      .join(",");

    combinedEvidenceHypothesisResult[evidence] = {
      [combinedHypothesisKey]: maxHypothesis.value,
      Ɵ: 1 - maxHypothesis.value,
    };
  });

  return combinedEvidenceHypothesisResult;
}

export function combineEvidenceAndHypothesis(
  combinedEvidenceHypothesis: CombinedEvidenceHypothesis
): CombinedResult {
  const keysEvidenceHypothesis = Object.keys(combinedEvidenceHypothesis);
  if (keysEvidenceHypothesis.length < 2) {
    // assumption user is normal
    return {
      max: -1,
      hypothesis: null,
    };
  }

  const initialEvidenceHypothesis = keysEvidenceHypothesis.slice(0, 2);
  console.log("initialEvidenceHypothesis", initialEvidenceHypothesis);

  const left = combinedEvidenceHypothesis[initialEvidenceHypothesis[0]];
  const right = combinedEvidenceHypothesis[initialEvidenceHypothesis[1]];

  let m3 = calculateMassFunction(left, right);
  console.log("initialization m3");

  Object.keys(combinedEvidenceHypothesis).forEach((key, idx) => {
    if (idx < 2) {
      return;
    }

    const hypothesis = combinedEvidenceHypothesis[key];
    m3 = calculateMassFunction(m3, hypothesis);
  });

  const max = Math.max(...Object.values(m3));
  return {
    max,
    hypothesis:
      (Object.keys(m3).find((key) => m3[key] === max) as Hypothesis) || null,
  };
}

export function calculateMassFunction(
  left: CombinedHypothesis,
  right: CombinedHypothesis
): CombinedHypothesis {
  const m3: CombinedHypothesis = {
    Ɵ: 0,
  };

  Object.keys(left).forEach((hypothesis) => (m3[hypothesis] = 0));
  Object.keys(right).forEach((hypothesis) => (m3[hypothesis] = 0));

  // PLAUSIBILITIES
  const plausibilities = [left, right]
    .map((hypothesis) => hypothesis["Ɵ"])
    .flat()
    .reduce((prev, current) => {
      return prev * current;
    }, 1);

  console.log("plausibilities", plausibilities);
  // PLAUSIBILITIES

  // CONFLICTS
  let totalConflicts = 0;

  Object.keys(left).forEach((hLeft) => {
    Object.keys(right).forEach((hRight) => {
      if (hLeft === "Ɵ" || hRight === "Ɵ") {
        return;
      }

      if (hLeft !== hRight) {
        const multipliedValue = left[hLeft] * right[hRight];
        totalConflicts += multipliedValue;
      }
    });
  });

  console.log("conflicts", totalConflicts);
  // CONFLICTS

  const memoPasses: Record<string, Record<string, boolean>> = {};

  console.log("traverse left");
  Object.keys(left).forEach((hLeft) => {
    Object.keys(right).forEach((hRight) => {
      if (hLeft === "Ɵ" && hRight === "Ɵ") {
        return;
      }

      if (memoPasses[hLeft] !== undefined && memoPasses[hLeft][hRight]) {
        return;
      }

      const leftHypothesisKey = hLeft !== hRight && hRight === "Ɵ";
      const rightHypothesisKey = hLeft === "Ɵ" && hRight !== hLeft;
      const oneOfHypothesis = leftHypothesisKey || rightHypothesisKey;
      const bothHypothesis = hLeft === hRight;

      if (bothHypothesis || oneOfHypothesis) {
        console.log(
          "hLeft",
          hLeft,
          "hRight",
          hRight,
          "multiplied",
          left[hLeft] * right[hRight]
        );

        let key = hLeft;
        if (hLeft === "Ɵ") {
          key = hRight;
        }

        console.log("key", key);

        const multipliedValue = left[hLeft] * right[hRight];
        m3[key] += multipliedValue;

        if (!memoPasses[hLeft]) {
          memoPasses[hLeft] = {};
        }
        memoPasses[hLeft][hRight] = true;
      }
    });
  });

  console.log("traverse right");
  Object.keys(right).forEach((hLeft) => {
    Object.keys(left).forEach((hRight) => {
      if (hLeft === "Ɵ" && hRight === "Ɵ") {
        return;
      }

      if (memoPasses[hRight] !== undefined && memoPasses[hRight][hLeft]) {
        return;
      }

      const leftHypothesisKey = hLeft !== hRight && hRight === "Ɵ";
      const rightHypothesisKey = hLeft === "Ɵ" && hRight !== hLeft;
      const oneOfHypothesis = leftHypothesisKey || rightHypothesisKey;
      const bothHypothesis = hLeft === hRight;

      if (bothHypothesis || oneOfHypothesis) {
        console.log(
          "hRight",
          hRight,
          "hLeft",
          hLeft,
          "multiplied",
          left[hLeft] * right[hRight]
        );

        let key = hLeft;
        if (hRight === "Ɵ") {
          key = hLeft;
        }

        console.log("key", key);

        const multipliedValue = left[hLeft] * right[hRight];
        m3[key] += multipliedValue;

        if (!memoPasses[hRight]) {
          memoPasses[hRight] = {};
        }
        memoPasses[hRight][hLeft] = true;
      }
    });
  });

  console.log("m3 before", m3);

  Object.keys(m3).forEach((key) => {
    if (key === "Ɵ") {
      m3[key] = plausibilities / (1 - totalConflicts);
      return;
    }

    m3[key] = m3[key] / (1 - totalConflicts);
  });

  console.log("m3 after", m3);

  return m3;
}

// const selectedEvidence = ["G12", "G14", "G18", "G09", "G01", "G02"];
// const selectedRules = selectEvidenceByRules(selectedEvidence);
// const selectedCalculableRules = getCalculableHypothesisOfRules(selectedRules);
// const combinedHypothesisResult = combineHypothesis(
//   selectedEvidence,
//   selectedCalculableRules
// );
// const combinedMassFunction = combineEvidenceAndHypothesis(
//   combinedHypothesisResult
// );

// console.log("selected rules", selectedRules);
// console.log("calculable hypothesis (rules)", selectedCalculableRules);
// console.log("combined hypothesis", combinedHypothesisResult);
// console.log("combined mass function", combinedMassFunction);
