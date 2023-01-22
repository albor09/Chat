import { useEffect, useState } from "react";

interface ValidationRule {
  minChars?: number;
  maxChars?: number;
  numbersRequired?: boolean;
  requiredSymbols?: Array<string>;
  equalTo?: string;
}

const useStringWithValidation = (
  validationRule: ValidationRule
): [string, React.Dispatch<React.SetStateAction<string>>, boolean] => {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(true);

  const containsNumbers = (str: string) => {
    return /[0-9]/.test(str);
  };

  useEffect(() => {
    let v = valid;
    v =
      (validationRule.minChars ? text.length >= validationRule.minChars : true) &&
      (validationRule.maxChars ? text.length <= validationRule.maxChars : true) &&
      (validationRule.numbersRequired ? (v = containsNumbers(text)) : true) &&
      (validationRule.requiredSymbols
        ? validationRule.requiredSymbols.reduce((acc, item) => (acc = text.includes(item)), false)
        : true) &&
      (validationRule.equalTo || validationRule.equalTo == ""
        ? text == validationRule.equalTo
        : true);
    setValid(v);
  }, [text, validationRule.equalTo]);

  return [text, setText, valid];
};

export default useStringWithValidation;
