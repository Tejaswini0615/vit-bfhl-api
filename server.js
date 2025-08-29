import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


const FULL_NAME = "tejaswini_dubey";   
const DOB_DDMMYYYY = "06012005";   
const EMAIL = "tejaswini.dubey2022@vitstudent.ac.in";
const ROLL_NUMBER = "22BAI1152";




const isIntegerString = (s) => /^-?\d+$/.test(s);
const isAlphaString = (s) => /^[A-Za-z]+$/.test(s);

function alternatingCapsReversed(allLetters) {
  let res = [];
  let upper = true;
  for (let i = allLetters.length - 1; i >= 0; i--) {
    const ch = allLetters[i];
    if (/[A-Za-z]/.test(ch)) {
      res.push(upper ? ch.toUpperCase() : ch.toLowerCase());
      upper = !upper;
    }
  }
  return res.join("");
}

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body || {};
    if (!Array.isArray(data)) {
      return res.status(200).json({
        is_success: false,
        user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
      });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sumTotal = 0;
    let lettersConcat = [];

    for (const item of data) {
      const s = String(item);
      if (isIntegerString(s)) {
        const n = parseInt(s, 10);
        sumTotal += n;
        if (n % 2 === 0) {
          even_numbers.push(s);
        } else {
          odd_numbers.push(s);
        }
      } else if (isAlphaString(s)) {
        alphabets.push(s.toUpperCase());
        lettersConcat.push(...s.split(""));
      } else {
        special_characters.push(s);
      }
    }

    const concat_string = alternatingCapsReversed(lettersConcat.join(""));
    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sumTotal),
      concat_string
    };

    return res.status(200).json(response);
  } catch (err) {
    return res.status(200).json({
      is_success: false,
      user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`BFHL API running on port ${PORT}`);
});
